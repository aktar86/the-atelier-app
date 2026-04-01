"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";

const AuthButtons = () => {
  const session = useSession();
  console.log(session.status);

  return (
    <>
      {session.status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="cursor-pointer text-3xl text-red-500"
        >
          <AiOutlineLogout />
        </button>
      ) : (
        <Link
          href="/login"
          className="text-2xl hover:text-primary transition-colors"
        >
          <FaRegUser />
        </Link>
      )}
    </>
  );
};

export default AuthButtons;
