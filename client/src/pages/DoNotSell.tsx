/**
 * Do Not Sell My Data — CCPA/CPRA Opt-Out Page
 * Design: Authoritative Editorial / Financial Broadsheet
 * Colors: Deep Navy #1B2E5A | Amber Gold #D4A017 | Orange CTA #D4521A | Cream #F8F4E8
 */

import { useState } from "react";
import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "wouter";
import { toast } from "sonner";

export default function DoNotSell() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", state: "", requestType: "opt-out", details: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.firstName || !form.state) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Your request has been received. We will respond within 45 days.");
  };

  return (
    <ArticleLayout>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="font-body text-sm text-gray-400 hover:text-navy no-underline transition-colors" style={{ color: "" }}>Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-body text-sm font-semibold" style={{ color: "#1B2E5A" }}>Do Not Sell My Data</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl" style={{ background: "#EBF4FB" }}>🔒</div>
              <div className="amber-rule"><span>Your Privacy Rights</span></div>
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ color: "#1B2E5A" }}>
              Do Not Sell or Share My Personal Information
            </h1>
            <p className="font-body text-gray-600 text-xl leading-relaxed max-w-2xl">
              Under the California Consumer Privacy Act (CCPA) and other applicable state privacy laws, you have the right to opt out of the sale or sharing of your personal information. Use this page to submit your request.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16" style={{ background: "#F8F4E8" }}>
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {/* Form */}
            <div className="lg:col-span-2">
              {!submitted ? (
                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
                  <h2 className="font-display text-2xl font-bold mb-2" style={{ color: "#1B2E5A" }}>Submit Your Privacy Request</h2>
                  <p className="font-body text-gray-500 text-sm mb-8">
                    We will process your request within <strong>45 calendar days</strong> as required by law. Fields marked with <span style={{ color: "#D4521A" }}>*</span> are required.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Request Type */}
                    <div>
                      <label className="font-body font-bold text-sm text-gray-700 block mb-3">
                        Request Type <span style={{ color: "#D4521A" }}>*</span>
                      </label>
                      <div className="space-y-3">
                        {[
                          { value: "opt-out", label: "Opt Out of Sale/Sharing", desc: "Stop us from selling or sharing your personal information with third parties." },
                          { value: "delete", label: "Delete My Data", desc: "Request deletion of all personal information we hold about you." },
                          { value: "access", label: "Access My Data", desc: "Request a copy of the personal information we have collected about you." },
                          { value: "correct", label: "Correct My Data", desc: "Request corrections to inaccurate personal information we hold." },
                        ].map(opt => (
                          <label key={opt.value} className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${form.requestType === opt.value ? "border-navy bg-blue-50" : "border-gray-200 hover:border-gray-300"}`} style={{ borderColor: form.requestType === opt.value ? "#1B2E5A" : "" }}>
                            <input
                              type="radio"
                              name="requestType"
                              value={opt.value}
                              checked={form.requestType === opt.value}
                              onChange={handleChange}
                              className="mt-1 accent-navy"
                            />
                            <div>
                              <div className="font-body font-bold text-sm" style={{ color: "#1B2E5A" }}>{opt.label}</div>
                              <div className="font-body text-xs text-gray-500 mt-0.5">{opt.desc}</div>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-body font-bold text-sm text-gray-700 block mb-2">
                          First Name <span style={{ color: "#D4521A" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="e.g. Margaret"
                          required
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none focus:border-navy transition-colors"
                          style={{ fontSize: "16px" }}
                        />
                      </div>
                      <div>
                        <label className="font-body font-bold text-sm text-gray-700 block mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="e.g. Thompson"
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none focus:border-navy transition-colors"
                          style={{ fontSize: "16px" }}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="font-body font-bold text-sm text-gray-700 block mb-2">
                        Email Address <span style={{ color: "#D4521A" }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none focus:border-navy transition-colors"
                        style={{ fontSize: "16px" }}
                      />
                      <p className="font-body text-xs text-gray-400 mt-1.5">Use the email address associated with your subscription.</p>
                    </div>

                    {/* State */}
                    <div>
                      <label className="font-body font-bold text-sm text-gray-700 block mb-2">
                        State of Residence <span style={{ color: "#D4521A" }}>*</span>
                      </label>
                      <select
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none focus:border-navy transition-colors bg-white"
                        style={{ fontSize: "16px" }}
                      >
                        <option value="">Select your state...</option>
                        {["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    {/* Additional Details */}
                    <div>
                      <label className="font-body font-bold text-sm text-gray-700 block mb-2">Additional Details (Optional)</label>
                      <textarea
                        name="details"
                        value={form.details}
                        onChange={handleChange}
                        placeholder="Any additional information about your request..."
                        rows={4}
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none focus:border-navy transition-colors resize-none"
                        style={{ fontSize: "16px" }}
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button type="submit" className="btn-orange w-full py-4 text-base font-bold">
                        Submit Privacy Request →
                      </button>
                      <p className="font-body text-xs text-gray-400 text-center mt-3">
                        🔒 Your request is encrypted and processed securely. We will respond within 45 days.
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-6" style={{ background: "#DCFCE7" }}>✅</div>
                  <h2 className="font-display text-2xl font-bold mb-3" style={{ color: "#1B2E5A" }}>Request Received</h2>
                  <p className="font-body text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you, <strong>{form.firstName}</strong>. We have received your <strong>{form.requestType === "opt-out" ? "opt-out" : form.requestType}</strong> request for <strong>{form.email}</strong>.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-5 text-left max-w-md mx-auto mb-6">
                    <h3 className="font-body font-bold text-sm mb-3" style={{ color: "#1B2E5A" }}>What happens next:</h3>
                    <ul className="space-y-2">
                      {[
                        "We will verify your identity via the email address provided",
                        "Your request will be processed within 45 calendar days",
                        "You will receive a confirmation email at " + form.email,
                        "If we need more information, we will contact you",
                      ].map(item => (
                        <li key={item} className="font-body text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/" className="btn-orange inline-block no-underline">Return to Home</Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Your Rights */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-display text-lg font-bold mb-4" style={{ color: "#1B2E5A" }}>Your Privacy Rights</h3>
                <div className="space-y-4">
                  {[
                    { right: "Right to Know", desc: "Request disclosure of the personal information we collect, use, and share about you.", icon: "📋" },
                    { right: "Right to Delete", desc: "Request deletion of personal information we have collected from you.", icon: "🗑️" },
                    { right: "Right to Opt Out", desc: "Opt out of the sale or sharing of your personal information.", icon: "🚫" },
                    { right: "Right to Correct", desc: "Request correction of inaccurate personal information we hold.", icon: "✏️" },
                    { right: "Right to Non-Discrimination", desc: "We will not discriminate against you for exercising your privacy rights.", icon: "⚖️" },
                  ].map(item => (
                    <div key={item.right} className="flex gap-3">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <div className="font-body font-bold text-sm" style={{ color: "#1B2E5A" }}>{item.right}</div>
                        <div className="font-body text-xs text-gray-500 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applicable Laws */}
              <div className="rounded-xl p-6 text-white" style={{ background: "#1B2E5A" }}>
                <h3 className="font-display text-lg font-bold mb-4">Applicable Laws</h3>
                <div className="space-y-3">
                  {[
                    { law: "CCPA / CPRA", state: "California", desc: "California Consumer Privacy Act" },
                    { law: "CPA", state: "Colorado", desc: "Colorado Privacy Act" },
                    { law: "CTDPA", state: "Connecticut", desc: "Connecticut Data Privacy Act" },
                    { law: "VCDPA", state: "Virginia", desc: "Virginia Consumer Data Protection Act" },
                    { law: "UCPA", state: "Utah", desc: "Utah Consumer Privacy Act" },
                  ].map(item => (
                    <div key={item.law} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center">
                        <span className="font-body font-bold text-sm text-white">{item.law}</span>
                        <span className="font-body text-xs text-blue-300">{item.state}</span>
                      </div>
                      <div className="font-body text-xs text-blue-400 mt-0.5">{item.desc}</div>
                    </div>
                  ))}
                </div>
                <p className="font-body text-xs text-blue-400 mt-4">
                  Even if you are not a resident of these states, we will honor your opt-out request.
                </p>
              </div>

              {/* What We Collect */}
              <div className="rounded-xl p-6" style={{ background: "#FEF3C7" }}>
                <div className="text-2xl mb-3">📊</div>
                <h3 className="font-display text-base font-bold mb-3" style={{ color: "#92400E" }}>What We May Share</h3>
                <ul className="space-y-1.5">
                  {[
                    "Email address",
                    "Name (if provided)",
                    "Age range (from quiz)",
                    "IP address / location",
                    "Browsing behavior on our site",
                  ].map(item => (
                    <li key={item} className="font-body text-sm flex items-center gap-2" style={{ color: "#78350F" }}>
                      <span style={{ color: "#D4A017" }}>›</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs mt-3" style={{ color: "#92400E" }}>
                  We <strong>never sell</strong> your data to data brokers. Sharing is limited to service providers who help us operate our newsletter.
                </p>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-display text-base font-bold mb-3" style={{ color: "#1B2E5A" }}>Need Help?</h3>
                <p className="font-body text-sm text-gray-600 mb-3">
                  If you have questions about your privacy rights or this request process, contact our Privacy Team:
                </p>
                <div className="font-body text-sm space-y-1">
                  <p className="text-gray-700">📧 <a href="mailto:privacy@seniorbenefitsdigest.com" className="no-underline hover:underline" style={{ color: "#1B2E5A" }}>privacy@seniorbenefitsdigest.com</a></p>
                  <p className="text-gray-500 text-xs">Response time: within 45 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
