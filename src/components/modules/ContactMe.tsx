import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaRegPaperPlane,
} from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";

const ContactMe = () => {
  return (
    <div
      id="contact_me"
      className="py-10 dark:bg-gray-900 max-w-7xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Let&apos;s Connect
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left Side - Contact Info */}
        <div className="flex-1 px-5 md:px-16 space-y-6">
          <div className="flex gap-4 flex-wrap">
            <div className="px-4 py-3 border border-dashed rounded-xl flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <FiMapPin className="text-3xl" />
              <p className="text-gray-700 dark:text-gray-300">
                Feni, Bangladesh
              </p>
            </div>
            <div className="px-4 py-3 border border-dashed rounded-xl flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <LuPhone className="text-3xl" />
              <p className="text-gray-700 dark:text-gray-300">
                +880 1869653705
              </p>
            </div>
            <div className="px-4 py-3 border border-dashed rounded-xl flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <MdOutlineEmail className="text-3xl" />
              <p className="text-gray-700 dark:text-gray-300">
                khaledahmednayeem2004@gmail.com
              </p>
            </div>
            <div className="flex gap-4 flex-wrap">
              {[
                {
                  icon: <FaInstagram />,
                  link: "https://www.instagram.com/",
                  label: "Instagram",
                },
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/",
                  label: "LinkedIn",
                },
                {
                  icon: <FaGithub />,
                  link: "https://www.github.com/",
                  label: "Github",
                },
                {
                  icon: <FaFacebook />,
                  link: "https://www.facebook.com/",
                  label: "Facebook",
                },
              ].map(({ icon, link, label }) => (
                <div
                  key={label}
                  className="px-4 py-3 border border-dashed rounded-xl flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <Link
                    href={link}
                    className="text-gray-700 dark:text-gray-300 hover:underline flex items-center gap-2"
                  >
                    {icon}
                    <span>{label}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="flex-1 px-5 md:px-16 space-y-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full rounded-xl border border-dashed dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-300 py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="w-full rounded-xl border border-dashed dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-300 py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-dashed dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-300 py-2 px-3"
              ></textarea>
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 dark:bg-blue-700 text-white rounded-xl shadow-lg hover:bg-blue-500 dark:hover:bg-blue-600 transition duration-300 font-semibold flex items-center gap-2"
            >
              Send Message <FaRegPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
