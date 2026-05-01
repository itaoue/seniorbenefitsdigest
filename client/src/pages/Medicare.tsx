/**
 * Medicare & Health Savings — Topic Article Page
 * Design: Authoritative Editorial / Financial Broadsheet
 */

import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

const articles = [
  {
    tag: "Medicare Advantage",
    title: "Medicare Advantage vs. Original Medicare: Which Plan Saves You More in 2024?",
    excerpt: "Millions of seniors are switching to Medicare Advantage — but is it right for you? We break down the real cost differences, coverage gaps, and hidden benefits that most people overlook.",
    readTime: "8 min read",
    date: "April 29, 2024",
    featured: true,
  },
  {
    tag: "Extra Help",
    title: "The $5,000 Medicare Prescription Benefit Most Seniors Don't Know About",
    excerpt: "The Extra Help program (also called the Low Income Subsidy) can eliminate or dramatically reduce your Medicare Part D drug costs. Here's exactly who qualifies and how to apply.",
    readTime: "6 min read",
    date: "April 22, 2024",
  },
  {
    tag: "Medigap",
    title: "Medigap Plans Explained: How to Choose the Right Supplement Coverage",
    excerpt: "Original Medicare leaves significant gaps — deductibles, copays, and coinsurance that can add up to thousands per year. A Medigap policy can cover most of these costs.",
    readTime: "7 min read",
    date: "April 15, 2024",
  },
  {
    tag: "Open Enrollment",
    title: "Medicare Open Enrollment 2024: Key Dates and What to Review",
    excerpt: "Medicare Open Enrollment runs October 15 – December 7 each year. Missing this window could lock you into a plan that costs you thousands more than necessary.",
    readTime: "5 min read",
    date: "April 8, 2024",
  },
  {
    tag: "Dental & Vision",
    title: "Does Medicare Cover Dental and Vision? Here's What You Need to Know",
    excerpt: "Original Medicare does not cover routine dental or vision care — but Medicare Advantage plans often do. We explain your options and how to find the best coverage.",
    readTime: "6 min read",
    date: "April 1, 2024",
  },
  {
    tag: "Medicare Savings Programs",
    title: "4 Medicare Savings Programs That Pay Your Premiums For You",
    excerpt: "If your income is below a certain threshold, state Medicare Savings Programs can pay your Part B premium ($174.70/month in 2024) and more. Find out if you qualify.",
    readTime: "5 min read",
    date: "March 25, 2024",
  },
];

const keyFacts = [
  { stat: "$174.70", label: "Standard Part B monthly premium in 2024" },
  { stat: "$0", label: "Part B premium with Medicare Savings Program" },
  { stat: "43M+", label: "Americans enrolled in Medicare Advantage" },
  { stat: "$5,000+", label: "Avg. Extra Help savings per year on prescriptions" },
];

export default function Medicare() {
  return (
    <ArticleLayout>
      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="font-body text-sm text-gray-400 hover:text-navy no-underline transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-body text-sm text-navy font-semibold">Medicare & Health</span>
            </div>
            <div className="amber-rule mb-4"><span>Health Coverage</span></div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4 leading-tight">
              🏥 Medicare & Health Savings
            </h1>
            <p className="font-body text-gray-600 text-xl leading-relaxed max-w-2xl">
              Medicare is the foundation of senior health coverage — but most Americans are paying far more than they need to. Our guides help you maximize every benefit, minimize your costs, and never miss an enrollment deadline.
            </p>
          </div>
        </div>
      </div>

      {/* Key Facts Bar */}
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

      {/* Articles */}
      <div className="bg-cream py-16" style={{ background: "#F8F4E8" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Featured article */}
            <div className="lg:col-span-2">
              {articles.filter(a => a.featured).map((article, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden mb-8 border-l-4" style={{ borderColor: "#D4A017" }}>
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-body text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white" style={{ background: "#1B2E5A" }}>
                        ★ Featured
                      </span>
                      <span className="font-body text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full" style={{ background: "#FEF3C7", color: "#92400E" }}>
                        {article.tag}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl font-bold text-navy mb-3 leading-tight">{article.title}</h2>
                    <p className="font-body text-gray-600 text-lg leading-relaxed mb-6">{article.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-sm text-gray-400 font-body">
                        <span>{article.date}</span>
                        <span>·</span>
                        <span>{article.readTime}</span>
                      </div>
                      <button onClick={() => toast.info("Full article coming soon — subscribe to get notified!")} className="btn-orange text-sm py-2 px-5">
                        Read Article →
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Other articles */}
              <div className="space-y-5">
                {articles.filter(a => !a.featured).map((article, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="font-body text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded" style={{ background: "#EBF4FB", color: "#1B2E5A" }}>
                          {article.tag}
                        </span>
                        <h3 className="font-display text-lg font-bold text-navy mt-2 mb-2 leading-snug">{article.title}</h3>
                        <p className="font-body text-gray-500 text-sm leading-relaxed mb-3">{article.excerpt}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-400 font-body">
                          <span>{article.date}</span>
                          <span>·</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <button onClick={() => toast.info("Full article coming soon — subscribe to get notified!")} className="font-body text-sm font-bold text-navy hover:text-orange-600 transition-colors whitespace-nowrap flex-shrink-0 mt-1" style={{ color: "#1B2E5A" }}>
                        Read →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-display text-lg font-bold text-navy mb-4">Key Medicare Topics</h3>
                <ul className="space-y-2">
                  {["Medicare Part A (Hospital)", "Medicare Part B (Medical)", "Medicare Part C (Advantage)", "Medicare Part D (Prescriptions)", "Medigap Supplement Plans", "Extra Help / LIS Program", "Medicare Savings Programs", "IRMAA Surcharges"].map(item => (
                    <li key={item} className="font-body text-sm text-gray-600 flex items-center gap-2">
                      <span style={{ color: "#D4A017" }}>›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-6 text-white" style={{ background: "#1B2E5A" }}>
                <h3 className="font-display text-lg font-bold mb-3">Medicare Enrollment Deadlines</h3>
                <div className="space-y-3">
                  {[
                    { period: "Initial Enrollment", dates: "3 months before/after your 65th birthday" },
                    { period: "Open Enrollment", dates: "Oct 15 – Dec 7 annually" },
                    { period: "General Enrollment", dates: "Jan 1 – Mar 31 annually" },
                    { period: "Special Enrollment", dates: "Triggered by qualifying life events" },
                  ].map(d => (
                    <div key={d.period} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <div className="font-body font-bold text-sm text-white">{d.period}</div>
                      <div className="font-body text-xs text-blue-300">{d.dates}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6" style={{ background: "#FEF3C7" }}>
                <div className="text-3xl mb-3">💡</div>
                <h3 className="font-display text-base font-bold mb-2" style={{ color: "#92400E" }}>Did You Know?</h3>
                <p className="font-body text-sm leading-relaxed" style={{ color: "#78350F" }}>
                  Over 13 million Medicare beneficiaries qualify for Extra Help with prescription costs, but fewer than half are enrolled. This program can save you up to $5,000 per year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
