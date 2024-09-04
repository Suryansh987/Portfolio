'use client'

import { useState, useEffect } from 'react';

interface Experience {
    year: string;
    role: string;
    company: string;
    description: string;
  }


function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    fetch('/Experiance.json')
      .then((response) => response.json())
      .then((data: Experience[]) => setExperiences(data))
      .catch((error) => console.error('Error fetching experience data:', error));
  }, []);

  return (
    <div className="bg-gray-100 p-8 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Experiences
      </h1>
      <div className="w-full max-w-4xl">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-8 p-6 bg-white rounded-lg shadow-lg">
            <div className="mb-2">
              <p className="text-gray-600 text-sm">{experience.year}</p>
            </div>
            <div>
              <h6 className="text-xl font-semibold text-gray-800 mb-2">
                {experience.role} -{" "}
                <span className="text-gray-700">{experience.company}</span>
              </h6>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
