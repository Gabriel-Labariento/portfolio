import Image from "next/image";
import { Navbar } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 max-w-5xl">
        <HomePage></HomePage>
      </main>
      <Footer />
    </div>
   
  );
}
