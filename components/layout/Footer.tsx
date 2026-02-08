import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-darker text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Olakz Tech Academy</h3>
            <p className="text-sm mb-4">Transform Your Career in 3 Months</p>
            <p className="text-sm opacity-90">
              Nigeria's leading tech training institution offering 13 intensive programs with guaranteed internships.
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold mb-4">Courses</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-primary-light">All Courses</Link></li>
              <li><Link href="/courses/full-stack-development" className="hover:text-primary-light">Full Stack Development</Link></li>
              <li><Link href="/courses/data-analysis" className="hover:text-primary-light">Data Analysis</Link></li>
              <li><Link href="/courses/cybersecurity" className="hover:text-primary-light">Cybersecurity</Link></li>
              <li><Link href="/courses/digital-marketing" className="hover:text-primary-light">Digital Marketing</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary-light">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-primary-light">Admissions</Link></li>
              <li><Link href="/success-stories" className="hover:text-primary-light">Success Stories</Link></li>
              <li><Link href="/contact" className="hover:text-primary-light">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 <a href="tel:+2348148761419" className="hover:text-primary-light">+234 814 876 1419</a></li>
              <li>✉️ <a href="mailto:johnenenche56@gmail.com" className="hover:text-primary-light">johnenenche56@gmail.com</a></li>
              <li>📍 Ikorodu, Lagos</li>
              <li>💬 <a href="https://wa.me/2348148761419" className="hover:text-primary-light">WhatsApp Us</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="font-bold mb-2">Stay Updated</h4>
            <p className="text-sm opacity-90 mb-4">Subscribe to our newsletter for tech tips, course updates, and success stories</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-text-dark focus:outline-none"
                required
              />
              <button type="submit" className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">© 2026 Olakz Tech Academy. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm hover:text-primary-light">Privacy Policy</Link>
            <Link href="/terms" className="text-sm hover:text-primary-light">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
