"use client";

const COURSES = [
  {
    num: "01",
    format: "FREE · 75 MIN",
    title: "AI Systems Thinking for Product Managers",
    tagline: "For PMs who keep getting blamed for AI failures they didn't cause.",
    audience: "Senior PMs building AI products",
    live: true,
    url: "https://maven.com/p/82c066/ai-systems-thinking-for-product-managers",
    cta: "Register on Maven →",
  },
  {
    num: "02",
    format: "FREE · 75 MIN",
    title: "AI Won't Take Your Job. Here's What Will.",
    tagline: "The fear is real. The diagnosis is wrong. Here's what's actually happening.",
    audience: "Mid-career professionals, any industry",
    live: false,
    url: "https://substack.com/@angshuman",
    cta: "Notify me →",
  },
  {
    num: "03",
    format: "FREE · 25 MIN",
    title: "The Context Moat: Your Real Competitive Advantage in AI",
    tagline: "Everyone's using the same models. The winner isn't who has the best AI. It's who has the best context.",
    audience: "Senior PMs, heads of product, CTOs",
    live: false,
    url: "https://substack.com/@angshuman",
    cta: "Notify me →",
  },
  {
    num: "04",
    format: "FREE · 90 MIN",
    title: "Build Agent Teams for Real Business Workflows",
    tagline: "Stop using AI tools one at a time. Here's how to build systems that do the work while you sleep.",
    audience: "Senior PMs, builders, founders",
    live: false,
    url: "https://substack.com/@angshuman",
    cta: "Notify me →",
  },
];

export default function Home() {
  return (
    <main>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F0EBE0]/95 backdrop-blur-sm border-b border-[#E8E2D5]">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <a
            href="https://angshumanrudra.com"
            className="font-mono text-[9px] tracking-widest uppercase text-[#9A9490] hover:text-[#B8933A] transition-colors"
          >
            Angshuman Rudra
          </a>
          <a
            href="https://substack.com/@angshuman"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] tracking-widest uppercase text-[#F0EBE0] bg-[#1A1714] px-4 py-2 hover:bg-[#B8933A] transition-colors"
          >
            Subscribe
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-[#F0EBE0]">
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-[9px] tracking-widest uppercase text-[#B8933A] mb-4">
            Angshuman Rudra · How I teach
          </p>
          <h1
            className="text-[clamp(64px,11vw,160px)] leading-none text-[#1A1714]"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 300 }}
          >
            Teaching.
          </h1>
          <p
            className="mt-6 text-[#4A4540] max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.25rem" }}
          >
            Free courses on AI for product managers, career professionals, and builders.
            Practical frameworks, not hype. One complete curriculum exists — three more are in progress.
          </p>
        </div>
      </section>

      {/* Course list */}
      <section className="bg-[#F0EBE0] px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="divide-y divide-[#E8E2D5] border-t border-[#E8E2D5]">
            {COURSES.map((course) => (
              <a
                key={course.num}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-8 py-10 group hover:bg-[#E8E2D5] transition-colors -mx-6 px-6"
              >
                <div className="shrink-0 w-10 pt-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#9A9490]">{course.num}</span>
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <p className="font-mono text-[9px] tracking-widest uppercase text-[#B8933A]">{course.format}</p>
                    {course.live && (
                      <span className="font-mono text-[8px] tracking-widest uppercase text-[#B8933A] border border-[#B8933A]/40 px-1.5 py-0.5">
                        Live
                      </span>
                    )}
                  </div>
                  <h2
                    className="leading-tight text-[#1A1714] group-hover:text-[#B8933A] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)", fontWeight: 400, fontSize: "clamp(22px, 2.8vw, 40px)" }}
                  >
                    {course.title}
                  </h2>
                  <p
                    className="text-[#4A4540] leading-relaxed max-w-2xl"
                    style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.1rem" }}
                  >
                    {course.tagline}
                  </p>
                  <p className="font-mono text-[9px] tracking-widest uppercase text-[#9A9490]">{course.audience}</p>
                </div>
                <div className="hidden md:flex items-center shrink-0 self-center">
                  <span className="font-mono text-[9px] tracking-widest uppercase text-[#B8933A] group-hover:text-[#1A1714] transition-colors whitespace-nowrap">
                    {course.cta}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 bg-[#0F0D0B] border-t border-[#1A1714]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-mono text-[8px] tracking-widest uppercase text-[#4A4540]">Angshuman Rudra · MMXXVI</span>
          <div className="flex items-center gap-6">
            {[
              ["angshumanrudra.com", "https://angshumanrudra.com"],
              ["LinkedIn", "https://linkedin.com/in/angshuman"],
              ["Substack", "https://substack.com/@angshuman"],
            ].map(([label, href]) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[8px] tracking-widest uppercase text-[#4A4540] hover:text-[#B8933A] transition-colors">
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </main>
  );
}
