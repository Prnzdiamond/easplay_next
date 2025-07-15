import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BtnO({ href, title, className = "" }) {
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Button
          className={`bg-[#F97316] hover:bg-orange-600 text-white shadow-lg transform hover:scale-105 transition duration-300 mt-4 px-6 py-3 text-lg ${className}`}
          size="lg"
        >
          {title}
        </Button>
      </a>
    );
  }

  return (
    <Link href={href}>
      <Button
        className={`bg-[#F97316] hover:bg-orange-600 text-white shadow-lg transform hover:scale-105 transition duration-300 mt-4 px-6 py-3 text-lg ${className}`}
        size="lg"
      >
        {title}
      </Button>
    </Link>
  );
}
