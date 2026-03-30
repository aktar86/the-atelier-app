"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

const AuthButtons = () => {
  const session = useSession();
  console.log(session.status);
  return (
    <Link
      href="/login"
      className="text-2xl hover:text-primary transition-colors"
    >
      <FaRegUser />
    </Link>
  );
};

export default AuthButtons;
