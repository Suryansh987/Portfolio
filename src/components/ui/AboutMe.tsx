import MailTo from "./MailTo";

function AboutMe() {
  return (
    <div className="bg-gray-200 p-8 flex flex-col sm:flex-row items-center justify-center min-h-screen">
      <div className="sm:w-1/2 justify-center p-4 sm:flex hidden">
        <img
          src="./PP.png"
          alt="Profile"
          className="w-full max-w-sm sm:max-w-md rounded-lg shadow-lg"
        />
      </div>
      <div className="sm:w-1/2 text-center sm:text-left p-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          About Me
        </h2>
        <p className="text-gray-700 text-lg mb-6">
          Hi, I'm Suryansh, a dedicated full-stack developer with a passion for building efficient and scalable web applications. I specialize in creating seamless user experiences across the entire stack, from responsive frontend designs to robust backend systems.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          My expertise spans a wide range of technologies, including Next.js, Tailwind CSS, JavaScript, and Python, as well as frameworks like React and Django. I've worked on diverse projects, from developing custom search engines to AI-powered person detection systems, always striving for innovation and excellence.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Explore my portfolio to see my work in action, and feel free to reach out if you're interested in collaborating or have any questions!
        </p>
        <MailTo />
      </div>
    </div>
  );
}

export default AboutMe;
