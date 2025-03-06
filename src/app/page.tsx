"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-geist-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Picture */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-[4px] md:border-[6px] border-gray-600 shadow-2xl mx-auto transform transition duration-300 hover:scale-105">
            <Image
              src="/amirlan.jpeg"
              alt="Profile"
              width={160}
              height={160}
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4 mt-5">
            Amirlan Aubakirov
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Flutter Developer | Creating beautiful and functional applications
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#experience"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Work Experience
            </a>
            <a
              href="#contact"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-800 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Work Experience
          </h2>
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold">Flutter Developer</h3>
              <p className="text-gray-400">Ustelly · Full-time</p>
              <p className="text-gray-400">Apr 2024 - Present · 1 yr</p>
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">
                  Mobile Skills:
                </h4>
                <p className="text-gray-300">
                  Flutter, Redux, BLoC, Clean Architecture, TDD, Unit Tests,
                  Integration Tests, Golden Tests
                </p>
              </div>
              <p className="text-gray-400">Remote</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold">Flutter Developer</h3>
              <p className="text-gray-400">Dualboot Partners · Full-time</p>
              <p className="text-gray-400">Feb 2022 - Apr 2024 · 2 yrs 3 mos</p>
              <p className="text-gray-400">
                Developing apps using native iOS and the cross-platform Flutter
                framework
              </p>

              {/* Technologies */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">
                  Mobile Skills:
                </h4>
                <p className="text-gray-300">
                  Flutter, Redux, BLoC, Clean Architecture, TDD, Unit Tests,
                  Integration Tests, Golden Tests
                </p>
              </div>

              {/* Projects */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">Products:</h4>
                <div className="flex flex-wrap gap-3 mt-2">
                  {[
                    {
                      name: "BCC App",
                      link: "https://play.google.com/store/apps/details?id=kz.bcc.starbanking&hl=ru",
                    },
                    {
                      name: "REPU App",
                      link: "https://apps.apple.com/ca/app/repu/id1397023851",
                    },
                    {
                      name: "Bula App",
                      link: "https://play.google.com/store/apps/details?id=com.bulaapp",
                    },
                  ].map((app) => (
                    <a
                      key={app.name}
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md"
                    >
                      <span>🔗</span>
                      <span>{app.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold">Flutter/Frontend Developer</h3>
              <p className="text-gray-400">M-lombard · Full-time</p>
              <p className="text-gray-400">Apr 2021 - Feb 2022 · 11 mos</p>
              <p className="text-gray-400">Almaty, Kazakhstan</p>

              {/* Description */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">
                  Flutter Developer
                </h4>
                <p className="text-gray-300">
                  Development of a fintech mobile application and website using
                  Flutter.
                </p>
              </div>

              {/* Project Link */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-white">Project:</h4>
                <a
                  href="https://play.google.com/store/apps/details?id=kz.mlombard&hl=ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-md"
                >
                  <span>🔗</span>
                  <span>M-lombard App</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/amirlan-aubakirov-71256b239"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/AmirlanCode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-center text-gray-400">
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
