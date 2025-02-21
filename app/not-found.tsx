import Link from "next/link";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full h-full flex justify-center items-center px-6 pb-16 pt-10 sm:pb-24 lg:px-8 bg-gray-100">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-base font-bold leading-8 text-brand-700">۴۰۴</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            صفحه مورد نظر وجود ندارد
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
            متأسفیم، صفحه مورد نظر شما پیدا نشد.
          </p>
          <div className="mt-4">
            <Link className="text-brand-700 font-semibold" href={"/"}>
              برو به خانه
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
