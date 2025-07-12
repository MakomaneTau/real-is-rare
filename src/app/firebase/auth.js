import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from 'firebase/auth';
import { auth, db } from './config';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUp = async (email, password, fullName) => {
  if (!auth || !db) throw new Error('Firebase not initialized on client');

  // 1. Create user
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  // 2. Save user details to Firestore
  const user = userCredential.user;
  await setDoc(doc(db, 'users', user.uid), {
    uid: user.uid,
    email: user.email,
    fullName: fullName,
    createdAt: new Date()
  });

  return user;
};

export const signInWithGoogle = async () => {
  if (!auth || !db) throw new Error('Firebase not initialized');

  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  const user = result.user;

  // Optional: Check if user exists in Firestore
  const userRef = doc(db, 'users', user.uid);
  const docSnap = await getDoc(userRef);

  if (!docSnap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      fullName: user.displayName || '',
      createdAt: new Date(),
    });
  }

  return user;
};

export const logout = async () => {
  if (!auth) throw new Error('Firebase Auth not initialized');
  return await signOut(auth);
};