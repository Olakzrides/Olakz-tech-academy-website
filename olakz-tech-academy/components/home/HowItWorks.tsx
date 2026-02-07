const steps = [
  {
    number: '01',
    title: 'Choose Your Course',
    description: 'Browse our 13 courses and select the one that matches your career goals. No prior experience needed!',
    icon: '🎯'
  },
  {
    number: '02',
    title: 'Enroll & Start Learning',
    description: 'Pay 50% upfront and begin your 3-month intensive training. Classes run Monday-Wednesday, 9am-4pm in Lagos.',
    icon: '📚'
  },
  {
    number: '03',
    title: 'Build Real Projects',
    description: 'Work on hands-on projects with expert guidance. Complete assignments on Thursdays and Fridays from home.',
    icon: '💻'
  },
  {
    number: '04',
    title: 'Get Certified & Internship',
    description: 'Graduate with an industry certificate and secure a 3-month internship. Top 3 students get hired!',
    icon: '🚀'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Journey to Tech Success</h2>
          <p className="text-text-gray max-w-3xl mx-auto">
            Four simple steps to launch your tech career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="bg-white p-6 rounded-lg shadow-md h-full">
                <div className="text-5xl font-bold text-primary mb-4">{step.number}</div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-text-gray">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
