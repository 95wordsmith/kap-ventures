import Image from "next/image";
import { Button } from "./ui/button";

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
      <div>
        <div className="w-full h-24 bg-primary">
          <Button>Meet the Rest of the Team</Button>
        </div>
        <div className="w-full h-24 bg-secondary">
          <Button>Contact </Button>
        </div>
      </div>
    </div>
    </div>
   );
}
 
export default PartnersLanding;