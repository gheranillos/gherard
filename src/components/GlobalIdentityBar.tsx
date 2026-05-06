"use client";

import Image from "next/image";
import Link from "next/link";

export default function GlobalIdentityBar() {
  return (
    <div className="pointer-events-none fixed left-0 right-0 top-6 z-40 px-6 md:px-10">
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between">
        <Link href="/" className="pointer-events-auto">
          <Image
            src="/iconfooter.png"
            alt="Gherard"
            width={35}
            height={40}
            className="h-[40px] w-[35px] object-contain"
            priority={false}
          />
        </Link>

        <div className="pointer-events-auto flex items-center gap-2.5 sm:gap-3">
          <div className="hidden items-start gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-white/85 backdrop-blur-sm sm:flex">
            <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-[#7dfd63]" />
            <span className="flex flex-col leading-none">
              <span className="text-[0.52rem] uppercase">Available for project</span>
              <span className="mt-1 text-[0.52rem] uppercase text-white/60">
                May 2026
              </span>
            </span>
          </div>

          <Link
            href="/#contacto"
            className="inline-flex h-8 items-center rounded-full border border-white/20 bg-black/35 px-4 text-[0.56rem] font-semibold uppercase text-white transition-colors duration-200 hover:border-[#d9ff3f] hover:bg-[#d9ff3f] hover:text-black"
          >
            Let&apos;s Talk
          </Link>
          <Link
            href="https://instagram.com/gheranillos"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[0.65rem] text-white/55 transition-colors hover:text-white lg:block"
          >
            @gheranillos
          </Link>
        </div>
      </div>
    </div>
  );
}
