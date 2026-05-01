/**
 * Tax Reduction Strategies — Topic Article Page
 */

import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "wouter";
import { toast } from "sonner";

const articles = [
  {
    tag: "Senior Tax Deductions",
    title: "12 Tax Deductions Every Retiree Should Be Taking in 2024",
    excerpt: "From the higher standard deduction for seniors to medical expense deductions and Social Security tax strategies, these 12 deductions can save the average retiree thousands of dollars per year.",
    readTime: "10 min read",
    date: "April 29, 2024",
    featured: true,
  },
  {
    tag: "Social Security Taxes",
    title: "How to Reduce or Eliminate Taxes on Your Social Security Benefits",
    excerpt: "Up to 85% of your Social Security benefits may be taxable — but with the right income management strategy, you can significantly reduce or even eliminate this tax burden.",
    readTime: "8 min read",
    date: "April 22, 2024",
  },
  {
    tag: "Roth Conversion",
    title: "The Roth Conversion Window: Why the Years Before RMDs Are Critical",
    excerpt: "The years between retirement and age 73 (when RMDs begin) are often a golden opportunity for Roth conversions at lower tax rates. Here's how to take advantage of this window.",
    readTime: "7 min read",
    date: "April 15, 2024",
  },
  {
    tag: "Medical Deductions",
    title: "Medical Expense Deductions for Seniors: What Qualifies and How to Maximize Them",
    excerpt: "If your medical expenses exceed 7.5% of your adjusted gross income, you can deduct the excess. For many seniors, this threshold is surprisingly easy to meet.",
    readTime: "6 min read",
    date: "April 8, 2024",
  },
  {
    tag: "Capital Gains",
    title: "0% Capital Gains Tax: How Retirees Can Sell Investments Tax-Free",
    excerpt: "If your taxable income is below $47,025 (single) or $94,050 (married), you pay zero federal tax on long-term capital gains. Strategic income management can keep you in this bracket.",
    readTime: "7 min read",
    date: "April 1, 2024",
  },
  {
    tag: "QCDs",
    title: "Qualified Charitable Distributions: Give to Charity and Reduce Your Tax Bill",
    excerpt: "If you're 70½ or older, you can donate up to $105,000 directly from your IRA to charity — and it counts toward your RMD without being added to your taxable income.",
    readTime: "5 min read",
    date: "March 25, 2024",
  },
];

const keyFacts = [
  { stat: "$1,850", label: "Extra standard deduction for seniors 65+ (single filer, 2024)" },
  { stat: "7.5%", label: "AGI threshold for medical expense deductions" },
  { stat: "$105K", label: "Max annual Qualified Charitable Distribution" },
  { stat: "0%", label: "Capital gains rate for income below $94,050 (MFJ)" },
];

export default function TaxSavings() {
  return (
    <ArticleLayout>
      <div className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="font-body text-sm text-gray-400 hover:text-navy no-underline transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-body text-sm font-semibold" style={{ color: "#1B2E5A" }}>Tax Savings</span>
            </div>
            <div className="amber-rule mb-4"><span>Tax Savings</span></div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "#1B2E5A" }}>
              📋 Tax Reduction Strategies
            </h1>
            <p className="font-body text-gray-600 text-xl leading-relaxed max-w-2xl">
              Taxes don't stop in retirement — but with the right strategies, most seniors can dramatically reduce their tax burden. Our guides cover every legal tax-saving opportunity available to Americans 55+.
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
                <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#1B2E5A" }}>2024 Senior Tax Breaks</h3>
                <div className="space-y-3">
                  {[
                    { item: "Standard Deduction (65+, single)", value: "$16,550" },
                    { item: "Standard Deduction (65+, married)", value: "$30,750" },
                    { item: "Medical Deduction Threshold", value: "7.5% of AGI" },
                    { item: "0% Capital Gains Threshold (MFJ)", value: "$94,050" },
                    { item: "Max QCD to Charity", value: "$105,000" },
                    { item: "IRA Contribution Limit (50+)", value: "$8,000" },
                  ].map(row => (
                    <div key={row.item} className="flex items-start justify-between py-2 border-b border-gray-100 last:border-0 gap-2">
                      <span className="font-body text-sm text-gray-600">{row.item}</span>
                      <span className="font-body font-bold text-sm whitespace-nowrap" style={{ color: "#1B2E5A" }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 text-white" style={{ background: "#1B2E5A" }}>
                <h3 className="font-display text-lg font-bold mb-3">SS Benefit Taxation</h3>
                <div className="space-y-3">
                  {[
                    { income: "Under $25K (single)", tax: "0% of SS taxable" },
                    { income: "$25K–$34K (single)", tax: "Up to 50% taxable" },
                    { income: "Over $34K (single)", tax: "Up to 85% taxable" },
                    { income: "Under $32K (married)", tax: "0% of SS taxable" },
                    { income: "Over $44K (married)", tax: "Up to 85% taxable" },
                  ].map(d => (
                    <div key={d.income} className="border-b border-white/10 pb-2 last:border-0 last:pb-0">
                      <div className="font-body text-xs text-blue-300">{d.income}</div>
                      <div className="font-body font-bold text-sm text-white">{d.tax}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6" style={{ background: "#FEF3C7" }}>
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-display text-base font-bold mb-2" style={{ color: "#92400E" }}>Free Tax Help for Seniors</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#78350F" }}>
                  The IRS VITA and AARP Tax-Aide programs offer free tax preparation for seniors. AARP Tax-Aide helped over 1.7 million seniors file their taxes for free in 2023.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
