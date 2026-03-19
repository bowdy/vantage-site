"use client";

import { useState } from "react";

/* ───────────────────────── Header ───────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-charcoal/90 backdrop-blur-md border-b border-dark-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <span className="font-serif text-2xl tracking-widest text-offwhite">
          VANTAGE
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#features" className="hover:text-offwhite transition">
            Platform
          </a>
          <a href="#how-it-works" className="hover:text-offwhite transition">
            Intelligence
          </a>
          <a href="#capabilities" className="hover:text-offwhite transition">
            Integrations
          </a>
          <a href="#pricing" className="hover:text-offwhite transition">
            Pricing
          </a>
        </nav>
        <a
          href="#cta"
          className="bg-gold text-charcoal text-sm font-semibold px-5 py-2.5 hover:bg-gold/90 transition"
        >
          Request Access
        </a>
      </div>
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-charcoal/70" />
      <div className="relative z-10 max-w-3xl mx-auto px-8 py-24">
        <span className="inline-block text-xs tracking-[0.3em] uppercase text-gold border border-gold/40 px-4 py-1.5 mb-8">
          AI-Powered Market Intelligence
        </span>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-offwhite leading-tight mb-6">
          See Healthcare Real Estate Opportunities Before Anyone Else
        </h1>
        <p className="text-muted text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Vantage monitors thousands of signals across the UK healthcare sector
          to surface development opportunities months before formal planning
          consent.
        </p>
        <div className="flex items-center justify-center gap-4 mb-16">
          <a
            href="#cta"
            className="bg-gold text-charcoal font-semibold px-8 py-3.5 text-sm hover:bg-gold/90 transition"
          >
            Request a Demo
          </a>
          <a
            href="#how-it-works"
            className="border border-offwhite/30 text-offwhite px-8 py-3.5 text-sm hover:border-offwhite/60 transition"
          >
            See How It Works
          </a>
        </div>
        <div>
          <p className="text-xs text-muted mb-4 tracking-wide uppercase">
            Trusted by leading healthcare operators
          </p>
          <div className="flex items-center justify-center gap-8 text-muted/60 text-sm tracking-widest uppercase">
            <span>NHS</span>
            <span>Spire</span>
            <span>Nuffield</span>
            <span>Ramsay</span>
            <span>Bupa</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Problem / Solution ────────────────── */
