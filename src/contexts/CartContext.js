import React, { useState, createContext, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const checkCartItems = async () => {
      const user = doc(db, "users", auth.currentUser.uid);
      let cartData = await getDoc(user);
      return setCart(cartData.data().cart);
    };
    auth.onAuthStateChanged((user) => {
      if (user) {
        checkCartItems();
      } else {
        return;
      }
    });
  }, []);
  const value = {
    cart,
    setCart,
  };
  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
