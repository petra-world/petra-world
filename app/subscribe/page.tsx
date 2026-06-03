import Image from "next/image";
import Link from "next/link";
import MobileNav from "../MobileNav";

const plans = [
  {
    name: "Monthly",
    price: "$29",
    period: "per month",
    description: "Flexible access for supporters who want to stay close month by month.",
    highlight: false,
    benefits: ["Exclusive photos and videos", "Private updates", "Telegram access after verification"],
  },
  {
    name: "VIP Monthly",
    price: "$49",
    period: "per month",
    description: "The best choice for full access, priority drops, and a closer creator experience.",
    highlight: true,
    benefits: ["Everything in Monthly", "Early premium drops", "Priority booking review"],
  },
  {
    name: "One-Time Pass",
    price: "$15",
    period: "limited access",
    description: "A simple way to preview the private experience before becoming a full member.",
    highlight: false,
    benefits: ["Selected premium previews", "Member welcome posts", "Upgrade anytime"],
  },
];

const steps = [
  "Choose the plan that fits you",
  "Create or sign in to your account",
  "Complete secure payment",
  "Unlock content and private Telegram access",
];

const faqs = [
  {
    question: "When do I get the Telegram link?",
    answer: "After your payment is verified and your membership is active, you will be shown the private Telegram access step.",
  },
  {
    question: "Can I book Petra after subscribing?",
    answer: "Yes. Members can still use the booking page for visitation, travel, or private appearance requests.",
  },
  {
    question: "Is the content public?",
    answer: "No. Premium content is reserved for active subscribers and should only be available after member verification.",
  },
];

export default function SubscribePage() {
  return (
    <main className="min-h-screen bg-[#12070d] text-white">
      <section className="relative isolate overflow-hidden px-4 py-6">
        <Image
          src="/images/hero-img.gif"
          alt="Petra membership background"
          fill
          priority
          unoptimized
          className="-z-20 object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(18,7,13,0.92),#12070d_82%)]" />

        <header className="relative z-20 mx-auto flex w-[min(1120px,100%)] items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2" aria-label="Jentra home">
            <Image src="/images/logo.svg" width={50} height={50} alt="" className="h-11 w-11 sm:h-[50px] sm:w-[50px]" />
            <span className="text-lg font-bold tracking-[0.16em] text-[#ff6aa6] sm:tracking-[0.18em]">PETRA</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <Link className="hover:text-white" href="/">
              Home
            </Link>
            <Link className="hover:text-white" href="/content">
              Content
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

        <div className="mx-auto grid w-[min(1120px,100%)] gap-10 pb-14 pt-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff8dbb]">Membership</p>
            <h1 className="mt-4 max-w-3xl font-serif text-5xl font-light leading-[1.04] sm:text-6xl">
              Choose your access to Petra&apos;s private world.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Subscribe for premium photos, videos, private updates, and access to Petra&apos;s private Telegram community after your membership is confirmed.
            </p>
          </div>

          <div className="rounded-md border border-[#ff8dbb]/25 bg-white/[0.07] p-6 shadow-2xl shadow-black/25 backdrop-blur">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff8dbb]">After subscribing</p>
            <ol className="mt-5 grid gap-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#e85a8e] text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-white/78">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto w-[min(1120px,100%)]">
          <div className="grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-md border p-6 ${
                  plan.highlight
                    ? "border-[#ff8dbb] bg-[#fff8fb] text-[#231018] shadow-2xl shadow-[#e85a8e]/15"
                    : "border-white/12 bg-white/[0.06] text-white"
                }`}
              >
                {plan.highlight ? (
                  <p className="mb-4 inline-flex rounded-sm bg-[#e85a8e] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                    Recommended
                  </p>
                ) : null}
                <h2 className="text-2xl font-semibold">{plan.name}</h2>
                <div className="mt-5 flex items-end gap-2">
                  <span className="text-5xl font-semibold">{plan.price}</span>
                  <span className={plan.highlight ? "pb-2 text-[#765864]" : "pb-2 text-white/58"}>{plan.period}</span>
                </div>
                <p className={plan.highlight ? "mt-5 leading-7 text-[#5e4650]" : "mt-5 leading-7 text-white/62"}>
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-3 text-sm">
                      <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${plan.highlight ? "bg-[#e85a8e]" : "bg-[#ff8dbb]"}`} />
                      <span className={plan.highlight ? "text-[#4a1d2f]" : "text-white/74"}>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/auth/signup"
                  className={`mt-8 inline-flex h-12 w-full items-center justify-center rounded-sm text-sm font-bold uppercase tracking-[0.08em] transition ${
                    plan.highlight
                      ? "bg-[#231018] text-white hover:bg-[#3a1827]"
                      : "border border-white/25 text-white hover:border-white hover:bg-white/10"
                  }`}
                >
                  Select Plan
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-sm leading-7 text-white/50">
            Payment checkout is not connected yet. These buttons are ready to route into signup now and can later create a secure checkout session.
          </p>
        </div>
      </section>

      <section className="bg-[#fff8fb] px-4 py-16 text-[#231018]">
        <div className="mx-auto grid w-[min(1120px,100%)] gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b82f68]">Private access</p>
            <h2 className="mt-3 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Telegram access stays private until payment is verified.
            </h2>
            <p className="mt-5 leading-8 text-[#5e4650]">
              The private invite should never be displayed before subscription confirmation. Once payment is verified, active members can continue to the invite step.
            </p>
            <Link
              href="/content"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-[#231018] px-6 text-sm font-bold text-white transition hover:bg-[#3a1827]"
            >
              Preview Content
            </Link>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-md border border-[#ead0da] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-[#231018]">{faq.question}</h3>
                <p className="mt-2 leading-7 text-[#6d5360]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
