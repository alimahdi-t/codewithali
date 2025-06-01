import { Cart } from "@/app/(root)/(shopping)/checkout/_components/Cart";
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

export default async function CheckoutPage() {
  const user = await currentUser();
  const cart = await prisma.cartItem.findMany({
    where: {
      userId: Number(user?.id),
    },
  });

  return <Cart cart={cart.map((item) => Number(item.courseId))} />;
}