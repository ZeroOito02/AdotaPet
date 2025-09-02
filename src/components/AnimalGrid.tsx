import AnimalCard from "./AnimalCard";
import dog1 from "@/assets/dog1.jpg";
import cat1 from "@/assets/cat1.jpg";
import dog2 from "@/assets/dog2.jpg";
import cat2 from "@/assets/cat2.jpg";

const mockAnimals = [
  {
    id: "1",
    name: "Buddy",
    species: "Cão",
    breed: "Golden Retriever",
    age: "2 anos",
    location: "São Paulo, SP",
    imageUrl: dog1,
    description: "Buddy é um cãozinho super carinhoso e brincalhão. Adora crianças e outros animais. Está procurando uma família que tenha tempo para brincar e dar muito amor.",
    gender: "Macho",
    size: "Grande"
  },
  {
    id: "2",
    name: "Luna",
    species: "Gato",
    breed: "Tabby",
    age: "1 ano",
    location: "Rio de Janeiro, RJ",
    imageUrl: cat1,
    description: "Luna é uma gatinha muito dócil e carinhosa. Gosta de carinho no colo e é muito independente. Perfeita para apartamentos.",
    gender: "Fêmea",
    size: "Médio"
  },
  {
    id: "3",
    name: "Max",
    species: "Cão",
    breed: "Border Collie",
    age: "3 anos",
    location: "Belo Horizonte, MG",
    imageUrl: dog2,
    description: "Max é muito inteligente e ativo. Precisa de exercícios diários e adora aprender truques novos. Ideal para famílias ativas.",
    gender: "Macho",
    size: "Médio"
  },
  {
    id: "4",
    name: "Mimi",
    species: "Gato",
    breed: "Laranja",
    age: "6 meses",
    location: "Curitiba, PR",
    imageUrl: cat2,
    description: "Mimi é uma filhotinha super brincalhona e curiosa. Adora explorar e brincar com bolinhas. Será uma companheira alegre e divertida.",
    gender: "Fêmea",
    size: "Pequeno"
  }
];

const AnimalGrid = () => {
  return (
    <section id="animais" className="py-16 bg-warm-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Animais Disponíveis para <span className="text-primary">Adoção</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos nossos amiguinhos que estão esperando por uma família amorosa
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockAnimals.map((animal) => (
            <AnimalCard key={animal.id} {...animal} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-lg font-semibold transition-bounce shadow-soft">
            Ver Todos os Animais
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnimalGrid;