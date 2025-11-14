import { SignupForm } from "@/components/signup-form"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Link className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-4" href="/">← Back</Link>
        <SignupForm className="w-full" />
      </main>
    </div>
  )
}
