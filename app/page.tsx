import { SignupForm } from "@/components/signup-form";
import { Badge } from "@/components/ui/badge";
import { GiftIcon } from "lucide-react";
import Image from "next/image";

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
          <Badge className="mt-4" variant="outline"><GiftIcon /> Coming Soon</Badge>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-balance text-black dark:text-zinc-50">
            Organize Chaos. Find Everything.
          </h1>
          <p className="max-w-md text-lg text-pretty leading-8 text-zinc-600 dark:text-zinc-400">
            <strong>TickToes</strong> keeps everything in order. From ideas, inspiration to all interactions online. Your private personal knowledge base.
          </p>
        </div>
        <SignupForm className="w-full border-none shadow-none" />
        <p className="text-xs text-muted-foreground">&copy; 2025 TickToes. All rights reserved. Stay curious 😎</p>
      </main>
    </div>
  );
}
