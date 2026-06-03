import Image from "next/image";
import Link from "next/link";
import MobileNav from "../MobileNav";

const categories = ["Photos", "Videos", "Private Updates", "Telegram"];

const previews = [
  {
    title: "Soft private gallery",
    type: "Photos",
    count: "18 images",
    description: "A polished members-only gallery with intimate styling and private notes.",
  },
  {
    title: "After-hours video drop",
    type: "Videos",
    count: "4 clips",
    description: "Premium video updates reserved for active subscribers.",
  },
  {
    title: "Petra's private diary",
    type: "Updates",
    count: "New weekly",
    description: "Personal updates, thoughts, and behind-the-scenes moments away from the public feed.",
  },
];

const memberPerks = [
  "Unlock premium galleries and video drops",
  "Receive private updates and creator notes",
  "Continue to private Telegram after subscription verification",
];

export default function ContentPage() {
  return (
    <main className="min-h-screen bg-[#12070d] text-white">
      <section className="relative isolate overflow-hidden px-4 py-6">
        <Image
          src="/images/hero-img.gif"
          alt="Petra content background"
          fill
          priority
          unoptimized
          className="-z-20 object-cover object-center opacity-38"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,7,13,0.94),#12070d_84%)]" />

        <header className="relative z-20 mx-auto flex w-[min(1120px,100%)] items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2" aria-label="Jentra home">
            <Image src="/images/logo.svg" width={50} height={50} alt="" className="h-11 w-11 sm:h-[50px] sm:w-[50px]" />
            <span className="text-lg font-bold tracking-[0.16em] text-[#ff6aa6] sm:tracking-[0.18em]">JENTRA</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <Link className="hover:text-white" href="/">
              Home
            </Link>
            <Link className="hover:text-white" href="/subscribe">
              Subscribe
            </Link>
            <Link className="hover:text-white" href="/booking">
              Booking
            </Link>
            <Link className="hover:text-white" href="/auth/signin">
              Sign In
            </Link>
          </nav>

          <MobileNav />
        </header>

        <div className="mx-auto grid w-[min(1120px,100%)] gap-10 pb-14 pt-16 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff8dbb]">Members-only content</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl font-light leading-[1.04] sm:text-6xl">
              Preview the feed. Subscribe to unlock the full experience.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Petra&apos;s premium content is designed for active subscribers: private galleries, video drops, personal updates, and a guided path into the private Telegram community.
            </p>
          </div>

          <div className="rounded-md border border-[#ff8dbb]/25 bg-white/[0.07] p-6 shadow-2xl shadow-black/25 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff8dbb]">Access status</p>
            <h2 className="mt-3 text-2xl font-semibold">Preview mode</h2>
            <p className="mt-3 leading-7 text-white/64">
              You are viewing public previews. Subscribe or sign in with an active membership to unlock private content.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/subscribe"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-[#e85a8e] px-6 text-sm font-bold text-white transition hover:bg-[#ff6aa6]"
              >
                Subscribe
              </Link>
              <Link
                href="/auth/signin"
                className="inline-flex h-12 items-center justify-center rounded-sm border border-white/25 px-6 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto w-[min(1120px,100%)]">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff8dbb]">Content library</p>
              <h2 className="mt-3 max-w-2xl font-serif text-4xl font-light leading-tight sm:text-5xl">
                Locked previews from Petra&apos;s private feed.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="rounded-sm border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white/72">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {previews.map((preview, index) => (
              <article key={preview.title} className="overflow-hidden rounded-md border border-white/12 bg-white/[0.06]">
                <div className="relative h-72 border-b border-white/10 bg-[linear-gradient(135deg,rgba(232,90,142,0.34),rgba(255,255,255,0.06))]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_34%_18%,rgba(255,141,187,0.28),transparent_34%)]" />
                  <div className="absolute left-4 top-4 rounded-sm bg-[#12070d]/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#ff8dbb] backdrop-blur">
                    {preview.type}
                  </div>
                  <div className="absolute inset-x-5 bottom-5 rounded-md border border-white/15 bg-[#12070d]/72 p-4 backdrop-blur">
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-white/54">Locked preview 0{index + 1}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{preview.title}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm font-bold text-[#ff8dbb]">{preview.count}</p>
                  <p className="mt-3 leading-7 text-white/62">{preview.description}</p>
                  <Link
                    href="/subscribe"
                    className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-sm border border-white/25 text-sm font-bold text-white transition hover:border-white hover:bg-white/10"
                  >
                    Subscribe to Unlock
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8fb] px-4 py-16 text-[#231018]">
        <div className="mx-auto grid w-[min(1120px,100%)] gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b82f68]">Member access</p>
            <h2 className="mt-3 font-serif text-4xl font-light leading-tight sm:text-5xl">
              What active subscribers unlock.
            </h2>
            <p className="mt-5 leading-8 text-[#5e4650]">
              Once subscription status is active, this page can switch from locked previews to the full members-only content library.
            </p>
          </div>

          <div className="grid gap-4">
            {memberPerks.map((perk, index) => (
              <div key={perk} className="rounded-md border border-[#ead0da] bg-white p-5 shadow-sm">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#e85a8e] text-sm font-bold text-white">
                    0{index + 1}
                  </span>
                  <p className="pt-1 text-lg font-medium text-[#2b131d]">{perk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto rounded-md border border-[#ff8dbb]/20 bg-white/[0.06] p-6 text-center shadow-xl shadow-black/15 sm:w-[min(820px,100%)] sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff8dbb]">Private Telegram</p>
          <h2 className="mt-3 font-serif text-4xl font-light">Join after verification.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/64">
            The private Telegram invite should only appear after payment is verified and the member account is active. Until then, the invite stays protected.
          </p>
          <Link
            href="/subscribe"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-[#e85a8e] px-7 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#ff6aa6]"
          >
            Get Access
          </Link>
        </div>
      </section>
    </main>
  );
}
