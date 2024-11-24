// import Image from "next/image";
// import Link from "next/link";

// const SinglePageBlog = () => {
//   const blogs = [
//     {
//       title: "How to setup 2 separate Git profiles on a single device?",
//       image: "https://i.ibb.co/RQ5jLyS/img3.jpg",
//       date: "November 20, 2024",
//       excerpt:
//         "Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable. Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.",
//       link: "#",
//     },
//     {
//       title: "Step-by-Step Guide to Implementing Binary Search in JavaScript",
//       image: "https://i.ibb.co/jf4XKCz/img1.jpg",
//       date: "November 18, 2024",
//       excerpt:
//         "Discover the best electric cars of the year and what makes them stand out. Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.",
//       link: "#",
//     },
//     {
//       title:
//         "Setting Up a React Project with TypeScript and Webpack: A Step-by-Step Guide",
//       image: "https://i.ibb.co/D8R0k86/img2.webp",
//       date: "November 15, 2024",
//       excerpt:
//         "Explore the financial and lifestyle benefits of renting a car instead of owning one. Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.",
//       link: "#",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <section className="py-12 max-w-5xl mx-auto">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
//               Latest Blog Insights
//             </h2>
//             <p className="text-lg text-gray-600 sm:w-[70%] mx-auto">
//               Dive into the latest posts, where passion meets knowledge,
//               offering a deep dive into tech, lifestyle, and all things digital.
//             </p>
//           </div>
//           <div>
//             {blogs.map((blog, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col md:flex-row gap-4 mb-8 items-center"
//               >
//                 {/* Image with hover zoom effect */}
//                 <div className="relative w-full h-64 sm:h-80 md:h-64 overflow-hidden group rounded-xl">
//                   <Image
//                     src={blog.image}
//                     alt={`Image for blog post: ${blog.title}`}
//                     fill
//                     style={{ objectFit: "cover" }}
//                     className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
//                     aria-label={`Image for blog post: ${blog.title}`}
//                   />
//                 </div>
//                 <div className="p-6">
//                   <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
//                   <h3 className="text-3xl font-bold text-gray-800 line-clamp-2">
//                     {blog.title}
//                   </h3>
//                   <p className="text-gray-600 mt-4 line-clamp-3">
//                     {blog.excerpt}
//                   </p>
//                   {/* <Link
//                     href={blog.link}
//                     className="hover:bg-gray-200 py-2 px-4 rounded-xl inline-block mt-4 text-primary font-semibold underline"
//                     aria-label={`Read more about ${blog.title}`}
//                   >
//                     Read More
//                   </Link> */}
//                   <Link
//                     href={blog.link}
//                     className="hover:bg-gray-800 hover:text-white bg-gray-200 py-2 px-4 rounded-xl inline-block mt-4 text-primary font-semibold "
//                     aria-label={`Read more about ${blog.title}`}
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SinglePageBlog;

import Image from "next/image";
import Link from "next/link";

const SinglePageBlog = () => {
  const blogs = [
    {
      title: "How to setup 2 separate Git profiles on a single device?",
      image: "https://i.ibb.co/RQ5jLyS/img3.jpg",
      date: "November 20, 2024",
      excerpt:
        "Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable. Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.",
      link: "#",
    },
    {
      title: "Step-by-Step Guide to Implementing Binary Search in JavaScript",
      image: "https://i.ibb.co/jf4XKCz/img1.jpg",
      date: "November 18, 2024",
      excerpt:
        "Discover the best electric cars of the year and what makes them stand out. Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.",
      link: "#",
    },
    {
      title:
        "Setting Up a React Project with TypeScript and Webpack: A Step-by-Step Guide",
      image: "https://i.ibb.co/D8R0k86/img2.webp",
      date: "November 15, 2024",
      excerpt:
        "Explore the financial and lifestyle benefits of renting a car instead of owning one. Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="py-12 max-w-5xl mx-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Latest Blog Insights
            </h2>
            <p className="text-lg text-gray-600 sm:w-[70%] mx-auto">
              Dive into the latest posts, where passion meets knowledge,
              offering a deep dive into tech, lifestyle, and all things digital.
            </p>
          </div>
          <div>
            {blogs.map((blog, index) => (
              <div
                key={index}
                // className="flex flex-col md:flex-row gap-4 mb-6 items-center border-b-2 pb-6"\
                className={`flex flex-col md:flex-row gap-4 mb-6 items-center pb-6 ${
                  index !== blogs.length - 1 ? "border-b-2" : ""
                }`} // Only apply border-b-2 except for the last blog
              >
                {/* Image with hover zoom effect */}
                <div className="relative w-full h-64 sm:h-80 md:h-64 overflow-hidden group rounded-xl">
                  <Image
                    src={blog.image}
                    alt={`Image for blog post: ${blog.title}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    aria-label={`Image for blog post: ${blog.title}`}
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
                  <h3 className="text-3xl font-bold text-gray-800 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mt-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  {/* <Link
                    href={blog.link}
                    className="hover:bg-gray-200 py-2 px-4 rounded-xl inline-block mt-4 text-primary font-semibold underline"
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read More
                  </Link> */}
                  <Link
                    href={blog.link}
                    className="hover:bg-gray-800 hover:text-white bg-gray-200 py-2 px-4 rounded-xl inline-block mt-4 text-primary font-semibold "
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePageBlog;
