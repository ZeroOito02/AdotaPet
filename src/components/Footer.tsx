import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div>
      {/* Seção Sobre */}
      <section id="sobre" className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">
            Sobre a <span className="text-primary">AdotaPet</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A AdotaPet é uma plataforma dedicada a conectar corações e transformar vidas através da adoção responsável de animais. Nossa missão é facilitar o encontro entre pessoas que desejam adotar um companheiro e os animais que estão em busca de uma família amorosa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Amor e Cuidado</h3>
                <p className="text-muted-foreground">Cada animal merece uma segunda chance de ser feliz e amado.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Adoção Responsável</h3>
                <p className="text-muted-foreground">Promovemos a adoção consciente e responsável.</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Nova Família</h3>
                <p className="text-muted-foreground">Ajudamos a formar novas famílias cheias de amor.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer com seção de contato */}
      <footer id="contato" className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-8 w-8 text-primary fill-primary" />
              <h3 className="text-2xl font-bold">AdotaPet</h3>
            </div>
            <p className="text-background/80 mb-6 leading-relaxed">
              Conectando corações e transformando vidas através da adoção responsável de animais.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Início</a></li>
              <li><a href="#animais" className="text-background/80 hover:text-primary transition-colors">Animais</a></li>
              <li><a href="#sobre" className="text-background/80 hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-background/80 hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Como Ajudar</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Adotar um Animal</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Ser Voluntário</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Fazer Doação</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Apadrinhar</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
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
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/60">
            © 2024 AdotaPet. Todos os direitos reservados. Feito com ❤️ para os animais.
          </p>
        </div>
      </div>
    </footer>
    </div>
  );
};

export default Footer;