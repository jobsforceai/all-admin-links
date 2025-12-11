const ADMIN_LINKS = [
  {
    title: "Sagenex Collector",
    url: "https://collector.sgxmeta.ai",
    label: "Go to Sagenex Collector",
  },
  {
    title: "Sagenex Admin",
    url: "https://admin.sgxmeta.ai/",
    label: "Go to Sagenex Admin",
  },
  {
    title: "SGChain Admin",
    url: "https://sgchain-admin.vercel.app/",
    label: "Go to SGChain Admin",
  },
  {
    title: "SGTrading Admin",
    url: "https://sgtrading-admin.vercel.app",
    label: "Go to SGTrading Admin",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 font-sans dark:bg-zinc-900 p-4">
      <main className="w-full max-w-4xl rounded-xl bg-white p-8 shadow-xl dark:bg-zinc-800 md:p-12">
        <h1 className="mb-10 text-center text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 sm:text-5xl">
          Admin Links Hub
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {ADMIN_LINKS.map((link) => (
            <div
              key={link.title}
              className="group flex flex-col items-center justify-center rounded-lg border border-zinc-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-900"
            >
              <h2 className="mb-3 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                {link.title}
              </h2>
              <a
                href={link.url}
                target="_blank"
                className="text-lg font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700 hover:underline dark:text-blue-400 dark:hover:text-blue-300"
              >
                {link.label}
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
