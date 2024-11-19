import { FiMapPin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const ContactMe = () => {
  return (
    <div
      id="Contact_me"
      className="py-10 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg"
    >
      <h2 className="my-8 text-3xl font-semibold text-center text-blue-600 dark:text-blue-400 underline underline-offset-8">
        Contact Me
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 px-5 md:px-16">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Get in Touch
          </h2>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Have something to say? I’m here to help. Fill out the form or send
            an email.
          </p>
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FiMapPin className="text-2xl text-blue-600 dark:text-blue-400" />{" "}
            Feni, Bangladesh
          </p>
          <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <MdOutlineEmail className="text-2xl text-blue-600 dark:text-blue-400" />
            khaledahmednayeem2004@gmail.com
          </p>
          <Link
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:underline"
            href="https://www.linkedin.com/in/khaled-ahmed-nayeem-96596826a/"
          >
            <FaLinkedin className="text-2xl text-blue-600 dark:text-blue-400" />
            Khaled Ahmed Nayeem
          </Link>
        </div>
        <form className="flex-1 mt-8 lg:mt-0 px-5 md:px-16">
          <div className="mb-6">
            <div className="mx-0 mb-4">
              <label
                htmlFor="name"
                className="block pb-1 text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full rounded-md shadow-md dark:focus:border-blue-600 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 outline-none py-2 px-3 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-300"
                name="name"
              />
            </div>
            <div className="mx-0 mb-4">
              <label
                htmlFor="email"
                className="block pb-1 text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email address"
                className="w-full rounded-md shadow-md dark:focus:border-blue-600 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 outline-none py-2 px-3 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-300"
                name="email"
              />
            </div>
            <div className="mx-0 mb-4">
              <label
                htmlFor="textarea"
                className="block pb-1 text-sm font-medium text-gray-600 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="textarea"
                name="message"
                cols={30}
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-md shadow-md dark:focus:border-blue-600 dark:bg-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 outline-none py-2 px-3 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition duration-300"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button className="px-6 py-2.5 bg-blue-600 dark:bg-blue-700 text-white hover:bg-blue-500 dark:hover:bg-blue-600 rounded-lg shadow-lg transition duration-300 font-semibold">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
