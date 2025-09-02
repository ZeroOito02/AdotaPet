import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Search } from "lucide-react";
import heroImage from "@/assets/hero-pets.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[600px] bg-gradient-hero flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Animais felizes esperando adoção" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-secondary-soft/60"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <Heart className="h-8 w-8 text-primary fill-primary animate-pulse" />
            <span className="text-primary font-semibold text-lg">Encontre seu novo melhor amigo</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Cada animal merece uma
            <span className="text-primary block"> segunda chance</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Conectamos corações! Milhares de cães e gatos carinhosos estão esperando 
            por uma família que os ame. Encontre seu companheiro perfeito hoje.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-hero transition-bounce"
              onClick={() => navigate("/animals")}
            >
              <Heart className="h-5 w-5 mr-2" />
              Ver Animais Disponíveis
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
              onClick={() => navigate("/animals")}
            >
              <Search className="h-5 w-5 mr-2" />
              Buscar por Região
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-muted-foreground text-sm">Animais Resgatados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1200+</div>
              <div className="text-muted-foreground text-sm">Adoções Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground text-sm">Parceiros</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;