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
    <main style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}>

      {/* Nav */}
      <nav style={{ background: "var(--ink)", padding: "0 40px", height: "48px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a
          href="https://angshumanrudra.com"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--warm-gray)", textDecoration: "none" }}
        >
          Angshuman Rudra
        </a>
        <a
          href="https://substack.com/@angshuman"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--amber)", textDecoration: "none" }}
        >
          Subscribe →
        </a>
      </nav>

      {/* Hero */}
      <section style={{ background: "var(--ink)", padding: "72px 40px 80px", textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-gray)", marginBottom: "28px" }}>
          By Angshuman Rudra
        </p>
        <h1 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: "800px", margin: "0 auto 24px" }}>
          Teaching AI to the people who need it most.
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 1.6vw, 19px)", color: "var(--warm-gray)", fontWeight: 400, maxWidth: "600px", margin: "0 auto 32px", lineHeight: 1.6 }}>
          Free courses for product managers, career professionals, and builders. Practical frameworks, not hype.
        </p>
        <p style={{ fontFamily: "'Caveat', cursive", fontSize: "clamp(20px, 2.2vw, 28px)", color: "var(--amber)", fontWeight: 600 }}>
          One curriculum live. Three more in progress.
        </p>
      </section>

      {/* Course cards */}
      <section style={{ background: "var(--cream)", padding: "72px 40px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>

          {/* Section label */}
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--warm-gray)", marginBottom: "40px" }}>
            The Courses
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {COURSES.map((course) => (
              <a
                key={course.num}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "flex-start", gap: "28px", background: "#FFFFFF", border: "1px solid var(--border)", borderRadius: "12px", padding: "28px 32px", boxShadow: "0 1px 3px rgba(28,25,23,0.08)", textDecoration: "none", transition: "box-shadow 200ms ease, transform 150ms ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 12px rgba(28,25,23,0.12)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 1px 3px rgba(28,25,23,0.08)"; (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)"; }}
              >
                {/* Number */}
                <span style={{ fontFamily: "'Caveat', cursive", fontSize: "28px", color: "var(--amber)", fontWeight: 700, lineHeight: 1, flexShrink: 0, marginTop: "2px" }}>
                  {course.num}
                </span>

                {/* Content */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--warm-gray)" }}>
                      {course.format}
                    </span>
                    {course.live && (
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", background: "var(--amber-light)", color: "var(--amber)", padding: "2px 8px", borderRadius: "4px" }}>
                        Live
                      </span>
                    )}
                  </div>
                  <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(16px, 1.6vw, 21px)", fontWeight: 600, color: "var(--ink)", marginBottom: "10px", lineHeight: 1.3, letterSpacing: "-0.01em" }}>
                    {course.title}
                  </h2>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(13px, 1.25vw, 15px)", color: "var(--warm-gray)", lineHeight: 1.6, marginBottom: "14px" }}>
                    {course.tagline}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8A29E" }}>
                    {course.audience}
                  </p>
                </div>

                {/* CTA */}
                <div style={{ flexShrink: 0, alignSelf: "center" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: "var(--amber)", whiteSpace: "nowrap" }}>
                    {course.cta}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section style={{ background: "var(--amber-light)", borderTop: "1px solid #F6D860", padding: "48px 40px", textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--amber)", marginBottom: "16px" }}>
          Stay ahead
        </p>
        <h2 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: "clamp(22px, 2.8vw, 34px)", fontWeight: 600, color: "var(--ink)", marginBottom: "24px", letterSpacing: "-0.02em" }}>
          Get notified when new courses launch.
        </h2>
        <a
          href="https://substack.com/@angshuman"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-block", background: "var(--amber)", color: "#FFFFFF", fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 600, padding: "14px 40px", borderRadius: "8px", textDecoration: "none", letterSpacing: "-0.01em" }}
        >
          Subscribe — it&apos;s free →
        </a>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--ink)", padding: "20px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#57534E", letterSpacing: "0.04em" }}>
          Angshuman Rudra · MMXXVI
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {[
            ["angshumanrudra.com", "https://angshumanrudra.com"],
            ["LinkedIn", "https://linkedin.com/in/angshuman"],
            ["Substack", "https://substack.com/@angshuman"],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#57534E", textDecoration: "none", letterSpacing: "0.04em" }}>
              {label}
            </a>
          ))}
        </div>
      </footer>

    </main>
  );
}
