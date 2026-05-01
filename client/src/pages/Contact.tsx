/**
 * Contact Us — Contact Page
 * Design: Authoritative Editorial / Financial Broadsheet
 * Colors: Deep Navy #1B2E5A | Amber Gold #D4A017 | Orange CTA #D4521A | Cream #F8F4E8
 */

import { useState } from "react";
import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "wouter";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.firstName || !form.message || !form.category) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! We'll respond within 2 business days.");
  };

  return (
    <ArticleLayout>
      {/* Page Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/"
                className="font-body text-sm text-gray-400 hover:text-navy no-underline transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <span
                className="font-body text-sm font-semibold"
                style={{ color: "#1B2E5A" }}
              >
                Contact Us
              </span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                style={{ background: "#EBF4FB" }}
              >
                ✉️
              </div>
              <div className="amber-rule">
                <span>Get In Touch</span>
              </div>
            </div>
            <h1
              className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight"
              style={{ color: "#1B2E5A" }}
            >
              Contact Senior Benefits Digest
            </h1>
            <p className="font-body text-gray-600 text-xl leading-relaxed max-w-2xl">
              Have a question about your benefits, a suggestion for a topic, or a
              general inquiry? Our team reads every message and typically responds
              within 2 business days.
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
                  <h2
                    className="font-display text-2xl font-bold mb-2"
                    style={{ color: "#1B2E5A" }}
                  >
                    Send Us a Message
                  </h2>
                  <p className="font-body text-gray-500 text-sm mb-8">
                    Fields marked with{" "}
                    <span style={{ color: "#D4521A" }}>*</span> are required. We
                    respond to all messages within 2 business days.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
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
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none transition-colors"
                          style={{ fontSize: "16px" }}
                        />
                      </div>
                      <div>
                        <label className="font-body font-bold text-sm text-gray-700 block mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="e.g. Thompson"
                          className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none transition-colors"
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
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none transition-colors"
                        style={{ fontSize: "16px" }}
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <label className="font-body font-bold text-sm text-gray-700 block mb-2">
                        Topic Category <span style={{ color: "#D4521A" }}>*</span>
                      </label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        required
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none transition-colors bg-white"
                        style={{ fontSize: "16px" }}
                      >
                        <option value="">Select a category...</option>
                        <option value="medicare">🏥 Medicare & Health</option>
                        <option value="social-security">💰 Social Security</option>
                        <option value="retirement">📈 Retirement Income</option>
                        <option value="government">🏛️ Government Benefits</option>
                        <option value="tax">📋 Tax Savings</option>
                        <option value="estate">⚖️ Estate Planning</option>
                        <option value="newsletter">📧 Newsletter Subscription</option>
                        <option value="privacy">🔒 Privacy / Data Request</option>
                        <option value="advertise">📣 Advertising / Partnerships</option>
                        <option value="other">💬 General / Other</option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="font-body font-bold text-sm text-gray-700 block mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Brief summary of your inquiry"
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none transition-colors"
                        style={{ fontSize: "16px" }}
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="font-body font-bold text-sm text-gray-700 block mb-2">
                        Message <span style={{ color: "#D4521A" }}>*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Please describe your question or feedback in as much detail as possible. The more context you provide, the better we can help you."
                        rows={6}
                        required
                        className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 font-body text-gray-800 focus:outline-none transition-colors resize-none"
                        style={{ fontSize: "16px" }}
                      />
                    </div>

                    {/* Disclaimer */}
                    <div
                      className="rounded-lg p-4 border"
                      style={{ background: "#FFFBEB", borderColor: "#FDE68A" }}
                    >
                      <p className="font-body text-xs leading-relaxed" style={{ color: "#92400E" }}>
                        ⚠️ <strong>Important:</strong> We are an independent
                        educational newsletter and are not affiliated with the U.S.
                        Government, Medicare, or the Social Security Administration.
                        We cannot access your personal benefit accounts or make
                        changes on your behalf. For official assistance, please
                        contact{" "}
                        <a
                          href="https://medicare.gov"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          style={{ color: "#92400E" }}
                        >
                          Medicare.gov
                        </a>{" "}
                        or{" "}
                        <a
                          href="https://ssa.gov"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline"
                          style={{ color: "#92400E" }}
                        >
                          SSA.gov
                        </a>
                        .
                      </p>
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="btn-orange w-full py-4 text-base font-bold"
                      >
                        Send Message →
                      </button>
                      <p className="font-body text-xs text-gray-400 text-center mt-3">
                        🔒 Your message is encrypted. We typically respond within 2
                        business days.
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-sm p-10 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto mb-6"
                    style={{ background: "#DCFCE7" }}
                  >
                    ✅
                  </div>
                  <h2
                    className="font-display text-2xl font-bold mb-3"
                    style={{ color: "#1B2E5A" }}
                  >
                    Message Sent!
                  </h2>
                  <p className="font-body text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you, <strong>{form.firstName}</strong>! We've received
                    your message and will respond to{" "}
                    <strong>{form.email}</strong> within 2 business days.
                  </p>
                  <div className="bg-gray-50 rounded-xl p-5 text-left max-w-md mx-auto mb-8">
                    <h3
                      className="font-body font-bold text-sm mb-3"
                      style={{ color: "#1B2E5A" }}
                    >
                      While you wait, explore these resources:
                    </h3>
                    <ul className="space-y-2">
                      {[
                        { label: "Take our free Benefits Quiz", href: "/#quiz" },
                        { label: "Browse Medicare guides", href: "/medicare" },
                        {
                          label: "Social Security strategies",
                          href: "/social-security",
                        },
                        {
                          label: "Subscribe to our free newsletter",
                          href: "/#newsletter",
                        },
                      ].map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className="font-body text-sm no-underline hover:underline flex items-center gap-2"
                            style={{ color: "#1B2E5A" }}
                          >
                            <span style={{ color: "#D4A017" }}>›</span>{" "}
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/" className="btn-orange inline-block no-underline">
                    Return to Home
                  </Link>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3
                  className="font-display text-lg font-bold mb-5"
                  style={{ color: "#1B2E5A" }}
                >
                  Contact Information
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: "📧",
                      label: "General Inquiries",
                      value: "hello@seniorbenefitsdigest.com",
                      href: "mailto:hello@seniorbenefitsdigest.com",
                    },
                    {
                      icon: "🔒",
                      label: "Privacy Requests",
                      value: "privacy@seniorbenefitsdigest.com",
                      href: "mailto:privacy@seniorbenefitsdigest.com",
                    },
                    {
                      icon: "📣",
                      label: "Advertising",
                      value: "advertise@seniorbenefitsdigest.com",
                      href: "mailto:advertise@seniorbenefitsdigest.com",
                    },
                    {
                      icon: "✍️",
                      label: "Editorial",
                      value: "editorial@seniorbenefitsdigest.com",
                      href: "mailto:editorial@seniorbenefitsdigest.com",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-3 items-start">
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <div
                          className="font-body font-bold text-xs uppercase tracking-wider mb-0.5"
                          style={{ color: "#D4A017" }}
                        >
                          {item.label}
                        </div>
                        <a
                          href={item.href}
                          className="font-body text-sm no-underline hover:underline"
                          style={{ color: "#1B2E5A" }}
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response Times */}
              <div
                className="rounded-xl p-6 text-white"
                style={{ background: "#1B2E5A" }}
              >
                <h3 className="font-display text-lg font-bold mb-4">
                  Response Times
                </h3>
                <div className="space-y-3">
                  {[
                    { type: "General Questions", time: "1–2 business days" },
                    { type: "Newsletter Issues", time: "Same business day" },
                    { type: "Privacy Requests", time: "Within 45 days (by law)" },
                    { type: "Advertising Inquiries", time: "2–3 business days" },
                    { type: "Editorial Pitches", time: "5–7 business days" },
                  ].map((item) => (
                    <div
                      key={item.type}
                      className="flex justify-between items-center border-b border-white/10 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="font-body text-sm text-blue-300">
                        {item.type}
                      </span>
                      <span
                        className="font-body font-bold text-xs"
                        style={{ color: "#D4A017" }}
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Shortcut */}
              <div
                className="rounded-xl p-6"
                style={{ background: "#FEF3C7" }}
              >
                <div className="text-2xl mb-3">💡</div>
                <h3
                  className="font-display text-base font-bold mb-2"
                  style={{ color: "#92400E" }}
                >
                  Check Our FAQs First
                </h3>
                <p
                  className="font-body text-sm leading-relaxed mb-4"
                  style={{ color: "#78350F" }}
                >
                  Many common questions about Medicare enrollment, Social Security
                  timing, and newsletter subscriptions are already answered in our
                  FAQ section.
                </p>
                <a
                  href="/#faq"
                  className="font-body font-bold text-sm no-underline hover:underline"
                  style={{ color: "#92400E" }}
                >
                  Browse FAQs →
                </a>
              </div>

              {/* Official Resources */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3
                  className="font-display text-base font-bold mb-4"
                  style={{ color: "#1B2E5A" }}
                >
                  Official Government Resources
                </h3>
                <p className="font-body text-xs text-gray-500 mb-4">
                  For official benefit account questions, contact these agencies
                  directly:
                </p>
                <div className="space-y-3">
                  {[
                    {
                      name: "Medicare.gov",
                      desc: "Medicare enrollment & coverage",
                      phone: "1-800-MEDICARE",
                      href: "https://medicare.gov",
                    },
                    {
                      name: "SSA.gov",
                      desc: "Social Security benefits",
                      phone: "1-800-772-1213",
                      href: "https://ssa.gov",
                    },
                    {
                      name: "Benefits.gov",
                      desc: "Federal benefits eligibility",
                      phone: "",
                      href: "https://benefits.gov",
                    },
                  ].map((res) => (
                    <div
                      key={res.name}
                      className="border-b border-gray-100 pb-3 last:border-0 last:pb-0"
                    >
                      <a
                        href={res.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body font-bold text-sm no-underline hover:underline"
                        style={{ color: "#1B2E5A" }}
                      >
                        {res.name} ↗
                      </a>
                      <div className="font-body text-xs text-gray-500">
                        {res.desc}
                      </div>
                      {res.phone && (
                        <div
                          className="font-body text-xs font-semibold mt-0.5"
                          style={{ color: "#D4521A" }}
                        >
                          {res.phone}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
