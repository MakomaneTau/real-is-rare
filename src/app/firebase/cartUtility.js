import { getAuth } from "firebase/auth";
import { db } from "@/app/firebase/config";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const addToCart = async (productId, product, size, quantity = 1) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!product || !productId || !product.title || !product.price) {
    console.error("Missing required product fields:", product);
    alert("This product is missing information and cannot be added to cart.");
    return;
  }

  const cartItem = {
    id: productId,
    name: product.title,
    price: product.price,
    image: product.images?.[0] || "",
    size: size || "unknown",
    quantity,
    timestamp: new Date().toISOString(),
  };

  // LOGGED-IN USER
  if (user) {
    const cartRef = doc(db, "carts", user.uid);

    try {
      const cartSnap = await getDoc(cartRef);
      const existingItems = cartSnap.exists() ? cartSnap.data().items || [] : [];

      let itemFound = false;
      const updatedItems = existingItems.map(item => {
        if (item.id === cartItem.id && item.size === cartItem.size) {
          itemFound = true;
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });

      if (!itemFound) {
        updatedItems.push(cartItem);
      }

      await setDoc(cartRef, { items: updatedItems }, { merge: true });
    } catch (err) {
      console.error("Error updating Firestore cart:", err);
      alert("Failed to add to cart.");
    }

  // GUEST USER
  } else {
    try {
      const existingCart = JSON.parse(localStorage.getItem("guestCart")) || [];
      let itemFound = false;

      const updatedCart = existingCart.map(item => {
        if (item.id === cartItem.id && item.size === cartItem.size) {
          itemFound = true;
          return { ...item, quantity: item.quantity + quantity };
        }
        return item;
      });

      if (!itemFound) {
        updatedCart.push(cartItem);
      }

      localStorage.setItem("guestCart", JSON.stringify(updatedCart));
      alert("Added to cart!");
    } catch (err) {
      console.error("Error saving to localStorage:", err);
      alert("Failed to add to cart.");
    }
  }
};
