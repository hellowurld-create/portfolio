'use client'

import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className='relative bg-white flex justify-center overflow-clip flex-col mx-auto sm:px-10 px-5 items-center'>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Process /> 
        <Footer />
      </div>
   </main>
  );
}
