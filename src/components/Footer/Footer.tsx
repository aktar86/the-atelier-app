"use client";

import { poppins } from "@/src/lib/fonts";
import Logo from "../UI/Logo";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  const handlerMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const mail = formData.get("email");

    alert(`${mail} - এই ফিচারটি বর্তমানে রক্ষণাবেক্ষণের অধীনে আছে।`);
  };
  return (
    <footer className="w-full max-w-480 mx-auto px-8 md:px-20 bg-secondary">
      <div className=" py-20  grid grid-cols-1 lg:grid-cols-4 gap-5 ">
        {/* 1 */}
        <div className="">
          <Logo />
          <p className={`${poppins.className} text-gray-400 font-light`}>
            Curating architectural furniture and refined objects for the
            discerning home since 1954.
          </p>
        </div>
        {/* 2 */}
        <div className="">
          <h2 className="font-semibold text-xl">Collections</h2>
          <ul className={`${poppins.className} font-light`}>
            <li className="text-gray-400 hover:text-black">
              <Link href={"/"}>New Arrivals</Link>
            </li>
            <li className="text-gray-400 hover:text-black">
              <Link href={"/"}>The Living Series</Link>
            </li>
            <li className="text-gray-400 hover:text-black">
              <Link href={"/"}>Dining Archives</Link>
            </li>
            <li className="text-gray-400 hover:text-black">
              <Link href={"/"}>Lighting</Link>
            </li>
          </ul>
        </div>
        {/* 3 */}
        <div className="">
          <h2 className="font-semibold text-xl">Services</h2>
          <ul className={`${poppins.className} font-light`}>
            <li className="text-gray-400 hover:text-black">
              <Link href={"/"}>Sustainability</Link>
            </li>
            <li className="text-gray-400 hover:text-black">
              <Link href={"/"}>Shipping & Returns</Link>
            </li>
            <li className="text-gray-400 hover:text-black">
              <Link href={"/"}>Showroom Locator</Link>
            </li>
            <li className="text-gray-400 hover:text-black">
              <Link href={"/"}></Link>
            </li>
          </ul>
        </div>

        {/* 4 */}
        <div className="space-y-3">
          <h2 className="font-semibold text-xl">Join The List</h2>
          <p className={`${poppins.className} text-gray-400 font-light`}>
            Receive Exclusive invitations to collection previews
          </p>
          <div className="">
            <form
              onSubmit={handlerMail}
              className="border-b max-w-full lg:w-60 flex justify-between  items-center pb-2 "
            >
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="  bg-transparent outline-0"
                required
              />
              <button suppressHydrationWarning={true}>
                <FaArrowRightLong />
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
