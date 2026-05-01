/**
 * Social Security Strategies — Topic Article Page
 * Design: Authoritative Editorial / Financial Broadsheet
 */

import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "wouter";
import { toast } from "sonner";

const articles = [
  {
    tag: "Claiming Strategy",
    title: "The $182,000 Decision: When Should You Start Claiming Social Security?",
    excerpt: "Claiming at 62 vs. 70 can mean a difference of over $182,000 in lifetime benefits for the average American. We break down the math and the factors that should drive your decision.",
    readTime: "10 min read",
    date: "April 29, 2024",
    featured: true,
  },
  {
    tag: "Spousal Benefits",
    title: "Spousal Social Security Benefits: How Couples Can Maximize Their Combined Income",
    excerpt: "Married couples have powerful strategies available — including spousal benefits worth up to 50% of a partner's benefit. Here's how to coordinate your claiming for maximum lifetime income.",
    readTime: "8 min read",
    date: "April 22, 2024",
  },
  {
    tag: "Survivor Benefits",
    title: "Social Security Survivor Benefits: What Widows and Widowers Need to Know",
    excerpt: "Surviving spouses may be entitled to up to 100% of their deceased partner's Social Security benefit. Understanding the rules can make a significant difference in your retirement income.",
    readTime: "7 min read",
    date: "April 15, 2024",
  },
  {
    tag: "COLA",
    title: "Social Security COLA 2024: How the Cost-of-Living Adjustment Affects Your Check",
    excerpt: "Social Security benefits received a 3.2% COLA increase in 2024. We explain how COLA is calculated, what it means for your monthly check, and what to expect in future years.",
    readTime: "5 min read",
    date: "April 8, 2024",
  },
  {
    tag: "Working & Benefits",
    title: "Can You Work and Collect Social Security at the Same Time?",
    excerpt: "Yes — but there are earnings limits before full retirement age that can temporarily reduce your benefits. We explain the rules and strategies to minimize any reduction.",
    readTime: "6 min read",
    date: "April 1, 2024",
  },
  {
    tag: "SSDI & SSI",
    title: "SSDI vs. SSI: Understanding Disability Benefits for Seniors",
    excerpt: "Social Security Disability Insurance (SSDI) and Supplemental Security Income (SSI) are two distinct programs with different eligibility rules. Here's how to tell which one applies to you.",
    readTime: "7 min read",
    date: "March 25, 2024",
  },
];

const keyFacts = [
  { stat: "3.2%", label: "2024 Social Security COLA increase" },
  { stat: "$4,873", label: "Maximum monthly benefit at age 70 (2024)" },
  { stat: "8%", label: "Annual increase for each year you delay past 62" },
  { stat: "30%", label: "Benefit reduction for claiming at 62 vs. full retirement age" },
];

export default function SocialSecurity() {
  return (
    <ArticleLayout>
      <div className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="font-body text-sm text-gray-400 hover:text-navy no-underline transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-body text-sm font-semibold" style={{ color: "#1B2E5A" }}>Social Security</span>
            </div>
            <div className="amber-rule mb-4"><span>Retirement Income</span></div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "#1B2E5A" }}>
              💰 Social Security Strategies
            </h1>
            <p className="font-body text-gray-600 text-xl leading-relaxed max-w-2xl">
              Social Security is the largest source of retirement income for most Americans — yet most people claim it suboptimally, leaving tens of thousands of dollars on the table. Our guides help you make the smartest claiming decisions.
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
                <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#1B2E5A" }}>Claiming Age Comparison</h3>
                <div className="space-y-3">
                  {[
                    { age: "Age 62", benefit: "70% of full benefit", color: "#EF4444" },
                    { age: "Age 65", benefit: "~93% of full benefit", color: "#F59E0B" },
                    { age: "Age 67 (FRA)", benefit: "100% of full benefit", color: "#10B981" },
                    { age: "Age 70", benefit: "124% of full benefit", color: "#1B2E5A" },
                  ].map(row => (
                    <div key={row.age} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                      <span className="font-body font-bold text-sm" style={{ color: row.color }}>{row.age}</span>
                      <span className="font-body text-sm text-gray-600">{row.benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 text-white" style={{ background: "#1B2E5A" }}>
                <h3 className="font-display text-lg font-bold mb-3">Key SS Deadlines</h3>
                <div className="space-y-3">
                  {[
                    { event: "Apply 4 months early", note: "Benefits don't start automatically" },
                    { event: "Age 62", note: "Earliest claiming age (reduced benefit)" },
                    { event: "Age 65", note: "Medicare eligibility begins" },
                    { event: "Age 67", note: "Full Retirement Age (born 1960+)" },
                    { event: "Age 70", note: "Maximum benefit — no reason to delay further" },
                  ].map(d => (
                    <div key={d.event} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <div className="font-body font-bold text-sm text-white">{d.event}</div>
                      <div className="font-body text-xs text-blue-300">{d.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6" style={{ background: "#FEF3C7" }}>
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-display text-base font-bold mb-2" style={{ color: "#92400E" }}>Break-Even Analysis</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#78350F" }}>
                  If you delay claiming from 62 to 70, you'll need to live past age 80 to come out ahead. The average American woman lives to 87 — making delayed claiming a smart bet for most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
