import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [hasScrolled, setHasScrolled] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 10) {
      setHasScrolled(true);
    } else {
      setHasScrolled(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", changeNavbar);
  });

  return (
    <div className="sticky top-0 z-[60] w-full px-2 py-2 sm:px-4 transition-all">
      <div
        className={
          hasScrolled
            ? `rounded px-6 font-body flex items-center justify-between max-w-6xl my-2 mx-auto h-16 md:px-4 md:mx-5 backdrop-blur-sm `
            : `rounded px-6 font-body flex items-center justify-between max-w-6xl my-2 mx-auto h-16 md:px-4 md:mx-5`
        }
      >
        <img src="/logo.png" alt="Logo" className="h-[42px] w-[42px]" />
        <div>
          <ul className="flex gap-2">
            <li>
              <Link href="/dashboard" legacyBehavior>
                <a
                  className={
                    currentRoute === "/dashboard"
                      ? "text-sky-600 text-base font-medium"
                      : "text-gray-500 font-normal"
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/search" legacyBehavior>
                <a
                  className={
                    currentRoute === "/search"
                      ? "text-sky-600 text-base font-medium"
                      : "text-gray-500 font-normal"
                  }
                >
                  Search
                </a>
              </Link>
            </li>
            <li>
              <Link href="/upload" legacyBehavior>
                <a
                  className={
                    currentRoute === "/upload"
                      ? "text-sky-600 text-base font-medium"
                      : "text-gray-500 font-normal"
                  }
                >
                  Upload
                </a>
              </Link>
            </li>
            <li>
              <Link href="/profile" legacyBehavior>
                <a
                  className={
                    currentRoute === "/profile"
                      ? "text-sky-600 text-base font-medium"
                      : "text-gray-500 font-normal"
                  }
                >
                  Profile
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
