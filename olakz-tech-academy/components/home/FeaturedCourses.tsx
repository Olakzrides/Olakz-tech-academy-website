import Link from 'next/link';

const courses = [
  {
    title: 'Full Stack Development',
    price: '₦500,000',
    duration: '3 Months',
    description: 'Master both frontend and backend development to build complete web applications from scratch.',
    icon: '💻',
    link: '/courses/full-stack-development',
    tag: 'Most Popular'
  },
  {
    title: 'Data Analysis',
    price: '₦300,000',
    duration: '3 Months',
    description: 'Learn to collect, clean, analyze and visualize data to make informed business decisions.',
    icon: '📊',
    link: '/courses/data-analysis',
    tag: null
  },
  {
    title: 'Cybersecurity',
    price: '₦450,000',
    duration: '3 Months',
    description: 'Protect systems, networks, and data from cyber threats. High-demand career path.',
    icon: '🔒',
    link: '/courses/cybersecurity',
    tag: 'High Demand'
  },
  {
    title: 'Digital Marketing',
    price: '₦250,000',
    duration: '3 Months',
    description: 'Master online marketing strategies to grow businesses and build brands digitally.',
    icon: '📱',
    link: '/courses/digital-marketing',
    tag: null
  },
  {
    title: 'Product Design',
    price: '₦200,000',
    duration: '3 Months',
    description: 'Master user-centered product design from research to prototyping.',
    icon: '🎨',
    link: '/courses/product-design',
    tag: null
  },
  {
    title: 'Python Programming',
    price: '₦350,000',
    duration: '3 Months',
    description: 'Master Python programming from basics to advanced applications.',
    icon: '🐍',
    link: '/courses/python-programming',
    tag: null
  }
];

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Popular Courses</h2>
          <p className="text-text-gray max-w-3xl mx-auto">
            Choose from 13 industry-relevant programs designed to get you job-ready in just 3 months
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.title} className="card p-6 relative group">
              {course.tag && (
                <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                  {course.tag}
                </span>
              )}
              <div className="text-4xl mb-4">{course.icon}</div>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <div className="flex items-center gap-4 mb-4 text-sm text-text-gray">
                <span className="font-bold text-primary text-lg">{course.price}</span>
                <span>⏱️ {course.duration}</span>
              </div>
              <p className="text-text-gray mb-6">{course.description}</p>
              <Link 
                href={course.link}
                className="text-primary font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/courses" className="btn-primary">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
