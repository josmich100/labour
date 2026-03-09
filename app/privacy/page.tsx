import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Labour Party of Kenya Privacy Policy — how we collect, use and protect your personal data.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-10">
          <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-2">Legal</p>
          <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>
            Privacy Policy
          </h1>
          <p className="text-gray-500 mt-3 text-sm">Last updated: 1 January 2026</p>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-red-600">
          <h2>1. Introduction</h2>
          <p>
            The Labour Party of Kenya (&quot;LPK&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store and protect information obtained through our website labourparty.org and related services.
          </p>

          <h2>2. Data We Collect</h2>
          <p>We may collect the following categories of personal data:</p>
          <ul>
            <li><strong>Identity Data:</strong> Full name, date of birth, gender, national ID number.</li>
            <li><strong>Contact Data:</strong> Email address, phone number, physical address, county.</li>
            <li><strong>Membership Data:</strong> Occupation, membership type, reasons for joining.</li>
            <li><strong>Event Data:</strong> Event registrations, attendance records, dietary requirements.</li>
            <li><strong>Financial Data:</strong> Donation amounts and payment method type (not full card details).</li>
            <li><strong>Volunteer Data:</strong> Skills, availability, employment details.</li>
            <li><strong>Technical Data:</strong> IP address, browser type, pages visited, time and date of visits.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>Process and manage your LPK membership.</li>
            <li>Register you for events and send reminders.</li>
            <li>Process donations and send receipts.</li>
            <li>Coordinate volunteer activities.</li>
            <li>Send party news, policy updates and campaign information (where you have opted in).</li>
            <li>Comply with legal obligations under Kenyan law.</li>
            <li>Improve our website and services.</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>
            We process your data under the following legal bases as defined by the Data Protection Act 2019 (Kenya): your consent, the performance of a contract with you (e.g., membership), legitimate interests of the party, and compliance with legal obligations.
          </p>

          <h2>5. Data Sharing</h2>
          <p>
            We do not sell your personal data. We may share data with trusted service providers (e.g., payment processors, email platforms) strictly to deliver our services. All third parties are contractually required to handle your data in line with this policy.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain membership and contact data for the duration of your membership and up to 3 years thereafter, unless you request deletion. Financial records are retained for 7 years for legal compliance.
          </p>

          <h2>7. Your Rights</h2>
          <p>Under the Data Protection Act 2019, you have the right to:</p>
          <ul>
            <li>Access your personal data (subject access request).</li>
            <li>Correct inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Object to processing in certain circumstances.</li>
            <li>Withdraw consent at any time.</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:privacy@labourparty.org">privacy@labourparty.org</a>.</p>

          <h2>8. Security</h2>
          <p>
            We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or destruction. Our website uses HTTPS encryption. Payment data is handled by PCI-DSS compliant providers.
          </p>

          <h2>9. Cookies</h2>
          <p>
            We use strictly necessary cookies to operate our website and, with your consent, analytics cookies to improve our service. You may manage cookie preferences through your browser settings.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Material changes will be communicated via email to registered members and by a notice on our website. Continued use of our services after changes constitutes your acceptance.
          </p>

          <h2>11. Contact</h2>
          <p>
            For any privacy concerns, please contact our Data Protection Officer at{" "}
            <a href="mailto:privacy@labourparty.org">privacy@labourparty.org</a> or by post at LPK House, Moi Avenue, Nairobi CBD.
          </p>
        </div>
      </div>
    </div>
  );
}
