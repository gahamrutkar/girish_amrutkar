import React from 'react';

const educationData = [
  {
    period: "2021 - 2025",
    degree: "Bachelor of Technology in Electronics And Telecommunication Engineering ",
    institution: "MIT Academy of Engineering",
    description: "Top 10% of the class. Specialized in Machine Learning. Completed multiple projects in Web Development, Machine Learning & IOT.",
    achievements: [
      "CGPA: 8.64/10"
    ]
  },
  {
    period: "2019 - 2021",
    degree: "High Secondary School Certificate - HSC",
    institution: "KES'S Prata College",
    description: "Completed with 92% in Science stream. Participated in various science fairs and competitions.",
    achievements: [
      "Percentage: 91.83%"
    ]
  },
  {
    period: "2018 - 2019",
    degree: "Class 10th - SSC",
    institution: "KES'S G.S.High School",
    description: "Completed with 93% in SSC. Active participant in school tech fests and competitions.",
    achievements: [
      "Percentage: 93.40%"
    ]
  }
];

const certifications = [
  {
    year: "2023",
    name: "Oracle Cloud Infrastructure - Foundation Associates ",
    issuer: "Oracle Cloud Infrastructure ",
    description: "Fundamentals of Cloud Infrastructure, including installation, configuration, and management."
  },
  {
    year: "2023",
    name: "AWS Academy Graduate - AWS Academy Machine Learning Foundation",
    issuer: "AWS Academy",
    description: "Core ML concepts and workflows using AWS tools and services."
  },  
  {
    year: "2024",
    name: "NPTEL - Introduction to Industry 4.0 and Industrial Internet of Things ",
    issuer: "NPTEL",
    description: "Smart manufacturing concepts, IIoT technologies, and their role in modern industrial automation."
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Education & Achievements</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Education</h3>
            
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-8 border-l-4 border-blue-500">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500"></div>
                  
                  <div className="mb-1 text-sm font-semibold text-blue-600">{item.period}</div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{item.degree}</h4>
                  <div className="text-gray-600 font-medium mb-2">{item.institution}</div>
                  <p className="text-gray-500 mb-3">{item.description}</p>
                  
                  <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                    {item.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications & Awards */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-800">Certifications & Awards</h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start mb-2">
                    <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {cert.year}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">{cert.name}</h4>
                  <div className="text-gray-600 font-medium mb-2">{cert.issuer}</div>
                  <p className="text-gray-500 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;