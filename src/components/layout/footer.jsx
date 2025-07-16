"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const socials = [
  { name: "twitter", path: "https://x.com/easplayng?s=11" },
  // { name: "youtube", path: "https://www.youtube.com/channel/easplay" },
  {
    name: "instagram",
    path: "https://www.instagram.com/easplaygames?igsh=Mm9wbzVtYzk0djFq",
  },
  // { name: "facebook", path: "https://www.facebook.com/easplay/" },
];

const menus = [
  {
    name: "useful links",
    items: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Services", path: "/services" },
      { name: "Contact Us", path: "/contact" },
    ],
  },
  {
    name: "support",
    items: [
      { name: "Help Center", path: "/contact" },
      {
        name: "Privacy Policy",
        path: "https://games.easplay.com/terms-and-conditions",
      },
      {
        name: "Terms of Service",
        path: "https://games.easplay.com/terms-and-conditions",
      },
    ],
  },
];

export function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative px-4 pt-8 pb-6 bg-[#1a1a1a] text-gray-200">
      <div className="container mx-auto">
        <div className="border-t border-gray-700 my-4" />
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <h4 className="mb-4 text-orange-500 text-2xl font-bold">Easplay</h4>
            <p className="font-normal lg:w-2/5">
              The ultimate platform for gaming enthusiasts.
            </p>
            <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
              {socials.map(({ name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full text-gray-400 hover:text-white"
                  >
                    <i className={`fa-brands fa-${name}`} />
                  </Button>
                </a>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <h5 className="mb-2 block font-medium uppercase text-orange-500 text-sm">
                  {name}
                </h5>
                <ul className="mt-3">
                  {items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.path}
                        className="mb-2 block font-normal hover:text-gray-100 text-sm"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <p className="font-normal text-gray-400 text-sm">
              © {year} Easplay. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
