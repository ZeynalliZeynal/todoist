import { Sparkles } from 'vercel-geist-icons';

export default async function ClientChangelogsPage() {
  // const [changelog, tags] = await Promise.all([
  //   getClientChangelog(),
  //   axios('https://api.github.com/repos/ZeynalliZeynal/todoist/tags'),
  // ]);

  // const latestVersion = tags.data.at(0)?.name;

  return (
    <>
      <section className="py-8">
        <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-background-200 to-gray-100 p-8 shadow-lg">
          <div className="absolute inset-0 opacity-20">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-fultext-foreground"
              />
            ))}
          </div>

          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-purple-300 to-blue-500 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-blue-100 to-blue-500 blur-3xl" />

          <div className="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4">
              <div className="flex items-center text-blue-900 gap-2">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium">What&#39;s New</span>
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Changelog
              </h1>
              <p className="max-w-md text-gray-900">
                Stay up to date with the latest features, improvements, and
                fixes to our platform.
              </p>
            </div>
          </div>

          <div className="absolute top-8 right-8">
            <div className="px-3 py-1 text-xs font-medium bg-gray-100/25 rounded-full text-foreground backdrop-blur-sm">
              Latest: 1.0.0
            </div>
          </div>
        </div>
      </section>
      <article>Changelogs will be shown here.</article>
    </>
  );
}
