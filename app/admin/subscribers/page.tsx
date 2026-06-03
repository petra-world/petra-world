import Link from "next/link";
import AdminTopNav from "../AdminTopNav";

const subscriberStats = [
  { label: "Active", value: "128" },
  { label: "VIP monthly", value: "46" },
  { label: "Telegram joined", value: "96" },
  { label: "Expired", value: "18" },
];

const subscribers = [
  {
    name: "Maya K.",
    email: "maya@example.com",
    plan: "VIP Monthly",
    status: "Active",
    payment: "Verified",
    telegram: "Joined",
    renewal: "Jul 3",
  },
  {
    name: "Andre P.",
    email: "andre@example.com",
    plan: "Monthly",
    status: "Active",
    payment: "Verified",
    telegram: "Pending",
    renewal: "Jul 8",
  },
  {
    name: "Tessa R.",
    email: "tessa@example.com",
    plan: "One-Time Pass",
    status: "Limited",
    payment: "Verified",
    telegram: "Not eligible",
    renewal: "Jun 12",
  },
  {
    name: "Chris L.",
    email: "chris@example.com",
    plan: "Monthly",
    status: "Expired",
    payment: "Failed",
    telegram: "Removed",
    renewal: "Expired",
  },
];

const rules = [
  "Only verified active subscribers should unlock premium content",
  "Telegram invite access should be shown after payment confirmation",
  "Expired or failed subscriptions should lose private access",
];

export default function AdminSubscribersPage() {
  return (
    <main className="min-h-screen bg-[#f7edf1] text-[#231018]">
      <AdminTopNav />
      <div className="mx-auto w-[min(1180px,100%)] px-4 py-8 sm:py-10">
        <header className="flex flex-col gap-5 border-b border-[#e5cbd5] pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b82f68]">Admin subscribers</p>
            <h1 className="mt-2 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Manage member access
            </h1>
            <p className="mt-3 max-w-2xl leading-7 text-[#6d5360]">
              Review subscriber status, selected plans, payment verification, and private Telegram access from one page.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/subscribe"
              className="inline-flex h-11 items-center justify-center rounded-sm bg-[#231018] px-5 text-sm font-bold text-white transition hover:bg-[#3a1827]"
            >
              Public Plans
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {subscriberStats.map((stat) => (
            <article key={stat.label} className="rounded-md border border-[#ead0da] bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-[#7a5f6b]">{stat.label}</p>
              <p className="mt-3 text-4xl font-semibold text-[#231018]">{stat.value}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Members</p>
                <h2 className="mt-1 text-2xl font-semibold">Subscriber list</h2>
              </div>
              <span className="w-fit rounded-sm bg-[#f8edf2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#b82f68]">
                Static preview
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-md border border-[#f0dbe3]">
              {subscribers.map((subscriber) => (
                <article key={subscriber.email} className="border-b border-[#f0dbe3] p-4 last:border-b-0">
                  <div className="grid gap-4 xl:grid-cols-[1.1fr_0.75fr_auto] xl:items-center">
                    <div>
                      <h3 className="font-semibold text-[#231018]">{subscriber.name}</h3>
                      <p className="mt-1 text-sm text-[#6d5360]">{subscriber.email}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-[#4a1d2f]">{subscriber.plan}</p>
                      <p className="mt-1 text-sm text-[#7a5f6b]">Renews: {subscriber.renewal}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[subscriber.status, subscriber.payment, subscriber.telegram].map((tag) => (
                        <span key={tag} className="rounded-sm bg-[#f8edf2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#b82f68]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-md bg-[#231018] p-6 text-white shadow-xl shadow-[#231018]/15">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff8dbb]">Access rules</p>
              <div className="mt-5 grid gap-3">
                {rules.map((rule, index) => (
                  <div key={rule} className="flex gap-4 rounded-sm border border-white/12 bg-white/[0.06] p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#e85a8e] text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-6 text-white/70">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Backend note</p>
              <p className="mt-4 text-sm leading-7 text-[#6d5360]">
                When backend work starts, subscription status should come from payment webhooks, not from the browser. That is what protects content and Telegram access.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
