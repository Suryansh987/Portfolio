'use client'

const MailTo = () => {
  return (
    <a
      href="mailto:suryanshsharma987@gmail.com?subject=Contacting You&body=Hello,"
      target="_blank"
      className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition-colors"
    >
      Contact Me
    </a>
  );
};

export default MailTo;
