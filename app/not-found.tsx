import Link from "next/link";
import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full h-full flex justify-center items-center px-6 pb-16 pt-10 sm:pb-24 lg:px-8 bg-background">
        <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24">
          <p className="text-7xl font-bold leading-8 text-primary">۴۰۴</p>
          <h1 className="c-text-h2 mt-8">صفحه مورد نظر وجود ندارد</h1>
          <p className="mt-5 leading-5 text-muted-foreground">
            متأسفیم، صفحه مورد نظر شما پیدا نشد.
          </p>
          <div className="mt-4">
            <Link href={"/"}>
              <Button
                variant="ghost"
                className="text-primary text-sm font-semibold hover:text-primary"
              >
                برو به خانه
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}