import Link from 'next/link';
import { coursesData } from '@/lib/coursesData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = coursesData.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-6xl mb-6">{course.icon}</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Become a {course.title} Professional in 3 Months
          </h1>
          <p className="text-lg opacity-90 mb-8">{course.shortDescription}</p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white/20 px-4 py-2 rounded">
              <span className="font-bold">₦{course.price.toLocaleString()}</span>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded">
              ⏱️ {course.duration}
            </div>
            <div className="bg-white/20 px-4 py-2 rounded">
              📅 {course.schedule}
            </div>
            <div className="bg-white/20 px-4 py-2 rounded">
              📊 {course.level}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/admissions" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
              Enroll Now
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center">
              Ask Questions
            </Link>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Course Overview</h2>
          <p className="text-text-gray mb-6">
            This comprehensive program takes you from beginner to professional in just 3 months. 
            You'll learn industry-standard tools and techniques through hands-on projects and real-world applications.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-primary-light p-6 rounded-lg">
              <h3 className="font-bold mb-4">What's Included:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>12 weeks of intensive training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Hands-on projects and assignments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Industry-recognized certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>3-month internship guarantee</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Job placement support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-light p-6 rounded-lg">
              <h3 className="font-bold mb-4">Prerequisites:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>No prior experience required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Personal laptop (8GB RAM min)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Available Mon-Wed, 9am-4pm</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Commitment to learn</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4">What You'll Learn</h3>
          <div className="flex flex-wrap gap-3 mb-8">
            {course.topics.map((topic) => (
              <span key={topic} className="bg-primary text-white px-4 py-2 rounded-lg">
                {topic}
              </span>
            ))}
          </div>

          {/* Curriculum Section */}
          <div className="bg-gray-light p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-6">12-Week Curriculum</h3>
            <div className="space-y-4">
              {course.slug === 'full-stack-development' && [
                { week: 1, title: 'Web Development Fundamentals', topics: ['How the web works (HTTP, DNS, servers)', 'HTML5 structure and semantics', 'CSS3 styling and layouts', 'Responsive design basics', 'Setting up development environment'] },
                { week: 2, title: 'JavaScript Basics', topics: ['Variables, data types, operators', 'Control flow and loops', 'Functions and scope', 'Arrays and objects', 'DOM manipulation'] },
                { week: 3, title: 'Advanced JavaScript & ES6+', topics: ['Arrow functions and template literals', 'Destructuring and spread operator', 'Promises and async/await', 'Modules and imports', 'Error handling'] },
                { week: 4, title: 'React Fundamentals', topics: ['Components and JSX', 'Props and state', 'Event handling', 'Conditional rendering', 'Lists and keys'] },
                { week: 5, title: 'Advanced React', topics: ['Hooks (useState, useEffect, useContext)', 'React Router', 'Form handling', 'API integration', 'State management'] },
                { week: 6, title: 'Backend with Node.js', topics: ['Node.js basics', 'NPM and package management', 'File system operations', 'Building a simple server', 'Environment variables'] },
                { week: 7, title: 'Express.js Framework', topics: ['Express setup and routing', 'Middleware', 'Request and response handling', 'RESTful API design', 'Error handling'] },
                { week: 8, title: 'Database with MongoDB', topics: ['MongoDB basics', 'CRUD operations', 'Mongoose ODM', 'Data modeling', 'Relationships'] },
                { week: 9, title: 'Authentication & Security', topics: ['User authentication', 'JWT tokens', 'Password hashing', 'Protected routes', 'Security best practices'] },
                { week: 10, title: 'Full Stack Integration', topics: ['Connecting frontend to backend', 'API consumption', 'State management with API', 'File uploads', 'Real-time features'] },
                { week: 11, title: 'Testing & Deployment', topics: ['Unit testing', 'Integration testing', 'Git and GitHub', 'Deployment to Heroku/Vercel', 'Environment configuration'] },
                { week: 12, title: 'Final Project & Best Practices', topics: ['Build complete application', 'Code review', 'Performance optimization', 'Documentation', 'Portfolio preparation'] }
              ].map((week) => (
                <div key={week.week} className="bg-white p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Week {week.week}: {week.title}</h4>
                  <ul className="space-y-1">
                    {week.topics.map((topic, idx) => (
                      <li key={idx} className="text-text-gray text-sm flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              
              {course.slug !== 'full-stack-development' && (
                <div className="bg-white p-6 rounded-lg text-center">
                  <p className="text-text-gray">
                    Detailed 12-week curriculum covering {course.topics.join(', ')} and more. 
                    Each week includes hands-on projects and assignments.
                  </p>
                  <Link href="/contact" className="text-primary font-semibold hover:underline mt-4 inline-block">
                    Contact us for detailed curriculum →
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Career Outcomes */}
          <div className="bg-primary-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Career Opportunities</h3>
            <p className="text-text-gray mb-4">
              Graduates of this program can pursue roles such as:
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {course.slug === 'full-stack-development' && ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Web Developer', 'Software Engineer'].map((role) => (
                <span key={role} className="bg-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {role}
                </span>
              ))}
              {course.slug === 'data-analysis' && ['Data Analyst', 'Business Analyst', 'Data Scientist', 'BI Analyst'].map((role) => (
                <span key={role} className="bg-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {role}
                </span>
              ))}
              {course.slug === 'cybersecurity' && ['Cybersecurity Analyst', 'Security Engineer', 'Penetration Tester', 'Security Consultant'].map((role) => (
                <span key={role} className="bg-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {role}
                </span>
              ))}
              {!['full-stack-development', 'data-analysis', 'cybersecurity'].includes(course.slug) && (
                <span className="bg-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {course.title} Professional
                </span>
              )}
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-text-gray mb-1">Average Starting Salary:</p>
                <p className="text-2xl font-bold text-primary">₦200,000 - ₦500,000/month</p>
              </div>
              <div>
                <p className="text-sm text-text-gray mb-1">Job Placement Rate:</p>
                <p className="text-2xl font-bold text-primary">85% within 6 months</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-16 bg-gray-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Flexible Payment Options</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Full Payment</h3>
              <div className="text-3xl font-bold text-primary mb-4">
                ₦{course.price.toLocaleString()}
              </div>
              <p className="text-text-gray mb-6">Pay the complete course fee upfront</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Immediate enrollment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>All course materials</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Priority placement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-primary relative">
              <span className="absolute -top-3 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full">
                Most Popular
              </span>
              <h3 className="text-xl font-bold mb-4">Installment Plan</h3>
              <div className="text-3xl font-bold text-primary mb-4">
                ₦{(course.price / 2).toLocaleString()} × 2
              </div>
              <p className="text-text-gray mb-6">Split your payment into two parts</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>50% upfront to secure spot</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>50% before week 7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>No extra fees or interest</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {[
                { q: 'Do I need prior experience?', a: 'No! This course is designed for beginners. We start from the basics and gradually build up to advanced concepts.' },
                { q: 'What if I miss a class?', a: 'We record all sessions and provide class materials. However, we strongly recommend attending all classes for the best learning experience.' },
                { q: 'Will I get an internship?', a: 'Yes! All students are guaranteed a 3-month internship opportunity after graduation. Top 3 students may be hired by Olakz.' },
                { q: 'Can I pay in installments?', a: `Yes! Pay 50% (₦${(course.price / 2).toLocaleString()}) upfront and the remaining 50% before week 7 of the program.` },
                { q: 'What happens after the course?', a: 'You\'ll receive your certificate, enter a 3-month internship, and get career support including job placement assistance.' }
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4 last:border-0">
                  <h4 className="font-bold mb-2">{faq.q}</h4>
                  <p className="text-text-gray text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your {course.title} Journey?</h2>
          <p className="text-lg mb-8 opacity-90">
            Next cohort starts March 15, 2026. Limited spots available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Enroll Now
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
