import AboutLanding from "@/components/aboutLanding";
import BlogLanding from "@/components/blogLanding";
import Hero from "@/components/Hero"
import PartnersLanding from "@/components/partnerLanding";
import Services from "@/components/services";


export default function Home() {
  return (
    <>
    <Hero/>
    <main className="px-8 sm:px-12 md:px-16 lg:px-20 ">
     <Services/>
     <AboutLanding/>
     <PartnersLanding/>
     <BlogLanding/>
    </main>
    </>
  );
}
