import React from "react";
import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiCplusplus,
  SiDjango,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";
import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3,
  FaDatabase,
} from "react-icons/fa";

interface Tech{
  icon: JSX.Element,
  name: string
}

function Technology() {
  const techs: Tech[] = [
    {
      icon: <RiReactjsLine className="hover:text-blue-500 transition-colors" />,
      name: "React",
    },
    {
      icon: <RiNodejsLine className="hover:text-green-500 transition-colors" />,
      name: "Node.js",
    },
    {
      icon: <SiMongodb className="hover:text-green-700 transition-colors" />,
      name: "MongoDB",
    },
    {
      icon: <TbBrandNextjs className="hover:text-gray-500 transition-colors" />,
      name: "Next.js",
    },
    {
      icon: <FaPython className="hover:text-yellow-500 transition-colors" />,
      name: "Python",
    },
    {
      icon: <FaJava className="hover:text-red-600 transition-colors" />,
      name: "Java",
    },
    {
      icon: <FaJs className="hover:text-yellow-400 transition-colors" />,
      name: "JavaScript",
    },
    {
      icon: <FaHtml5 className="hover:text-orange-600 transition-colors" />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 className="hover:text-blue-600 transition-colors" />,
      name: "CSS3",
    },
    {
      icon: <FaDatabase className="hover:text-gray-600 transition-colors" />,
      name: "SQL",
    },
    {
      icon: <SiCplusplus className="hover:text-blue-700 transition-colors" />,
      name: "C++",
    },
    {
      icon: <SiDjango className="hover:text-green-800 transition-colors" />,
      name: "Django",
    },
    {
      icon: <SiShadcnui className="hover:text-gray-500 transition-colors" />,
      name: "Shadcn/ui",
    },
    {
      icon: <SiTailwindcss className="hover:text-blue-600 transition-colors" />,
      name: "Tailwindcss",
    },
    {
      icon: <SiTypescript className="hover:text-blue-600 transition-colors" />,
      name: "TypeScript",
    },
  ];

  return (
    <div className="bg-gray-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Technology
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
          >
            <div className="text-6xl mb-2">{tech.icon}</div>
            <p className="text-lg text-gray-800 font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technology;
