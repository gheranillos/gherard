"use client";

import Image from "next/image";
import Link from "next/link";

export default function GlobalIdentityBar() {
  return (
    <div className="pointer-events-none fixed left-0 right-0 top-4 z-40 px-4 md:top-6 md:px-10">
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
          <div className="hidden items-start gap-2 text-white/85 sm:flex">
            <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-[#7dfd63]" />
            <span className="flex flex-col leading-none">
              <span className="inline-block h-[14px] w-[158px] text-[15px] font-bold">
                Available for project
              </span>
              <span className="mt-1 text-[13px] uppercase text-white/60">
                May 2026
              </span>
            </span>
          </div>

          <Link
            href="/#contacto"
            className="inline-flex h-7 w-[88px] items-center rounded-full border border-white/20 bg-black/35 px-3 text-[11px] font-semibold uppercase text-white transition-colors duration-200 hover:border-[#f7b7ff] hover:bg-[#f7b7ff] hover:text-black md:h-8 md:w-[99px] md:px-4 md:text-[12px]"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </div>
  );
}
