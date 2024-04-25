"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  path: string;
}

export const Nav = ({ label, path }: Props) => {
  const currentPath = usePathname();
  return (
    <>
      <Link
        href={path}
        className={`block py-2 pr-4 pl-3  rounded md:bg-transparent md:p-0 dark:text-white ${
          currentPath === path && "bg-blue-800 md:text-blue-700"
        }`}
        aria-current="page"
      >
        {label}
      </Link>
    </>
  );
};
