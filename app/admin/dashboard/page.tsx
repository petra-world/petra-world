import Link from "next/link";
import AdminTopNav from "../AdminTopNav";

const stats = [
  { label: "Active subscribers", value: "128", note: "+12 this week" },
  { label: "Pending bookings", value: "7", note: "3 need review" },
  { label: "Content posts", value: "42", note: "5 scheduled" },
  { label: "Telegram joins", value: "96", note: "after verified payment" },
];

const bookings = [
  {
    name: "Maya K.",
    type: "Travel booking",
    date: "Jun 12",
    status: "Review",
  },
  {
    name: "Andre P.",
    type: "Personal visitation",
    date: "Jun 15",
    status: "New",
  },
  {
    name: "Tessa R.",
    type: "Private appearance",
    date: "Jun 18",
    status: "Contacted",
  },
];

const contentItems = [
  { title: "Weekend private gallery", status: "Draft", detail: "Add media and publish date" },
  { title: "Subscriber welcome post", status: "Ready", detail: "Pin for new members" },
  { title: "Telegram invite handoff", status: "Needs backend", detail: "Connect after payment webhook" },
];

const quickActions = [
  { label: "Manage Content", href: "/admin/dashboard/content" },
  { label: "Review Bookings", href: "/admin/dashboard/booking" },
  { label: "View Subscribers", href: "/admin/subscribers" },
];

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7edf1] text-[#231018]">
      <AdminTopNav />
      <div className="mx-auto w-[min(1180px,100%)] px-4 py-8 sm:py-10">
        <header className="flex flex-col gap-5 border-b border-[#e5cbd5] pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b82f68]">Jentra Admin</p>
            <h1 className="mt-2 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Dashboard
            </h1>
            <p className="mt-3 max-w-2xl leading-7 text-[#6d5360]">
              Track subscriptions, premium content, Telegram access, and booking requests from one simple workspace.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/admin/dashboard/content"
              className="inline-flex h-11 items-center justify-center rounded-sm bg-[#231018] px-5 text-sm font-bold text-white transition hover:bg-[#3a1827]"
            >
              New Post
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="rounded-md border border-[#ead0da] bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-[#7a5f6b]">{stat.label}</p>
              <p className="mt-3 text-4xl font-semibold text-[#231018]">{stat.value}</p>
              <p className="mt-2 text-sm text-[#b82f68]">{stat.note}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Bookings</p>
                <h2 className="mt-1 text-2xl font-semibold">Recent requests</h2>
              </div>
              <Link href="/admin/dashboard/booking" className="text-sm font-bold text-[#b82f68] hover:text-[#7d1c45]">
                Manage bookings
              </Link>
            </div>

            <div className="mt-5 overflow-hidden rounded-md border border-[#f0dbe3]">
              {bookings.map((booking) => (
                <div
                  key={`${booking.name}-${booking.date}`}
                  className="grid gap-3 border-b border-[#f0dbe3] p-4 last:border-b-0 sm:grid-cols-[1fr_1fr_auto_auto] sm:items-center"
                >
                  <p className="font-semibold text-[#231018]">{booking.name}</p>
                  <p className="text-sm text-[#6d5360]">{booking.type}</p>
                  <p className="text-sm font-medium text-[#4a1d2f]">{booking.date}</p>
                  <span className="w-fit rounded-sm bg-[#f8edf2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#b82f68]">
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-md bg-[#231018] p-6 text-white shadow-xl shadow-[#231018]/15">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff8dbb]">Quick actions</p>
            <div className="mt-5 grid gap-3">
              {quickActions.map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="rounded-sm border border-white/12 bg-white/[0.06] px-4 py-3 text-sm font-bold text-white transition hover:border-[#ff8dbb] hover:bg-white/[0.1]"
                >
                  {action.label}
                </Link>
              ))}
            </div>

            <div className="mt-6 border-t border-white/12 pt-5">
              <p className="text-lg font-semibold">Telegram access rule</p>
              <p className="mt-3 text-sm leading-7 text-white/62">
                Only active subscribers should see the private Telegram invite after payment verification succeeds.
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Content</p>
            <h2 className="mt-1 text-2xl font-semibold">Publishing queue</h2>
            <div className="mt-5 space-y-4">
              {contentItems.map((item) => (
                <article key={item.title} className="rounded-sm border border-[#f0dbe3] p-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-semibold text-[#231018]">{item.title}</h3>
                    <span className="w-fit rounded-sm bg-[#f8edf2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#b82f68]">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#6d5360]">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Setup checklist</p>
            <h2 className="mt-1 text-2xl font-semibold">What to connect next</h2>
            <div className="mt-5 grid gap-3">
              {[
                "Choose auth provider for member accounts",
                "Connect payment checkout and webhook verification",
                "Store the Telegram invite URL server-side",
                "Protect premium content with subscription checks",
              ].map((item, index) => (
                <div key={item} className="flex gap-4 rounded-sm bg-[#fff8fb] p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#e85a8e] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-sm font-medium text-[#4a1d2f]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
