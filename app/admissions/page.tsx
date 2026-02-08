'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whatsapp: '',
    course: '',
    intake: '',
    paymentPlan: '',
    experience: '',
    howDidYouHear: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    <div className="min-h-screen bg-gray-light">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Admissions</h1>
          <p className="text-lg opacity-90">Start Your Tech Journey Today</p>
          <p className="mt-4 opacity-90">
            Enrolling at Olakz Tech Academy is simple. Follow these steps to secure your spot in our next cohort.
          </p>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How to Enroll</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Choose Your Course', desc: 'Browse our 13 courses and select the program that aligns with your career goals.', action: 'View Courses', href: '/courses' },
              { num: '02', title: 'Fill Application Form', desc: 'Complete our simple online application form with your details and course preference.', action: 'Apply Now', href: '#application-form' },
              { num: '03', title: 'Make Payment', desc: 'Pay the full amount or make your first 50% installment payment to secure your spot.', action: 'Payment Options', href: '#payment' },
              { num: '04', title: 'Receive Confirmation', desc: 'Get your enrollment confirmation via email with class schedule and preparatory materials.', action: null, href: null }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-text-gray mb-4">{step.desc}</p>
                {step.action && (
                  <Link href={step.href!} className="text-primary font-semibold hover:underline">
                    {step.action} →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intake Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Intake Dates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { cohort: 'March 2026 Cohort', start: 'March 15, 2026', end: 'June 7, 2026', status: 'Open', spots: '12 spots remaining', cta: 'Enroll Now' },
              { cohort: 'June 2026 Cohort', start: 'June 15, 2026', end: 'September 7, 2026', status: 'Early Registration', spots: '25 spots available', cta: 'Register Interest' },
              { cohort: 'September 2026 Cohort', start: 'September 15, 2026', end: 'December 7, 2026', status: 'Coming Soon', spots: null, cta: 'Join Waitlist' }
            ].map((intake) => (
              <div key={intake.cohort} className="card p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
                  intake.status === 'Open' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {intake.status}
                </span>
                <h3 className="font-bold text-xl mb-2">{intake.cohort}</h3>
                <p className="text-text-gray mb-1">Start: {intake.start}</p>
                <p className="text-text-gray mb-4">End: {intake.end}</p>
                {intake.spots && (
                  <p className="text-primary font-semibold mb-4">{intake.spots}</p>
                )}
                <Link href="#application-form" className="btn-primary w-full text-center block">
                  {intake.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Plans */}
      <section id="payment" className="py-16 bg-primary-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Flexible Payment Options</h2>
          <p className="text-center text-text-gray mb-12">We believe quality tech education should be accessible to everyone</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Full Payment</h3>
              <p className="text-text-gray mb-6">Pay the complete course fee upfront</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Immediate enrollment confirmation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>All course materials provided</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Priority class placement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Certificate upon completion</span>
                </li>
              </ul>
              <p className="text-sm text-text-gray italic">Example: ₦500,000 for Full Stack Development</p>
            </div>

            <div className="bg-white p-8 rounded-lg border-2 border-primary relative">
              <span className="absolute -top-3 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-xl font-bold mb-4">Installment Plan</h3>
              <p className="text-text-gray mb-6">Split your payment into two parts</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Pay 50% upfront to secure your spot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Pay remaining 50% before week 7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>No extra fees or interest</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Same benefits as full payment</span>
                </li>
              </ul>
              <p className="text-sm text-text-gray italic">Example: ₦250,000 now + ₦250,000 later</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-bold mb-4">We Accept:</h4>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-gray-light rounded">Bank Transfer</span>
              <span className="px-4 py-2 bg-gray-light rounded">Card Payment</span>
              <span className="px-4 py-2 bg-gray-light rounded">USSD</span>
              <span className="px-4 py-2 bg-gray-light rounded">Mobile Money</span>
            </div>
            <p className="text-sm text-text-gray mt-4">
              All payments are processed securely. You'll receive a payment receipt and enrollment confirmation via email.
            </p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Requirements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '✅', title: 'No Prior Experience Needed', desc: 'Most courses are beginner-friendly. Whether starting fresh or upskilling, we welcome you!' },
              { icon: '💻', title: 'Personal Laptop', desc: 'You\'ll need a laptop (minimum 8GB RAM recommended) for hands-on practice.' },
              { icon: '📅', title: 'Commitment to Attend', desc: 'Classes run Mon-Wed, 9am-4pm. Must be available for physical classes in Lagos.' },
              { icon: '🎯', title: 'Dedication to Learn', desc: 'Complete assignments Thu-Fri. Your success depends on your commitment.' }
            ].map((req) => (
              <div key={req.title} className="text-center">
                <div className="text-5xl mb-4">{req.icon}</div>
                <h3 className="font-bold mb-2">{req.title}</h3>
                <p className="text-text-gray text-sm">{req.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Class Schedule & Format</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">📚</div>
              <h3 className="font-bold text-lg mb-2">Monday - Wednesday</h3>
              <p className="text-2xl font-bold text-primary mb-2">9:00 AM - 4:00 PM</p>
              <p className="text-text-gray text-sm mb-2">Ikorodu, Lagos</p>
              <p className="text-text-gray text-sm">In-person, instructor-led training with hands-on practice</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="font-bold text-lg mb-2">Thursday - Friday</h3>
              <p className="text-text-gray mb-2">Work from Home</p>
              <p className="text-text-gray text-sm">Work on assignments, projects, and practice from home. Instructors available via WhatsApp for questions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-5xl mb-4">🌴</div>
              <h3 className="font-bold text-lg mb-2">Saturday - Sunday</h3>
              <p className="text-text-gray mb-2">Rest & Personal Time</p>
              <p className="text-text-gray text-sm">Recharge and prepare for the next week of learning</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h3 className="font-bold text-xl mb-6 text-center">What's Included</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                '12 weeks of intensive training',
                'All course materials and resources',
                'Hands-on projects and assignments',
                'Industry-recognized certificate',
                '3-month internship opportunity',
                'Job placement support',
                'Access to alumni network'
              ].map((item) => (
                <div key={item} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Apply Now</h2>
          <p className="text-center text-text-gray mb-12">Fill in your details to start your enrollment process</p>

          {submitted ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Application Submitted Successfully!</h3>
              <p className="text-green-700 mb-6">
                We'll contact you within 24 hours via email and WhatsApp with next steps.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="btn-primary"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
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
                  <label className="block font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08012345678"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">WhatsApp Number</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="Same as phone?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">Select Course *</label>
                  <select
                    name="course"
                    required
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="">Choose a course...</option>
                    <option>Full Stack Development - ₦500,000</option>
                    <option>Cybersecurity - ₦450,000</option>
                    <option>Python Programming - ₦350,000</option>
                    <option>Data Analysis - ₦300,000</option>
                    <option>Frontend Development - ₦300,000</option>
                    <option>Backend Development - ₦300,000</option>
                    <option>Digital Marketing - ₦250,000</option>
                    <option>Social Media Management - ₦250,000</option>
                    <option>Cinematography & Video Editing - ₦250,000</option>
                    <option>Product Design - ₦200,000</option>
                    <option>Graphic Design & Branding - ₦200,000</option>
                    <option>Product Management - ₦200,000</option>
                    <option>Computer Literacy - ₦100,000</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Preferred Intake *</label>
                  <select
                    name="intake"
                    required
                    value={formData.intake}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="">Choose intake...</option>
                    <option>March 2026</option>
                    <option>June 2026</option>
                    <option>September 2026</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Payment Plan *</label>
                  <select
                    name="paymentPlan"
                    required
                    value={formData.paymentPlan}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="">Choose plan...</option>
                    <option>Full Payment</option>
                    <option>Installment (50% + 50%)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">Prior Experience *</label>
                  <select
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="">Select level...</option>
                    <option>No experience</option>
                    <option>Some basic knowledge</option>
                    <option>Intermediate</option>
                    <option>Looking to upskill</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block font-semibold mb-2">How did you hear about us?</label>
                  <select
                    name="howDidYouHear"
                    value={formData.howDidYouHear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  >
                    <option value="">Select option...</option>
                    <option value="">Select option...</option>
                    <option>Google Search</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>Twitter</option>
                    <option>LinkedIn</option>
                    <option>Friend Referral</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block font-semibold mb-2">Additional Information (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Any questions or special requests?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>

              <p className="text-sm text-text-gray text-center mt-4">
                By submitting this form, you agree to our privacy policy. Your information will only be used for enrollment purposes.
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
