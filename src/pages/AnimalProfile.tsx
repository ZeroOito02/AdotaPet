import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar, Award, Users, Phone, Mail, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAnimalById } from "@/data/mockAnimals";

const AnimalProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const animal = getAnimalById(id || "");

  if (!animal) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Animal não encontrado</h1>
          <Button onClick={() => navigate("/animals")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para animais
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para animais
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-hero">
                <img 
                  src={animal.imageUrl} 
                  alt={`${animal.name} - ${animal.species} para adoção`}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-secondary-soft text-secondary-foreground">
                    {animal.species}
                  </Badge>
                </div>
              </div>
            </div>
            
            {/* Info Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{animal.name}</h1>
                <p className="text-xl text-muted-foreground mb-4">
                  {animal.breed} • {animal.gender} • {animal.size}
                </p>
                
                <div className="flex items-center gap-6 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>{animal.age}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    <span>{animal.location}</span>
                  </div>
                </div>
              </div>
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Características</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-success" />
                      <span className="text-sm">{animal.vaccinated ? "Vacinado" : "Não vacinado"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-success" />
                      <span className="text-sm">{animal.neutered ? "Castrado" : "Não castrado"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-success" />
                      <span className="text-sm">{animal.microchipped ? "Microchipado" : "Sem microchip"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span className="text-sm">Peso: {animal.weight}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Personalidade</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Bom com crianças</span>
                      <Badge variant={animal.goodWithKids ? "default" : "secondary"}>
                        {animal.goodWithKids ? "Sim" : "Não"}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Bom com outros pets</span>
                      <Badge variant={animal.goodWithPets ? "default" : "secondary"}>
                        {animal.goodWithPets ? "Sim" : "Não"}  
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Nível de energia</span>
                      <Badge variant="outline">{animal.energyLevel}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Sobre {animal.name}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {animal.description}
                </p>
              </div>
              
              <div className="space-y-4">
                
                <Card className="shadow-card">
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-3">Informações do Abrigo</h4>
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
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AnimalProfile;