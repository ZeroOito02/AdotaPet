import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AnimalGrid from "@/components/AnimalGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AnimalGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
