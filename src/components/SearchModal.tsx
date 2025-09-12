import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (state.trim() || city.trim()) {
      const searchParams = new URLSearchParams();
      if (state.trim()) searchParams.set('estado', state.trim());
      if (city.trim()) searchParams.set('cidade', city.trim());
      
      navigate(`/animals?${searchParams.toString()}`);
      onClose();
      setState("");
      setCity("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md mx-4 sm:mx-auto max-w-[95vw] sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Buscar por Região
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="state">Estado</Label>
            <Input
              id="state"
              placeholder="Ex: São Paulo, Rio de Janeiro..."
              value={state}
              onChange={(e) => setState(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          
          <div>
            <Label htmlFor="city">Cidade</Label>
            <Input
              id="city"
              placeholder="Ex: São Paulo, Rio de Janeiro..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 pt-4">
            <Button 
              onClick={handleSearch}
              className="flex-1 w-full sm:w-auto"
              disabled={!state.trim() && !city.trim()}
            >
              <Search className="h-4 w-4 mr-2" />
              Buscar Animais
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              Cancelar
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;