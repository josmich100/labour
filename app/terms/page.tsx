import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Labour Party of Kenya Terms and Conditions — rules governing use of our website and membership.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <div className="mb-10">
          <p className="text-red-600 text-sm font-bold uppercase tracking-widest mb-2">Legal</p>
          <h1 className="text-4xl font-bold text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-500 mt-3 text-sm">Last updated: 1 January 2026</p>
        </div>

        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-red-600">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Labour Party of Kenya website (labourparty.org) or any LPK services, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please discontinue use immediately.
          </p>

          <h2>2. Party Membership</h2>
          <p>
            Membership of the Labour Party of Kenya is open to Kenyan citizens and permanent residents aged 18 and above. By applying for membership, you confirm that you meet these requirements and agree to uphold the LPK Constitution, values, and code of conduct. LPK reserves the right to reject or terminate membership applications at its discretion in accordance with its constitution.
          </p>

          <h2>3. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use this website for any unlawful purpose.</li>
            <li>Post or transmit any defamatory, offensive or abusive content.</li>
            <li>Impersonate LPK officials, members or any other person.</li>
            <li>Attempt to gain unauthorised access to any part of our systems.</li>
            <li>Use bots, scrapers or automated tools to extract data without permission.</li>
          </ul>

          <h2>4. Donations</h2>
          <p>
            All donations to the Labour Party of Kenya are non-refundable and voluntary. Donations are used to fund lawful party activities, campaigns, and programmes in accordance with the Political Parties Act 2011 and LPK&apos;s financial regulations. LPK will not accept donations from prohibited sources as defined by applicable law.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website — including text, images, logos, graphics, and code — is the property of the Labour Party of Kenya or its licensors. You may not reproduce, distribute or create derivative works without prior written permission, except where expressly authorised.
          </p>

          <h2>6. Event Registration</h2>
          <p>
            Event registrations are subject to availability. LPK reserves the right to cancel or reschedule events. In the event of a cancellation, registered attendees will be notified as soon as reasonably practicable. LPK is not liable for costs incurred by registrants arising from cancellations.
          </p>

          <h2>7. Disclaimer of Warranties</h2>
          <p>
            This website is provided on an &quot;as is&quot; basis. LPK makes no warranties, express or implied, regarding the accuracy, completeness or availability of content. We do not warrant that the site will be uninterrupted or error-free.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, LPK shall not be liable for any indirect, incidental, special or consequential damages arising from your use of this website or participation in LPK activities.
          </p>

          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. LPK does not endorse and takes no responsibility for the content or privacy practices of any linked sites. You access third-party sites at your own risk.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            LPK reserves the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised date. Continued use of our services following changes constitutes acceptance of the new Terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes shall be subject to the exclusive jurisdiction of the Kenyan courts.
          </p>

          <h2>12. Contact</h2>
          <p>
            For enquiries about these Terms, contact us at{" "}
            <a href="mailto:legal@labourparty.org">legal@labourparty.org</a> or at LPK House, Moi Avenue, Nairobi CBD.
          </p>
        </div>
      </div>
    </div>
  );
}
