import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Heart, Home, Phone, Mail, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAnimalById } from "@/data/mockAnimals";

const AdoptConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const animal = getAnimalById(id || "");

  if (!animal) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Animal não encontrado</h1>
          <Button onClick={() => navigate("/animals")}>
            Voltar para animais
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-success/20 rounded-full p-6">
                <CheckCircle className="h-16 w-16 text-success" />
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Formulário Enviado com Sucesso! 🎉
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Obrigado por demonstrar interesse em adotar <strong>{animal.name}</strong>. 
              Seu pedido foi enviado com sucesso e será analisado pela nossa equipe.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Animal Info */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <img 
                    src={animal.imageUrl} 
                    alt={animal.name}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-2xl font-bold text-foreground">{animal.name}</h3>
                  <p className="text-muted-foreground">{animal.breed} • {animal.age}</p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Espécie:</span>
                    <span className="font-medium">{animal.species}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Porte:</span>
                    <span className="font-medium">{animal.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Localização:</span>
                    <span className="font-medium">{animal.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-6 w-6 text-primary" />
                  Próximos Passos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-full p-2 mt-1">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Análise do Formulário</h4>
                      <p className="text-sm text-muted-foreground">
                        Nossa equipe analisará suas informações em até 2 dias úteis.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-full p-2 mt-1">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Contato Inicial</h4>
                      <p className="text-sm text-muted-foreground">
                        Entraremos em contato para uma conversa inicial e esclarecimentos.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-full p-2 mt-1">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Visita Domiciliar</h4>
                      <p className="text-sm text-muted-foreground">
                        Agendaremos uma visita para conhecer você e seu lar.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 rounded-full p-2 mt-1">
                      <span className="text-primary font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Encontro com {animal.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Organize um encontro para conhecer seu futuro companheiro.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    Informações do Abrigo
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>{animal.shelterName}</strong></p>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>{animal.shelterContact}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>{animal.shelterEmail}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="text-center mt-12 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => navigate("/animals")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-hero transition-bounce"
              >
                <Home className="h-5 w-5 mr-2" />
                Ver Outros Animais
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => navigate("/")}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
              >
                Voltar ao Início
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Você receberá um e-mail de confirmação em breve com todas essas informações.
              Caso tenha dúvidas, não hesite em entrar em contato conosco.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdoptConfirmation;