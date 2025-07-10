# 📸 InstaSplash - Rede Social de Fotos

Uma aplicação web moderna inspirada no Instagram, desenvolvida com Next.js, que permite explorar, pesquisar e favoritar fotos da API do Unsplash.

## 🎯 Funcionalidades

### ✨ Feed Principal
- **Grid de fotos aleatórias**: Exibe 30 fotos aleatórias de alta qualidade ao carregar a página
- **Lazy Loading**: Carregamento otimizado das imagens para melhor performance
- **Design Responsivo**: Adaptação automática para desktop (3 colunas) e mobile (1 coluna)
- **Informações do autor**: Nome e link direto para o perfil do fotógrafo no Unsplash

### 🔍 Sistema de Busca
- **Pesquisa inteligente**: Busca por termos como "natureza", "animais", "cidade", etc.
- **Resultados em tempo real**: Atualização instantânea do feed com os resultados
- **Feedback visual**: Exibição do termo pesquisado nos resultados
- **Tratamento de estados**: Mensagens específicas para buscas sem resultados

### 💖 Sistema de Favoritos
- **Gerenciamento de favoritos**: Adicione ou remova fotos dos favoritos com um clique
- **Persistência local**: Dados salvos no localStorage para manter favoritos entre sessões
- **Página dedicada**: Visualize todas as fotos favoritas em uma página separada
- **Animações suaves**: Feedback visual ao favoritar/desfavoritar fotos

### 🖼️ Modal de Detalhes
- **Visualização expandida**: Clique em qualquer foto para ver em tamanho completo
- **Informações completas**: Nome do autor, descrição da foto (quando disponível)
- **Zoom interativo**: Funcionalidade de zoom para explorar detalhes da imagem
- **Link externo**: Acesso direto ao perfil do fotógrafo no Unsplash

### 🎨 Interface e Experiência
- **Loading states**: Skeleton screens durante carregamento
- **Tratamento de erros**: Mensagens claras para falhas de API ou resultados vazios
- **Navegação intuitiva**: Header fixo com logo, barra de pesquisa e navegação
- **Animações suaves**: Transições e efeitos visuais para melhor UX

## 🛠️ Tecnologias Utilizadas

### Core
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Tailwind CSS** - Estilização utilitária e responsiva

### UI/UX
- **PrimeReact** - Componentes UI avançados (Modal, Skeleton, etc.)
- **PrimeIcons** - Ícones consistentes e modernos
- **Next/Image** - Otimização automática de imagens

### Gerenciamento de Estado
- **Context API** - Gerenciamento global de estado para busca e favoritos
- **LocalStorage** - Persistência de dados de favoritos

### API
- **Unsplash API** - Fonte de imagens de alta qualidade
- **Fetch API** - Requisições HTTP otimizadas

## 🏗️ Arquitetura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── favorites/         # Página de favoritos
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── not-found.tsx      # Página 404
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── Footer.tsx         # Rodapé da aplicação
│   ├── Header.tsx         # Cabeçalho com navegação
│   ├── Modal.tsx          # Modal de detalhes da foto
│   ├── NavBar.tsx         # Barra de navegação
│   ├── PhotoCard.tsx      # Card individual de foto
│   ├── ScrollToTop.tsx    # Scroll automático
│   ├── SearchBar.tsx      # Barra de pesquisa
│   ├── SideBar.tsx        # Menu lateral mobile
│   └── SkeletonGallery.tsx # Loading skeleton
├── context/               # Contextos globais
│   ├── FavoritesContext.tsx # Gerenciamento de favoritos
│   └── SearchContext.tsx   # Gerenciamento de busca
├── lib/                   # Utilitários e APIs
│   └── unsplash-api.ts    # Integração com Unsplash API
└── types/                 # Definições de tipos
    └── photo.d.ts         # Tipos para fotos
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Conta no Unsplash (para chave da API)

### Configuração da API
1. Crie uma conta em [Unsplash Developers](https://unsplash.com/developers)
2. Crie uma nova aplicação para obter a chave de acesso
3. Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=sua_chave_aqui
NEXT_PUBLIC_BASE_URL=https://api.unsplash.com
```

### Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/edimaiquemaciel/desafio-front-end.git

# Acesse o diretório
cd instasplash

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Ou para produção
npm run build
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## 📱 Responsividade

### Desktop (1280px+)
- Grid de 3 colunas
- Header horizontal com todos os elementos visíveis
- Barra de pesquisa expandida
- Botões de login/cadastro visíveis

### Tablet (768px - 1279px)
- Grid de 1 coluna otimizado
- Layout adaptado para touch
- Botões de login/cadastro ocultos
- Menu hambúrguer ativo

### Mobile (< 768px)
- Grid de 1 coluna
- Menu hambúrguer para navegação
- Barra de pesquisa em largura total
- Sidebar para funcionalidades extras

## 🔍 Funcionalidades Detalhadas

### Sistema de Busca
- **API Unsplash**: Utiliza o endpoint `/search/photos` da API do Unsplash
- **Parâmetros**: query, per_page (30), page (1)
- **Tratamento de erros**: Mensagens específicas para falhas de API
- **Estados vazios**: Feedback quando não há resultados para o termo pesquisado

### Feed de Fotos Aleatórias
- **API Unsplash**: Utiliza o endpoint `/photos/random` da API do Unsplash
- **Parâmetros**: count (30) para carregar 30 fotos aleatórias
- **Carregamento inicial**: Exibido automaticamente ao acessar a página
- **Fallback**: Retorna ao feed aleatório quando não há busca ativa

### Sistema de Favoritos
- **Armazenamento**: localStorage com chave `instasplash_favorites`
- **Persistência**: Dados mantidos entre sessões
- **Sincronização**: Context API para estado global
- **Tratamento de erros**: Fallback para falhas de localStorage

### Otimizações de Performance
- **Lazy Loading**: Imagens carregadas conforme necessário
- **Blur placeholder**: Placeholder durante carregamento
- **Skeleton screens**: Estados de carregamento elegantes
- **Debounced search**: Evita requisições desnecessárias

## 🎨 Design System

### Cores
- **Primária**: `#3C69E7` (Azul)
- **Secundária**: `#F8F8F8` (Cinza claro)
- **Acento**: `#EF4444` (Vermelho para favoritos)
- **Neutros**: Escala de cinzas do Tailwind

### Tipografia
- **Font system**: Font stack do sistema operacional
- **Tamanhos**: Escala harmoniosa do Tailwind
- **Pesos**: Regular (400), Medium (500), Bold (700)

### Componentes
- **Cards**: Sombras suaves com bordas arredondadas
- **Botões**: Estados hover e focus consistentes
- **Modais**: Backdrop blur e animações suaves
- **Inputs**: Bordas arredondadas e placeholders claros

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm start

# Linting
npm run lint

# Verificação de tipos
npm run type-check
```

## 🔒 Variáveis de Ambiente

```env
# Obrigatórias
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=sua_chave_da_api_unsplash
NEXT_PUBLIC_BASE_URL=https://api.unsplash.com
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Edimaique Maciel**
- LinkedIn: [Edimaique Maciel](https://www.linkedin.com/in/edimaique-maciel/)
- GitHub: [@edimaiquemaciel](https://github.com/edimaiquemaciel)

---

🔗 **Demo**: [desafio-front-end-red-sigma.vercel.app](https://desafio-front-end-red-sigma.vercel.app/)

💡 **Nota**: Este projeto foi desenvolvido como parte de um desafio técnico, demonstrando conhecimentos em Next.js, TypeScript, Tailwind CSS e integração com APIs externas.
