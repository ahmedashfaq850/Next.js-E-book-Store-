import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" border-b">
      <div className="max-w-[900px] mx-auto flex justify-between items-center py-4">
        <div className="flex items-center gap-3 justify-center">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </Link>
          <p>E-Book Store</p>
        </div>
        <div className="flex gap-3">
          <button className=" text-black border border-black px-5 py-2 rounded-md">
            Login
          </button>
          <button className="bg-black text-white px-5 py-2 rounded-md">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
