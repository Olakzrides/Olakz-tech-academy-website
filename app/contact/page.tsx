'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg opacity-90">Have questions? We're here to help!</p>
          <p className="mt-4 opacity-90">
            Reach out to us via any of the channels below. We typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: '📞', type: 'Phone', value: '+234 814 876 1419', link: 'tel:+2348148761419', desc: 'Call us Mon-Fri, 9am-6pm' },
                  { icon: '💬', type: 'WhatsApp', value: '+234 814 876 1419', link: 'https://wa.me/2348148761419', desc: 'Quick responses via WhatsApp' },
                  { icon: '✉️', type: 'Email', value: 'johnenenche56@gmail.com', link: 'mailto:johnenenche56@gmail.com', desc: 'Send us an email anytime' },
                  { icon: '📍', type: 'Location', value: 'Ikorodu, Lagos, Nigeria', link: null, desc: 'Physical classes location' }
                ].map((contact) => (
                  <div key={contact.type} className="flex items-start">
                    <div className="text-3xl mr-4">{contact.icon}</div>
                    <div>
                      <h3 className="font-bold mb-1">{contact.type}</h3>
                      {contact.link ? (
                        <a href={contact.link} className="text-primary hover:underline font-semibold">
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{contact.value}</p>
                      )}
                      <p className="text-sm text-text-gray">{contact.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-bold text-lg mb-4">Follow Us on Social Media</h3>
                <p className="text-text-gray mb-4">Stay updated with our latest news, success stories, and tech tips</p>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'Instagram', handle: '@olakztechacademy', url: 'https://instagram.com/olakztechacademy' },
                    { name: 'Facebook', handle: 'Olakz Tech Academy', url: 'https://facebook.com/olakztechacademy' },
                    { name: 'Twitter', handle: '@olakztech', url: 'https://twitter.com/olakztech' },
                    { name: 'LinkedIn', handle: 'Olakz Tech Academy', url: 'https://linkedin.com/company/olakz-tech-academy' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary-light text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700 mb-6">
                    Thank you for contacting us! We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-semibold mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="08012345678"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Subject *</label>
                    <select
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    >
                      <option value="">Select a subject...</option>
                      <option>General Inquiry</option>
                      <option>Course Information</option>
                      <option>Admission Process</option>
                      <option>Payment Options</option>
                      <option>Technical Support</option>
                      <option>Partnership Opportunities</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold mb-2">Your Message *</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-text-gray text-center">
                    Your information is safe with us and will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-text-gray mb-12">Quick answers to common questions</p>
          
          <div className="space-y-6">
            {[
              { q: 'Where are you located?', a: 'Our physical campus is in Ikorodu, Lagos. All classes are held in person at our facility.' },
              { q: 'What are your office hours?', a: 'Our office is open Monday to Friday, 9am to 6pm. Classes run Monday to Wednesday, 9am to 4pm.' },
              { q: 'How quickly will you respond to my inquiry?', a: 'We typically respond to emails within 24 hours. WhatsApp messages usually get faster responses during business hours.' },
              { q: 'Can I visit your campus before enrolling?', a: 'Absolutely! We encourage prospective students to visit our campus. Please call or WhatsApp ahead to schedule a tour.' },
              { q: 'Do you offer online classes?', a: 'Currently, all our classes are physical (in-person) at our Ikorodu campus. This ensures maximum interaction and hands-on learning.' }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-text-gray">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-text-gray mb-4">Still have questions? Don't hesitate to reach out!</p>
            <a 
              href="https://wa.me/2348148761419" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Visit Our Campus</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-text-gray">Ikorodu, Lagos, Nigeria</p>
              <p className="text-sm text-text-gray mt-2">Google Maps integration coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
