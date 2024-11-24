import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaLinkedin,
  FaRegPaperPlane,
  FaGithub,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import Link from "next/link";

const ContactMe5 = () => {
  return (
    <div
      id="Contact_me"
      className="py-10 dark:bg-gray-900 bg-white rounded-lg shadow-xl"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Let&apos;s Connect
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start">
        {/* Contact Information */}
        <div className="flex-1 px-6 md:px-16 space-y-6">
          <div className="flex gap-4 flex-wrap">
            <div className="w-full sm:w-auto px-5 py-3 border-2 border-dashed rounded-xl hover:shadow-lg transition-all duration-300">
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <FiMapPin className="text-3xl dark:text-blue-400" /> Feni,
                Bangladesh
              </p>
            </div>
            <div className="w-full sm:w-auto px-5 py-3 border-2 border-dashed rounded-xl hover:shadow-lg transition-all duration-300">
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <LuPhone className="text-3xl" />
                +880 1869653705
              </p>
            </div>
            <div className="w-full sm:w-auto px-5 py-3 border-2 border-dashed rounded-xl hover:shadow-lg transition-all duration-300">
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <MdOutlineEmail className="text-3xl" />
                khaledahmednayeem2004@gmail.com
              </p>
            </div>
            {/* Social Links */}
            {[
              {
                href: "https://www.linkedin.com/in/khaled-ahmed-nayeem-96596826a",
                icon: <FaLinkedin />,
                label: "LinkedIn",
              },
              {
                href: "https://www.instagram.com/khaled_ahmed_nayeem/",
                icon: <FaInstagram />,
                label: "Instagram",
              },
              {
                href: "https://github.com/khaled-ahmed-nayeem",
                icon: <FaGithub />,
                label: "GitHub",
              },
              {
                href: "https://www.facebook.com/khaledahmednayeem/",
                icon: <FaFacebook />,
                label: "Facebook",
              },
            ].map(({ href, icon, label }) => (
              <div
                className="w-full sm:w-auto px-5 py-3 border-2 border-dashed rounded-xl hover:shadow-lg transition-all duration-300"
                key={label}
              >
                <Link
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
                  href={href}
                >
                  {icon}
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Form Section */}
        <form className="flex-1 mt-8 lg:mt-0 px-6 md:px-16">
          <div className="mb-6">
            {/* Name Input */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300 pb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full rounded-xl dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 outline-none py-2 px-4 transition duration-300 border border-dashed"
                name="name"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300 pb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="w-full rounded-xl dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 outline-none py-2 px-4 transition duration-300 border border-dashed"
                name="email"
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600 dark:text-gray-300 pb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                className="w-full rounded-xl dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 outline-none py-2 px-4 transition duration-300 border border-dashed"
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button className="px-8 py-3 bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-500 dark:hover:bg-blue-600 rounded-xl shadow-lg transition duration-300 font-semibold flex items-center gap-2 text-lg">
              Send Message <FaRegPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe5;
