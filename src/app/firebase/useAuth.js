'use client';

import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // optional

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
}
