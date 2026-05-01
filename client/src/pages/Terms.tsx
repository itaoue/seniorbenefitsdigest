/**
 * Terms & Conditions — Legal Page
 */

import ArticleLayout from "@/components/ArticleLayout";
import { Link } from "wouter";

export default function Terms() {
  return (
    <ArticleLayout>
      <div className="bg-white border-b border-gray-100">
        <div className="container py-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/" className="font-body text-sm text-gray-400 hover:text-navy no-underline transition-colors">Home</Link>
              <span className="text-gray-300">/</span>
              <span className="font-body text-sm font-semibold" style={{ color: "#1B2E5A" }}>Terms & Conditions</span>
            </div>
            <h1 className="font-display text-4xl font-bold mb-3 leading-tight" style={{ color: "#1B2E5A" }}>Terms & Conditions</h1>
            <p className="font-body text-gray-500 text-sm">Last updated: January 1, 2024</p>
          </div>
        </div>
      </div>

      <div className="py-16" style={{ background: "#F8F4E8" }}>
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* Important Disclaimer Box */}
            <div className="rounded-xl p-6 mb-8 border-2" style={{ background: "#FEF3C7", borderColor: "#D4A017" }}>
              <h2 className="font-display text-lg font-bold mb-2" style={{ color: "#92400E" }}>⚠️ Important Disclaimer</h2>
              <p className="font-body text-sm leading-relaxed" style={{ color: "#78350F" }}>
                Senior Benefits Digest is an independent educational newsletter and website. We are <strong>not affiliated with, endorsed by, or connected to</strong> the U.S. Government, the Centers for Medicare & Medicaid Services (CMS), the Social Security Administration (SSA), or any other federal or state agency. The information provided on this Site is for general educational purposes only and does not constitute legal, financial, tax, or medical advice.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 space-y-8">

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>1. Acceptance of Terms</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  By accessing or using the Senior Benefits Digest website (seniorbenefitsdigest.com) or subscribing to our newsletter, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our Site or services.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>2. Description of Service</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  Senior Benefits Digest provides a free weekly email newsletter and website containing educational information about:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                    "Medicare and health insurance options for seniors",
                    "Social Security claiming strategies",
                    "Retirement income planning",
                    "Federal and state government assistance programs",
                    "Tax reduction strategies for retirees",
                    "Estate and legal planning basics",
                  ].map(item => (
                    <li key={item} className="font-body text-sm text-gray-600 flex items-start gap-2">
                      <span style={{ color: "#D4A017" }}>›</span> {item}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-gray-600 leading-relaxed">
                  All content is provided for general educational and informational purposes only. Nothing on this Site constitutes professional financial, legal, tax, or medical advice.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>3. No Professional Advice</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  The information provided on this Site and in our newsletter is for general informational purposes only. It is not intended to be a substitute for professional advice. Always seek the advice of qualified professionals:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { type: "Financial Advice", pro: "Licensed financial advisor or CFP" },
                    { type: "Legal Advice", pro: "Licensed attorney in your state" },
                    { type: "Tax Advice", pro: "CPA or enrolled agent" },
                    { type: "Medical Advice", pro: "Licensed physician or healthcare provider" },
                    { type: "Medicare Guidance", pro: "Licensed insurance agent or SHIP counselor" },
                    { type: "Social Security", pro: "SSA representative at ssa.gov" },
                  ].map(item => (
                    <div key={item.type} className="bg-gray-50 rounded-lg p-3">
                      <div className="font-body font-bold text-sm" style={{ color: "#1B2E5A" }}>{item.type}</div>
                      <div className="font-body text-xs text-gray-500">{item.pro}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>4. Accuracy of Information</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  We strive to provide accurate and up-to-date information. However, benefit rules, income thresholds, program eligibility requirements, and other details change frequently. We make no warranty, express or implied, regarding the accuracy, completeness, or timeliness of any information on this Site. Always verify important information with official government sources such as Medicare.gov, SSA.gov, or Benefits.gov before making any decisions.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>5. Newsletter Subscription</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed mb-4">By subscribing to our newsletter, you agree that:</p>
                <ul className="space-y-2">
                  {[
                    "You are at least 18 years of age",
                    "The email address you provide is accurate and belongs to you",
                    "You consent to receive our weekly newsletter and occasional related communications",
                    "You may unsubscribe at any time by clicking the unsubscribe link in any email",
                    "We may send you information about products and services we believe may be of interest to you",
                  ].map(item => (
                    <li key={item} className="font-body text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-green-500 mt-0.5">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>6. How We Make Money</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  Senior Benefits Digest is a free publication. We may generate revenue through advertising, sponsored content, affiliate partnerships, and referral arrangements with insurance companies, financial services providers, and other businesses. When we recommend a product or service, we may receive compensation. This does not influence our editorial content, but you should be aware of this relationship. We always aim to recommend only products and services we believe may genuinely benefit our readers.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>7. Intellectual Property</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  All content on this Site, including text, graphics, logos, and newsletter content, is the property of Senior Benefits Digest and is protected by applicable copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our express written permission.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>8. Limitation of Liability</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  To the fullest extent permitted by law, Senior Benefits Digest shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this Site or our newsletter. This includes any decisions you make based on information provided on this Site. Your use of this Site is at your sole risk.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>9. Third-Party Links</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  Our Site may contain links to third-party websites, including government websites such as Medicare.gov and SSA.gov. These links are provided for your convenience. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>10. Governing Law</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  These Terms & Conditions shall be governed by and construed in accordance with the laws of the United States. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in the United States.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>11. Changes to Terms</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed">
                  We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting to the Site. Your continued use of the Site after any changes constitutes your acceptance of the new terms.
                </p>
              </section>

              <section>
                <div className="border-l-4 pl-4 mb-4" style={{ borderColor: "#D4A017" }}>
                  <h2 className="font-display text-xl font-bold" style={{ color: "#1B2E5A" }}>12. Contact Us</h2>
                </div>
                <p className="font-body text-gray-600 leading-relaxed mb-4">
                  If you have questions about these Terms & Conditions, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 font-body text-sm text-gray-700 space-y-1">
                  <p><strong>Senior Benefits Digest</strong></p>
                  <p>Email: legal@seniorbenefitsdigest.com</p>
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
