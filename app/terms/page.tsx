export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg opacity-90">Last updated: February 7, 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h2>Agreement to Terms</h2>
          <p>
            By enrolling in Olakz Tech Academy courses or using our services, you agree to be bound 
            by these Terms of Service. Please read them carefully.
          </p>

          <h2>Enrollment and Payment</h2>
          <ul>
            <li>All course fees must be paid according to the selected payment plan</li>
            <li>Full payment or 50% deposit is required to secure your spot</li>
            <li>Remaining balance (for installment plans) must be paid before week 7</li>
            <li>Failure to complete payment may result in suspension from classes</li>
          </ul>

          <h2>Attendance Requirements</h2>
          <ul>
            <li>Students must attend physical classes Monday-Wednesday, 9am-4pm</li>
            <li>Minimum 80% attendance is required to receive certification</li>
            <li>Assignments must be completed on Thursdays and Fridays</li>
            <li>Excessive absences may affect internship placement</li>
          </ul>

          <h2>Refund Policy</h2>
          <ul>
            <li>Refunds are available within 7 days of enrollment (minus processing fees)</li>
            <li>No refunds after the first week of classes</li>
            <li>Course transfers to future cohorts may be available (subject to approval)</li>
          </ul>

          <h2>Certification and Internship</h2>
          <ul>
            <li>Certificates are awarded upon successful completion of the program</li>
            <li>Students must complete all assignments and projects</li>
            <li>Internship placements are guaranteed but specific companies are not</li>
            <li>Top 3 graduates may be offered employment (subject to availability)</li>
          </ul>

          <h2>Code of Conduct</h2>
          <p>Students are expected to:</p>
          <ul>
            <li>Treat instructors and fellow students with respect</li>
            <li>Maintain academic integrity (no plagiarism or cheating)</li>
            <li>Follow campus rules and regulations</li>
            <li>Use learning materials responsibly</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All course materials, including videos, slides, and code examples, are the property of 
            Olakz Tech Academy and may not be shared or distributed without permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            While we strive to provide the best education and support, Olakz Tech Academy cannot 
            guarantee specific job outcomes or salary levels after graduation.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at{' '}
            <a href="mailto:johnenenche56@gmail.com" className="text-primary">
              johnenenche56@gmail.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
