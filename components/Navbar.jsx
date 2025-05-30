import React, { useRef, useState, useEffect } from "react";
import Menu from "../icons/Menu";
import gsap from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);
  const lastScrollY = useRef(0);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        if (showNavbar) {
          gsap.to(navbarRef.current, {
            y: "-200%",
            duration: 0.4,
            ease: "power2.in",
          });
          setShowNavbar(false);
        }
      } else {
        if (!showNavbar) {
          gsap.to(navbarRef.current, {
            y: "0%",
            duration: 0.6,
            ease: "power2.out",
          });
          setShowNavbar(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showNavbar]);
  return (
    <div
      ref={navbarRef}
      className="nav-container font-poppin w-full fixed top-0 z-999"
    >
      <nav className="py-4 px-8 flex justify-between items-center w-full xl:max-w-[1680px] mx-auto">
        <div>
          <h1 className="font-semibold tracking-tight text-purple-100 text-xl md:text-3xl flex flex-row items-center gap-1">
            <div className="rounded-full w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-purple-50 to-purple-100"></div>
            buyOu{" "}
          </h1>
        </div>

        <div className="justify-center gap-[6rem] hidden items-center text-white text-lg tracking-tight xl:flex">
          <a
            className="hover:text-purple-100 transition-colors ease-in-out"
            href=""
          >
            Product
          </a>
          <a
            className="hover:text-purple-100 transition-colors ease-in-out"
            href=""
          >
            Solutions
          </a>
          <a
            className="hover:text-purple-100 transition-colors ease-in-out"
            href=""
          >
            Community
          </a>
          <a
            className="hover:text-purple-100 transition-colors ease-in-out"
            href=""
          >
            Resources
          </a>
          <a
            className="hover:text-purple-100 transition-colors ease-in-out"
            href=""
          >
            Pricing
          </a>
        </div>

        <div className="stroke-purple-100 hover:stroke-purple-50 xl:hidden">
          <Menu />
        </div>

        <div className="hidden xl:block">
          <button className="bg-purple-100 hover:bg-purple-50/80 text-purple-200 hover:text-purple-100 tracking-tight text-xl font-medium rounded-full px-8 py-2">
            Login
          </button>
          <button className="text-purple-100 hover:text-purple-50 transition-colors ease-in-out  tracking-tight text-xl font-medium rounded-full px-6 py-2 ">
            Sign up{" "}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
