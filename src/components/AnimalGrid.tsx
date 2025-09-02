import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimalCard from "./AnimalCard";
import { featuredAnimals } from "@/data/mockAnimals";

const AnimalGrid = () => {
  const navigate = useNavigate();

  return (
    <section id="animais" className="py-16 bg-warm-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Destaques da <span className="text-primary">Semana</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos amiguinhos especiais que estão esperando por uma família amorosa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredAnimals.map((animal) => (
            <AnimalCard key={animal.id} {...animal} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            onClick={() => navigate("/animals")}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 font-semibold transition-bounce shadow-soft"
          >
            Ver Todos os Animais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnimalGrid;