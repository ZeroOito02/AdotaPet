import { Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Heart className="h-6 w-6 text-primary fill-primary" />
                    <h2 className="text-xl font-bold text-foreground">AdotaPet</h2>
                  </div>
                  
                  <nav className="flex flex-col space-y-4">
                    <SheetClose asChild>
                      <button 
                        onClick={() => navigate('/')} 
                        className="flex items-center space-x-3 text-left text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted"
                      >
                        <span className="text-lg">Início</span>
                      </button>
                    </SheetClose>
                    
                    <SheetClose asChild>
                      <button 
                        onClick={() => scrollToSection('animais')} 
                        className="flex items-center space-x-3 text-left text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted"
                      >
                        <span className="text-lg">Animais</span>
                      </button>
                    </SheetClose>
                    
                    <SheetClose asChild>
                      <button 
                        onClick={() => scrollToSection('sobre')} 
                        className="flex items-center space-x-3 text-left text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted"
                      >
                        <span className="text-lg">Sobre</span>
                      </button>
                    </SheetClose>
                    
                    <SheetClose asChild>
                      <button 
                        onClick={() => scrollToSection('contato')} 
                        className="flex items-center space-x-3 text-left text-foreground hover:text-primary transition-colors py-3 px-2 rounded-lg hover:bg-muted"
                      >
                        <span className="text-lg">Contato</span>
                      </button>
                    </SheetClose>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;