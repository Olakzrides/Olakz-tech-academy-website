import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary-dark text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Career in 3 Months
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Learn in-demand tech skills from industry experts. No prior experience needed. 
            Physical classes in Lagos with hands-on projects and guaranteed internship opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/courses" className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Courses
            </Link>
            <Link href="/about" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div>
              <div className="text-4xl md:text-5xl font-bold">500+</div>
              <div className="text-sm md:text-base opacity-90 mt-2">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">13</div>
              <div className="text-sm md:text-base opacity-90 mt-2">Tech Courses</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold">85%</div>
              <div className="text-sm md:text-base opacity-90 mt-2">Job Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
