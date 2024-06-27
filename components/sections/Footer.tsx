import Link from "next/link";
import React from "react";
import { IoOpenOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="relative z-50 border-t border-white/10 py-5  flex justify-between">
      <small className="opacity-30">
        &copy; 2024 Parth Tiwari. All Rights Reserved
      </small>
      <div className="hidden xl:inline-block">
        <div className="flex justify-center  items-center gap-1">
          <small className="opacity-30">Build with</small>
          <small className="flex justify-center opacity-50 items-center gap-1">
            Next.js
            <Link target="_blank" href="https://nextjs.org">
              <IoOpenOutline />
            </Link>
          </small>
          <small className="opacity-30">and </small>{" "}
          <small className="flex justify-center items-center opacity-50  gap-1">
            TailwindCSS
            <Link target="_blank" href="https://tailwindcss.com">
              <IoOpenOutline />
            </Link>
          </small>
          <small className="opacity-30">, deployed on</small>{" "}
          <small className="flex justify-center opacity-50 items-center gap-1">
            Vercel
            <Link target="_blank" href="https://vercel.com">
              <IoOpenOutline />
            </Link>
          </small>
        </div>
      </div>
    </footer>
  );
}
