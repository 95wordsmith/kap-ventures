import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
const Hero = () => {
  return ( 
  
    <section className=" py-16 flex gap-12 flex-wrap bg-gray-100 ">
      <div className="pl-8 sm:pl-12 md:pl-16 lg:pl-24 xl:w-2/5  my-auto" >
      <h1 className="text-4xl pb-4 tracking-wide text-primary-dark font-semibold uppercase">Expert Accounting and Advisory Services</h1>
      <h2 className="pb-8 w-[90%]  text-secondary-dark leading-relaxed">KAP Chartered Accountants provides comprehensive and innovative professional services to promote sustainable and meaningful growth to our clients' business</h2>
      <Button className={cn('text-white text-xl hover:text-secondary-dark rounded-none')} >Learn More</Button>
      <Button className={cn('text-secondary- text-xl')}  variant={"ghost"}>Contact Us</Button>
      </div>
    
    <div className="xl:3/5 xl:flex-1 pl-8 sm:pl-12 md:pl-16 lg:pl-24 xl:pl-0 ">

      <Image className="rounded-r-full"  src={'/hero-image.jpg '} width={1000} height={1500}   alt="image"/>
    </div>
     
    </section>
   
   );
}
 
export default Hero;