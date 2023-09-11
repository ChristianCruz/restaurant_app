import React from "react";
import Link from "next/link";

import { Sonsie_One } from "next/font/google";

const sonsie = Sonsie_One({
  weight: "400",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 lg:py-10 xl:px-40 bg-rose-50 text-red-500 flex items0center justify-between">
      <Link href="/" className={sonsie.className}>
        Greasy Fingers
      </Link>
      <p>© 2023 Greasy Fingers, Inc.</p>
    </div>
  );
};

export default Footer;
