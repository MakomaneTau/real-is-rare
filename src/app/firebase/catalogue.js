'use client';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const getCatalogue = async () => {
  const db = getFirestore();
  const querySnapshot = await getDocs(collection(db, 'catalogue'));
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
