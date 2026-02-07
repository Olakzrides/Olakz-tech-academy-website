const stats = [
  { number: '500+', label: 'Students Graduated', icon: '👨‍🎓' },
  { number: '13', label: 'Tech Programs', icon: '📚' },
  { number: '85%', label: 'Job Placement Rate', icon: '💼' },
  { number: '50+', label: 'Hiring Partners', icon: '🤝' },
  { number: '3', label: 'Month Duration', icon: '⏱️' },
  { number: '100%', label: 'Get Internships', icon: '🎯' }
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Impact in Numbers</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
