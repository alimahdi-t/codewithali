import { HiOutlinePhone, HiOutlineEnvelope } from "react-icons/hi2";
import { Call02Icon, Mail01Icon, TelegramIcon } from "@/public/assets/icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white shadow-lg dark:bg-darker py-8 md:pt-16 md:pb-10">
      <div className="container">
        <div className="pb-5 mb-5 sm:pb-8 sm:mb-8 border-b border-b-neutral-200 dark:border-b-dark">
          <div className="flex items-center justify-between">
            <a
              href="https://sabzlearn.ir"
              className="flex items-center gap-x-3.5"
            >
              <img
                src="https://sabzlearn.ir/wp-content/themes/sabzlearn-theme/images/logo.webp"
                className="h-8 sm:h-12"
                loading="lazy"
              />
              <svg className="w-[70px] sm:w-[104px] h-8 sm:h-12">
                <use href="#logo-type"></use>
              </svg>
            </a>
            <div className="flex gap-x-2 sm:gap-x-3">
              <a href="https://www.instagram.com/sabzlearn_" rel="nofollow">
                <svg
                  className="size-[30px] sm:size-[38px] text-neutral-300 dark:text-neutral-200 transition-colors hover:text-sky-500"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 0C29.4938 0 38 8.42804 38 18.8254C38 29.2227 29.4938 37.6508 19 37.6508C8.50621 37.6508 0 29.2227 0 18.8254C0 8.42804 8.50621 0 19 0ZM15.0248 9.3296C11.4505 9.49138 9.57273 11.4842 9.41687 14.8868C9.29813 17.4628 9.29813 20.188 9.41687 22.764C9.57273 26.1666 11.4505 28.1594 15.0248 28.3212C17.6255 28.4381 20.3753 28.4381 22.9759 28.3212C26.41 28.1653 28.4206 26.3077 28.5839 22.764C28.7019 20.1873 28.7019 17.4642 28.5839 14.8868C28.4236 11.4188 26.4761 9.48844 22.9759 9.3296C20.3753 9.21267 17.6255 9.21267 15.0248 9.3296ZM22.8965 11.0496C25.4934 11.1665 26.7306 12.3917 26.8479 14.9654C26.9652 17.4878 26.9652 20.163 26.8479 22.6853C26.7269 25.3334 25.4259 26.4872 22.8965 26.6012C20.3493 26.7166 17.6514 26.7166 15.1043 26.6012C12.5741 26.4872 11.2738 25.3334 11.1521 22.6853C11.0356 20.163 11.0356 17.4878 11.1521 14.9654C11.2671 12.4578 12.4324 11.1702 15.1043 11.0496C17.6514 10.9342 20.3493 10.9342 22.8965 11.0496ZM19 22.0095C17.2254 22.0095 15.7863 20.5844 15.7863 18.8254C15.7871 17.0664 17.2254 15.6412 19 15.6412C20.7753 15.6412 22.2144 17.0664 22.2144 18.8254C22.2144 20.5837 20.7753 22.0095 19 22.0095ZM19 13.9198C16.2665 13.9198 14.0489 16.1163 14.0489 18.8254C14.0489 21.5345 16.2658 23.731 19 23.731C21.735 23.731 23.9511 21.5345 23.9511 18.8254C23.9511 16.1163 21.735 13.9198 19 13.9198ZM25.3041 13.7256C25.3041 14.3588 24.7861 14.8728 24.1471 14.8728C23.5073 14.8728 22.99 14.3595 22.99 13.7264C22.99 13.0932 23.5073 12.5799 24.1471 12.5799C24.7861 12.5799 25.3041 13.0932 25.3041 13.7256Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a href="https://t.me/sabzlearn" rel="nofollow">
                <svg
                  className="size-[30px] sm:size-[38px] text-neutral-300 dark:text-neutral-200 transition-colors hover:text-sky-500"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.8"
                    d="M18.6613 37.0256C28.9701 37.0256 37.3226 28.7396 37.3226 18.5128C37.3226 8.28603 28.9701 0 18.6613 0C8.35248 0 0 8.28603 0 18.5128C0 28.7396 8.35248 37.0256 18.6613 37.0256ZM8.53909 18.1117L26.5317 11.2296C27.3668 10.9303 28.0961 11.4317 27.8255 12.6844L27.8271 12.6828L24.7635 27.001C24.5365 28.0161 23.9284 28.2629 23.0778 27.7847L18.4125 24.3737L16.1622 26.5242C15.9134 26.7711 15.7035 26.9794 15.2214 26.9794L15.5526 22.2694L24.199 14.5202C24.5754 14.1916 24.115 14.0065 23.619 14.3336L12.9338 21.0074L8.3276 19.5819C7.32766 19.2672 7.30589 18.59 8.53909 18.1117Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-y-4  gap-x-12 mt-10 sm:mt-8">
            <div className="flex gap-2 justify-center items-center">
              <Call02Icon className="size-6" />
              <Link href="tel:09030579074" className="leading-7">
                ۰۹۰۳۰۵۷۹۰۷۴
              </Link>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <Mail01Icon className="size-6" />
              <Link
                href="mailto:seyyedalimehdi@gmail.com"
                className="leading-7"
              >
                seyyedalimehdi@gmail.com
              </Link>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <TelegramIcon className="size-6" />
              <Link href="https://t.me/alimehdi_t" className="leading-7">
                alimahdi_t@
              </Link>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-24">
          <div className="col-span-1">
            <h3 className="inline-block sm:text-2xl font-bold mb-3 sm:mb-4">
              درباره ما
            </h3>
            <div>
              <p className="max-w-100 font-normal text-base text-dark dark:text-neutral-300 leading-9">
                هر رویایی از یک قدم کوچک شروع میشه! ما اینجاییم تا مسیر رو برات
                هموار کنیم، همراهت باشیم و کمک کنیم آینده‌ای رو بسازی که همیشه
                آرزوش رو داشتی.
              </p>
            </div>
          </div>

          <div className="col-span-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-1">
              <h3 className="inline-block sm:text-xl font-bold mb-3 sm:mb-4">
                دسترسی سریع
              </h3>
              <div className="flex flex-col gap-4">
                <p className="max-w-100 font-normal text-base">همه دوره ها</p>
                <p className="max-w-100 font-normal text-base">وبلاگ</p>
                <p className="max-w-100 font-normal text-base">تماس با ما</p>
                <p className="max-w-100 font-normal text-base">درباره ما</p>
              </div>
            </div>
            <div className="col-span-1">
              <h3 className="inline-block sm:text-xl font-bold mb-3 sm:mb-4">
                دسترسی سریع
              </h3>
              <div className="flex flex-col gap-4">
                <p className="max-w-100 font-normal text-base">همه دوره ها</p>
                <p className="max-w-100 font-normal text-base">وبلاگ</p>
                <p className="max-w-100 font-normal text-base">تماس با ما</p>
                <p className="max-w-100 font-normal text-base">درباره ما</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm font-light select-none flex items-center justify-center text-center sm:text-right sm:justify-between flex-wrap gap-y-2 gap-x-4 mt-8 sm:mt-10 dark:text-neutral-300">
          <span>
            کلیه حقوق مادی و معنوی این سایت برای توسعه دهنده محفوظ است.
          </span>
          <span className="">
            ساخته شده با ❤️ توسط{" "}
            <a className="font-medium hover:text-brand-500 transition hover:cursor-pointer">
              سید علی مهدی
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
