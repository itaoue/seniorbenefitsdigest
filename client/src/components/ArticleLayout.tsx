/**
 * ArticleLayout — Shared layout for all topic article pages
 * Design: Authoritative Editorial / Financial Broadsheet
 * Colors: Deep Navy #1B2E5A | Amber Gold #D4A017 | Orange CTA #D4521A | Cream #F8F4E8
 */

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { toast } from "sonner";

// ─── Shared Header ─────────────────────────────────────────────────────────────
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div className="text-white text-xs py-2 px-4 flex items-center justify-between" style={{ background: "#0F1E3D" }}>
        <span className="font-body text-blue-300">
          ℹ Not affiliated with the U.S. Government or any federal agency
        </span>
        <Link href="/#newsletter" className="font-body text-amber font-semibold hidden sm:block hover:underline no-underline" style={{ color: "#D4A017" }}>
          Get the Free Weekly Digest →
        </Link>
      </div>
      <header
        className="sticky top-0 z-50 bg-white transition-shadow duration-300"
        style={{ boxShadow: scrolled ? "0 2px 20px rgba(27, 46, 90, 0.12)" : "0 1px 0 #E5E7EB" }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5 no-underline">
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
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {[
                { label: "Benefits", href: "/#categories" },
                { label: "How It Works", href: "/#how-it-works" },
                { label: "About Us", href: "/#about" },
                { label: "FAQs", href: "/#faq" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="font-body font-semibold text-gray-600 hover:text-navy transition-colors text-sm no-underline" style={{ color: "" }}>
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-3">
              <a href="/#quiz" className="font-body font-semibold text-sm text-navy border-2 border-navy px-4 py-2 rounded-lg hover:bg-navy hover:text-white transition-all no-underline" style={{ color: "#1B2E5A", borderColor: "#1B2E5A" }}>
                Check My Benefits
              </a>
              <a href="/#newsletter" className="btn-orange text-sm py-2 px-4">
                ✉ Free Newsletter
              </a>
            </div>
            <button className="md:hidden p-2 text-navy" onClick={() => setMenuOpen(!menuOpen)}>
              <div className="w-6 h-0.5 bg-current mb-1.5" />
              <div className="w-6 h-0.5 bg-current mb-1.5" />
              <div className="w-6 h-0.5 bg-current" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
            {["Benefits", "How It Works", "About Us", "FAQs"].map((item) => (
              <a key={item} href={`/#${item.toLowerCase().replace(" ", "-")}`} className="block font-body font-semibold text-gray-700 py-2 no-underline" onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a href="/#newsletter" className="btn-orange w-full justify-center mt-2 block text-center" onClick={() => setMenuOpen(false)}>
              Get Free Newsletter
            </a>
          </div>
        )}
      </header>
    </>
  );
}

// ─── Shared Footer ─────────────────────────────────────────────────────────────
export function SiteFooter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed! Your first digest arrives this Tuesday.");
    setEmail("");
  };

  return (
    <footer className="text-white" style={{ background: "#0F1E3D" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 no-underline">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-sm" style={{ background: "#D4A017", color: "#0F1E3D" }}>SBD</div>
              <div>
                <div className="font-display font-bold text-white text-lg leading-tight">Senior Benefits Digest</div>
                <div className="font-body text-xs text-blue-400 tracking-wide uppercase">SENIORBENEFITSDIGEST.COM</div>
              </div>
            </Link>
            <p className="font-body text-blue-300 text-sm mb-5 max-w-sm leading-relaxed">
              The trusted weekly digest for Americans 55+ covering retirement income, Medicare savings, Social Security strategies, and tax-saving tips.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
              <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 font-body text-white placeholder-blue-400 text-sm focus:outline-none"
                style={{ fontSize: "16px" }} />
              <button type="submit" className="btn-orange text-sm py-2.5 px-4 whitespace-nowrap">Subscribe</button>
            </form>
          </div>
          <div>
            <h4 className="font-body font-bold text-sm tracking-widest uppercase mb-4" style={{ color: "#D4A017" }}>Topics</h4>
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
          <div>
            <h4 className="font-body font-bold text-sm tracking-widest uppercase mb-4" style={{ color: "#D4A017" }}>Quick Links</h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "How It Works", href: "/#how-it-works" },
                { label: "Benefits Quiz", href: "/#quiz" },
                { label: "Newsletter", href: "/#newsletter" },
                { label: "FAQs", href: "/#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="font-body text-sm text-blue-300 hover:text-white transition-colors no-underline">{item.label}</a>
                </li>
              ))}
            </ul>
            <h4 className="font-body font-bold text-sm tracking-widest uppercase mb-3" style={{ color: "#D4A017" }}>Official Resources</h4>
            <ul className="space-y-2">
              {[
                { label: "Medicare.gov ↗", href: "https://medicare.gov" },
                { label: "SSA.gov ↗", href: "https://ssa.gov" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-blue-300 hover:text-white transition-colors no-underline">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-blue-400 text-center md:text-left">
            © 2024 Senior Benefits Digest. Not affiliated with the U.S. Government or any federal agency.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/privacy" className="font-body text-xs text-blue-400 hover:text-white transition-colors no-underline">Privacy Policy</Link>
            <Link href="/terms" className="font-body text-xs text-blue-400 hover:text-white transition-colors no-underline">Terms & Conditions</Link>
            <button onClick={() => toast.info("Do Not Sell My Data request noted.")} className="font-body text-xs text-blue-400 hover:text-white transition-colors">Do Not Sell My Data</button>
            <button onClick={() => toast.info("Contact: support@seniorbenefitsdigest.com")} className="font-body text-xs text-blue-400 hover:text-white transition-colors">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Newsletter CTA Banner ─────────────────────────────────────────────────────
export function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    toast.success("Welcome! Your first digest arrives this Tuesday.");
  };

  return (
    <div className="py-14" style={{ background: "#1B2E5A" }}>
      <div className="container max-w-3xl mx-auto text-center">
        <p className="font-body text-blue-300 text-sm font-bold tracking-widest uppercase mb-3">Free Weekly Newsletter</p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
          Get This Week's Senior Benefits Digest — Free
        </h2>
        <p className="font-body text-blue-200 mb-6">
          Join 85,000+ Americans 55+ who receive our plain-English weekly guide every Tuesday.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="flex-1 border-2 border-white/20 rounded-lg px-4 py-3 font-body text-gray-800 bg-white focus:outline-none"
              style={{ fontSize: "16px" }} />
            <button type="submit" className="btn-orange whitespace-nowrap py-3 px-6">Get Free Guide →</button>
          </form>
        ) : (
          <div className="bg-white/10 rounded-lg px-6 py-4 inline-block">
            <p className="font-body font-semibold text-white">✅ You're subscribed! Check your inbox this Tuesday.</p>
          </div>
        )}
        <p className="font-body text-xs text-blue-400 mt-3">🔒 No spam, ever. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}

// ─── Article Layout Wrapper ────────────────────────────────────────────────────
interface ArticleLayoutProps {
  children: React.ReactNode;
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>{children}</main>
      <NewsletterBanner />
      <SiteFooter />
    </div>
  );
}
