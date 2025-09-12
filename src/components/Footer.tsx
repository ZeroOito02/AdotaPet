import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      {/* Seção Sobre */}
      <section id="sobre" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8">
            Sobre a <span className="text-primary">AdotaPet</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              A AdotaPet é uma plataforma dedicada a conectar corações e transformar vidas através da adoção responsável de animais. Nossa missão é facilitar o encontro entre pessoas que desejam adotar um companheiro e os animais que estão em busca de uma família amorosa.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <Heart className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Amor e Cuidado</h3>
                <p className="text-muted-foreground px-4 sm:px-0">Cada animal merece uma segunda chance de ser feliz e amado.</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 sm:h-16 sm:w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl font-bold text-primary-foreground">+</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Adoção Responsável</h3>
                <p className="text-muted-foreground px-4 sm:px-0">Promovemos a adoção consciente e responsável.</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 sm:h-16 sm:w-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl sm:text-2xl">🏠</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Nova Família</h3>
                <p className="text-muted-foreground px-4 sm:px-0">Ajudamos a formar novas famílias cheias de amor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer com seção de contato */}
      <footer id="contato" className="bg-foreground text-background py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary fill-primary" />
              <h3 className="text-xl sm:text-2xl font-bold">AdotaPet</h3>
            </div>
            <p className="text-background/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Conectando corações e transformando vidas através da adoção responsável de animais.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Início</a></li>
              <li><a href="#animais" className="text-background/80 hover:text-primary transition-colors">Animais</a></li>
              <li><a href="#sobre" className="text-background/80 hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-background/80 hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-background/80">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-background/80">contato@adotapet.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-background/80">São Paulo, SP</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-background/60 text-sm">
            © 2024 AdotaPet. Todos os direitos reservados. Feito com ❤️ para os animais.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;