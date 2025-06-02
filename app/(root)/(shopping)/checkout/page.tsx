import { Cart } from "@/app/(root)/(shopping)/checkout/_components/Cart";
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

interface Props {
  searchParams: Promise<{ discount?: string }>;
}

export default async function CheckoutPage({ searchParams }: Props) {
  const user = await currentUser();
  const cart = await prisma.cartItem.findMany({
    where: {
      userId: Number(user?.id),
    },
  });
  const { discount } = await searchParams;

  return (
    <Cart
      cart={cart.map((item) => Number(item.courseId))}
      discount={discount}
    />
  );
}