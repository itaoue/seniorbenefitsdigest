/**
 * Senior Benefits Digest — Home Page
 * Design: Authoritative Editorial / Financial Broadsheet
 * Colors: Deep Navy #1B2E5A | Amber Gold #D4A017 | Orange CTA #D4521A | Cream #F8F4E8
 * Typography: Playfair Display (headings) + Source Sans 3 (body)
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

// ─── Subscribe API helper ─────────────────────────────────────────────────────
function subscribeToApi(email: string, source: string, firstName?: string) {
  const params = new URLSearchParams(window.location.search);
  fetch("/api/subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      first_name: firstName || null,
      source,
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
    }),
  }).catch((err) => console.error("subscribe failed:", err));
}

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Counter Animation Hook ───────────────────────────────────────────────────
function useCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

// ─── Stats Section ─────────────────────────────────────────────────────────────
function StatsSection() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const savings = useCounter(22000, 2200, started);
  const subscribers = useCounter(85000, 2000, started);
  const states = useCounter(50, 1800, started);
  const categories = useCounter(6, 1500, started);

  return (
    <div ref={ref} className="bg-navy py-14">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: `$${savings >= 1000 ? Math.floor(savings / 1000) + "K" : savings}+`, label: "Avg. Annual Benefits Unclaimed Per Senior", icon: "💰" },
            { value: `${subscribers >= 1000 ? Math.floor(subscribers / 1000) + "K" : subscribers}+`, label: "Seniors Receiving Our Free Digest", icon: "📬" },
            { value: states.toString(), label: "States with Available Programs", icon: "🇺🇸" },
            { value: categories.toString(), label: "Financial Topic Categories", icon: "📊" },
          ].map((stat, i) => (
            <div key={i} className="stat-card text-white">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="font-display text-3xl md:text-4xl font-bold text-amber mb-1" style={{ color: "#D4A017" }}>
                {stat.value}
              </div>
              <div className="font-body text-sm text-blue-200 leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Benefits Quiz ─────────────────────────────────────────────────────────────
function BenefitsQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      q: "What is your age range?",
      options: ["55–59 years old", "60–64 years old", "65–69 years old", "70 or older"],
    },
    {
      q: "Are you currently enrolled in Medicare?",
      options: ["Yes, Part A & B", "Yes, Medicare Advantage", "No, not yet eligible", "Not sure"],
    },
    {
      q: "Which area interests you most?",
      options: ["Retirement Income", "Medicare & Health Savings", "Social Security Optimization", "Tax Reduction Strategies"],
    },
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length);
    }
  };

  const reset = () => { setStep(0); setAnswers([]); };

  return (
    <div className="bg-cream py-20">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-10 reveal">
          <div className="amber-rule justify-center"><span>Quick Benefits Check</span></div>
          <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-3">
            What Benefits Do You Qualify For?
          </h2>
          <p className="font-body text-gray-600 text-lg">
            Answer 3 quick questions to get your personalized benefits overview.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 reveal">
          {step < questions.length ? (
            <>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  {questions.map((_, i) => (
                    <div
                      key={i}
                      className="h-1.5 rounded-full transition-all duration-500"
                      style={{
                        width: i <= step ? "3rem" : "1.5rem",
                        background: i <= step ? "#1B2E5A" : "#E5E7EB",
                      }}
                    />
                  ))}
                </div>
                <span className="font-body text-sm text-gray-500">{step + 1}/{questions.length}</span>
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-5">{questions[step].q}</h3>
              <div className="space-y-3">
                {questions[step].options.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleAnswer(opt)}
                    className="w-full text-left px-5 py-4 rounded-lg border-2 border-gray-200 font-body font-semibold text-gray-700 hover:border-navy hover:bg-blue-50 transition-all duration-200 flex items-center justify-between group"
                    style={{ "--tw-border-opacity": "1" } as React.CSSProperties}
                  >
                    {opt}
                    <span className="text-gray-400 group-hover:text-navy transition-colors">→</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-4">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display text-2xl font-bold text-navy mb-3">
                Great News! You Likely Qualify for Multiple Benefits
              </h3>
              <p className="font-body text-gray-600 mb-6 text-lg">
                Based on your answers, our free weekly digest will highlight the most relevant retirement, Medicare, and financial programs for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#newsletter" className="btn-orange">
                  Get My Free Weekly Digest →
                </a>
                <button onClick={reset} className="font-body text-navy underline underline-offset-2 hover:text-navy-light transition-colors">
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Category Cards ────────────────────────────────────────────────────────────
const categories = [
  {
    num: "01",
    icon: "🏥",
    title: "Medicare & Health Savings",
    href: "/medicare",
    tag: "HEALTH COVERAGE",
    color: "#1B2E5A",
    desc: "Maximize your Medicare benefits and discover supplemental coverage options that can save you thousands annually.",
    items: ["Medicare Advantage Plans", "Medigap Supplement Coverage", "Prescription Drug (Part D)", "Extra Help / Low-Income Subsidy"],
  },
  {
    num: "02",
    icon: "💰",
    title: "Social Security Strategies",
    href: "/social-security",
    tag: "RETIREMENT INCOME",
    color: "#D4521A",
    desc: "Learn proven strategies to maximize your Social Security benefits and optimize your claiming age for maximum lifetime income.",
    items: ["Optimal Claiming Age", "Spousal Benefit Strategies", "Survivor Benefits", "SSDI & SSI Programs"],
  },
  {
    num: "03",
    icon: "📈",
    title: "Retirement Income Planning",
    href: "/retirement-income",
    tag: "FINANCIAL SECURITY",
    color: "#2A5C3A",
    desc: "Build a sustainable income stream through smart IRA, 401(k), and pension strategies tailored for Americans 55+.",
    items: ["IRA Withdrawal Strategies", "401(k) Rollover Options", "Pension Maximization", "Required Minimum Distributions"],
  },
  {
    num: "04",
    icon: "🏛️",
    title: "Government Assistance Programs",
    href: "/government-benefits",
    tag: "FEDERAL & STATE PROGRAMS",
    color: "#5C3A1B",
    desc: "Billions in federal and state assistance go unclaimed each year. We help you identify every program you've earned.",
    items: ["SNAP Food Benefits", "Housing Assistance (HUD)", "LIHEAP Energy Aid", "Property Tax Relief Programs"],
  },
  {
    num: "05",
    icon: "📋",
    title: "Tax Reduction Strategies",
    href: "/tax-savings",
    tag: "TAX SAVINGS",
    color: "#1B4A5C",
    desc: "Discover legal tax strategies specifically designed for retirees to minimize your tax burden and keep more of your money.",
    items: ["Senior Tax Deductions", "Roth Conversion Planning", "Capital Gains Reduction", "Medical Expense Deductions"],
  },
  {
    num: "06",
    icon: "⚖️",
    title: "Estate & Legal Planning",
    href: "/estate-planning",
    tag: "WEALTH PROTECTION",
    color: "#3A1B5C",
    desc: "Protect your assets and ensure your wishes are honored with essential legal planning tools available to seniors.",
    items: ["Will & Trust Basics", "Power of Attorney", "Medicaid Planning", "Beneficiary Designations"],
  },
];

function CategoriesSection() {
  return (
    <div className="bg-white py-20">
      <div className="container">
        <div className="text-center mb-12 reveal">
          <div className="amber-rule justify-center"><span>6 Topic Categories</span></div>
          <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-4">
            Every Financial Topic You Need,<br />All in One Weekly Digest
          </h2>
          <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto">
            Senior finance spans dozens of federal, state, and local programs. We've organized everything into six clear categories so you never miss what matters most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="category-card bg-white rounded-xl border-2 border-gray-100 p-6 reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-display font-bold text-sm"
                  style={{ background: cat.color }}
                >
                  {cat.num}
                </div>
                <span className="text-2xl">{cat.icon}</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-1" style={{ color: cat.color }}>
                {cat.title}
              </h3>
              <p className="font-body text-xs font-bold tracking-widest uppercase text-gray-400 mb-3">
                {cat.tag}
              </p>
              <p className="font-body text-gray-600 text-sm mb-4 leading-relaxed">{cat.desc}</p>
              <ul className="space-y-1.5 mb-5">
                {cat.items.map((item) => (
                  <li key={item} className="font-body text-sm text-gray-600 flex items-center gap-2">
                    <span className="text-amber" style={{ color: "#D4A017" }}>›</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={cat.href}
                className="font-body text-sm font-bold flex items-center gap-1 transition-colors hover:gap-2 no-underline"
                style={{ color: cat.color }}
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-cream rounded-xl p-8 text-center reveal">
          <h3 className="font-display text-2xl font-bold text-navy mb-3">
            Not Sure Where to Start?
          </h3>
          <p className="font-body text-gray-600 mb-6 text-lg">
            Our free weekly digest covers all six categories — delivered every Tuesday morning, plain English, no jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#newsletter" className="btn-orange">Get My Free Weekly Digest</a>
            <a href="#quiz" className="btn-navy">Take the Benefits Quiz</a>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── How It Works ──────────────────────────────────────────────────────────────
function HowItWorksSection() {
  const steps = [
    { num: "01", icon: "✉️", title: "Subscribe Free", desc: "Enter your email and get instant access to our free weekly digest. No credit card, no commitment." },
    { num: "02", icon: "📖", title: "Read Your Weekly Digest", desc: "Every Tuesday morning, receive a curated guide covering retirement income, Medicare savings, and tax tips." },
    { num: "03", icon: "🎯", title: "Discover Your Benefits", desc: "Learn which programs you qualify for with plain-English explanations and step-by-step application guides." },
    { num: "04", icon: "💵", title: "Claim What's Yours", desc: "Act on our guidance to claim unclaimed benefits and implement money-saving strategies right away." },
  ];

  return (
    <div className="bg-cream-dark py-20" style={{ background: "#EDE8D5" }}>
      <div className="container">
        <div className="text-center mb-12 reveal">
          <div className="amber-rule justify-center"><span>Simple Process</span></div>
          <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-4">
            From Inbox to Benefits in 4 Easy Steps
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="reveal" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="bg-white rounded-xl p-6 h-full shadow-sm border border-amber/20 relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-display font-bold text-sm mb-4"
                  style={{ background: "#1B2E5A" }}
                >
                  {step.num}
                </div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-display text-lg font-bold text-navy mb-2">{step.title}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-amber text-xl z-10" style={{ color: "#D4A017" }}>→</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Newsletter Section ────────────────────────────────────────────────────────
function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribeToApi(email, "home-newsletter", firstName);
    setSubmitted(true);
    toast.success("Welcome to Senior Benefits Digest! Check your inbox for your first issue.");
  };

  return (
    <div
      id="newsletter"
      className="py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #0F1E3D 0%, #1B2E5A 50%, #2A4080 100%)`,
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310419663031642499/e5jjJAxW8zZXQ49WinQHCo/newsletter_bg-mnTJgcdvFtx4AFSBustRrM.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(15, 30, 61, 0.88)" }} />
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white reveal">
              <div className="amber-rule"><span>Free Weekly Newsletter</span></div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Stay Informed.<br />
                <span style={{ color: "#D4A017" }} className="italic">Never Miss a Benefit.</span>
              </h2>
              <p className="font-body text-blue-200 text-lg mb-8">
                Join 85,000+ seniors who receive our free weekly digest — packed with benefit updates, enrollment reminders, and plain-English guides to every program available to Americans 55+.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "📬", title: "Weekly Benefits Digest", desc: "New programs, rule changes, and tips delivered every Tuesday morning." },
                  { icon: "🔔", title: "Enrollment Deadline Alerts", desc: "Never miss Medicare Open Enrollment or Social Security filing windows." },
                  { icon: "📖", title: "Plain-English Guides", desc: "Step-by-step guides on applying for benefits, no jargon." },
                  { icon: "💡", title: "Tax & Savings Strategies", desc: "Actionable tips to reduce taxes and stretch your retirement income." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <div className="font-body font-bold text-white text-sm">{item.title}</div>
                      <div className="font-body text-blue-300 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                {!submitted ? (
                  <>
                    <h3 className="font-display text-2xl font-bold text-navy mb-2">
                      Get Your Free Benefits Guide
                    </h3>
                    <p className="font-body text-gray-500 text-sm mb-6">
                      Join over 85,000 seniors already subscribed. No cost, no spam — ever.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="font-body text-sm font-semibold text-gray-700 block mb-1.5">
                          First Name
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Robert"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none focus:border-navy transition-colors"
                          style={{ fontSize: "16px" }}
                        />
                      </div>
                      <div>
                        <label className="font-body text-sm font-semibold text-gray-700 block mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none focus:border-navy transition-colors"
                          style={{ fontSize: "16px" }}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn-orange w-full justify-center text-lg py-4"
                      >
                        Send Me the Free Guide →
                      </button>
                    </form>
                    <p className="font-body text-xs text-gray-400 mt-4 text-center">
                      🔒 100% free. We never sell your data. Unsubscribe anytime with one click.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <div className="flex -space-x-2">
                        {["🧓", "👴", "👵", "🧑‍🦳"].map((emoji, i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm border-2 border-white">
                            {emoji}
                          </div>
                        ))}
                      </div>
                      <span className="font-body text-xs text-gray-500">
                        <strong>85,000+</strong> seniors already subscribed
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-6">
                    <div className="text-5xl mb-4">🎉</div>
                    <h3 className="font-display text-2xl font-bold text-navy mb-3">
                      You're In!
                    </h3>
                    <p className="font-body text-gray-600">
                      Welcome to Senior Benefits Digest! Your first issue will arrive this Tuesday. Check your inbox for a confirmation email.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Margaret T.",
    age: "67, Florida",
    avatar: "👵",
    text: "I had no idea I was leaving over $8,000 a year on the table. The Senior Benefits Digest showed me exactly how to claim my Extra Help for prescriptions and a property tax exemption I never knew existed.",
    stars: 5,
  },
  {
    name: "Robert & Linda K.",
    age: "71 & 68, Texas",
    avatar: "👴",
    text: "The Social Security optimization guide alone was worth subscribing. We delayed Linda's claim and increased our combined lifetime benefit by over $60,000. This newsletter is a must-read.",
    stars: 5,
  },
  {
    name: "James W.",
    age: "63, Ohio",
    avatar: "🧓",
    text: "I'm pre-retirement and already using the Roth conversion strategies from the digest. The plain-English explanations make complex tax topics actually understandable. Highly recommend.",
    stars: 5,
  },
];

function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white py-20">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-12 reveal">
          <div className="amber-rule justify-center"><span>Reader Stories</span></div>
          <h2 className="font-display text-3xl md:text-4xl text-navy font-bold">
            Thousands of Dollars Saved by Our Readers
          </h2>
        </div>
        <div className="reveal">
          <div className="bg-cream rounded-2xl p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-6 left-8 text-8xl font-display text-amber opacity-20" style={{ color: "#D4A017" }}>"</div>
            <div className="relative z-10">
              <div className="flex gap-1 mb-4">
                {Array(testimonials[active].stars).fill(0).map((_, i) => (
                  <span key={i} className="text-amber text-xl" style={{ color: "#D4A017" }}>★</span>
                ))}
              </div>
              <p className="font-body text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                "{testimonials[active].text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-2xl" style={{ background: "#1B2E5A" }}>
                  {testimonials[active].avatar}
                </div>
                <div>
                  <div className="font-body font-bold text-navy">{testimonials[active].name}</div>
                  <div className="font-body text-sm text-gray-500">{testimonials[active].age}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                style={{ background: i === active ? "#1B2E5A" : "#D1D5DB" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What topics does the Senior Benefits Digest cover?",
    a: "Our weekly digest covers six core areas: Medicare & Health Savings, Social Security Strategies, Retirement Income Planning, Government Assistance Programs, Tax Reduction Strategies, and Estate & Legal Planning. Each issue focuses on actionable, timely information relevant to Americans 55+.",
  },
  {
    q: "I already have Medicare. Are there other benefits I might be missing?",
    a: "Absolutely. Most seniors with Medicare are still missing out on Extra Help (Low Income Subsidy) for prescriptions, Medicare Savings Programs that pay your premiums, dental and vision benefits through Medicare Advantage, and dozens of state-specific supplemental programs.",
  },
  {
    q: "Do I have to be low-income to qualify for the programs you cover?",
    a: "No. While we do cover income-based programs, many of our most popular topics — like Social Security optimization, Roth conversion strategies, Medicare Advantage comparisons, and estate planning — apply to seniors at all income levels.",
  },
  {
    q: "How is your digest different from just going to Medicare.gov or SSA.gov?",
    a: "Government websites provide official information but are often complex and hard to navigate. Our digest translates that information into plain English, identifies the most important changes each week, and provides actionable step-by-step guidance — saving you hours of research.",
  },
  {
    q: "Is the newsletter really free? How do you make money?",
    a: "Yes, completely free. We earn revenue through advertising partnerships with financial service providers. We never sell your personal data, and our editorial content is always independent of our advertising relationships.",
  },
  {
    q: "What if I'm not yet 65 — can I still subscribe?",
    a: "Absolutely. We cover pre-retirement planning for Americans 55+, including IRA strategies, early Social Security filing considerations, Medicare pre-enrollment planning, and how to maximize your savings in the final years before retirement.",
  },
  {
    q: "How often will I receive emails, and can I unsubscribe?",
    a: "You'll receive one digest every Tuesday morning. Occasionally we send important deadline alerts (like Medicare Open Enrollment reminders). You can unsubscribe instantly with one click at the bottom of any email — no questions asked.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-cream py-20">
      <div className="container max-w-3xl mx-auto">
        <div className="text-center mb-12 reveal">
          <div className="amber-rule justify-center"><span>Frequently Asked Questions</span></div>
          <h2 className="font-display text-3xl md:text-4xl text-navy font-bold">
            Common Questions Answered
          </h2>
        </div>
        <div className="space-y-3 reveal">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border-2 border-gray-100 overflow-hidden transition-all duration-200"
              style={{ borderColor: open === i ? "#D4A017" : "" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-body font-semibold text-navy text-base">
                  <span className="text-amber mr-3 font-bold" style={{ color: "#D4A017" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.q}
                </span>
                <span
                  className="text-gray-400 text-xl flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0)" }}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-body text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Final CTA Section ─────────────────────────────────────────────────────────
function FinalCTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribeToApi(email, "home-final-cta");
    setSubmitted(true);
    toast.success("You're subscribed! Your first digest arrives this Tuesday.");
  };

  return (
    <div className="bg-white py-20">
      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="amber-rule"><span>Don't Miss Out</span></div>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-4">
              Thousands of Dollars in Benefits Are Waiting for You
            </h2>
            <p className="font-body text-gray-600 text-lg mb-6">
              The average American over 55 qualifies for over $22,000 in annual benefits — yet most never claim them. Our free digest makes sure you know about every program you're entitled to.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Weekly benefits digest every Tuesday",
                "Enrollment deadline reminders",
                "State-specific program alerts",
                "Plain-English how-to guides",
                "Tax & retirement savings strategies",
                "No spam, unsubscribe anytime",
              ].map((item) => (
                <li key={item} className="font-body text-gray-700 flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0" style={{ background: "#D4A017" }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <div className="bg-cream rounded-2xl p-8 border-2" style={{ borderColor: "#D4A017" }}>
              {!submitted ? (
                <>
                  <h3 className="font-display text-2xl font-bold text-navy mb-2">
                    Get Your Free Weekly Guide
                  </h3>
                  <p className="font-body text-gray-500 text-sm mb-6">
                    Join 85,000+ seniors. Free forever.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none focus:border-navy transition-colors bg-white"
                      style={{ fontSize: "16px" }}
                    />
                    <button type="submit" className="btn-orange w-full justify-center text-lg py-4">
                      Send Me the Free Guide →
                    </button>
                  </form>
                  <p className="font-body text-xs text-gray-400 mt-4 text-center">
                    🔒 We never sell your data. Unsubscribe with one click.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="flex -space-x-2">
                      {["🧓", "👴", "👵", "🧑‍🦳"].map((emoji, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm border-2 border-white">
                          {emoji}
                        </div>
                      ))}
                    </div>
                    <span className="font-body text-xs text-gray-500">
                      <strong>85,000+</strong> seniors already subscribed
                    </span>
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="font-display text-2xl font-bold text-navy mb-3">You're Subscribed!</h3>
                  <p className="font-body text-gray-600">Your first digest arrives this Tuesday. Welcome to the community!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Header ────────────────────────────────────────────────────────────────────
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white text-xs py-2 px-4 flex items-center justify-between" style={{ background: "#0F1E3D" }}>
        <span className="font-body text-blue-300">
          ℹ Not affiliated with the U.S. Government or any federal agency
        </span>
        <a href="#newsletter" className="font-body text-amber font-semibold hidden sm:block hover:underline" style={{ color: "#D4A017" }}>
          Get the Free Weekly Digest →
        </a>
      </div>

      {/* Main nav */}
      <header
        className="sticky top-0 z-50 bg-white transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "0 2px 20px rgba(27, 46, 90, 0.12)" : "0 1px 0 #E5E7EB" }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 no-underline">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-display font-bold text-sm" style={{ background: "#1B2E5A" }}>
                SBD
              </div>
              <div>
                <div className="font-display font-bold text-navy text-lg leading-tight" style={{ color: "#1B2E5A" }}>
                  Senior Benefits Digest
                </div>
                <div className="font-body text-xs text-gray-400 tracking-wide uppercase leading-none">
                  SENIORBENEFITSDIGEST.COM
                </div>
              </div>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6">
              {[
                { label: "Benefits", href: "#categories" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "About Us", href: "#about" },
                { label: "FAQs", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body font-semibold text-gray-600 hover:text-navy transition-colors text-sm no-underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#quiz"
                className="font-body font-semibold text-sm text-navy border-2 border-navy px-4 py-2 rounded-lg hover:bg-navy hover:text-white transition-all no-underline"
                style={{ color: "#1B2E5A", borderColor: "#1B2E5A" }}
              >
                Check My Benefits
              </a>
              <a href="#newsletter" className="btn-orange text-sm py-2 px-4">
                ✉ Free Newsletter
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-navy"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" style={{ transform: menuOpen ? "rotate(45deg) translate(2px, 6px)" : "" }} />
              <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
              <div className="w-6 h-0.5 bg-current transition-all" style={{ transform: menuOpen ? "rotate(-45deg) translate(2px, -6px)" : "" }} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {["Benefits", "How It Works", "About Us", "FAQs"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="block font-body font-semibold text-gray-700 py-2 no-underline" onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a href="#newsletter" className="btn-orange w-full justify-center mt-2" onClick={() => setMenuOpen(false)}>
              Get Free Newsletter
            </a>
          </div>
        )}
      </header>
    </>
  );
}

// ─── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribeToApi(email, "home-hero");
    setSubmitted(true);
    toast.success("Welcome! Your first digest arrives this Tuesday.");
  };

  return (
    <div className="bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-8 items-center py-16 lg:py-20">
          {/* Left: Content */}
          <div className="lg:col-span-3">
            <div className="amber-rule mb-6">
              <span>Benefits You've Earned</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Discover Every Benefit<br />
              Available to You at{" "}
              <span className="italic" style={{ color: "#D4521A" }}>55+</span>
            </h1>
            <p className="font-body text-gray-600 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">
              Millions of Americans over 55 are leaving thousands of dollars in benefits unclaimed every year. Get our free weekly digest and discover every program you're entitled to — Medicare savings, Social Security strategies, retirement income, and more.
            </p>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: "🏥", label: "Medicare" },
                { icon: "💰", label: "Social Security" },
                { icon: "📈", label: "Retirement Income" },
                { icon: "🏠", label: "Housing Aid" },
                { icon: "📋", label: "Tax Savings" },
                { icon: "⚖️", label: "Estate Planning" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  className="font-body text-sm font-semibold px-3 py-1.5 rounded-full border-2 text-navy flex items-center gap-1.5 cursor-default hover:bg-cream transition-colors"
                  style={{ borderColor: "#1B2E5A", color: "#1B2E5A" }}
                >
                  {pill.icon} {pill.label}
                </span>
              ))}
            </div>

            {/* Email form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-3.5 font-body text-gray-800 focus:outline-none focus:border-navy transition-colors"
                  style={{ fontSize: "16px" }}
                />
                <button type="submit" className="btn-orange whitespace-nowrap py-3.5 px-6">
                  Get Free Guide →
                </button>
              </form>
            ) : (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg px-5 py-4 max-w-md">
                <p className="font-body font-semibold text-green-800">✅ You're subscribed! Check your inbox this Tuesday.</p>
              </div>
            )}
            <p className="font-body text-sm text-gray-400 mt-3">
              🔒 No spam, ever. Unsubscribe anytime. We respect your privacy.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-gray-100">
              {[
                { icon: "✅", text: "Free, No-Obligation" },
                { icon: "🇺🇸", text: "All 50 States" },
                { icon: "👥", text: "85,000+ Seniors Helped" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <span className="text-lg">{badge.icon}</span>
                  <span className="font-body text-sm font-semibold text-gray-600">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="lg:col-span-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031642499/e5jjJAxW8zZXQ49WinQHCo/hero_seniors-AGE4SLbTqLGhMTd7oT22h3.webp"
                alt="Seniors reviewing retirement benefits together"
                className="w-full h-auto object-cover"
                style={{ maxHeight: "480px" }}
              />
              {/* Floating stat card */}
              <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-xl p-4 max-w-[160px]">
                <div className="font-display text-2xl font-bold" style={{ color: "#D4521A" }}>$22,000+</div>
                <div className="font-body text-xs text-gray-500 leading-snug">avg. annual benefits unclaimed per senior</div>
              </div>
            </div>
            {/* Decorative element */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-10"
              style={{ background: "#D4A017" }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full opacity-10"
              style={{ background: "#1B2E5A" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    subscribeToApi(email, "home-footer");
    toast.success("Subscribed! Your first digest arrives this Tuesday.");
    setEmail("");
  };

  return (
    <footer className="bg-navy text-white" style={{ background: "#0F1E3D" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-navy font-display font-bold text-sm" style={{ background: "#D4A017", color: "#0F1E3D" }}>
                SBD
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">Senior Benefits Digest</div>
                <div className="font-body text-xs text-blue-400 tracking-wide uppercase">SENIORBENEFITSDIGEST.COM</div>
              </div>
            </div>
            <p className="font-body text-blue-300 text-sm mb-5 max-w-sm leading-relaxed">
              The trusted weekly digest for Americans 55+ covering retirement income, Medicare savings, Social Security strategies, and tax-saving tips.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 font-body text-white placeholder-blue-400 text-sm focus:outline-none focus:border-amber"
                style={{ fontSize: "16px" }}
              />
              <button type="submit" className="btn-orange text-sm py-2.5 px-4 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>

          {/* Topics */}
          <div>
            <h4 className="font-body font-bold text-white text-sm tracking-widest uppercase mb-4" style={{ color: "#D4A017" }}>
              Topics
            </h4>
            <ul className="space-y-2.5">
              {[
                { icon: "🏥", label: "Medicare & Health", href: "/medicare" },
                { icon: "💰", label: "Social Security", href: "/social-security" },
                { icon: "📈", label: "Retirement Income", href: "/retirement-income" },
                { icon: "🏛️", label: "Government Benefits", href: "/government-benefits" },
                { icon: "📋", label: "Tax Savings", href: "/tax-savings" },
                { icon: "⚖️", label: "Estate Planning", href: "/estate-planning" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="font-body text-sm text-blue-300 hover:text-white transition-colors no-underline">
                    {item.icon} {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body font-bold text-white text-sm tracking-widest uppercase mb-4" style={{ color: "#D4A017" }}>
              Quick Links
            </h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Benefits Quiz", href: "/#quiz" },
                { label: "Newsletter", href: "/#newsletter" },
                { label: "FAQs", href: "/#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="font-body text-sm text-blue-300 hover:text-white transition-colors no-underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="font-body font-bold text-white text-sm tracking-widest uppercase mb-3" style={{ color: "#D4A017" }}>
              Official Resources
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Medicare.gov ↗", href: "https://medicare.gov" },
                { label: "SSA.gov ↗", href: "https://ssa.gov" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-blue-300 hover:text-white transition-colors no-underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-blue-400 text-center md:text-left">
            © 2024 Senior Benefits Digest. Not affiliated with the U.S. Government or any federal agency.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/privacy" className="font-body text-xs text-blue-400 hover:text-white transition-colors no-underline">Privacy Policy</Link>
            <Link href="/terms" className="font-body text-xs text-blue-400 hover:text-white transition-colors no-underline">Terms & Conditions</Link>
            <Link href="/do-not-sell" className="font-body text-xs text-blue-400 hover:text-white transition-colors no-underline">Do Not Sell My Data</Link>
            <Link href="/contact" className="font-body text-xs text-blue-400 hover:text-white transition-colors no-underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── About Section ─────────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <div id="about" className="bg-white py-20">
      <div className="container max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="amber-rule"><span>About Us</span></div>
            <h2 className="font-display text-3xl md:text-4xl text-navy font-bold mb-5">
              Your Trusted Guide to Senior Financial Empowerment
            </h2>
            <p className="font-body text-gray-600 text-lg mb-5 leading-relaxed">
              Senior Benefits Digest was founded by a team of retirement planning specialists and financial journalists who noticed a troubling pattern: millions of Americans over 55 were leaving enormous sums of money unclaimed simply because they didn't know what they were entitled to.
            </p>
            <p className="font-body text-gray-600 mb-6 leading-relaxed">
              Our mission is simple — translate the complex world of senior benefits, retirement finance, and government programs into clear, actionable weekly guidance that any American can use.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "85K+", label: "Subscribers" },
                { num: "$22K+", label: "Avg. Annual Benefits" },
                { num: "50", label: "States Covered" },
                { num: "5+", label: "Years Publishing" },
              ].map((stat) => (
                <div key={stat.label} className="bg-cream rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-navy">{stat.num}</div>
                  <div className="font-body text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663031642499/e5jjJAxW8zZXQ49WinQHCo/retirement_finance-czbVDUDn8kev33W7fqtx3Q.webp"
                alt="Retirement planning documents and resources"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Home Component ───────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <div id="quiz">
          <BenefitsQuiz />
        </div>
        <div id="categories">
          <CategoriesSection />
        </div>
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <NewsletterSection />
        <TestimonialsSection />
        <div id="faq">
          <FAQSection />
        </div>
        <FinalCTASection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
