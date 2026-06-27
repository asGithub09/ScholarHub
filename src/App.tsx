import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
