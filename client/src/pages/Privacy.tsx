/**
 * Privacy Policy — Legal Page
 */

import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "wouter";

export default function Privacy() {
  return (
    <ArticleLayout>
      <div className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="font-body text-sm text-gray-400 hover:text-navy no-underline transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-body text-sm font-semibold" style={{ color: "#1B2E5A" }}>Privacy Policy</span>
            </div>
            <h1 className="font-display text-4xl font-bold mb-3 leading-tight" style={{ color: "#1B2E5A" }}>Privacy Policy</h1>
            <p className="font-body text-gray-500 text-sm">Last updated: January 1, 2024</p>
          </div>
        </div>
      </div>

      <div className="py-16" style={{ background: "#F8F4E8" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>1. Introduction</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  Senior Benefits Digest ("we," "our," or "us") operates the website seniorbenefitsdigest.com (the "Site"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our Site or subscribe to our newsletter. Please read this policy carefully. If you disagree with its terms, please discontinue use of the Site.
                </p>
                <div className="mt-4 p-4 rounded-lg border border-amber-200" style={{ background: "#FFFBEB" }}>
                  <p className="font-body text-sm font-semibold" style={{ color: "#92400E" }}>
                    ℹ️ We are not affiliated with the U.S. Government, Medicare, Social Security Administration, or any federal or state agency.
                  </p>
                </div>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>2. Information We Collect</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed mb-4">We may collect the following types of information:</p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Personal Information You Provide",
                      items: [
                        "Name and email address (when you subscribe to our newsletter)",
                        "Age range (when you complete our Benefits Quiz)",
                        "Any other information you voluntarily provide",
                      ],
                    },
                    {
                      title: "Automatically Collected Information",
                      items: [
                        "IP address and approximate geographic location",
                        "Browser type and operating system",
                        "Pages visited and time spent on the Site",
                        "Referring URLs and search terms",
                        "Device identifiers and cookie data",
                      ],
                    },
                  ].map(section => (
                    <div key={section.title} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-body font-bold text-gray-800 mb-2">{section.title}</h3>
                      <ul className="space-y-1">
                        {section.items.map(item => (
                          <li key={item} className="font-body text-sm text-gray-600 flex items-start gap-2">
                            <span style={{ color: "#D4A017" }} className="mt-0.5">›</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>3. How We Use Your Information</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="space-y-2">
                  {[
                    "Send you our free weekly newsletter and benefits guides",
                    "Personalize content and recommendations based on your age range",
                    "Send enrollment deadline reminders and important benefit updates",
                    "Improve and optimize our Site and newsletter content",
                    "Analyze usage patterns to better serve our readers",
                    "Comply with legal obligations",
                    "Communicate with you about your subscription",
                  ].map(item => (
                    <li key={item} className="font-body text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>4. Sharing Your Information</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
                </p>
                <div className="space-y-3">
                  {[
                    { title: "Service Providers", desc: "We may share data with trusted third-party service providers who assist us in operating our website and sending our newsletter (e.g., email service providers). These parties are contractually obligated to keep your information confidential." },
                    { title: "Legal Requirements", desc: "We may disclose your information if required by law, court order, or governmental authority, or if we believe disclosure is necessary to protect our rights or the safety of others." },
                    { title: "Business Transfers", desc: "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will notify you via email and/or prominent notice on our Site." },
                  ].map(item => (
                    <div key={item.title} className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-body font-bold text-gray-800 mb-1">{item.title}</h3>
                      <p className="font-body text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>5. Cookies and Tracking Technologies</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies are small files placed on your device that help us remember your preferences and understand how you use our Site.
                </p>
                <p className="font-body text-gray-600 leading-relaxed">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our Site may not function properly.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>6. Your Rights and Choices</h2>
                </div>
                <div className="space-y-3">
                  {[
                    { right: "Unsubscribe", desc: "You may unsubscribe from our newsletter at any time by clicking the 'Unsubscribe' link in any email we send." },
                    { right: "Access & Correction", desc: "You may request access to the personal information we hold about you and request corrections to any inaccurate data." },
                    { right: "Deletion", desc: "You may request that we delete your personal information. We will comply with reasonable requests unless we are required to retain the information by law." },
                    { right: "Do Not Sell", desc: "We do not sell your personal information. California residents may submit a 'Do Not Sell My Personal Information' request via our Contact page." },
                  ].map(item => (
                    <div key={item.right} className="flex gap-3">
                      <span className="font-body font-bold text-sm whitespace-nowrap" style={{ color: "#1B2E5A" }}>{item.right}:</span>
                      <p className="font-body text-sm text-gray-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>7. Data Security</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  We implement reasonable administrative, technical, and physical security measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>8. Children's Privacy</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  Our Site is intended for adults 55 and older and is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact us immediately.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>9. Changes to This Policy</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>10. Contact Us</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 font-body text-sm text-gray-700 space-y-1">
                  <p><strong>Senior Benefits Digest</strong></p>
                  <p>Email: privacy@seniorbenefitsdigest.com</p>
                  <p>Website: seniorbenefitsdigest.com</p>
                </div>
              </section>

            </div>
          </div>
        </div>
      </div>
    </ArticleLayout>
  );
}
