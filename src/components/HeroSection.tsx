import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Search } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";
import SearchModal from "./SearchModal";

const HeroSection = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <section className="relative min-h-[500px] sm:min-h-[600px] bg-gradient-hero flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Animais felizes esperando adoção" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-secondary-soft/60"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4 sm:mb-6">
            <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary fill-primary animate-pulse" />
            <span className="text-primary font-semibold text-base sm:text-lg">Encontre seu novo melhor amigo</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Cada animal merece uma
            <span className="text-primary block"> segunda chance</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto sm:mx-0 leading-relaxed px-4 sm:px-0">
            Conectamos corações! Milhares de cães e gatos carinhosos estão esperando 
            por uma família que os ame. Encontre seu companheiro perfeito hoje.
          </p>
          
          <div className="flex justify-center sm:justify-start mb-8 sm:mb-0">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce w-full sm:w-auto max-w-xs sm:max-w-none"
              onClick={() => setIsSearchModalOpen(true)}
            >
              <Search className="h-5 w-5 mr-2" />
              Buscar por Região
            </Button>
          </div>
          
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-md sm:max-w-none mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground text-sm">Animais Resgatados</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">1200+</div>
              <div className="text-muted-foreground text-sm">Adoções Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground text-sm">Parceiros</div>
            </div>
          </div>
        </div>
      </div>
      
      <SearchModal 
        isOpen={isSearchModalOpen} 
        onClose={() => setIsSearchModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;