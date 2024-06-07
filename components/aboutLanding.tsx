import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Import } from "lucide-react";
import Link from "next/link"; 
const AboutLanding = () => {
  const values = ['We act with integrity','We act independently','We work as a team','We build on trust']
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 xl:gap-12 py-10 ">
        <div className="w-full">
          <Image
          className="w-full lg:h-full rounded-r-full"
            src={"/stylish.jpg"}
            alt="about-image"
            width={700}
            height={700}
          />
        </div>

        <div className=" w-full flex flex-col justify-center gap-8">
          <div className="p-4">
            <h1 className="text-center text-secondary uppercase tracking-wide font-semibold text-2xl pb-2">
              <span className="text-primary">KAP</span> Chartered Accountants
            </h1>
            <p className="text-gray-700 font-medium text-center">
              We're a firm of Chartered Accountants registered in Ghana,
              offering distinctive Audit, Accounting, Tax and Business Advisory
              services to our clients.
            </p>
          </div>
          <div>
            <h1 className="text-center text-secondary uppercase font-semibold text-2xl pb-2">
              Mission
            </h1>
            <div className="w-full p-4  bg-primary shadow-md shadow-gray-400">
              <p className="text-gray-50 italic ">
                We offer comprehensive and innovative professional services with
                a well-trained technical staff together with a team of
                experienced professional associates to promote sustainable and
                meaningful growth to our clients' business.
              </p>
            </div>
          </div>

          <div>
            <h1 className="text-center text-secondary uppercase font-semibold text-2xl pb-2">
              Value
            </h1>
            <div className="w-full p-4 bg-secondary shadow-md shadow-gray-400">
              <p className="text-gray-50 italic ">
                To provide quality and distinctive professional services which
                meet international standards.
              </p>
            </div>
          </div>
        </div>

        <div className=" w-full  my-auto flex flex-col gap-4 ">
          <h1 className="text-center text-secondary uppercase tracking-wide font-semibold text-2xl ">Corporate value</h1>
          <div className="flex flex-col items-center gap-4" >
          {values.map((value)=>(
            <div key={value} className="flex w-full justify-between p-4 bg-primary shadow-md shadow-gray-400">
              <Image src={'/icons/trust.png'} alt="trust" width={45} height={45}/>
            <p className=" my-auto text-lg text-gray-50 italic font-medium">{value}</p>
            </div>
          ))}
          </div>
          <Link href={'/about'}
          className={cn(
            "text-secondary font-medium  hover:scale-105 py-2 mr-4 px-4 text-xl transition  self-end rounded-none"
          )}
        >
          Learn More
        </Link>
    
        </div>
        <div className=" w-full">
          <Image
          className="w-full lg:h-full rounded-l-full"
            src={"/handshake.jpg"}
            alt="about-image"
            width={700}
            height={700}
          />
        </div>
      </div>
    </>
  );
};

export default AboutLanding;
