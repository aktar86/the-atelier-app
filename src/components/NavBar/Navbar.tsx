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
        <NavLinks href="/">COLLECTIONS</NavLinks>
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

  return (
    /* bg-background এবং text-foreground ব্যবহার করা হয়েছে যা থিম অনুযায়ী চেঞ্জ হবে */
    <header className="py-6 px-2 bg-background text-foreground transition-colors duration-300 shadow-sm">
      <div className="flex justify-between items-center ">
        {/* logo */}
        <div className="flex-shrink-0">
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
    </header>
  );
};

export default Navbar;
