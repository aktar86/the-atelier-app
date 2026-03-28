import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import Logo from "../UI/Logo";
import { FaRegUser } from "react-icons/fa";

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
    <header className="py-6 px-2 bg-white text-secondary ">
      <div className="flex justify-between items-center ">
        {/* logo */}
        <Logo></Logo>

        {/* navlink */}
        <nav>
          <ul className="flex justify-center items-center space-x-2">
            {links}
          </ul>
        </nav>

        {/* end part  */}
        <Link href={"/login"} className="text-2xl">
          <FaRegUser />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
