import Hero from "./components/hero/Hero";
// import Nav from "./components/nav/Nav";

function App() {
  return (
    //px-1 sm:px-2 md:px-3 lg:px-4 xl:px-5
    <main className=' max-w-screen-2xl w-full flex items-center justify-center flex-col min-h-screen'>
      <div className='w-full flex'>
        {/* <Nav /> */}
        <section className=' flex-grow'>
          <Hero />
        </section>
      </div>
    </main>
  );
}

export default App;
