import Image from "next/image";
import Link from "next/link";

export default function Page() {
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
                <h1 className="text-2xl font-bold mb-4">Thank you for your interest in TickToes!</h1>
                <div>
                    <p className="text-muted-foreground mb-4">You will receive an email confirming the receipt of your request shortly.</p>
                    <p className="text-muted-foreground">We can&apos;t wait to see you soon!</p>
                </div>
                <div>
                    <Link
                        className="flex h-12 w-fit mb-4 items-center justify-center rounded-full border border-solid border-black/8 px-5 transition-colors hover:border-transparent hover:bg-black/4 dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
                        href="https://x.com/intent/tweet?text=Checkout%20this%20amazing%20Next.js%20and%20AutoSend%20starter%20repo&url=https://github.com/djsiddz&via=super__siddy">
                        Tell your friends about us!
                    </Link>
                    <p className="text-muted-foreground mb-4">You may close this page or <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-4" href="/">Go Back Home</Link>.</p>
                </div>
                <p className="text-xs text-muted-foreground">&copy; 2025 TickToes. All rights reserved. Stay curious 😎</p>
            </main>
        </div>
    )
}
