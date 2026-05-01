/**
 * Retirement Income Planning — Topic Article Page
 */

import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "wouter";
import { toast } from "sonner";

const articles = [
  {
    tag: "Withdrawal Strategy",
    title: "The 4% Rule in 2024: Does It Still Work for Your Retirement?",
    excerpt: "The classic 4% withdrawal rule has guided retirees for decades — but rising inflation and longer lifespans are forcing a rethink. We examine updated strategies to make your savings last.",
    readTime: "9 min read",
    date: "April 29, 2024",
    featured: true,
  },
  {
    tag: "Required Minimum Distributions",
    title: "RMDs Explained: How to Minimize the Tax Hit on Your Required Withdrawals",
    excerpt: "Once you turn 73, the IRS requires you to withdraw a minimum amount from your traditional IRA and 401(k) each year. Smart planning can dramatically reduce the tax impact.",
    readTime: "8 min read",
    date: "April 22, 2024",
  },
  {
    tag: "Roth Conversion",
    title: "Roth Conversion Ladder: A Tax-Free Income Strategy for Retirees",
    excerpt: "Converting traditional IRA funds to a Roth IRA during low-income years can create a tax-free income stream in retirement. Here's how to execute this strategy effectively.",
    readTime: "7 min read",
    date: "April 15, 2024",
  },
  {
    tag: "Pension",
    title: "Pension Maximization: Lump Sum vs. Monthly Annuity — Which Is Better?",
    excerpt: "If you have a pension, you'll face a critical choice: take a lump sum or monthly payments. The right answer depends on your health, other income sources, and risk tolerance.",
    readTime: "8 min read",
    date: "April 8, 2024",
  },
  {
    tag: "401(k) Rollover",
    title: "Rolling Over Your 401(k) to an IRA: A Step-by-Step Guide",
    excerpt: "When you leave a job or retire, rolling your 401(k) into an IRA can give you more investment options and potentially lower fees. Here's how to do it without triggering taxes.",
    readTime: "6 min read",
    date: "April 1, 2024",
  },
  {
    tag: "Annuities",
    title: "Are Annuities Right for You? A Plain-English Guide for Retirees",
    excerpt: "Annuities can provide guaranteed lifetime income — but they come with complexity and fees. We cut through the jargon to help you decide if an annuity belongs in your retirement plan.",
    readTime: "7 min read",
    date: "March 25, 2024",
  },
];

const keyFacts = [
  { stat: "4%", label: "Classic safe withdrawal rate from retirement savings" },
  { stat: "$1.46M", label: "Avg. savings needed for a 30-year retirement (2024)" },
  { stat: "73", label: "Age when Required Minimum Distributions begin" },
  { stat: "10%", label: "Early withdrawal penalty before age 59½" },
];

export default function RetirementIncome() {
  return (
    <ArticleLayout>
      <div className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="font-body text-sm text-gray-400 hover:text-navy no-underline transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-body text-sm font-semibold" style={{ color: "#1B2E5A" }}>Retirement Income</span>
            </div>
            <div className="amber-rule mb-4"><span>Financial Security</span></div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "#1B2E5A" }}>
              📈 Retirement Income Planning
            </h1>
            <p className="font-body text-gray-600 text-xl leading-relaxed max-w-2xl">
              Building a sustainable retirement income requires more than just saving — it demands smart withdrawal strategies, tax planning, and a clear understanding of every income source available to you.
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
                <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#1B2E5A" }}>Retirement Income Sources</h3>
                <div className="space-y-3">
                  {[
                    { source: "Social Security", pct: "33%", color: "#1B2E5A" },
                    { source: "Pensions", pct: "19%", color: "#D4A017" },
                    { source: "Earnings", pct: "24%", color: "#D4521A" },
                    { source: "Assets / Savings", pct: "18%", color: "#10B981" },
                    { source: "Other", pct: "6%", color: "#9CA3AF" },
                  ].map(row => (
                    <div key={row.source}>
                      <div className="flex justify-between text-sm font-body mb-1">
                        <span className="text-gray-700">{row.source}</span>
                        <span className="font-bold" style={{ color: row.color }}>{row.pct}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: row.pct, background: row.color }} />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-body text-xs text-gray-400 mt-3">Source: Social Security Administration, 2023</p>
              </div>

              <div className="rounded-xl p-6 text-white" style={{ background: "#1B2E5A" }}>
                <h3 className="font-display text-lg font-bold mb-3">RMD Age Timeline</h3>
                <div className="space-y-3">
                  {[
                    { age: "Born before 1951", rmd: "RMDs started at age 70½" },
                    { age: "Born 1951–1959", rmd: "RMDs start at age 73" },
                    { age: "Born 1960 or later", rmd: "RMDs start at age 75" },
                  ].map(d => (
                    <div key={d.age} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <div className="font-body font-bold text-sm text-white">{d.age}</div>
                      <div className="font-body text-xs text-blue-300">{d.rmd}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6" style={{ background: "#FEF3C7" }}>
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-display text-base font-bold mb-2" style={{ color: "#92400E" }}>Sequence of Returns Risk</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#78350F" }}>
                  A market downturn in your first few years of retirement can permanently damage your portfolio — even if markets recover later. This "sequence risk" is why withdrawal strategy matters as much as savings rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
