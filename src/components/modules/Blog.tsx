import Image from "next/image";

const SinglePageBlog = () => {
  const blogs = [
    {
      title: "How to setup 2 separate Git profiles on a single device?",
      image: "https://i.ibb.co/RQ5jLyS/img3.jpg",
      date: "November 20, 2024",
      excerpt:
        "Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.",
      link: "#",
    },
    {
      title: "Step-by-Step Guide to Implementing Binary Search in JavaScript",
      image: "https://i.ibb.co/jf4XKCz/img1.jpg",
      date: "November 18, 2024",
      excerpt:
        "Discover the best electric cars of the year and what makes them stand out.Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.",
      link: "#",
    },
    {
      title:
        "Setting Up a React Project with TypeScript and Webpack: A Step-by-Step Guide Setting Up a React Project with TypeScript and Webpack: A Step-by-Step Guide",
      image: "https://i.ibb.co/D8R0k86/img2.webp",
      date: "November 15, 2024",
      excerpt:
        "Explore the financial and lifestyle benefits of renting a car instead of owning one.Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.Planning a road trip? Here are 10 tips to make your journey smooth and enjoyable.",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Latest Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:shadow-xl"
              >
                <div className="relative">
                  {/* Image with hover zoom effect */}
                  <div className="relative w-full h-64 overflow-hidden group">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
                  <p className="text-gray-600 mt-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <a
                    href={blog.link}
                    className="inline-block mt-4 text-primary font-semibold hover:underline"
                  >
                    Read More →
                  </a>
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

