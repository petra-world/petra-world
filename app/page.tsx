import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";

const membershipBenefits = [
  "Fresh members-only photos, videos, and private updates",
  "Access to Petra's private Telegram after your subscription is confirmed",
  "Early drops, personal notes, and a more intimate creator experience",
];

const previewCards = [
  {
    title: "Private Updates",
    description: "Stay close with frequent member updates, personal moments, and content shared away from the public feed.",
  },
  {
    title: "Premium Library",
    description: "Explore a curated members area with exclusive photos, videos, and special drops reserved for subscribers.",
  },
  {
    title: "Telegram Access",
    description: "After subscribing, active members are guided into Petra's private Telegram community for closer access.",
  },
];

const bookingTypes = ["Personal visitation", "Travel booking", "Private appearance"];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#12070d] text-white">
      <section className="relative isolate min-h-screen overflow-hidden">
        <Image
          src="/images/hero-img.gif"
          alt="Petra premium creator visual"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,7,13,0.96)_0%,rgba(18,7,13,0.78)_42%,rgba(18,7,13,0.35)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(232,90,142,0.26),transparent_28%),linear-gradient(180deg,rgba(18,7,13,0.1),#12070d_96%)]" />

        <header className="relative z-20 mx-auto flex w-[min(1120px,92vw)] items-center justify-between gap-3 py-5">
          <Link href="/" className="flex items-center gap-2" aria-label="Jentra home">
            <Image src="/images/logo.svg" width={54} height={54} alt="" className="h-11 w-11 sm:h-[54px] sm:w-[54px]" />
            <span className="text-lg font-bold tracking-[0.16em] text-[#ff6aa6] sm:text-xl sm:tracking-[0.18em]">PETRA</span>
          </Link>

          <nav className="hidden items-center gap-7 rounded-md border border-white/15 bg-white/8 px-7 py-3 text-sm text-white/82 shadow-2xl shadow-black/20 backdrop-blur-xl md:flex">
            <Link className="transition hover:text-white" href="/">
              Home
            </Link>
            <Link className="transition hover:text-white" href="/content">
              Content
            </Link>
            <Link className="transition hover:text-white" href="/subscribe">
              Subscribe
            </Link>
            <Link className="transition hover:text-white" href="/booking">
              Booking
            </Link>
            <Link className="transition hover:text-white" href="/auth/signin">
              Sign in
            </Link>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/subscribe"
              className="rounded-sm bg-[#e85a8e] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-[#e85a8e]/25 transition hover:bg-[#ff6aa6] sm:px-5"
            >
              Subscribe
            </Link>
            <MobileNav />
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-94px)] w-[min(1120px,92vw)] items-center py-16">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-sm border border-[#ff8dbb]/30 bg-[#6a0e30]/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#ffc1d8] backdrop-blur">
              Premium creator experience
            </div>

            <h1 className="font-serif text-5xl font-light leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Welcome to{" "}
              <span className="relative inline-block text-[#ff6aa6]">
                Petra
                <Image
                  src="/images/love.svg"
                  width={74}
                  height={74}
                  alt=""
                  className="absolute -right-14 -top-8 hidden sm:block"
                />
              </span>{" "}
              World
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
              Step into Petra&apos;s private world with exclusive photos, videos, personal updates, and access made for real supporters who want more than the public feed.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/subscribe"
                className="inline-flex h-14 items-center justify-center rounded-sm bg-[#e85a8e] px-8 text-sm font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#e85a8e]/25 transition hover:bg-[#ff6aa6]"
              >
                Subscribe Now
              </Link>
              <Link
                href="/booking"
                className="inline-flex h-14 items-center justify-center rounded-sm border border-white/35 px-8 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-white hover:bg-white/10"
              >
                Book Visit
              </Link>
            </div>

            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-y border-white/12 py-5 text-white">
              <div>
                <dt className="text-2xl font-semibold text-[#ff8dbb]">24/7</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-white/56">Member access</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-[#ff8dbb]">VIP</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-white/56">Telegram</dd>
              </div>
              <div>
                <dt className="text-2xl font-semibold text-[#ff8dbb]">1:1</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-white/56">Bookings</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section id="membership" className="bg-[#f7edf1] px-4 py-20 text-[#231018]">
        <div className="mx-auto grid w-[min(1120px,100%)] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b82f68]">Membership</p>
            <h2 className="mt-3 font-serif text-4xl font-light leading-tight sm:text-5xl">
              A private space for premium posts and closer access.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5e4650]">
              Your membership gives you access to Petra&apos;s exclusive drops, private updates, and the private Telegram community after your subscription is confirmed.
            </p>
          </div>

          <div className="grid gap-4">
            {membershipBenefits.map((benefit, index) => (
              <div key={benefit} className="rounded-md border border-[#ead0da] bg-white p-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#e85a8e] text-sm font-bold text-white">
                    0{index + 1}
                  </span>
                  <p className="pt-1 text-lg font-medium text-[#2b131d]">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#12070d] px-4 py-20">
        <div className="mx-auto w-[min(1120px,100%)]">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff8dbb]">Exclusive content</p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl font-light leading-tight text-white sm:text-5xl">
                Enjoy the previews here. Unlock the full experience as a member.
              </h2>
            </div>
            <Link
              href="/content"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/25 px-6 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
            >
              View Content
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {previewCards.map((card) => (
              <article key={card.title} className="rounded-md border border-white/12 bg-white/[0.06] p-6">
                <div className="mb-8 h-56 rounded-sm border border-[#ff8dbb]/20 bg-[linear-gradient(135deg,rgba(232,90,142,0.28),rgba(255,255,255,0.06))] sm:h-64" />
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-white/62">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8fb] px-4 py-20 text-[#231018]">
        <div className="mx-auto grid w-[min(1120px,100%)] gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b82f68]">Booking</p>
            <h2 className="mt-3 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Request a personal visitation or travel booking.
            </h2>
            <p className="mt-5 leading-8 text-[#5e4650]">
              Send a private request for visitation, travel, or a special appearance. Share your location, preferred date, and details so Petra can review your request properly.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {bookingTypes.map((type) => (
                <span key={type} className="rounded-sm border border-[#e3bdcb] bg-[#f8edf2] px-4 py-2 text-sm font-medium text-[#6d213e]">
                  {type}
                </span>
              ))}
            </div>

            <Link
              href="/booking"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-[#231018] px-7 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#3a1827]"
            >
              Start Booking
            </Link>
          </div>

          <div className="rounded-md bg-[#231018] p-6 text-white shadow-xl shadow-[#231018]/15">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff8dbb]">Subscriber path</p>
            <ol className="mt-6 space-y-5">
              {["Choose a plan", "Complete verified payment", "Unlock content access", "Join private Telegram"].map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#e85a8e] text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-white/82">{step}</span>
                </li>
              ))}
            </ol>
            <p className="mt-7 border-t border-white/12 pt-5 text-sm leading-7 text-white/58">
              Private Telegram access is reserved for confirmed subscribers, so your invite appears only after your membership is active.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#12070d] px-4 py-8 text-white">
        <div className="mx-auto flex w-[min(1120px,100%)] flex-col gap-4 text-sm text-white/58 sm:flex-row sm:items-center sm:justify-between">
          <p>JENTRA - Premium creator membership</p>
          <div className="flex gap-5">
            <Link href="/auth/signin" className="hover:text-white">
              Sign In
            </Link>
            <Link href="/subscribe" className="hover:text-white">
              Subscribe
            </Link>
            <Link href="/booking" className="hover:text-white">
              Booking
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
