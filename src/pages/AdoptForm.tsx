import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Heart, User, Home, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAnimalById } from "@/data/mockAnimals";
import { useToast } from "@/hooks/use-toast";

const AdoptForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const animal = getAnimalById(id || "");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    occupation: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    housingType: "",
    hasYard: false,
    hasOtherPets: false,
    otherPetsDetails: "",
    hasChildren: false,
    childrenAges: "",
    previousPetExperience: "",
    whyAdopt: "",
    availability: "",
    agreement: false
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreement) {
      toast({
        title: "Erro",
        description: "Você deve concordar com os termos para continuar.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Formulário enviado com sucesso!",
      description: `Seu interesse em adotar ${animal?.name} foi registrado. Entraremos em contato em breve.`,
    });

    // Navigate to confirmation page
    navigate(`/adopt-confirmation/${id}`);
  };

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
        <div className="container mx-auto px-4 max-w-4xl">
          <Button 
            variant="ghost" 
            className="mb-6"
            onClick={() => navigate(`/animal/${id}`)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para o perfil de {animal.name}
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Animal Info Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4 shadow-card">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <img 
                      src={animal.imageUrl} 
                      alt={animal.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold text-foreground">{animal.name}</h3>
                    <p className="text-muted-foreground">{animal.breed} • {animal.age}</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
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
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Heart className="h-6 w-6 text-primary" />
                    Formulário de Adoção - {animal.name}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Preencha todos os campos para demonstrar seu interesse em adotar {animal.name}.
                  </p>
                </CardHeader>
                
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        Informações Pessoais
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName">Nome Completo *</Label>
                          <Input
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange("fullName", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">E-mail *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Telefone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="age">Idade *</Label>
                          <Input
                            id="age"
                            type="number"
                            min="18"
                            value={formData.age}
                            onChange={(e) => handleInputChange("age", e.target.value)}
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="occupation">Profissão *</Label>
                          <Input
                            id="occupation"
                            value={formData.occupation}
                            onChange={(e) => handleInputChange("occupation", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Home className="h-5 w-5 text-primary" />
                        Informações de Residência
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Label htmlFor="address">Endereço Completo *</Label>
                          <Input
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="city">Cidade *</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange("city", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">Estado *</Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleInputChange("state", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">CEP *</Label>
                          <Input
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange("zipCode", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="housingType">Tipo de Moradia *</Label>
                          <Select value={formData.housingType} onValueChange={(value) => handleInputChange("housingType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="casa">Casa</SelectItem>
                              <SelectItem value="apartamento">Apartamento</SelectItem>
                              <SelectItem value="sobrado">Sobrado</SelectItem>
                              <SelectItem value="chacara">Chácara/Sítio</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="hasYard"
                            checked={formData.hasYard}
                            onCheckedChange={(checked) => handleInputChange("hasYard", checked)}
                          />
                          <Label htmlFor="hasYard">Possui quintal/área externa</Label>
                        </div>
                      </div>
                    </div>

                    {/* Pet Experience */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Experiência com Animais</h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="hasOtherPets"
                            checked={formData.hasOtherPets}
                            onCheckedChange={(checked) => handleInputChange("hasOtherPets", checked)}
                          />
                          <Label htmlFor="hasOtherPets">Possui outros animais de estimação</Label>
                        </div>
                        
                        {formData.hasOtherPets && (
                          <div>
                            <Label htmlFor="otherPetsDetails">Descreva seus outros pets</Label>
                            <Textarea
                              id="otherPetsDetails"
                              value={formData.otherPetsDetails}
                              onChange={(e) => handleInputChange("otherPetsDetails", e.target.value)}
                              placeholder="Espécie, idade, temperamento..."
                            />
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="hasChildren"
                            checked={formData.hasChildren}
                            onCheckedChange={(checked) => handleInputChange("hasChildren", checked)}
                          />
                          <Label htmlFor="hasChildren">Possui crianças em casa</Label>
                        </div>
                        
                        {formData.hasChildren && (
                          <div>
                            <Label htmlFor="childrenAges">Idades das crianças</Label>
                            <Input
                              id="childrenAges"
                              value={formData.childrenAges}
                              onChange={(e) => handleInputChange("childrenAges", e.target.value)}
                              placeholder="Ex: 5, 8, 12 anos"
                            />
                          </div>
                        )}
                        
                        <div>
                          <Label htmlFor="previousPetExperience">Experiência anterior com pets</Label>
                          <Textarea
                            id="previousPetExperience"
                            value={formData.previousPetExperience}
                            onChange={(e) => handleInputChange("previousPetExperience", e.target.value)}
                            placeholder="Conte sobre sua experiência com animais de estimação..."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Motivation */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Motivação para Adoção</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="whyAdopt">Por que deseja adotar {animal.name}? *</Label>
                          <Textarea
                            id="whyAdopt"
                            value={formData.whyAdopt}
                            onChange={(e) => handleInputChange("whyAdopt", e.target.value)}
                            placeholder="Conte-nos sua motivação..."
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="availability">Disponibilidade de tempo para o pet *</Label>
                          <Select value={formData.availability} onValueChange={(value) => handleInputChange("availability", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="tempo-integral">Tempo integral</SelectItem>
                              <SelectItem value="meio-periodo">Meio período</SelectItem>
                              <SelectItem value="fins-de-semana">Principalmente fins de semana</SelectItem>
                              <SelectItem value="noites">Noites e fins de semana</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Agreement */}
                    <div className="border-t pt-6">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="agreement"
                          checked={formData.agreement}
                          onCheckedChange={(checked) => handleInputChange("agreement", checked)}
                          required
                        />
                        <Label htmlFor="agreement" className="text-sm leading-relaxed">
                          Declaro que todas as informações fornecidas são verdadeiras e concordo em receber uma visita 
                          do abrigo para avaliação das condições de adoção. Entendo que a adoção está sujeita à aprovação 
                          e que posso ser contatado para esclarecimentos adicionais.
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-hero transition-bounce"
                      >
                        <Heart className="h-5 w-5 mr-2" />
                        Enviar Formulário de Adoção
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdoptForm;