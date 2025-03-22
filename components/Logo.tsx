import Link from "next/link";
import { clsx } from "clsx";

interface Props {
  showText?: boolean;
  iconClassName?: string;
}

export function Logo({ showText = false, iconClassName, ...props }: Props) {
  return (
    <Link href={"/"} className="flex items-center gap-x-3.5" {...props}>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(iconClassName, "fill-primary")}
      >
        <path d="M1 9.00325C2.34933 9.86752 3.55345 10.6359 4.75268 11.4092C10.9576 15.4138 17.1545 19.4281 23.3725 23.4132C23.9631 23.7917 24.2013 24.1832 24.1964 24.8996C24.1622 29.5297 24.1818 34.1613 24.1834 38.7929C24.1834 39.1422 24.1834 39.4899 24.1834 40C22.9891 39.0772 22.0444 38.2016 22.0509 36.668C22.0688 33.2288 22.0117 29.788 22.0868 26.3504C22.108 25.3708 21.7588 24.8688 20.9708 24.3652C15.0203 20.5685 9.09762 16.7281 3.16839 12.8973C1.82232 12.0282 1.14032 10.7822 1 9V9.00325Z" />
        <path d="M49.0001 9.07487C48.8956 10.7888 48.1973 12.0251 46.8512 12.8958C40.7654 16.8322 34.6828 20.7734 28.5839 24.6886C28.1074 24.994 27.9475 25.314 27.9524 25.8631C27.9785 29.356 27.9149 32.8504 27.9949 36.3416C28.0324 37.997 27.1366 38.975 25.8934 39.9758C25.8721 39.6135 25.8444 39.3568 25.8444 39.1018C25.8444 34.3093 25.8477 29.5152 25.8428 24.7227C25.8428 24.2727 25.877 23.9218 26.3306 23.6294C33.7511 18.858 41.157 14.0639 48.5677 9.27794C48.6558 9.22108 48.7569 9.18696 49.0001 9.07324V9.07487Z" />
        <path d="M6.13965 16.9082C6.4676 17.0983 6.69439 17.2169 6.90976 17.355C11.1503 20.094 15.3859 22.8411 19.6379 25.5639C20.1078 25.8644 20.2775 26.1991 20.2709 26.745C20.2448 28.9365 20.2595 31.128 20.2595 33.3326C19.1451 32.9216 18.1776 31.5829 18.1498 30.4116C18.1303 29.5993 18.1074 28.7854 18.1596 27.9764C18.1988 27.3623 17.9932 27.0033 17.4613 26.667C14.4559 24.7679 11.4815 22.82 8.48752 20.9014C7.07619 19.9965 6.23591 18.77 6.13965 16.9098V16.9082Z" />
        <path d="M29.7668 33.5117C29.7668 31.005 29.757 28.6835 29.7848 26.362C29.788 26.1459 29.9822 25.8535 30.1747 25.7284C34.629 22.8318 39.0947 19.9531 43.5603 17.0727C43.6223 17.0321 43.7056 17.024 43.8916 16.9639C43.7953 18.5706 43.1394 19.7874 41.8716 20.6679C41.1603 21.1634 40.4163 21.6134 39.6886 22.0845C37.2754 23.6441 34.8705 25.2167 32.4426 26.7551C32.0201 27.0216 31.8389 27.3059 31.865 27.7965C31.9009 28.4431 31.8177 29.0994 31.8846 29.7427C32.0608 31.4241 31.1047 32.4557 29.7652 33.5117H29.7668Z" />
      </svg>
      {showText && (
        <h3 className="font-extrabold text-xl text-primary relative top-1">
          آکادمی مهدی
        </h3>
      )}
    </Link>
  );
}