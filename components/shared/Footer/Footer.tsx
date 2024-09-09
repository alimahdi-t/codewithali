import { IconGithub, IconX, IconYoutube } from "@/constants/Icons";
import { footerNavigation } from "@/constants";
import Link from "next/link";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 dark:border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {footerNavigation.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6
                text-gray-600 hover:text-gray-900
                dark:text-gray-300 dark:hover:text-gray-50 "
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <Link href="#" className={`${styles.link} hover:bg-social-twitter`}>
            <IconX className="h-6 w-6" />
          </Link>
          <Link href="#" className={`${styles.link} hover:bg-social-GitHub`}>
            <IconGithub className="h-6 w-6" />
          </Link>
          <Link href="#" className={`${styles.link} hover:bg-social-youTube`}>
            <IconYoutube className="h-6 w-6" />
          </Link>
        </div>
        <div>
          <p
            className="mt-10 text-center text-xs leading-5 text-gray-500
          dark:text-gray-400"
          >
            &copy; 2024 <b>Sparky</b>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
