import Image from "next/image";
import Link from "next/link";
import MobileNav from "../MobileNav";

const bookingTypes = [
  {
    title: "Personal Visitation",
    description: "For private, scheduled visitation requests reviewed directly by Petra's team.",
  },
  {
    title: "Travel Booking",
    description: "For requests that involve travel, destination details, dates, and special arrangements.",
  },
  {
    title: "Private Appearance",
    description: "For events, appearances, or custom requests that need review before confirmation.",
  },
];

const reviewSteps = [
  "Submit your request with clear details",
  "Petra's team reviews availability and safety requirements",
  "You receive a private response before anything is confirmed",
];

const inputClass =
  "mt-2 h-12 w-full rounded-sm border border-[#e4c6d1] bg-white px-4 text-sm text-[#231018] outline-none transition placeholder:text-[#a28793] focus:border-[#e85a8e] focus:ring-2 focus:ring-[#e85a8e]/15";

const labelClass = "text-sm font-bold text-[#4a1d2f]";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#fff8fb] text-[#231018]">
      <section className="relative isolate overflow-hidden bg-[#12070d] px-4 py-6 text-white">
        <Image
          src="/images/hero-img.gif"
          alt="Petra booking background"
          fill
          priority
          unoptimized
          className="-z-20 object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,7,13,0.94),rgba(18,7,13,0.88))]" />

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
            <Link className="hover:text-white" href="/content">
              Content
            </Link>
            <Link className="hover:text-white" href="/auth/signin">
              Sign In
            </Link>
          </nav>

          <MobileNav />
        </header>

        <div className="mx-auto w-[min(1120px,100%)] py-16">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff8dbb]">Booking request</p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl font-light leading-[1.04] sm:text-6xl">
            Request a personal visit, travel booking, or private appearance.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            Share the details of your request so Petra can review availability, location, expectations, and safety before anything is confirmed.
          </p>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto grid w-[min(1120px,100%)] gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <aside className="space-y-6">
            <div className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Available requests</p>
              <div className="mt-5 grid gap-4">
                {bookingTypes.map((type) => (
                  <article key={type.title} className="rounded-sm bg-[#fff8fb] p-4">
                    <h2 className="font-semibold text-[#231018]">{type.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-[#6d5360]">{type.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-md bg-[#231018] p-6 text-white shadow-xl shadow-[#231018]/15">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff8dbb]">Review process</p>
              <ol className="mt-5 space-y-4">
                {reviewSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#e85a8e] text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-sm leading-6 text-white/72">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <form className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm sm:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Request form</p>
              <h2 className="mt-2 font-serif text-4xl font-light">Tell Petra what you want to book.</h2>
              <p className="mt-4 leading-7 text-[#6d5360]">
                This form is not connected yet. Once the backend is ready, it will send booking requests to the admin dashboard.
              </p>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className={labelClass}>
                Full name
                <input className={inputClass} type="text" name="name" placeholder="Your name" />
              </label>

              <label className={labelClass}>
                Email address
                <input className={inputClass} type="email" name="email" placeholder="you@example.com" />
              </label>

              <label className={labelClass}>
                Phone or WhatsApp
                <input className={inputClass} type="tel" name="phone" placeholder="+1 000 000 0000" />
              </label>

              <label className={labelClass}>
                Booking type
                <select className={inputClass} name="bookingType" defaultValue="">
                  <option value="" disabled>
                    Select request type
                  </option>
                  <option>Personal visitation</option>
                  <option>Travel booking</option>
                  <option>Private appearance</option>
                  <option>Custom request</option>
                </select>
              </label>

              <label className={labelClass}>
                City / location
                <input className={inputClass} type="text" name="location" placeholder="City, state, country" />
              </label>

              <label className={labelClass}>
                Preferred date
                <input className={inputClass} type="date" name="preferredDate" />
              </label>

              <label className={labelClass}>
                Estimated duration
                <select className={inputClass} name="duration" defaultValue="">
                  <option value="" disabled>
                    Select duration
                  </option>
                  <option>1-2 hours</option>
                  <option>Half day</option>
                  <option>Full day</option>
                  <option>Multiple days</option>
                  <option>Not sure yet</option>
                </select>
              </label>

              <label className={labelClass}>
                Budget range
                <select className={inputClass} name="budget" defaultValue="">
                  <option value="" disabled>
                    Select budget range
                  </option>
                  <option>$500 - $1,000</option>
                  <option>$1,000 - $2,500</option>
                  <option>$2,500 - $5,000</option>
                  <option>$5,000+</option>
                  <option>Discuss privately</option>
                </select>
              </label>
            </div>

            <label className={`${labelClass} mt-5 block`}>
              Request details
              <textarea
                className="mt-2 min-h-36 w-full rounded-sm border border-[#e4c6d1] bg-white px-4 py-3 text-sm text-[#231018] outline-none transition placeholder:text-[#a28793] focus:border-[#e85a8e] focus:ring-2 focus:ring-[#e85a8e]/15"
                name="message"
                placeholder="Share the purpose, location details, timing, expectations, and anything Petra should know before reviewing."
              />
            </label>

            <div className="mt-6 space-y-3 rounded-md bg-[#fff8fb] p-4">
              <label className="flex gap-3 text-sm font-medium leading-6 text-[#4a1d2f]">
                <input className="mt-1 h-4 w-4 accent-[#e85a8e]" type="checkbox" name="adultConfirm" />
                I confirm that I am 18+ and understand this request will be reviewed before confirmation.
              </label>
              <label className="flex gap-3 text-sm font-medium leading-6 text-[#4a1d2f]">
                <input className="mt-1 h-4 w-4 accent-[#e85a8e]" type="checkbox" name="safetyConfirm" />
                I agree to provide accurate details and respect Petra&apos;s safety, privacy, and booking boundaries.
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-[#231018] px-7 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#3a1827]"
              >
                Submit Request
              </button>
              <p className="text-sm leading-6 text-[#7a5f6b]">
                Submission is visual-only for now. Backend connection comes next.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
