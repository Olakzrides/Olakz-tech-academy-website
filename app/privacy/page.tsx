export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">Last updated: February 7, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Introduction</h2>
          <p>
            At Olakz Tech Academy, we are committed to protecting your privacy and ensuring the security 
            of your personal information. This Privacy Policy explains how we collect, use, and safeguard 
            your data when you interact with our website and services.
          </p>

          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul>
            <li>Name, email address, and phone number</li>
            <li>Course preferences and enrollment information</li>
            <li>Payment information (processed securely through third-party providers)</li>
            <li>Communication preferences and feedback</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process your enrollment and course registration</li>
            <li>Communicate with you about courses, schedules, and updates</li>
            <li>Provide customer support and respond to inquiries</li>
            <li>Send promotional materials (with your consent)</li>
            <li>Improve our services and website experience</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            information against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Request corrections to your data</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:johnenenche56@gmail.com" className="text-primary">
              johnenenche56@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
