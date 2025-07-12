'use client';
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footerbar } from '@/components/Footerbar';
import { HiPlus, HiMinus, HiOutlineShoppingCart } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [isGuest, setIsGuest] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const cartRef = doc(db, 'carts', user.uid);
        const cartSnap = await getDoc(cartRef);
        const data = cartSnap.data();
        setCartItems(data?.items || []);
        setIsGuest(false);
      } else {
        const localCart = JSON.parse(localStorage.getItem('guestCart')) || [];
        setCartItems(localCart);
        setIsGuest(true);
      }
    });
    return () => unsubscribe();
  }, []);

  const updateQuantity = async (index, change) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += change;
    if (updatedCart[index].quantity < 1){
          updatedCart.splice(index, 1);
    };
    setCartItems(updatedCart);

    if (isGuest) {
      localStorage.setItem('guestCart', JSON.stringify(updatedCart));
    } else {
      const user = auth.currentUser;
      const cartRef = doc(db, 'carts', user.uid);
      await updateDoc(cartRef, { items: updatedCart });
    }
  };

  const removeFromCart = async (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);

    if (isGuest) {
      localStorage.setItem('guestCart', JSON.stringify(updatedCart));
    } else {
      const user = auth.currentUser;
      const cartRef = doc(db, 'carts', user.uid);
      await updateDoc(cartRef, { items: updatedCart });
    }
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <main className="px-6 md:px-20 mt-10">
        <h1 className="text-3xl font-semibold mb-4">Cart</h1>
        <hr className="h-px mb-10 bg-gradient-to-r from-[#333] via-[#ccc] to-[#ccc] border-0" />

        <div className="mb-10">
          <div className='max-sm:hidden'>
            <table className="min-w-full border">
              <thead>
                <tr className="text-left">
                  <th className="p-2">Remove</th>
                  <th className="p-2">Product</th>
                  <th className="p-2">Size</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, i) => (
                  <tr key={i}>
                    <td className="p-2 text-center align-middle">
                      <button onClick={() => removeFromCart(i)}>
                        <AiOutlineCloseCircle className="mx-auto text-xl text-red-500 cursor-pointer" />
                      </button>
                    </td>
                    <td className="p-2 max-w-40">
                      <div className="flex items-start gap-4 max-w-[300px]">
                        <Image
                          src={item.image}
                          width={50}
                          height={50}
                          alt="Product image"
                          className="object-cover rounded shrink-0"
                        />
                        <h2 className="text-sm font-medium whitespace-normal break-words mt-auto mb-auto">
                          {item.name}
                        </h2>
                      </div>
                    </td>
                    <td className='p-2'>{item.size}</td>
                    <td className='p-2'>R{item.price}</td>
                    <td className='p-2'>
                      <div className="flex items-center">
                        <button onClick={() => updateQuantity(i, -1)} className="w-4 h-4 flex justify-center items-center border">
                          <HiMinus />
                        </button>
                        <span className="w-4 h-4 flex justify-center items-center mx-4">
                          {item.quantity}
                        </span>
                        <button onClick={() => updateQuantity(i, 1)} className="w-4 h-4 flex justify-center items-center border">
                          <HiPlus />
                        </button>
                      </div>
                    </td>
                    <td className='p-2'>R{(item.price * item.quantity)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:hidden mb-6">
            {cartItems.map((item, i) => (
              <div key={i}>
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt="Product image"
                  className="object-cover rounded"
                />
                <h2 className="text-lg font-medium mb-3">{item.name}</h2>
                <div className="flex items-center mb-4">
                  <button onClick={() => updateQuantity(i, -1)} className="w-8 h-8 flex justify-center items-center border">
                    <HiMinus />
                  </button>
                  <span className="w-8 h-8 flex justify-center items-center mx-4 border">
                    {item.quantity}
                  </span>
                  <button onClick={() => updateQuantity(i, 1)} className="w-8 h-8 flex justify-center items-center border">
                    <HiPlus />
                  </button>
                </div>
                <div className="text-lg font-semibold">
                  R{item.price}
                </div>
              </div>
            ))}
          </div>

          <hr className="h-px mb-10 bg-gradient-to-r from-[#999999] via-[#999999] to-[#999999] border-0" />

          <div className="w-full max-w-lg mx-auto border p-5">
            <div className="flex justify-between text-xl font-medium mb-5">
              <span className="ml-5">Grand Total:</span>
              <div className="mr-5">R{total}</div>
            </div>
            <div className="flex justify-center items-center text-lg">
              <button className="btn flex items-center justify-center w-[90%] h-[56px] border border-black bg-black text-white hover:opacity-90 transition">
                Check Out
                <HiOutlineShoppingCart className="ml-2 text-xl" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footerbar />
    </>
  );
}
