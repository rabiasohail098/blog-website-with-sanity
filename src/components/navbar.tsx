import React from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { MenuIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="flex justify-between container  px-16 py-12 bg-dark text-light ">
      <h2 className="text-2xl md:text-3xl font-bold text-outline text-orange-200">TECH BLOGS</h2>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-4">
        <li className="text-base md:text-lg text-cyan-400 text-outline  font-semibold">
          <Link href="/">Home</Link>
        </li>
        <li className="text-base md:text-lg text-cyan-400 text-outline  font-semibold">
          <Link href="/about">About</Link>
        </li>
        <li className="text-base md:text-lg text-cyan-400 text-outline  font-semibold">
          <Link href="/myblogs">Blog</Link>
        </li>
        <li className="text-base md:text-lg text-cyan-400 text-outline font-semibold">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger className="md:hidden text-orange-500">
          <MenuIcon size={24} />
        </SheetTrigger>
        <SheetContent className="h-screen bg-cover bg-center bg-[url(/bg2.png)] flex flex-col items-center justify-center">
          <ul className="space-y-5 text-center">
            <li className="text-lg text-gray-900 font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-lg text-gray-900 font-semibold">
              <Link href="/about">About</Link>
            </li>
            <li className="text-lg text-gray-900 font-semibold">
              <Link href="/myblogs">Blog</Link>
            </li>
            <li className="text-lg text-gray-900 font-semibold">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;
