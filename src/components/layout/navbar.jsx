"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { routes } from "@/data/routes";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50 border-b-2 border-white">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="w-24 lg:w-28">
          <Image
            src="/img/4.png"
            alt="Easplay"
            width={112}
            height={40}
            className="w-full h-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex">
          <ul className="flex gap-6 text-white font-bold">
            {routes.map(({ name, path }) => (
              <li key={name} className="capitalize">
                <Link
                  href={path}
                  className="hover:text-orange-500 transition-colors"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white hover:text-orange-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-black p-4 rounded-lg mt-2">
          <ul className="flex flex-col gap-4 text-white font-bold">
            {routes.map(({ name, path }) => (
              <li key={name} className="capitalize">
                <Link
                  href={path}
                  className="hover:text-orange-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
