'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
const Navbar = () => {
  const pathname = usePathname()

  const navElements = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <header className=" px-8 sm:px-12 md:px-16 lg:px-24 flex shadow-sm py-4 items-center justify-between ">
      <div className="flex gap-4">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        <div className=" text-sm leading-4 tracking-normal md:tracking-widest text-primary font-bold my-auto">
          <h1>KAP</h1>
          <h1 className="text-secondary">CHARTERED ACCOUNTANTS</h1>
        </div>
      </div>
      <nav>
        <Menu className="md:hidden stroke-primary size-8 hover:stroke-secondary cursor-pointer"/>
        <ul className="hidden  md:flex text-base lg:text-lg gap-8 lg:gap-12 font-medium text-primary  ">
          {navElements.map((nav) => (
            <li key={nav.name} className="hover:text-primary-dark">
              <Link className={pathname=== nav.href? 'text-secondary-dark':''}  href={nav.href}>{nav.name}</Link>{" "}
            </li>
          ))}
        </ul>
      </nav>
   
    </header>
  );
};

export default Navbar;
