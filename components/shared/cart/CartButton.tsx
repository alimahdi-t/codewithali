import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toPersianNumber } from "@/utils";

interface Props {
  count: number;
}

export const CartButton = ({ count }: Props) => {
  // const user = useCurrentUser();
  // const [count, setCount] = useState(0);
  //
  // useEffect(() => {
  //   if (user) {
  //     // gets cart count for this user from the database
  //     getCartItemsCount().then(setCount);
  //   }
  // }, [user]);
  //
  // if (!user) return null;
  return (
    <Link href="/checkout">
      <Button size="icon" variant="ghost" className="rounded-full relative">
        {count > 0 && (
          <span className="absolute opacity-60 dark:opacity-80 dark:text-black flex items-center justify-center p-2.5 bottom-px -right-1.5 w-4 h-4 rounded-full text-white text-center bg-primary  text-[10px]">
            {toPersianNumber(count)}
          </span>
        )}
        <ShoppingCart className="size-5" />
      </Button>
    </Link>
  );
};