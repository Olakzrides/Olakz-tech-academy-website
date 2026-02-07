const features = [
  {
    icon: '👨‍🏫',
    title: 'Industry Expert Instructors',
    description: 'Learn from professionals with real-world experience in top tech companies and startups.'
  },
  {
    icon: '💼',
    title: 'Guaranteed Internship',
    description: 'All students get a 3-month internship opportunity to gain hands-on experience after graduation.'
  },
  {
    icon: '🏆',
    title: 'Top 3 Get Hired',
    description: 'We hire our top 3 graduates from each cohort. Your excellence could be your job ticket.'
  },
  {
    icon: '🎓',
    title: 'Industry-Recognized Certificate',
    description: 'Earn a certificate that demonstrates your competency to employers across Nigeria and beyond.'
  },
  {
    icon: '🚀',
    title: 'Job-Ready in 3 Months',
    description: 'Intensive, practical training designed to get you market-ready in just 12 weeks.'
  },
  {
    icon: '💳',
    title: 'Flexible Payment Plans',
    description: 'Pay in full or split your payment: 50% upfront, 50% later. We make quality education accessible.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Olakz Tech Academy?</h2>
          <p className="text-text-gray max-w-3xl mx-auto">
            We're committed to your success from day one to your first job
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
