import Header from "../components/Header";
import Plans from "../components/Plans";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import About from "../components/Abount";

const HomePage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Plans />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
