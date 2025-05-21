import React from 'react'

const Careers = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Bhimavaram, Andhra Pradesh",
      description: "We're looking for an experienced React developer to join our team."
    },
    {
      title: "Backend Developer",
      type: "Full-time",
      location: "Remote",
      description: "Looking for Node.js developers with database experience."
    },
    {
      title: "UI/UX Designer",
      type: "Contract",
      location: "Hybrid",
      description: "Creative designer needed for client projects."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="py-12">
        <h1 className="text-4xl font-bold text-center mb-4">Careers at Yubhian</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Join our team of innovators and help shape the future of technology solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Opportunity to work on cutting-edge technologies</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Flexible work arrangements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Continuous learning and growth opportunities</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✨</span>
                <span>Collaborative and inclusive work environment</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Student Programs</h2>
            <p className="text-gray-600 mb-4">
              We are passionate about empowering students with the knowledge and skills they 
              need to excel in their careers.
            </p>
            <p className="text-gray-600">
              We offer comprehensive career guidance, hands-on project support, and training 
              sessions designed to equip them for success in the fast-paced world of technology.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-8">Current Openings</h2>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:bg-gray-50 transition">
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <div className="flex gap-4 text-gray-600 mb-3">
                <span>{job.type}</span>
                <span>•</span>
                <span>{job.location}</span>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Careers