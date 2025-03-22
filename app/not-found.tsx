import Link from "next/link";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full h-full flex justify-center items-center px-6 pb-16 pt-10 sm:pb-24 lg:px-8 bg-gray-100 dark:bg-gray-950">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-7xl font-bold leading-8 text-primary dark:text-brand-400">
            ۴۰۴
          </p>
          <h1 className="c-text-h2 mt-8">صفحه مورد نظر وجود ندارد</h1>
          <p className="mt-5 leading-5 text-gray-600 dark:text-gray-400">
            متأسفیم، صفحه مورد نظر شما پیدا نشد.
          </p>
          <div className="mt-4">
            <Link className="text-primary text-sm font-semibold" href={"/"}>
              برو به خانه
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}