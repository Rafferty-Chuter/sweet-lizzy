import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Highlights from "@/components/Highlights";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Highlights />
        <Hours />
        <Contact />
      </main>
      <footer className="bg-candy-brown text-amber-100 text-center font-body text-sm py-6 px-4">
        <p>
          &copy; {new Date().getFullYear()} Sweet Lizzy, Farnham. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
