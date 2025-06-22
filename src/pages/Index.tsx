import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowToStart from "@/components/HowToStart";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowToStart />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;
