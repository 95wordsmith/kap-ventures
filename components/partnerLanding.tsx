import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PartnersLanding = () => {
  return ( 
    <div className="py-10">
    <h2 className="text-sm text-primary tracking-widest pb-4 uppercase">Our Partners</h2>
      <h1 className="text-3xl font-semibold tracking-wide text-secondary pb-8 ">Meet Our Distinguished Partners</h1>

    <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 xl:gap-12 ">
      <div className="flex gap-4 justify-between">
      <div >
        <Image src={'/partners-placeholder.jpg'} width={450} height={350} alt="Kwasi Asante"/>
        <h1 className="text-center text-gray-600 pt-2  font-medium text-xl">Mr. Kwasi Asante</h1>
        <h2 className="text-center text-secondary font-bold text-md tracking-wider uppercase">Managing Director</h2>
      </div>
      <div>
        <Image src={'/partners-placeholder.jpg'} width={450} height={350} alt="George Quarshie"/>
        <h1 className="text-center text-gray-600 pt-2  font-medium text-xl">Mr. George Quarshie</h1>
        <h2 className="text-center text-secondary font-bold text-md tracking-wider uppercase">Managing Director</h2>
      </div>

      </div>
      <div className="flex flex-col my-auto gap-8">
        <div className="w-full flex justify-between  p-8 items-center shadow-md shadow-gray-400  bg-primary">
          <Image  src={'/team.png'} alt="team" width={80} height={70}/>
          <Link href={'/about'} className={cn('font-medium rounded-none  hover:text-secondary hover:scale-110 hover:transition   text-lg text-gray-100 ')}>Meet the Rest of the Team</Link>
        </div>
        <div className="w-full  bg-secondary shadow-md shadow-gray-400 flex justify-between  p-8 items-center  ">
        <Image src={'/contact.png'} alt="contact" width={80} height={70}/>

        <Link href={'/contact'}  className={cn('font-medium rounded-none hover:text-primary hover:scale-110 hover:transition   text-lg text-gray-100 ')}>Contact Us</Link>

        </div>
      </div>
    </div>
    </div>
   );
}
 
export default PartnersLanding;