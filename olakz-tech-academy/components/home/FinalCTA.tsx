import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-darker text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
        <p className="text-lg mb-8 opacity-90">
          Join our next cohort and start your journey to becoming a tech professional. Limited spots available!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/admissions" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Enroll Now
          </Link>
          <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
