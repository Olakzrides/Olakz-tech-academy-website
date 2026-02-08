const testimonials = [
  {
    name: 'Chioma Adeleke',
    course: 'Full Stack Development',
    quote: 'Before Olakz Tech Academy, I had zero coding experience. Now I\'m a full-stack developer at a fintech startup. The hands-on approach and internship opportunity made all the difference!',
    currentRole: 'Full Stack Developer at PayTech Solutions',
    rating: 5
  },
  {
    name: 'Ibrahim Mohammed',
    course: 'Data Analysis',
    quote: 'The instructors didn\'t just teach theory - they showed us how to solve real business problems. I got hired during my internship and now work as a data analyst.',
    currentRole: 'Data Analyst at TechCorp Nigeria',
    rating: 5
  },
  {
    name: 'Blessing Okafor',
    course: 'Digital Marketing',
    quote: 'I was one of the top 3 graduates and got hired by Olakz! Now I\'m managing social media campaigns for multiple clients. Best decision I ever made!',
    currentRole: 'Digital Marketing Specialist at Olakz Media',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories from Our Graduates</h2>
          <p className="text-text-gray max-w-3xl mx-auto">
            See how Olakz Tech Academy transformed their careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-text-gray mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-text-gray">{testimonial.course}</p>
                <p className="text-sm text-primary mt-2">{testimonial.currentRole}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
