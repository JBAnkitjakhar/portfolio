//src/components/About.tsx


import Image from 'next/image'

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/about-image.jpg"
              alt="About Me"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
              Im a passionate web developer with X years of experience in creating responsive and user-friendly websites. My journey in tech started when...
            </p>
            <p className="text-lg mb-4 text-gray-600 dark:text-gray-300">
              When Im not coding, you can find me [Your Hobbies/Interests]. I believe in continuous learning and am always excited to take on new challenges.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/ankit-jakhar-5071a8254/" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://github.com/JBAnkitjakhar" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}