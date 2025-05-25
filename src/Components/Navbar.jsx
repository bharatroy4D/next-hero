"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Service",
      path: "/service",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
  ];

  const handler = ()=>{
    router.push('/login')
  }

  return (
    <div>
      <nav className="flex justify-between items-center w-10/12 mx-auto px-6 py-4 border border-yellow-700 ">
        <h1 className="text-xl font-bold">Next Hero</h1>
        <ul className="flex items-center text-xl font-semibold gap-5">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`${
                  pathName === link.path && "text-yellow-300"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
          <button onClick={handler}>Loing</button>
      </nav>
    </div>
  );
};

export default Navbar;
