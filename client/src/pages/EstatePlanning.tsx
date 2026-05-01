/**
 * Estate & Legal Planning — Topic Article Page
 */

import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "wouter";
import { toast } from "sonner";

const articles = [
  {
    tag: "Wills & Trusts",
    title: "Will vs. Living Trust: Which One Does Your Estate Actually Need?",
    excerpt: "Both wills and living trusts can transfer your assets to heirs — but they work very differently. We explain the key differences, costs, and when each makes sense for seniors.",
    readTime: "9 min read",
    date: "April 29, 2024",
    featured: true,
  },
  {
    tag: "Power of Attorney",
    title: "Durable Power of Attorney: The Document Every Senior Needs Before a Health Crisis",
    excerpt: "Without a durable power of attorney, your family may be unable to manage your finances if you become incapacitated. Here's what it is, why it matters, and how to set one up.",
    readTime: "7 min read",
    date: "April 22, 2024",
  },
  {
    tag: "Medicaid Planning",
    title: "Medicaid Asset Protection: How to Qualify for Long-Term Care Without Going Broke",
    excerpt: "Medicaid can cover nursing home costs — but only if your assets are below certain limits. Legal Medicaid planning strategies can help you protect your home and savings.",
    readTime: "10 min read",
    date: "April 15, 2024",
  },
  {
    tag: "Beneficiary Designations",
    title: "Beneficiary Designations: The Estate Planning Step Most People Forget",
    excerpt: "Your IRA, 401(k), and life insurance pass directly to beneficiaries — bypassing your will entirely. Outdated beneficiary designations are one of the most common and costly estate planning mistakes.",
    readTime: "6 min read",
    date: "April 8, 2024",
  },
  {
    tag: "Healthcare Directives",
    title: "Living Will and Healthcare Proxy: Making Your Medical Wishes Known",
    excerpt: "An advance healthcare directive ensures your medical wishes are followed if you can't speak for yourself. We explain the difference between a living will and a healthcare proxy.",
    readTime: "6 min read",
    date: "April 1, 2024",
  },
  {
    tag: "Estate Taxes",
    title: "Federal Estate Tax in 2024: Who Actually Has to Pay It?",
    excerpt: "The federal estate tax only applies to estates over $13.61 million in 2024 — but state estate taxes can kick in at much lower thresholds. Here's what you need to know.",
    readTime: "5 min read",
    date: "March 25, 2024",
  },
];

const keyFacts = [
  { stat: "$13.6M", label: "Federal estate tax exemption in 2024" },
  { stat: "55%", label: "Americans who don't have a will" },
  { stat: "$100K+", label: "Avg. nursing home cost per year" },
  { stat: "5 years", label: "Medicaid look-back period for asset transfers" },
];

export default function EstatePlanning() {
  return (
    <ArticleLayout>
      <div className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="font-body text-sm text-gray-400 hover:text-navy no-underline transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-body text-sm font-semibold" style={{ color: "#1B2E5A" }}>Estate Planning</span>
            </div>
            <div className="amber-rule mb-4"><span>Wealth Protection</span></div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "#1B2E5A" }}>
              ⚖️ Estate & Legal Planning
            </h1>
            <p className="font-body text-gray-600 text-xl leading-relaxed max-w-2xl">
              Protecting your assets and ensuring your wishes are honored requires careful legal planning. Our guides cover every essential document and strategy seniors need — in plain English, no attorney jargon.
            </p>
          </div>
        </div>
      </div>

      <div className="py-8" style={{ background: "#1B2E5A" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {keyFacts.map((f, i) => (
              <div key={i}>
                <div className="font-display text-2xl font-bold mb-1" style={{ color: "#D4A017" }}>{f.stat}</div>
                <div className="font-body text-xs text-blue-300 leading-snug">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-16" style={{ background: "#F8F4E8" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {articles.filter(a => a.featured).map((article, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden mb-8 border-l-4" style={{ borderColor: "#D4A017" }}>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-body text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white" style={{ background: "#1B2E5A" }}>★ Featured</span>
                      <span className="font-body text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: "#FEF3C7", color: "#92400E" }}>{article.tag}</span>
                    </div>
                    <h2 className="font-display text-2xl font-bold mb-3 leading-tight" style={{ color: "#1B2E5A" }}>{article.title}</h2>
                    <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-400 font-body">
                        <span>{article.date}</span><span>·</span><span>{article.readTime}</span>
                      </div>
                      <button onClick={() => toast.info("Full article coming soon — subscribe to get notified!")} className="btn-orange text-sm py-2 px-5">Read Article →</button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="space-y-5">
                {articles.filter(a => !a.featured).map((article, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="font-body text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded" style={{ background: "#EBF4FB", color: "#1B2E5A" }}>{article.tag}</span>
                        <h3 className="font-display text-lg font-bold mt-2 mb-2 leading-snug" style={{ color: "#1B2E5A" }}>{article.title}</h3>
                        <p className="font-body text-gray-500 text-sm leading-relaxed mb-3">{article.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-400 font-body">
                          <span>{article.date}</span><span>·</span><span>{article.readTime}</span>
                        </div>
                      </div>
                      <button onClick={() => toast.info("Full article coming soon — subscribe to get notified!")} className="font-body text-sm font-bold hover:text-orange-600 transition-colors whitespace-nowrap flex-shrink-0 mt-1" style={{ color: "#1B2E5A" }}>Read →</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#1B2E5A" }}>Essential Documents Checklist</h3>
                <ul className="space-y-2">
                  {[
                    { doc: "Last Will & Testament", done: true },
                    { doc: "Revocable Living Trust", done: false },
                    { doc: "Durable Power of Attorney", done: true },
                    { doc: "Healthcare Power of Attorney", done: false },
                    { doc: "Living Will / Advance Directive", done: false },
                    { doc: "HIPAA Authorization", done: false },
                    { doc: "Beneficiary Designations Updated", done: true },
                    { doc: "Digital Asset Instructions", done: false },
                  ].map(item => (
                    <li key={item.doc} className="font-body text-sm text-gray-600 flex items-center gap-2">
                      <span className={item.done ? "text-green-500" : "text-gray-300"}>
                        {item.done ? "✓" : "○"}
                      </span>
                      {item.doc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-6 text-white" style={{ background: "#1B2E5A" }}>
                <h3 className="font-display text-lg font-bold mb-3">Medicaid Look-Back</h3>
                <div className="space-y-3">
                  {[
                    { item: "Look-back period", value: "5 years (60 months)" },
                    { item: "Asset limit (individual)", value: "~$2,000 in most states" },
                    { item: "Home exemption", value: "Primary residence often exempt" },
                    { item: "Spouse protection", value: "Community spouse resource allowance" },
                  ].map(d => (
                    <div key={d.item} className="border-b border-white/10 pb-2 last:border-0 last:pb-0">
                      <div className="font-body text-xs text-blue-300">{d.item}</div>
                      <div className="font-body font-bold text-sm text-white">{d.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6" style={{ background: "#FEF3C7" }}>
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-display text-base font-bold mb-2" style={{ color: "#92400E" }}>Free Legal Help</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#78350F" }}>
                  Many states offer free or low-cost legal services for seniors through Area Agencies on Aging. Basic estate documents like a will and power of attorney may be available at no cost.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
