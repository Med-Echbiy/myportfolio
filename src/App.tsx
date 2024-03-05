import Contact from "./components/contactMe/Contact";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import { Toaster } from "./components/ui/toaster";
// import Nav from "./components/nav/Nav";

function App() {
  return (
    //px-1 sm:px-2 md:px-3 lg:px-4 xl:px-5
    <main className=' max-w-screen-2xl w-full flex items-center justify-center flex-col min-h-screen overflow-hidden relative'>
      <div className='w-full'>
        {/* <Nav /> */}
        <section className='max-w-full'>
          <Hero />
          <Projects />
          <Contact />
        </section>
      </div>
      <Toaster />
    </main>
  );
}

export default App;
