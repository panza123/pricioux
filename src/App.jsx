import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./layout/About";
import Contacts from "./layout/Contacts";
import Gallery from "./layout/Gallery";
import Home from "./layout/Home";
import Services from "./layout/Services";

function App() {
  return (
    <>
      <main className="scroll-smooth">
        <Navbar />
        <Home />
        <Services />
        <About />
        <Gallery />
        <Contacts />
        <Footer/>
      
      
        
      </main>
    </>
  );
}

export default App;
