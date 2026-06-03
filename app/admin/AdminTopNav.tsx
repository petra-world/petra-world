import Link from "next/link";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard" },
  { label: "Content", href: "/admin/dashboard/content" },
  { label: "Bookings", href: "/admin/dashboard/booking" },
  { label: "Subscribers", href: "/admin/subscribers" },
];

export default function AdminTopNav() {
  return (
    <div className="sticky top-0 z-40 border-b border-[#ead0da] bg-[#fff8fb]/95 px-4 py-3 text-[#231018] shadow-sm backdrop-blur">
      <div className="mx-auto flex w-[min(1180px,100%)] flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/admin/dashboard" className="flex items-center gap-3" aria-label="Jentra admin dashboard">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[#231018] text-sm font-bold text-[#ff8dbb]">
            JA
          </span>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Jentra Admin</p>
            <p className="text-xs text-[#7a5f6b]">Creator workspace</p>
          </div>
        </Link>

        <nav className="flex gap-2 overflow-x-auto pb-1 lg:pb-0" aria-label="Admin navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-sm border border-[#e4c6d1] bg-white px-4 py-2 text-sm font-bold text-[#4a1d2f] transition hover:border-[#b82f68] hover:text-[#b82f68]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="hidden h-10 items-center justify-center rounded-sm bg-[#231018] px-5 text-sm font-bold text-white transition hover:bg-[#3a1827] lg:inline-flex"
        >
          View Site
        </Link>
      </div>
    </div>
  );
}
