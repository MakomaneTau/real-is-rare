"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "@/app/firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const cartRef = doc(db, "carts", user.uid);
        const unsubscribeFirestore = onSnapshot(cartRef, (docSnap) => {
          const items = docSnap.exists() ? docSnap.data().items || [] : [];
          const total = items.reduce((sum, item) => sum + item.quantity, 0);
          setCartCount(total);
        });

        return () => unsubscribeFirestore();
      } else {
        // For guest users
        const localCart = JSON.parse(localStorage.getItem("guestCart")) || [];
        const total = localCart.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(total);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
