import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/logoipsum-379.svg"
          alt="Next.js logo"
          width={100}
          height={100}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-balance text-black dark:text-zinc-50">
            Organize Chaos. Find Everything.
          </h1>
          <p className="max-w-md text-lg text-pretty leading-8 text-zinc-600 dark:text-zinc-400">
            <strong>TickToes</strong> keeps everything in order. From ideas, inspiration to all interactions online. Your private personal knowledge base.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full min-w-fit items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="/signup"
          >
            <Image
              className="dark:invert"
              src="/logoipsum-379.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Get Early Access
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="/signup"
          >
            Request Demo
          </Link>
        </div>
        <p className="text-xs text-muted-foreground">&copy; 2025 TickToes. All rights reserved. Stay curious 😎</p>
      </main>
    </div>
  );
}
