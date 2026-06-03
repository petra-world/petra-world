import Image from "next/image";
import Link from "next/link";

const accountBenefits = [
  "Keep your subscription connected to your account",
  "Unlock premium content after payment verification",
  "Receive private Telegram access when membership is active",
];

const inputClass =
  "mt-2 h-12 w-full rounded-sm border border-white/12 bg-white/[0.08] px-4 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-[#ff8dbb] focus:ring-2 focus:ring-[#ff8dbb]/15";

export default function SignUpPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#12070d] px-4 py-6 text-white">
      <Image
        src="/images/hero-img.gif"
        alt="Petra account background"
        fill
        priority
        unoptimized
        className="-z-20 object-cover object-center opacity-34"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,7,13,0.96),rgba(18,7,13,0.82)),linear-gradient(180deg,rgba(18,7,13,0.2),#12070d)]" />

      <header className="mx-auto flex w-[min(1120px,100%)] items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="Jentra home">
          <Image src="/images/logo.svg" width={50} height={50} alt="" />
          <span className="text-lg font-bold tracking-[0.18em] text-[#ff6aa6]">JENTRA</span>
        </Link>

        <Link className="text-sm font-bold text-white/72 transition hover:text-white" href="/auth/signin">
          Sign In
        </Link>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-74px)] w-[min(1120px,100%)] gap-10 py-14 lg:grid-cols-[0.92fr_0.78fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff8dbb]">Create account</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-light leading-[1.04] sm:text-6xl">
            Start your membership account.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Create an account before checkout so your subscription, premium content access, and private Telegram invite can be verified securely.
          </p>

          <div className="mt-8 grid gap-4">
            {accountBenefits.map((benefit, index) => (
              <div key={benefit} className="flex gap-4 rounded-md border border-white/12 bg-white/[0.06] p-4 backdrop-blur">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#e85a8e] text-sm font-bold">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-6 text-white/72">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-md border border-white/12 bg-white/[0.07] p-6 shadow-2xl shadow-black/25 backdrop-blur sm:p-8">
          <h2 className="text-2xl font-semibold">Sign up</h2>
          <p className="mt-3 text-sm leading-7 text-white/58">
            This form is visual-only for now. Backend auth will be connected after we choose the auth provider.
          </p>

          <div className="mt-7 grid gap-5">
            <label className="text-sm font-bold text-white">
              Full name
              <input className={inputClass} type="text" name="name" placeholder="Your name" />
            </label>

            <label className="text-sm font-bold text-white">
              Email address
              <input className={inputClass} type="email" name="email" placeholder="you@example.com" />
            </label>

            <label className="text-sm font-bold text-white">
              Password
              <input className={inputClass} type="password" name="password" placeholder="Create a secure password" />
            </label>

            <label className="text-sm font-bold text-white">
              Confirm password
              <input className={inputClass} type="password" name="confirmPassword" placeholder="Repeat password" />
            </label>

            <label className="flex gap-3 rounded-sm bg-white/[0.06] p-4 text-sm font-medium leading-6 text-white/70">
              <input className="mt-1 h-4 w-4 accent-[#e85a8e]" type="checkbox" name="adultConfirm" />
              I confirm I am 18+ and understand premium access requires verified payment.
            </label>

            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-[#e85a8e] px-6 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#ff6aa6]"
            >
              Create Account
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-white/56">
            Already have an account?{" "}
            <Link className="font-bold text-[#ff8dbb] hover:text-white" href="/auth/signin">
              Sign in
            </Link>
          </p>
        </form>
      </section>
    </main>
  );
}
