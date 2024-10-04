"use client"
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
              Hi, Im <span className="text-blue-600">Ankit Jakhar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-600 dark:text-gray-300">
              Im a{' '}
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Freelancer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Passionate about creating beautiful and functional web experiences.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            >
              Get In Touch
            </a>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/your-image.jpg"
              alt="Your Name"
              width={400}
              height={400}
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}