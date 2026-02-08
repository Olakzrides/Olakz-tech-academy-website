import Link from 'next/link';

export default function SuccessStoriesPage() {
  const stories = [
    {
      name: 'Chioma Adeleke',
      course: 'Full Stack Development',
      cohort: 'September 2025',
      beforeRole: 'Customer Service Rep',
      beforeSalary: '₦60,000/month',
      afterRole: 'Full Stack Developer',
      company: 'PayTech Solutions',
      afterSalary: '₦350,000/month',
      quote: 'Before joining Olakz Tech Academy, I was working as a customer service rep earning ₦60,000 monthly. I had always been interested in tech but didn\'t know where to start. The idea of coding seemed overwhelming.',
      transformation: '+483% salary increase'
    },
    {
      name: 'Ibrahim Mohammed',
      course: 'Data Analysis',
      cohort: 'June 2025',
      beforeRole: 'Accountant',
      beforeSalary: '₦80,000/month',
      afterRole: 'Data Analyst',
      company: 'TechCorp Nigeria',
      afterSalary: '₦280,000/month',
      quote: 'The SQL and Python skills I learned landed me my dream job. The instructors were patient and explained everything clearly.',
      transformation: '+250% salary increase'
    },
    {
      name: 'Blessing Okafor',
      course: 'Digital Marketing',
      cohort: 'March 2025',
      beforeRole: 'Unemployed Graduate',
      beforeSalary: '₦0',
      afterRole: 'Digital Marketing Specialist',
      company: 'Olakz Media',
      afterSalary: '₦200,000/month + commissions',
      quote: 'I was one of the top 3 graduates and got hired immediately! Now I manage campaigns for multiple clients and love what I do.',
      transformation: 'From unemployed to employed'
    },
    {
      name: 'Emeka Nwosu',
      course: 'Cybersecurity',
      cohort: 'December 2024',
      beforeRole: 'IT Support',
      beforeSalary: '₦70,000/month',
      afterRole: 'Cybersecurity Analyst',
      company: 'SecureBank',
      afterSalary: '₦400,000/month',
      quote: 'The hands-on penetration testing and ethical hacking modules prepared me for real-world security challenges.',
      transformation: '+471% salary increase'
    },
    {
      name: 'Aisha Bello',
      course: 'Product Design',
      cohort: 'September 2024',
      beforeRole: 'Graphic Designer',
      beforeSalary: '₦90,000/month',
      afterRole: 'Senior Product Designer',
      company: 'StartupHub',
      afterSalary: '₦350,000/month',
      quote: 'Learning Figma and user research methodologies elevated my career from basic graphics to strategic product design.',
      transformation: '+289% salary increase'
    },
    {
      name: 'Tunde Adeyemi',
      course: 'Frontend Development',
      cohort: 'June 2024',
      beforeRole: 'Freelance Web Designer',
      beforeSalary: '₦50,000-₦100,000/month',
      afterRole: 'Frontend Developer',
      company: 'E-commerce Giant',
      afterSalary: '₦320,000/month',
      quote: 'React and modern JavaScript opened doors I didn\'t know existed. Now I build complex web apps for a major company.',
      transformation: 'Stable income + career growth'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
          <p className="text-lg opacity-90">Real Students, Real Transformations</p>
          <p className="mt-4 opacity-90">
            See how Olakz Tech Academy changed the careers and lives of our graduates
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 bg-primary-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 md:p-12">
            <span className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold mb-6">
              Featured Graduate
            </span>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">{stories[0].name}</h2>
                <p className="text-text-gray mb-1">{stories[0].course} • {stories[0].cohort}</p>
                <p className="text-primary font-semibold mb-6">{stories[0].afterRole} at {stories[0].company}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold mb-1">Before:</h4>
                    <p className="text-text-gray">{stories[0].beforeRole} • {stories[0].beforeSalary}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">After:</h4>
                    <p className="text-text-gray">{stories[0].afterRole} • {stories[0].afterSalary}</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <p className="font-bold text-green-800">{stories[0].transformation}</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4">Her Story</h3>
                <div className="space-y-4 text-text-gray">
                  <p>{stories[0].quote}</p>
                  <p>
                    The 3-month program was intense but incredibly rewarding. The instructors broke down complex 
                    concepts into digestible lessons. I especially loved the hands-on projects - building real 
                    applications helped everything click.
                  </p>
                  <p>
                    During my internship, I impressed the team with the portfolio I built during the course. 
                    They offered me a full-time position before my internship even ended! Now I'm building 
                    fintech applications and earning 5x my previous salary.
                  </p>
                  <div className="bg-primary-light p-4 rounded-lg italic">
                    "Olakz Tech Academy didn't just teach me to code - they changed my entire life trajectory. 
                    Best investment I ever made!"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Stories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">More Graduate Success Stories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.slice(1).map((story) => (
              <div key={story.name} className="card p-6">
                <div className="mb-4">
                  <h3 className="font-bold text-lg mb-1">{story.name}</h3>
                  <p className="text-sm text-text-gray">{story.course}</p>
                  <p className="text-sm text-text-gray">{story.cohort}</p>
                </div>

                <div className="space-y-3 mb-4">
                  <div>
                    <p className="text-xs text-text-gray">Before:</p>
                    <p className="text-sm">{story.beforeRole}</p>
                    <p className="text-sm font-semibold">{story.beforeSalary}</p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-xs text-text-gray">After:</p>
                    <p className="text-sm font-semibold text-primary">{story.afterRole}</p>
                    <p className="text-sm">{story.company}</p>
                    <p className="text-sm font-semibold">{story.afterSalary}</p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4">
                  <p className="text-sm font-bold text-green-800">{story.transformation}</p>
                </div>

                <p className="text-sm text-text-gray italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Graduate Outcomes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: '💼', number: '85%', label: 'Find employment within 6 months' },
              { icon: '💰', number: '₦250K+', label: 'Average graduate starting salary' },
              { icon: '📈', number: '300%', label: 'Average salary increase' },
              { icon: '🎯', number: '100%', label: 'Receive internship placements' }
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Your Success Story Starts Here</h2>
          <p className="text-text-gray mb-8">
            Join hundreds of graduates who transformed their careers at Olakz Tech Academy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions" className="btn-primary">
              Enroll Now
            </Link>
            <Link href="/courses" className="btn-secondary">
              View Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
