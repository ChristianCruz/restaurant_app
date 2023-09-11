import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Image from "next/image";

import { Sonsie_One } from "next/font/google";
import CartIcon from "./CartIcon";

const sonsie = Sonsie_One({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  const user = false;

  return (
    <div className="h-12 text-slate-900 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 font-bold flex-1 text-sm">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* Logo */}
      <div className="logo text-xl text-red-500  flex-1 md:text-center">
        <Link href="/" className={sonsie.className}>
          Greasy Fingers
        </Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end font-bold text-sm">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer border-2 border-orange-300 px-3 rounded-full py-1">
          <Image
            src="/phone.png"
            alt=""
            width={20}
            height={20}
            className="pr-0"
          />
          <span>646.672.0095</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
