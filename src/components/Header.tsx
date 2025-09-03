import { Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary fill-primary" />
            <h1 className="text-2xl font-bold text-foreground">AdotaPet</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => navigate('/')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('animais')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Animais
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;