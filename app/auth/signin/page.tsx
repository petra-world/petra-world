import Image from "next/image";
import Link from "next/link";

const accessLinks = [
  { label: "Member content", href: "/content" },
  { label: "Subscription plans", href: "/subscribe" },
  { label: "Booking requests", href: "/booking" },
];

const inputClass =
  "mt-2 h-12 w-full rounded-sm border border-white/12 bg-white/[0.08] px-4 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-[#ff8dbb] focus:ring-2 focus:ring-[#ff8dbb]/15";

export default function SignInPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#12070d] px-4 py-6 text-white">
      <Image
        src="/images/hero-img.gif"
        alt="Petra sign in background"
        fill
        priority
        unoptimized
        className="-z-20 object-cover object-center opacity-34"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,7,13,0.96),rgba(18,7,13,0.82)),linear-gradient(180deg,rgba(18,7,13,0.2),#12070d)]" />

      <header className="mx-auto flex w-[min(1120px,100%)] items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Jentra home">
          <Image src="/images/logo.svg" width={50} height={50} alt="" />
          <span className="text-lg font-bold tracking-[0.18em] text-[#ff6aa6]">PETRA</span>
        </Link>

        <Link className="text-sm font-bold text-white/72 transition hover:text-white" href="/auth/signup">
          Create Account
        </Link>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-74px)] w-[min(1120px,100%)] gap-10 py-14 lg:grid-cols-[0.78fr_0.92fr] lg:items-center">
        <form className="rounded-md border border-white/12 bg-white/[0.07] p-6 shadow-2xl shadow-black/25 backdrop-blur sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff8dbb]">Member login</p>
          <h1 className="mt-3 font-serif text-4xl font-light">Welcome back.</h1>
          <p className="mt-4 text-sm leading-7 text-white/58">
            Sign in to continue to your member area, premium content, booking requests, and private access after your subscription is verified.
          </p>

          <div className="mt-7 grid gap-5">
            <label className="text-sm font-bold text-white">
              Email address
              <input className={inputClass} type="email" name="email" placeholder="you@example.com" />
            </label>

            <label className="text-sm font-bold text-white">
              Password
              <input className={inputClass} type="password" name="password" placeholder="Your password" />
            </label>

            <div className="flex flex-col gap-3 text-sm text-white/62 sm:flex-row sm:items-center sm:justify-between">
              <label className="flex gap-2">
                <input className="h-4 w-4 accent-[#e85a8e]" type="checkbox" name="remember" />
                Remember me
              </label>
              <Link className="font-bold text-[#ff8dbb] hover:text-white" href="/auth/signin">
                Forgot password?
              </Link>
            </div>

            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-[#e85a8e] px-6 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#ff6aa6]"
            >
              Sign In
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-white/56">
            New here?{" "}
            <Link className="font-bold text-[#ff8dbb] hover:text-white" href="/auth/signup">
              Create an account
            </Link>
          </p>
        </form>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff8dbb]">Secure access</p>
          <h2 className="mt-4 max-w-3xl font-serif text-5xl font-light leading-[1.04] sm:text-6xl">
            One account for your private member experience.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Once authentication is connected, your account will be used to confirm your subscription, unlock premium content, and guide you to private access.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {accessLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md border border-white/12 bg-white/[0.06] p-4 text-sm font-bold text-white/76 backdrop-blur transition hover:border-[#ff8dbb] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
