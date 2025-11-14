🐾 AdotaPet

AdotaPet é uma aplicação web desenvolvida para apoiar o processo de adoção responsável de animais, facilitando o encontro entre adotantes e pets que aguardam um novo lar.

Acesso e Instalação do Sistema

Atualmente, o sistema AdotaPet está disponível apenas como versão web, com planos futuros para expansão mobile.

Requisitos para Instalação

Para executar o sistema em sua máquina local, você precisa de:

Node.js 18 ou superior

Navegador Web Atualizado

Editor de Código (VS Code recomendado)

Extensão Live Server (opcional – Vite já fornece servidor local)

Sistema Operacional Compatível: Windows, Linux ou macOS

Observação: apesar de o documento original mencionar HTML/CSS/JS, o AdotaPet utiliza React + TypeScript + Vite.

📁 Como obter o projeto
git clone https://github.com/ZeroOito02/AdotaPet
cd AdotaPet


Ou baixe o ZIP do GitHub e extraia na sua máquina.

Tecnologias Utilizadas

React + TypeScript

Vite

Tailwind CSS

shadcn/ui

React Router

TanStack Query

Axios / Fetch

Zod (se houver validação)

📂 Estrutura Geral do Projeto
src/
 ├─ components/
 ├─ pages/
 ├─ routes/
 ├─ services/
 ├─ hooks/
 ├─ types/
 ├─ lib/
 ├─ App.tsx
 └─ main.tsx

Como Rodar o Projeto
1️ Instalar dependências
npm install

2️ Rodar o servidor de desenvolvimento
npm run dev


O Vite exibirá algo como:

http://localhost:5173/


Acesse no navegador.

Scripts Disponíveis
Comando	Descrição
npm run dev	Executa a aplicação em modo desenvolvimento
npm run build	Gera a build de produção
npm run preview	Visualiza a build localmente
 Rotas da Aplicação
/               → Página inicial
/adotar         → Listagem de pets
/pet/:id        → Detalhes do pet
/sobre          → Informações sobre o projeto
/contato        → Contato e dúvidas

Estilização

O AdotaPet utiliza:

Tailwind CSS (estilização utilitária)

shadcn/ui (componentes acessíveis e padronizados)

Adicionar componentes:

npx shadcn-ui add button

 Comunicação com API

Exemplo de uso do TanStack Query:

const { data, isLoading } = useQuery({
  queryKey: ["pets"],
  queryFn: fetchPets,
});

 Build para Produção
npm run build


Arquivos otimizados ficam em:

dist/

 Deploy

Pode ser enviado para:

Vercel

Netlify

GitHub Pages

Render

Posso gerar um tutorial de deploy completo se quiser.

 Licença

Este projeto é distribuído sob a licença MIT.
Sinta-se livre para usar, modificar e distribuir.

 Observação

Este README segue o padrão oficial de documentação do GitHub:

✔ Títulos em hierarquia correta
✔ Seções curtas e objetivas
✔ Código com markdown
✔ Tabelas
✔ Estrutura clara
✔ Elementos visuais (emojis, separadores)
✔ Linguagem formal e fácil de entender
