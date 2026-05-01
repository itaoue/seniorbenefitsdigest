/**
 * Government Assistance Programs — Topic Article Page
 */

import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "wouter";
import { toast } from "sonner";

const articles = [
  {
    tag: "SNAP",
    title: "SNAP for Seniors: How to Qualify for Food Benefits Worth Up to $291/Month",
    excerpt: "The Supplemental Nutrition Assistance Program (SNAP) provides monthly food benefits to millions of low-income seniors — yet many who qualify never apply. Here's everything you need to know.",
    readTime: "7 min read",
    date: "April 29, 2024",
    featured: true,
  },
  {
    tag: "Housing Assistance",
    title: "HUD Housing Programs for Seniors: Section 8, Section 202, and More",
    excerpt: "The Department of Housing and Urban Development offers several programs that can dramatically reduce housing costs for seniors on fixed incomes. We explain each program and how to apply.",
    readTime: "8 min read",
    date: "April 22, 2024",
  },
  {
    tag: "LIHEAP",
    title: "LIHEAP Energy Assistance: Get Help Paying Your Heating and Cooling Bills",
    excerpt: "The Low Income Home Energy Assistance Program (LIHEAP) helps seniors pay energy bills. With average utility costs rising, this benefit can be worth hundreds of dollars per year.",
    readTime: "5 min read",
    date: "April 15, 2024",
  },
  {
    tag: "Property Tax",
    title: "Senior Property Tax Exemptions: How to Reduce or Eliminate Your Property Tax Bill",
    excerpt: "Most states offer property tax exemptions, freezes, or deferrals for seniors — but you usually have to apply. We list the programs available in all 50 states.",
    readTime: "9 min read",
    date: "April 8, 2024",
  },
  {
    tag: "Medicaid",
    title: "Medicaid for Seniors: Long-Term Care Coverage Most People Don't Know They Qualify For",
    excerpt: "Medicaid can cover nursing home costs, in-home care, and other long-term care expenses — but the eligibility rules are complex. We explain how to qualify and protect your assets.",
    readTime: "10 min read",
    date: "April 1, 2024",
  },
  {
    tag: "Veterans Benefits",
    title: "VA Benefits for Senior Veterans: Aid & Attendance and Beyond",
    excerpt: "Veterans and their surviving spouses may qualify for VA pension benefits, including the Aid & Attendance allowance worth up to $2,727/month. Here's how to apply.",
    readTime: "8 min read",
    date: "March 25, 2024",
  },
];

const keyFacts = [
  { stat: "$84B", label: "In federal senior benefits go unclaimed each year" },
  { stat: "$291", label: "Max monthly SNAP benefit for a single senior (2024)" },
  { stat: "2,727", label: "Max monthly VA Aid & Attendance benefit" },
  { stat: "50", label: "States with senior property tax relief programs" },
];

export default function GovernmentBenefits() {
  return (
    <ArticleLayout>
      <div className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="font-body text-sm text-gray-400 hover:text-navy no-underline transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-body text-sm font-semibold" style={{ color: "#1B2E5A" }}>Government Benefits</span>
            </div>
            <div className="amber-rule mb-4"><span>Federal & State Programs</span></div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "#1B2E5A" }}>
              🏛️ Government Assistance Programs
            </h1>
            <p className="font-body text-gray-600 text-xl leading-relaxed max-w-2xl">
              Billions of dollars in federal and state assistance go unclaimed every year — not because seniors don't need it, but because they don't know it exists. Our guides help you identify every program you've earned.
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
                <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#1B2E5A" }}>Major Benefit Programs</h3>
                <ul className="space-y-2">
                  {[
                    "SNAP (Food Stamps)",
                    "Medicaid / CHIP",
                    "Medicare Savings Programs",
                    "LIHEAP Energy Assistance",
                    "Section 8 Housing Vouchers",
                    "Section 202 Senior Housing",
                    "VA Pension & Aid & Attendance",
                    "Property Tax Exemptions",
                    "Telephone Lifeline Program",
                    "Weatherization Assistance",
                  ].map(item => (
                    <li key={item} className="font-body text-sm text-gray-600 flex items-center gap-2">
                      <span style={{ color: "#D4A017" }}>›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-6 text-white" style={{ background: "#1B2E5A" }}>
                <h3 className="font-display text-lg font-bold mb-3">How to Apply</h3>
                <div className="space-y-3">
                  {[
                    { step: "1. Check Eligibility", note: "Use Benefits.gov to screen for programs" },
                    { step: "2. Gather Documents", note: "ID, income proof, residency documents" },
                    { step: "3. Apply Online or In-Person", note: "Most programs have online applications" },
                    { step: "4. Follow Up", note: "Processing can take 30–90 days" },
                  ].map(d => (
                    <div key={d.step} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <div className="font-body font-bold text-sm text-white">{d.step}</div>
                      <div className="font-body text-xs text-blue-300">{d.note}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6" style={{ background: "#FEF3C7" }}>
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-display text-base font-bold mb-2" style={{ color: "#92400E" }}>Benefits.gov Tip</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#78350F" }}>
                  The official Benefits.gov website lets you screen for over 1,000 federal benefit programs in minutes. Many seniors qualify for 5–10 programs they've never heard of.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
