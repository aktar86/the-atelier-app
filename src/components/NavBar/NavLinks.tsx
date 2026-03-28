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
      href={href}
      className={`relative pb-1 transition-colors duration-300 font-medium
        ${isActive ? "text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[0.5px] after:w-full after:bg-primary" : "text-foreground"}
        hover:text-primary`}
    >
      {children}
    </Link>
  );
};

export default NavLinks;
