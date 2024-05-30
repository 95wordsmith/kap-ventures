import Image from "next/image";
import { Check, MoveUpRight } from "lucide-react";
import Link from "next/link";
const Services = () => {
  const servicesData = [
    {
      title: "Audit",
      description: [
        "Comprehensive audits",
        "Internal controls",
        "Operational reviews",
        "Special Investigations",
      ],
      icon: "/icons/audit2.png",
      link: "/services/#audit",
    },
    {
      title: "Payroll",
      description: [
        "Efficient payroll management",
        "Tax filing",
        "Pension Fund administration",
      ],
      icon: "/icons/salary.png",
      link: "/services/#payroll",
    },
    {
      title: "Secretarial",

      description: [
        "Corporate registration",
        "Minute writing",
        "Statutory record keeping",
      ],
      icon: "/icons/secretary.png",
      link: "/services/#secretarial",
    },
    {
      title: "Taxation",
      description: [
        "Corporate tax computation",
        "Tax filing",
        "Advisory on tax planning",
      ],
      icon: "/icons/tax.png",
      link: "/services/#taxation",
    },
    {
      title: "Training",
      description: ["Professional training tailored to client needs"],
      icon: "/icons/analysis.png",
      link: "/services/#training",
    },
    {
      title: "Financial & Other",
      description: ["Expert accounting", "Stocktaking", "Manual preparation."],
      icon: "/icons/dashboard.png",
      link: "/services/#finance",
    },
  ];
  return (
    <div className="py-16">
      <h2 className="text-sm text-primary tracking-widest pb-4">WHAT WE'RE OFFERING</h2>
      <h1 className="text-3xl font-semibold tracking-wide text-secondary pb-12 ">Services We Provide</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1  xl:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div className="flex border  flex-col shadow-md rounded-sm justify-between ">
            <div className=" flex-1  ">
              <div className="bg-primary text-white tracking-wide items-center space-x-4  font-bold  uppercase text-2xl  flex p-4">
                <div className="bg-gray-50 rounded-full p-4">
                  <Image
                    src={service.icon}
                    width={50}
                    height={50}
                    alt={service.title}
                  />
                </div>
                <h1 className="">{service.title}</h1>
              </div>

              <div className="flex flex-col gap-4 px-12 py-4 ">
                {service.description.map((desc) => (
                  <div className="flex space-x-6">
                    <Check className="stroke-secondary" />
                    <p className="text-base text-secondary font-semibold">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
              <Link href={service.link}>
                <MoveUpRight className="stroke-secondary hover:stroke-secondary-light" />
              </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
