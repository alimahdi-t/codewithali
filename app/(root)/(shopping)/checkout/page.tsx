"use client";
import { useCart } from "@/context/CartProvider";
import { useEffect, useState } from "react";

const Checkout = () => {
  const { cart } = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // از رندر در سرور جلوگیری می‌کند

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <div className="bg-green-500 w-5 h-5 rounded"></div>
          <h2 className="c-text-h2">آخرین مقالات</h2>
        </div>
      </div>
      <div>
        {cart?.map((item) => {
          return <p key={item.id}>{item.id}</p>;
        })}
      </div>
    </div>
  );
};

export default Checkout;