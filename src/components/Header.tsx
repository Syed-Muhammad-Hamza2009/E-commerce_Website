"use client"; // Add this line to enable client-side rendering in Next.js 13

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import * as Dialog from "@radix-ui/react-dialog"; // Importing Radix Dialog

export default function Header() {
  return (
    <header className="bg-pink-500 shadow-md w-full top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-white font-serif">
          <Link href="/">Bisma-Shop</Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-6 text-white font-serif">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/Products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/About" className="hover:text-blue-600">
            About Us
          </Link>
          <Link href="/Contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Icons (Desktop) */}
        <div className="flex items-center space-x-6">
          {/* Contact Icon */}
          <Link href="/Contact">
            <IoIosContact className="text-3xl text-gray-700 hover:text-pink-300 transition duration-300 w-8 h-8" />
          </Link>

          {/* Cart Icon with Badge */}
          <Link href="/Cart" className="relative flex items-center">
            <FaShoppingCart className="text-2xl text-gray-700 hover:text-pink-300 transition duration-300 w-7 h-7" />
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              3
            </span>
          </Link>

          {/* Heart Icon */}
          <Link href="/">
            <FaHeart className="text-2xl text-gray-700 hover:text-pink-300 transition duration-300 w-7 h-7" />
          </Link>
        </div>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          {/* Radix Dialog for mobile menu */}
          <Dialog.Root>
            {/* Trigger to open the Dialog */}
            <Dialog.Trigger>
              <IoMdMenu className="text-2xl text-gray-700 hover:text-pink-500" />
            </Dialog.Trigger>

            {/* Dialog Portal and Content */}
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
              <Dialog.Content className="w-[200px] sm:w-[540px] ml-auto right-0 bg-white p-4 rounded-lg">
                <ul className="space-y-4">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/Products">Products</Link>
                  </li>
                  <li>
                    <Link href="/About">About</Link>
                  </li>
                  <li>
                    <Link href="/Contact">Contact</Link>
                  </li>
                </ul>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}
