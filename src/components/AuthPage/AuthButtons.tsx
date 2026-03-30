"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";

const AuthButtons = () => {
  const { status } = useSession();
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
