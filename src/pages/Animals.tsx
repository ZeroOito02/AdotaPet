import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Heart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimalCard from "@/components/AnimalCard";
import { mockAnimals } from "@/data/mockAnimals";
import { useFavorites } from "@/hooks/useFavorites";

const Animals = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("all");
  const [sizeFilter, setSizeFilter] = useState("all");
  const [ageFilter, setAgeFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { favorites } = useFavorites();
  
  // Apply URL search parameters on component mount
  useEffect(() => {
    const estado = searchParams.get('estado');
    const cidade = searchParams.get('cidade');
    
    if (estado) {
      setLocationFilter(estado);
    }
    if (cidade) {
      setSearchTerm(cidade);
    }
  }, [searchParams]);

  const filteredAnimals = mockAnimals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.breed.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecies = speciesFilter === "all" || animal.species === speciesFilter;
    const matchesSize = sizeFilter === "all" || animal.size === sizeFilter;
    const matchesLocation = locationFilter === "all" || animal.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesFavorites = !showFavoritesOnly || favorites.includes(animal.id);
    
    return matchesSearch && matchesSpecies && matchesSize && matchesLocation && matchesFavorites;
  });

  const locations = [...new Set(mockAnimals.map(animal => 
    animal.location.split(", ")[1] || animal.location
  ))];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container mx-auto px-4">
            <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Animais Disponíveis para <span className="text-primary">Adoção</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Encontre seu novo melhor amigo entre nossos {mockAnimals.length} animais disponíveis
            </p>
          </div>

          {/* Filters Section */}
          <Card className="mb-8 shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Search className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Filtros de Busca</h3>
                </div>
                <Button
                  variant={showFavoritesOnly ? "default" : "outline"}
                  onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                  className={showFavoritesOnly ? "bg-red-500 hover:bg-red-600 text-white" : "border-red-500 text-red-500 hover:bg-red-50"}
                >
                  <Heart className={`h-4 w-4 mr-2 ${showFavoritesOnly ? 'fill-white' : ''}`} />
                  Favoritos {favorites.length > 0 && `(${favorites.length})`}
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                <div className="relative">
                  <Input
                    placeholder="Buscar por nome ou raça..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                  <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                </div>
                
                <Select value={speciesFilter} onValueChange={setSpeciesFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Espécie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as espécies</SelectItem>
                    <SelectItem value="Cão">Cães</SelectItem>
                    <SelectItem value="Gato">Gatos</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={sizeFilter} onValueChange={setSizeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Porte" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os portes</SelectItem>
                    <SelectItem value="Pequeno">Pequeno</SelectItem>
                    <SelectItem value="Médio">Médio</SelectItem>
                    <SelectItem value="Grande">Grande</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Estado" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos os estados</SelectItem>
                    {locations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSpeciesFilter("all");
                    setSizeFilter("all");
                    setLocationFilter("all");
                    setShowFavoritesOnly(false);
                  }}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Limpar Filtros
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Summary */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Mostrando {filteredAnimals.length} de {mockAnimals.length} animais
            </p>
          </div>

          {/* Animals Grid */}
          {filteredAnimals.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredAnimals.map((animal) => (
                <AnimalCard key={animal.id} {...animal} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground mb-4">
                Nenhum animal encontrado com os filtros selecionados
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSpeciesFilter("all");
                  setSizeFilter("all");
                  setLocationFilter("all");
                  setShowFavoritesOnly(false);
                }}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Animals;