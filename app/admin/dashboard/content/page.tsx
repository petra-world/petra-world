import Link from "next/link";
import AdminTopNav from "../../AdminTopNav";

const contentStats = [
  { label: "Published", value: "28" },
  { label: "Drafts", value: "9" },
  { label: "Scheduled", value: "5" },
  { label: "Subscriber-only", value: "36" },
];

const contentList = [
  {
    title: "Weekend private gallery",
    type: "Photos",
    visibility: "Subscribers",
    status: "Draft",
    updated: "Today",
  },
  {
    title: "After-hours video drop",
    type: "Video",
    visibility: "Subscribers",
    status: "Scheduled",
    updated: "Jun 6",
  },
  {
    title: "Petra welcome note",
    type: "Update",
    visibility: "Free preview",
    status: "Published",
    updated: "Jun 2",
  },
  {
    title: "Telegram access reminder",
    type: "Update",
    visibility: "Subscribers",
    status: "Needs backend",
    updated: "Pending",
  },
];

const checklist = [
  "Add title, category, and short description",
  "Upload media to protected storage",
  "Choose free preview or subscriber-only visibility",
  "Publish now or schedule for later",
];

const inputClass =
  "mt-2 h-11 w-full rounded-sm border border-[#e4c6d1] bg-white px-4 text-sm text-[#231018] outline-none transition placeholder:text-[#a28793] focus:border-[#e85a8e] focus:ring-2 focus:ring-[#e85a8e]/15";

export default function AdminContentPage() {
  return (
    <main className="min-h-screen bg-[#f7edf1] text-[#231018]">
      <AdminTopNav />
      <div className="mx-auto w-[min(1180px,100%)] px-4 py-8 sm:py-10">
        <header className="flex flex-col gap-5 border-b border-[#e5cbd5] pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#b82f68]">Admin content</p>
            <h1 className="mt-2 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Manage premium posts
            </h1>
            <p className="mt-3 max-w-2xl leading-7 text-[#6d5360]">
              Prepare photos, videos, updates, and subscriber-only drops before the backend media workflow is connected.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/content"
              className="inline-flex h-11 items-center justify-center rounded-sm bg-[#231018] px-5 text-sm font-bold text-white transition hover:bg-[#3a1827]"
            >
              View Content
            </Link>
          </div>
        </header>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contentStats.map((stat) => (
            <article key={stat.label} className="rounded-md border border-[#ead0da] bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-[#7a5f6b]">{stat.label}</p>
              <p className="mt-3 text-4xl font-semibold text-[#231018]">{stat.value}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <form className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">New content</p>
            <h2 className="mt-1 text-2xl font-semibold">Create a draft</h2>
            <p className="mt-3 text-sm leading-7 text-[#6d5360]">
              This form is visual-only for now. Later it will upload media, save metadata, and set visibility.
            </p>

            <div className="mt-6 grid gap-5">
              <label className="text-sm font-bold text-[#4a1d2f]">
                Title
                <input className={inputClass} type="text" placeholder="Content title" />
              </label>

              <label className="text-sm font-bold text-[#4a1d2f]">
                Category
                <select className={inputClass} defaultValue="">
                  <option value="" disabled>
                    Select category
                  </option>
                  <option>Photos</option>
                  <option>Videos</option>
                  <option>Private updates</option>
                  <option>Telegram note</option>
                </select>
              </label>

              <label className="text-sm font-bold text-[#4a1d2f]">
                Visibility
                <select className={inputClass} defaultValue="Subscribers">
                  <option>Subscribers</option>
                  <option>Free preview</option>
                  <option>Draft only</option>
                </select>
              </label>

              <label className="text-sm font-bold text-[#4a1d2f]">
                Description
                <textarea
                  className="mt-2 min-h-28 w-full rounded-sm border border-[#e4c6d1] bg-white px-4 py-3 text-sm text-[#231018] outline-none transition placeholder:text-[#a28793] focus:border-[#e85a8e] focus:ring-2 focus:ring-[#e85a8e]/15"
                  placeholder="Short description for the content card"
                />
              </label>

              <div className="rounded-md border border-dashed border-[#d8b4c3] bg-[#fff8fb] p-5 text-center">
                <p className="font-semibold text-[#4a1d2f]">Upload media</p>
                <p className="mt-2 text-sm leading-6 text-[#7a5f6b]">
                  Add photos or videos here after storage is connected.
                </p>
              </div>

              <button
                type="button"
                className="inline-flex h-12 items-center justify-center rounded-sm bg-[#231018] px-6 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#3a1827]"
              >
                Save Draft
              </button>
            </div>
          </form>

          <div className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Library</p>
                <h2 className="mt-1 text-2xl font-semibold">Content queue</h2>
              </div>
              <span className="w-fit rounded-sm bg-[#f8edf2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#b82f68]">
                Static preview
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-md border border-[#f0dbe3]">
              {contentList.map((item) => (
                <article key={item.title} className="border-b border-[#f0dbe3] p-4 last:border-b-0">
                  <div className="grid gap-3 lg:grid-cols-[1.1fr_auto_auto_auto] lg:items-center">
                    <div>
                      <h3 className="font-semibold text-[#231018]">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#6d5360]">{item.type}</p>
                    </div>
                    <span className="w-fit rounded-sm bg-[#fff8fb] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#6d213e]">
                      {item.visibility}
                    </span>
                    <span className="w-fit rounded-sm bg-[#f8edf2] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#b82f68]">
                      {item.status}
                    </span>
                    <p className="text-sm font-medium text-[#7a5f6b]">{item.updated}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-md bg-[#231018] p-6 text-white shadow-xl shadow-[#231018]/15">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ff8dbb]">Publishing rules</p>
            <h2 className="mt-2 text-2xl font-semibold">Protect subscriber-only media</h2>
            <p className="mt-4 leading-7 text-white/62">
              Premium media should eventually be stored behind protected access. The public `/content` page can show previews, but full media should require an active subscription check.
            </p>
          </div>

          <div className="rounded-md border border-[#ead0da] bg-white p-6 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b82f68]">Checklist</p>
            <div className="mt-5 grid gap-3">
              {checklist.map((item, index) => (
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
