"use client";

const PILLARS = [
  {
    num: "01",
    label: "Frameworks",
    desc: "Mental models that transfer across roles, industries, and tools. Not checklists — thinking systems.",
  },
  {
    num: "02",
    label: "Artifacts",
    desc: "Every course ships a fillable worksheet. Something you take into your next meeting.",
  },
  {
    num: "03",
    label: "No hype",
    desc: "Built for practitioners. The fear, the confusion, and the actual decisions — not the press release version.",
  },
];

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

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-[#6B7060] font-mono text-[10px]">——</span>
      <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#6B7060]">{label}</span>
      <div className="flex-1 h-px bg-[#141410]/15" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#E0E5CF] min-h-screen">

      {/* Nav */}
      <nav className="bg-[#141410] px-8 h-11 flex items-center justify-between">
        <a
          href="https://angshumanrudra.com"
          className="font-mono text-[10px] tracking-widest uppercase text-[#6B7060] hover:text-[#E0E5CF] transition-colors"
        >
          Angshuman Rudra
        </a>
        <a
          href="https://substack.com/@angshuman"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[10px] tracking-widest uppercase text-[#8FA855] hover:text-[#E0E5CF] transition-colors"
        >
          Subscribe →
        </a>
      </nav>

      {/* Hero */}
      <section className="px-8 pt-16 pb-14 border-b border-[#141410]/15">
        <p className="font-mono text-[10px] tracking-widest uppercase text-[#6B7060] mb-6">
          BY Angshuman Rudra
        </p>
        <h1
          className="text-[clamp(72px,12vw,180px)] leading-[0.9] font-black text-[#141410] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-inter)", fontWeight: 900 }}
        >
          Teaching<br />
          <span style={{ background: "#8FA855", padding: "0 8px" }}>AI.</span>
        </h1>
        <p className="text-[#3A3C30] text-lg max-w-xl leading-relaxed mt-4">
          <em>Practical frameworks for product managers, career professionals, and builders. Not hype.</em>
        </p>
      </section>

      {/* Pillars */}
      <section className="px-8 py-14 border-b border-[#141410]/15">
        <SectionLabel label="The Curriculum Has 3 Principles" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PILLARS.map((p) => (
            <div key={p.num} className="bg-[#EEF1E4] border border-[#141410]/10 p-6 flex flex-col gap-3">
              <span className="font-mono text-[10px] text-[#6B7060]">{p.num}</span>
              <h3 className="font-bold text-[#141410] text-xl tracking-tight">{p.label}</h3>
              <p className="text-[#3A3C30] text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Course table */}
      <section className="px-8 py-14">
        <SectionLabel label="The Courses" />
        <div className="bg-[#141410] overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-[40px_1fr_auto] gap-6 px-6 py-3 border-b border-white/10">
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#6B7060]">#</span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#6B7060]">Course</span>
            <span className="font-mono text-[9px] tracking-widest uppercase text-[#6B7060] hidden md:block">Audience</span>
          </div>
          {/* Rows */}
          {COURSES.map((course, i) => (
            <a
              key={course.num}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`grid grid-cols-[40px_1fr] md:grid-cols-[40px_1fr_200px] gap-6 px-6 py-7 group hover:bg-white/5 transition-colors ${i < COURSES.length - 1 ? "border-b border-white/10" : ""}`}
            >
              <span className="font-mono text-[10px] text-[#6B7060] pt-1">{course.num}</span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono text-[9px] tracking-widest uppercase text-[#6B7060]">{course.format}</span>
                  {course.live && (
                    <span
                      className="font-mono text-[9px] tracking-widest uppercase px-2 py-0.5"
                      style={{ background: "#8FA855", color: "#141410" }}
                    >
                      Live
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-[#E0E5CF] text-lg leading-snug group-hover:text-white transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#6B7060] text-sm leading-relaxed">{course.tagline}</p>
                <span className="font-mono text-[9px] tracking-widest uppercase text-[#8FA855] group-hover:text-white transition-colors md:hidden">
                  {course.cta}
                </span>
              </div>
              <div className="hidden md:flex flex-col justify-between">
                <p className="font-mono text-[10px] text-[#6B7060] leading-relaxed">{course.audience}</p>
                <span className="font-mono text-[9px] tracking-widest uppercase text-[#8FA855] group-hover:text-white transition-colors">
                  {course.cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 pb-16">
        <div className="bg-[#EEF1E4] border border-[#141410]/10 p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-[#6B7060] mb-2">Stay ahead</p>
            <p className="font-bold text-[#141410] text-xl">
              Get notified when new courses launch.
              <span
                className="inline-block ml-2 px-1"
                style={{ background: "#8FA855" }}
              >
                It&apos;s free.
              </span>
            </p>
          </div>
          <a
            href="https://substack.com/@angshuman"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#141410] text-[#E0E5CF] font-mono text-[10px] tracking-widest uppercase px-8 py-4 hover:bg-[#8FA855] hover:text-[#141410] transition-colors shrink-0"
          >
            Subscribe →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#141410] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-[9px] tracking-widest uppercase text-[#3A3C30]">Angshuman Rudra · MMXXVI</span>
        <div className="flex items-center gap-6">
          {[
            ["angshumanrudra.com", "https://angshumanrudra.com"],
            ["LinkedIn", "https://linkedin.com/in/angshuman"],
            ["Substack", "https://substack.com/@angshuman"],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="font-mono text-[9px] tracking-widest uppercase text-[#3A3C30] hover:text-[#8FA855] transition-colors">
              {label}
            </a>
          ))}
        </div>
      </footer>

    </main>
  );
}
