import Image from "next/image";
import Link from "next/link";

const BlogLanding = () => {
  const blogPosts = [
    {
      title: "The Art of Auditing",
      description:
        "Uncovering Hidden Risks and Opportunities in Financial Statements",
      duration: 3,
      date: "April 23, 2023",
      image: "/blog/audit.jpg",
      link: "/blog/audit",
    },
    {
      title: "Fintech Revolution",
      description:
        "How Blockchain and AI are Transforming the Financial Landscape",
      duration: 5,
      date: "June 1, 2023",
      image: "/blog/tech.jpg",
      link: "/blog/tech",
    },
    {
      title: "Global Market Pulse",
      description:
        "Navigating the Impact of Geopolitical Tensions on International Trade and Investment",
      duration: 3,
      date: "January 2, 2024",
      image: "/blog/global.jpg",
      link: "/blog/global",
    },
    {
      title: "Tax Transformation",
      description:
        "How Digitilization is Changing the Face of Tax Compliance and Planning",
      duration: 6,
      date: "March 21, 2024",
      image: "/blog/stock.jpg",
      link: "/blog/tax",
    },
  ];

  return (
    <>
      <h2 className="text-sm text-primary tracking-widest pb-4">NEWS AND UPDATES</h2>
      <h1 className="text-3xl font-semibold tracking-wide text-secondary pb-8 ">Top News For the Week</h1>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2  xl:grid-cols-4  sm:gap-4 md:gap-8 ">
        {blogPosts.map((blog) => {
          return (
            <div key={blog.title}>
              <Image
             className="h-1/2"
                src={blog.image}
                width={500}
                height={200}
                alt={blog.image}
              />
              <div >
              <h1 className="text-xl  font-semibold text">{blog.title}</h1>
              <span className="text-xs text-gray-500">{blog.date}</span>
              <span className="text-xs text-gray-500"> - {blog.duration} min read</span>
              <p className="text-sm font-medium text-gray-700 pb-4">{blog.description}</p>
              <Link  href={blog.link} className="underline text-gray-500 hover:text-primary">
                Read More
              </Link>

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlogLanding;
