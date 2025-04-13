import React from 'react';

const educationData = [
  {
    period: "2021 - 2025",
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "MIT Academy of Engineering",
    description: "Top 10% of the class. Specialized in Cyber Security. Completed multiple projects in web development.",
    achievements: [
      "CGPA: 9.2/10"
    ]
  },
  {
    period: "2019 - 2021",
    degree: "High Secondary School Certificate - HSC",
    institution: "DMJC",
    description: "Completed with 95% in Science stream. Participated in various science fairs and competitions.",
    achievements: [
      "Percentage: 95.33%"
    ]
  },
  {
    period: "2018 - 2019",
    degree: "Class 10th - SSC",
    institution: "New English School",
    description: "Completed with 93% in SSC. Active participant in school tech fests and competitions.",
    achievements: [
      "Percentage: 93.20%"
    ]
  }
];

const certifications = [
  {
    year: "2024",
    name: "Red Hat System Administration I (RH124)",
    issuer: "Red Hat Training and Certification",
    description: "Fundamentals of Linux system administration, including installation, configuration, and management."
  },
  {
    year: "2024",
    name: "Red Hat System Administration II (RH134)",
    issuer: "Red Hat Training and Certification",
    description: "Advanced Linux system administration skills, including networking and security."
  },
  {
    year: "2023",
    name: "Core Java Programming",
    issuer: "DMG Institute",
    description: "In-depth knowledge of Java programming, including OOP concepts, collections, and exception handling."
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