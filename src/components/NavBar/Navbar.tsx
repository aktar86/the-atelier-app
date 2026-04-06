import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Logo from "../UI/Logo";
import { FaRegUser } from "react-icons/fa";
import ThemeToggle from "../NextThemeProvider/ThemeToggle";
import AuthButtons from "../AuthPage/AuthButtons";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLinks href="/">HOME</NavLinks>
      </li>
      <li>
        <NavLinks href="/collection">COLLECTIONS</NavLinks>
      </li>
      <li>
        <NavLinks href="/living">LIVING</NavLinks>
      </li>
      <li>
        <NavLinks href="/bedroom">BEDROOM</NavLinks>
      </li>
      <li>
        <NavLinks href="/dining">DINING</NavLinks>
      </li>
      <li>
        <NavLinks href="/heritage">THE HERITAGE</NavLinks>
      </li>
    </>
  );
  //
  return (
    /* bg-background এবং text-foreground ব্যবহার করা হয়েছে যা থিম অনুযায়ী চেঞ্জ হবে */
    <header className=" fixed top-0 left-0 right-0 z-50 py-4  mb-5 bg-background/80 backdrop-blur-md text-foreground transition-colors duration-300 shadow-sm ">
      <div className=" w-full max-w-480 mx-auto lg:px-20  px-4 md:px-0">
        <div className="flex justify-between items-center ">
          {/* logo */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* navlink */}
          <nav className="hidden md:block">
            <ul className="flex justify-center items-center space-x-6">
              {links}
            </ul>
          </nav>

          {/* end part */}
          <div className="flex justify-end items-center space-x-4">
            <ThemeToggle />
            <AuthButtons></AuthButtons>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
