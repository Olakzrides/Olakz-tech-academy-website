'use client';

import { useState } from 'react';
import Link from 'next/link';
import { coursesData, categories } from '@/lib/coursesData';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCourses = selectedCategory === 'all' 
    ? coursesData 
    : coursesData.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-light">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Choose from 13 comprehensive tech programs designed to make you job-ready in 3 months
          </p>
          <p className="mt-4 opacity-90">
            All courses include hands-on projects, industry certification, and guaranteed internship opportunities. No prior experience required.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-text-dark hover:bg-gray-300'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="card p-6 relative">
                {course.badge && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    {course.badge}
                  </span>
                )}
                <div className="text-5xl mb-4">{course.icon}</div>
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-sm text-text-gray mb-2">{course.category}</p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-bold text-primary text-xl">₦{course.price.toLocaleString()}</span>
                  <span className="text-sm text-text-gray">⏱️ {course.duration}</span>
                </div>
                <p className="text-text-gray mb-4">{course.shortDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.topics.slice(0, 3).map((topic) => (
                    <span key={topic} className="text-xs bg-primary-light text-primary px-2 py-1 rounded">
                      {topic}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/courses/${course.slug}`}
                  className="btn-primary w-full text-center block"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
