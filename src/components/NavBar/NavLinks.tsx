"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavlinksProps {
  href: string;
  children: React.ReactNode;
}

const NavLinks = ({ href, children }: NavlinksProps) => {
  const path = usePathname();

  const isActive = path === href;

  return (
    <Link
      className={`${isActive && "text-primary"} hover:text-primary`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
