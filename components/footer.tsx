import Image from "next/image";
import Link from "next/link";
import {Linkedin,Twitter,Facebook} from 'lucide-react'

const socials =[
  {icon:<Facebook className="stroke-secondary hover:stroke-primary"/>, link:'www.facebook.com'},
  {icon:<Twitter className="stroke-secondary hover:stroke-primary"/>, link:'www.twitter.com'},
  {icon:<Linkedin className="stroke-secondary hover:stroke-primary"/>, link:'www.linkedin.com'},

]
const navElements = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];
const blogPosts = [
  {
    title: "The Art of Auditing",
    link: "/blog/audit",
  },
  {
    title: "Fintech Revolution",
    link: "/blog/tech",
  },
  {
    title: "Global Market Pulse",
    link: "/blog/global",
  },
  {
    title: "Tax Transformation",
    link: "/blog/tax",
  },
];
const Footer = () => {
  return (
    <div className="w-full  bg-primary-light ">
{/* grid lg:grid-cols-3 sm:grid-cols-2  xl:grid-cols-4  sm:gap-4 md:gap-8  */}
    <div className="px-8 sm:px-12 md:px-16 border-b-2 border-white lg:px-24  grid  gap-8 sm:grid-cols-2 xl:grid-cols-4 py-8 ">
      <div className="flex flex-col gap-2">
        {/* 1st row */}
        <Image src={"/logo.png"} width={45} height={45} alt="logo" />
        <p className="text-primary text-base font-semibold">KAP </p>
        <p className="text-secondary font-semibold">CHARTED ACCOUNTANTS</p>
        <ul className="flex gap-4">
          {socials.map(social=>(
            <a key={social.link} href={social.link} target="_blank">{social.icon}</a>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        {/* 2nd row */}
        <h1 className="font-semibold">Explore</h1>
        {navElements.map((nav) => (
          <p key={nav.name} className="text-base hover:text-gray-400 text-gray-700 font-medium">

          <Link  href={nav.href}>
            {nav.name}
          </Link>
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {/* 3rd row */}
        <h1 className="font-semibold">Recent News</h1>

        {blogPosts.map((blog) => (
          <p key={blog.title} className="text-base hover:text-gray-400 text-gray-700 font-medium">
          <Link  href={blog.link}>
            {blog.title}
          </Link>
          </p>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {/* last row */}
        <h1 className="font-semibold">Contact US</h1>
        <p className=" text-gray-700 font-medium">Head Office</p>
        <p className=" text-gray-700 font-medium">9 Kanfla Close Asylum Down</p>
        <p className=" text-gray-700 font-medium">0302236392, 0244788797</p>
        <p className=" text-gray-700 font-medium">info@kapghana.com </p>
        <p className=" text-gray-700 font-medium">kasante@kapghana.com</p>
        </div>
    </div>
    <p className="text-center py-4 text-xs md:text-sm font-medium text-gray-500">Copyright 2024 KAP CHARTED ACCOUNTANTS, All Right Reserved</p>
    </div>
  );
};

export default Footer;
