import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, Calendar } from "lucide-react";
import type { Animal } from "@/data/mockAnimals";

interface AnimalCardProps extends Omit<Animal, 'weight' | 'vaccinated' | 'neutered' | 'microchipped' | 'goodWithKids' | 'goodWithPets' | 'energyLevel' | 'shelterName' | 'shelterContact' | 'shelterEmail' | 'history' | 'personality' | 'specialNeeds' | 'dateAdded' | 'featured'> {}

const AnimalCard = ({ 
  id,
  name, 
  species, 
  breed, 
  age, 
  location, 
  imageUrl, 
  description, 
  gender, 
  size 
}: AnimalCardProps) => {
  const navigate = useNavigate();
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-hero transition-all duration-300 hover:-translate-y-2 bg-card border-border">
      <div className="relative overflow-hidden">
        <img 
          src={imageUrl} 
          alt={`${name} - ${species} para adoção`}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-secondary-soft text-secondary-foreground">
            {species}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className="bg-background/80 hover:bg-background text-foreground p-2 rounded-full backdrop-blur-sm"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{name}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">
              {breed} • {gender} • {size}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4 mb-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{age}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex gap-3">
        <Button 
          variant="outline" 
          className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-bounce"
          onClick={() => navigate(`/animal/${id}`)}
        >
          Ver Perfil
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AnimalCard;