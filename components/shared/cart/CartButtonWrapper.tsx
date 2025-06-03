"use client";
import useSWR, { mutate as globalMutate } from "swr";
import { CartButton } from "@/components/shared/cart/CartButton";

const CART_COUNT_KEY = "/api/cart/count";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function CartCountClient() {
  const { data } = useSWR(CART_COUNT_KEY, fetcher);
  console.log("Fetching cart", data);
  return <CartButton count={data?.count ?? 0} />;
}

// Export the global mutate function scoped to the cart count key
export const mutateCartCount = () => globalMutate(CART_COUNT_KEY);