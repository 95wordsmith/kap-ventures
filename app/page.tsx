import Hero from "@/components/Hero"
import Services from "@/components/services";

export default function Home() {
  return (
    <>
    <Hero/>
    <main className="px-8 sm:px-12 md:px-16 lg:px-24 ">
     <Services/>
    </main>
    </>
  );
}