function ProblemSolution() {
  return (
    <section className="bg-offwhite text-charcoal py-24">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 lg:gap-24">
        {/* Problem */}
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
            The Problem
          </span>
          <h2 className="font-serif text-4xl mt-4 mb-6 leading-snug">
            Traditional intelligence tools are already too late.
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-8">
            Platforms like Glenigan only capture demand after planning consent
            has been registered. By then, your competitors are already at the
            table — and the best opportunities have been spoken for.
          </p>
          <blockquote className="border-l-2 border-gold pl-6 italic text-charcoal/60 text-sm">
            &ldquo;The window between early intent and formal planning is where
            real value is created. If you&apos;re waiting for consent to appear,
            you&apos;re already too late.&rdquo;
            <br />
            <span className="not-italic mt-2 block">
              — Director, UK Healthcare REIT
            </span>
          </blockquote>
        </div>
        {/* Solution */}
        <div>
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
            The Solution
          </span>
          <h2 className="font-serif text-4xl mt-4 mb-6 leading-snug">
            Detect demand signals months before formal planning consent.
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-8">
            Vantage uses AI to monitor NHS estate strategies, corporate hiring
            surges, expansion announcements, and strategic partnerships —
            identifying opportunities with a real estate consequence before
            anyone else.
          </p>
          <ul className="space-y-4">
            {[
              "Monitors NHS ICB estate strategies and public-sector announcements in real time",
              "Tracks private operator news, financial reports, and corporate activity signals",
              "Filters for £5M–£40M privately funded schemes — your exact target market",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-gold mt-1">✓</span>
                <span className="text-charcoal/80 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── How It Works ───────────────────── */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Monitor",
      desc: "AI continuously scans NHS ICB estate strategies, corporate news, press releases, hiring data, and financial reports across the UK healthcare sector.",
      icon: "📡",
    },
    {
      num: "02",
      title: "Score",
      desc: "Every signal is ranked by viability using proprietary scoring. Your analysts validate only the most promising 20–30%, ensuring focused effort on credible leads.",
      icon: "📊",
    },
    {
      num: "03",
      title: "Act",
      desc: "Validated opportunities flow directly into your daily dashboard, scheduled emails, and HubSpot CRM — to your team's deal pipeline before anyone else.",
      icon: "⚡",
    },
  ];

  return (
    <section id="how-it-works" className="bg-charcoal py-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-gold">
          How It Works
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-offwhite mt-4 mb-4">
          From Signal to Opportunity in Three Steps
        </h2>
        <p className="text-muted max-w-2xl mx-auto mb-16">
          Vantage continuously scans the healthcare landscape, scores what it
          finds, and delivers actionable intelligence directly to your team.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="border border-dark-border p-8 text-left"
            >
              <span className="text-gold font-serif text-3xl">{step.num}</span>
              <h3 className="font-serif text-2xl text-offwhite mt-4 mb-4">
                {step.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
              <div className="mt-6 text-gold text-xl">{step.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Core Features ───────────────────── */
function CoreFeatures() {
  const features = [
    {
      label: "Early Signal Detection",
      title: "Identify Demand Signals with a Real Estate Consequence",
      desc: "From a private operator hiring 500 new staff to an NHS Trust publishing a new estate strategy — Vantage intercepts the signals that precede real estate demand and surfaces them before formal processes begin.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      label: "Intelligent Scoring",
      title: "AI Scores Every Signal. Your Team Validates the Best.",
      desc: "Not every signal leads to a scheme. Vantage's scoring engine rates each opportunity by viability, so your analysts focus only on the most promising 20–30% — the ones most likely to result in formal planning consent.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      label: "Seamless Workflow",
      title: "From Intelligence to Action, Without Friction",
      desc: "Daily dashboards, scheduled email briefings, and native HubSpot CRM integration ensure validated leads flow directly into your sales pipeline. No copy-pasting, no context switching — just confident execution.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    },
  ];

  return (
    <section id="features" className="bg-offwhite text-charcoal py-24">
      <div className="max-w-7xl mx-auto px-8 space-y-24">
        {features.map((f, i) => (
          <div
            key={f.label}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "md:direction-rtl" : ""
            }`}
            style={i % 2 === 1 ? { direction: "rtl" } : {}}
          >
            <div style={{ direction: "ltr" }}>
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
                {f.label}
              </span>
              <h3 className="font-serif text-3xl mt-4 mb-4 leading-snug">
                {f.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">{f.desc}</p>
            </div>
            <div
              className="aspect-video bg-cover bg-center border border-charcoal/10"
              style={{
                backgroundImage: `url('${f.image}')`,
                direction: "ltr",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ────────────────── Secondary Features Grid ─────────────── */
function Capabilities() {
  const items = [
    {
      icon: "🏥",
      title: "NHS ICB Monitoring",
      desc: "Automated scanning of Integrated Care Board estate strategies and public-sector announcements and community reports.",
    },
    {
      icon: "🏢",
      title: "Private Sector Tracking",
      desc: "Monitor corporate news, financial reports, and strategies across top operators like Spire, Nuffield, and Ramsay.",
    },
    {
      icon: "📈",
      title: "Corporate Activity Analysis",
      desc: "Track hiring surges, expansion announcements, and strategic partnerships that signal future real estate requirements.",
    },
    {
      icon: "💷",
      title: "£5M–£40M Deal Filtering",
      desc: "Automatically isolate mid-sized privately funded schemes in your target range, filtering out large self-funded public-sector projects.",
    },
    {
      icon: "🏦",
      title: "Funding Model Intelligence",
      desc: "Identify projects requiring private-sector funding — pension fund capital, lease-back schemes, and investor-backed builds.",
    },
    {
      icon: "🌍",
      title: "European Expansion Ready",
      desc: "Built on UK success, deploy first, with architecture designed for continental expansion across European healthcare markets.",
    },
  ];

  return (
    <section id="capabilities" className="bg-charcoal py-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-gold">
          Capabilities
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-offwhite mt-4 mb-16">
          Purpose-Built for Healthcare Real Estate
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-dark-border p-8 text-left"
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h4 className="font-serif text-xl text-offwhite mb-3">
                {item.title}
              </h4>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Social Proof / Stats ────────────────── */
function SocialProof() {
  const stats = [
    { value: "2,400+", label: "Signals Analysed Monthly" },
    { value: "6 Months", label: "Average Head Start on Competitors" },
    { value: "30%", label: "Signal-to-Deal Conversion Rate" },
  ];

  return (
    <section className="bg-charcoal border-y border-dark-border py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-5xl text-gold mb-2">
                {s.value}
              </div>
              <div className="text-muted text-sm">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto text-center border border-dark-border p-12">
          <div className="text-gold text-4xl font-serif mb-6">&ldquo;</div>
          <p className="text-offwhite/90 text-lg italic leading-relaxed mb-6">
            Vantage identified three development opportunities in the Midlands
            that we would have missed entirely. Two of those are now in our
            active pipeline — worth a combined £14 million.
          </p>
          <div>
            <p className="text-offwhite font-semibold">James Harrington</p>
            <p className="text-muted text-sm">
              Head of Acquisitions, Cobham Healthcare
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Pricing ───────────────────── */
function Pricing() {
  const tiers = [
    {
      name: "Analyst",
      price: "£1,200",
      period: "/month",
      desc: "Single-seat access for individual investors monitoring a specific region or sector.",
      features: [
        "Daily signal briefings",
        "Email digests",
        "NHS + private sector monitoring",
        "Signal scoring",
        "HubSpot integration",
      ],
      cta: "Request Access",
      featured: false,
    },
    {
      name: "Professional",
      price: "£3,500",
      period: "/month",
      desc: "Up to 5 seats. Built for acquisitions and teams tracking multiple regions and operators.",
      features: [
        "Everything in Analyst",
        "HubSpot CRM integration",
        "Headcount and hiring validation tools",
        "Priority signal alerts",
        "Team collaboration features",
      ],
      cta: "Request Access",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      desc: "Unlimited seats. For firms requiring bespoke data access, custom scoring models, and dedicated support.",
      features: [
        "Everything in Professional",
        "Custom data source integration",
        "Bespoke scoring models",
        "European market coverage",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="bg-offwhite text-charcoal py-24">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
          Pricing
        </span>
        <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-4">
          Intelligence That Pays for Itself
        </h2>
        <p className="text-charcoal/60 mb-16">
          One deal discovered early covers the annual cost many times over.
        </p>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 text-left ${
                tier.featured
                  ? "bg-charcoal text-offwhite border-2 border-gold"
                  : "bg-white border border-charcoal/10"
              }`}
            >
              {tier.featured && (
                <span className="text-[10px] tracking-[0.3em] uppercase bg-gold/20 text-gold px-3 py-1 mb-4 inline-block">
                  Most Popular
                </span>
              )}
              <h3 className="font-serif text-2xl mb-2">{tier.name}</h3>
              <div className="mb-4">
                <span className="font-serif text-4xl">{tier.price}</span>
                <span
                  className={`text-sm ${
                    tier.featured ? "text-muted" : "text-charcoal/50"
                  }`}
                >
                  {tier.period}
                </span>
              </div>
              <p
                className={`text-sm mb-6 leading-relaxed ${
                  tier.featured ? "text-muted" : "text-charcoal/60"
                }`}
              >
                {tier.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="text-gold mt-0.5">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`block text-center text-sm font-semibold py-3 transition ${
                  tier.featured
                    ? "bg-gold text-charcoal hover:bg-gold/90"
                    : "border border-charcoal text-charcoal hover:bg-charcoal hover:text-offwhite"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── FAQ ───────────────────── */
function FAQ() {
  const faqs = [
    {
      q: "Where does Vantage source its data?",
      a: "We monitor a wide range of sources: Care Board estate strategies, corporate press releases, financial reports, hiring platforms, and strategic partnership announcements across the UK healthcare sector. All sources are verified and rated monthly.",
    },
    {
      q: "How accurate is the signal scoring?",
      a: "Our AI scoring model identifies that approximately 20–30% of early signals convert to formal planning consent. The human-in-the-loop validation layer allows your team to further refine accuracy based on operator-specific criteria.",
    },
    {
      q: "Does Vantage integrate with our existing CRM?",
      a: "Yes. Vantage offers native HubSpot integration, allowing validated leads to be pushed directly into your sales pipeline. Custom CRM integrations are available on Enterprise plans.",
    },
    {
      q: "What geographic does Vantage cover?",
      a: "Vantage currently provides comprehensive coverage across the UK healthcare real estate market, including all NHS regions and major private operators. European expansion is on our roadmap and available as a custom addition on Enterprise plans.",
    },
    {
      q: "How is this different from Glenigan or EGi?",
      a: "Traditional platforms capture projects after planning consent is registered. Vantage monitors early structural signals — hiring surges, corporate announcements, estate strategies — giving you a 6-month head start on opportunities before they enter formal planning.",
    },
  ];

  return (
    <section className="bg-offwhite text-charcoal py-24">
      <div className="max-w-3xl mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-semibold">
            FAQ
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="divide-y divide-charcoal/10">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between text-left"
      >
        <span className="font-serif text-xl">{q}</span>
        <span
          className={`faq-chevron text-gold text-lg ml-4 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>
      {open && (
        <p className="mt-4 text-charcoal/70 text-sm leading-relaxed">{a}</p>
      )}
    </div>
  );
}

/* ───────────────────── Final CTA ───────────────────── */
function FinalCTA() {
  return (
    <section id="cta" className="bg-charcoal py-24 text-center">
      <div className="max-w-3xl mx-auto px-8">
        <div className="w-12 h-0.5 bg-gold mx-auto mb-8" />
        <h2 className="font-serif text-4xl md:text-5xl text-offwhite mb-6">
          Get Ahead of the Market
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-10">
          Join the firms discovering healthcare real estate opportunities before
          anyone else.
        </p>
        <a
          href="#"
          className="inline-block bg-gold text-charcoal font-semibold px-10 py-4 text-sm hover:bg-gold/90 transition"
        >
          Request a Demo
        </a>
        <p className="text-muted/50 text-xs mt-6">
          No commitment required. Dedicated onboarding within 24 hours.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────── Footer ───────────────────── */
function Footer() {
  const columns = [
    {
      title: "Product",
      links: ["Platform", "Intelligence", "Integrations", "Pricing"],
    },
    { title: "Company", links: ["About", "Careers", "Contact"] },
    { title: "Resources", links: ["Documentation", "API Reference", "Blog"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Security"] },
  ];

  return (
    <footer className="bg-charcoal border-t border-dark-border py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-6 gap-12 mb-12">
          <div className="md:col-span-2">
            <span className="font-serif text-xl tracking-widest text-offwhite">
              VANTAGE
            </span>
            <p className="text-muted text-sm mt-4 leading-relaxed">
              AI-powered market intelligence for healthcare real estate.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-offwhite text-sm font-semibold mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted text-sm hover:text-offwhite transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-dark-border text-muted text-xs">
          <p>© 2025 Vantage Intelligence Ltd. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">London · Cambridge · Edinburgh</p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────── Page ───────────────────── */
export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <CoreFeatures />
      <Capabilities />
      <SocialProof />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
