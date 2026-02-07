import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Olakz Tech Academy</h1>
          <p className="text-lg opacity-90">Empowering Africa's Next Generation of Tech Professionals</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-text-gray">
            <p>
              Olakz Tech Academy was founded with a simple but powerful mission: to make quality tech education 
              accessible to everyone in Nigeria, regardless of their background or prior experience.
            </p>
            <p>
              We recognized a huge gap in the Nigerian job market - thousands of tech jobs going unfilled while 
              talented young people struggled to break into the industry. Traditional education wasn't keeping 
              pace with the rapidly evolving tech landscape.
            </p>
            <p>
              In 2023, we launched our first cohort with just 20 students. Today, we've trained over 500 graduates, 
              85% of whom have found employment in the tech industry. Our secret? Intensive, practical training 
              combined with guaranteed internships and a commitment to hiring our top performers.
            </p>
            <p>
              We're more than a school - we're a launchpad for tech careers. Every graduate leaves with not just 
              a certificate, but real-world experience, a professional portfolio, and the confidence to compete 
              in the global tech market.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-text-gray">
                To transform lives through intensive, practical tech education that prepares students for 
                real-world careers. We bridge the gap between unemployment and opportunity by providing 
                world-class training, hands-on experience, and direct pathways to employment.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-text-gray">
                To be Africa's leading tech training institution, recognized for producing job-ready graduates 
                who drive innovation and economic growth across the continent. We envision a future where anyone 
                with determination can access the tech skills needed to build a prosperous career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⭐', title: 'Excellence', desc: 'We maintain the highest standards in everything we do - from curriculum design to student support.' },
              { icon: '🤝', title: 'Accessibility', desc: 'Quality tech education shouldn\'t be a privilege. We offer flexible payment plans to make learning accessible to all.' },
              { icon: '💻', title: 'Practical Learning', desc: 'Theory is important, but we prioritize hands-on experience. Students build real projects from day one.' },
              { icon: '🏆', title: 'Student Success', desc: 'Your success is our success. We\'re invested in your career journey beyond graduation through internships and job support.' },
              { icon: '🔮', title: 'Innovation', desc: 'The tech world evolves rapidly. We continuously update our curriculum to teach the most relevant, in-demand skills.' },
              { icon: '❤️', title: 'Community', desc: 'We build lasting relationships. Our alumni network provides mentorship, collaboration, and career opportunities.' }
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-text-gray text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Students Choose Olakz Tech Academy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Guaranteed Internship for All', desc: 'Unlike other schools, 100% of our graduates get 3-month internship placements. Gain real work experience, build your resume, and make industry connections.', stat: '100% internship placement' },
              { title: 'Top 3 Get Hired', desc: 'Excel in your cohort and join our team! We hire the top 3 graduates from each class, giving you a direct path to employment.', stat: 'Direct hiring opportunity' },
              { title: 'Industry Expert Instructors', desc: 'Learn from professionals currently working in the field. Our instructors bring real-world experience and industry insights to every class.', stat: '10+ years combined experience' },
              { title: 'Job-Ready in Just 3 Months', desc: 'Our intensive 12-week programs are designed for maximum impact. No fluff - just the skills employers are actively seeking.', stat: '3-month transformation' },
              { title: 'Flexible Payment Plans', desc: 'Pay 50% upfront and 50% later. We believe financial constraints shouldn\'t stop you from building a tech career.', stat: '0% interest installments' },
              { title: '85% Job Placement Rate', desc: 'Most graduates find employment within 6 months. Our career support doesn\'t end at graduation.', stat: '85% employment rate' }
            ].map((reason) => (
              <div key={reason.title} className="bg-white p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-text-gray mb-3">{reason.desc}</p>
                <span className="text-primary font-semibold">{reason.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Impact</h2>
          <p className="text-center opacity-90 mb-12">
            Since our founding, we've been committed to creating real change in Nigeria's tech ecosystem
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { number: '500+', label: 'Lives Transformed' },
              { number: '85%', label: 'Job Placement' },
              { number: '13', label: 'Tech Programs' },
              { number: '50+', label: 'Hiring Partners' },
              { number: '₦15M+', label: 'Collective Salary Increase' }
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl font-bold mb-2">{metric.number}</div>
                <div className="text-sm opacity-90">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-text-gray mb-8">Join our community of successful tech professionals</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="btn-primary">
              View Courses
            </Link>
            <Link href="/admissions" className="btn-secondary">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
