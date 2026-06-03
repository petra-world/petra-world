import Link from "next/link";
import AdminTopNav from "../../AdminTopNav";

const bookingStats = [
  { label: "New requests", value: "4" },
  { label: "Under review", value: "7" },
  { label: "Contacted", value: "12" },
  { label: "Confirmed", value: "3" },
];

const requests = [
  {
    name: "Andre P.",
    type: "Personal visitation",
    location: "Miami, FL",
    date: "Jun 15",
    budget: "$1,000 - $2,500",
    status: "New",
    contact: "andre@example.com",
  },
  {
    name: "Maya K.",
    type: "Travel booking",
    location: "Atlanta, GA",
    date: "Jun 12",
    budget: "$2,500 - $5,000",
    status: "Review",
    contact: "maya@example.com",
  },
  {
    name: "Tessa R.",
    type: "Private appearance",
    location: "Houston, TX",
    date: "Jun 18",
    budget: "$5,000+",
    status: "Contacted",
    contact: "tessa@example.com",
  },
  {
    name: "Chris L.",
    type: "Custom request",
    location: "Los Angeles, CA",
    date: "Jun 22",
    budget: "Discuss privately",
    status: "Review",
    contact: "chris@example.com",
  },
];

const reviewNotes = [
  "Confirm requester is 18+ before continuing",
  "Check location, travel expectations, and safety requirements",
  "Reply privately before changing status to confirmed",
];

export default function AdminBookingPage() {
  return (
    <main className="min-h-screen bg-[#f7edf1] text-[#231018]">
      <AdminTopNav />
      <div className="mx-auto w-[min(1180px,100%)] px-4 py-8 sm:py-10">
        <header className="flex flex-col gap-5 border-b border-[#e5cbd5] pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b82f68]">Admin bookings</p>
            <h1 className="mt-2 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Review booking requests
            </h1>
            <p className="mt-3 max-w-2xl leading-7 text-[#6d5360]">
              Track visitation, travel, private appearance, and custom booking requests before sending a private response.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="inline-flex h-11 items-center justify-center rounded-sm bg-[#231018] px-5 text-sm font-bold text-white transition hover:bg-[#3a1827]"
            >
              Public Form
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bookingStats.map((stat) => (
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
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Queue</p>
                <h2 className="mt-1 text-2xl font-semibold">Incoming requests</h2>
              </div>
              <span className="w-fit rounded-sm bg-[#f8edf2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#b82f68]">
                Static preview
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-md border border-[#f0dbe3]">
              {requests.map((request) => (
                <article key={`${request.name}-${request.date}`} className="border-b border-[#f0dbe3] p-4 last:border-b-0">
                  <div className="grid gap-4 xl:grid-cols-[1fr_1fr_auto] xl:items-center">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-semibold text-[#231018]">{request.name}</h3>
                        <span className="w-fit rounded-sm bg-[#f8edf2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#b82f68]">
                          {request.status}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-[#6d5360]">{request.type}</p>
                      <p className="mt-1 text-sm text-[#6d5360]">{request.contact}</p>
                    </div>

                    <div className="grid gap-2 text-sm text-[#4a1d2f] sm:grid-cols-3 xl:grid-cols-1">
                      <p>{request.location}</p>
                      <p>{request.date}</p>
                      <p>{request.budget}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button className="h-10 rounded-sm border border-[#d8b4c3] px-4 text-sm font-bold text-[#4a1d2f] transition hover:border-[#b82f68]" type="button">
                        Review
                      </button>
                      <button className="h-10 rounded-sm bg-[#231018] px-4 text-sm font-bold text-white transition hover:bg-[#3a1827]" type="button">
                        Contact
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-md bg-[#231018] p-6 text-white shadow-xl shadow-[#231018]/15">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff8dbb]">Review notes</p>
              <div className="mt-5 grid gap-3">
                {reviewNotes.map((note, index) => (
                  <div key={note} className="flex gap-4 rounded-sm border border-white/12 bg-white/[0.06] p-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-[#e85a8e] text-sm font-bold">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-6 text-white/70">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Status flow</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["New", "Review", "Contacted", "Confirmed", "Declined"].map((status) => (
                  <span key={status} className="rounded-sm bg-[#fff8fb] px-3 py-2 text-sm font-bold text-[#6d213e]">
                    {status}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-[#6d5360]">
                These statuses can later be saved to the database when the booking API is connected.
              </p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
