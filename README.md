# Portfólio - Nicolas Bispo Magalhães

Um portfólio moderno e responsivo construído com Next.js 15, TypeScript e Tailwind CSS. Este template apresenta um design limpo e profissional para mostrar seu trabalho, habilidades e experiência.

## Sobre o Desenvolvedor

- **Nome**: Nicolas Bispo Magalhães
- **Idade**: 24 anos
- **Experiência**: 4 anos como desenvolvedor Full Stack
- **Especialidades**: NextJS, TypeScript, Rails, Django, FastAPI, NestJS, Express, React Native

## Características

- 🎨 **Design Moderno**: Layout limpo e profissional com animações suaves
- 📱 **Responsivo**: Design totalmente responsivo que funciona em todos os dispositivos
- ⚡ **Rápido**: Construído com Next.js 15 e otimizado para performance
- 🎯 **SEO Pronto**: Meta tags apropriadas e conteúdo estruturado
- 🌙 **Modo Escuro**: Suporte nativo ao modo escuro com Tailwind CSS
- 🔧 **Customizável**: Fácil de customizar cores, conteúdo e estilização
- 📦 **Baseado em Componentes**: Componentes modulares para fácil manutenção

## Seções

1. **Seção Hero**: Introdução chamativa com botões de call-to-action
2. **Seção Sobre**: Informações pessoais e fatos rápidos
3. **Seção Habilidades**: Habilidades técnicas organizadas por categoria
4. **Seção Projetos**: Destaque dos projetos principais
5. **Seção Contato**: Informações de contato e links sociais
6. **Navegação**: Navegação mobile-friendly com scroll suave

## Stack Tecnológico

- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **Componentes**: Radix UI (disponível)
- **Deploy**: Pronto para Vercel

## Habilidades Principais

### Frontend
- Next.js
- React
- React Native
- TypeScript
- Tailwind CSS

### Backend
- Ruby on Rails
- Django
- FastAPI
- NestJS
- Express.js

### Banco de Dados & Ferramentas
- Prisma ORM
- PostgreSQL
- MongoDB
- Git
- Docker

## Como Usar

### Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação

1. Clone o repositório:
```bash
git clone <seu-repo-url>
cd portifolio
```

2. Instale as dependências:
```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Customização

### Informações Pessoais

Atualize os seguintes arquivos com suas informações:

1. **Metadados do Layout** (`src/app/layout.tsx`):
   - Atualize título, descrição e informações do autor

2. **Conteúdo Principal** (`src/app/page.tsx`):
   - Substitua "Nicolas Bispo Magalhães" pelo seu nome
   - Atualize a descrição da seção hero
   - Modifique o conteúdo da seção sobre
   - Atualize as habilidades e tecnologias
   - Adicione seus projetos reais
   - Atualize informações de contato e links sociais

3. **Navegação** (`src/components/shared/navbar.tsx`):
   - Atualize o nome na navegação

### Estilização

O template usa Tailwind CSS com um esquema de cores customizado. Você pode customizar:

- **Cores**: Atualize as variáveis CSS em `src/app/globals.css`
- **Tipografia**: Modifique as configurações de fonte no layout
- **Layout**: Ajuste espaçamentos e layouts de grid nos componentes

### Adicionando Projetos

Para adicionar seus projetos:

1. Atualize a seção de projetos em `src/app/page.tsx`
2. Adicione imagens dos projetos no diretório `public/`
3. Atualize descrições, tecnologias e links dos projetos

### Adicionando Habilidades

Modifique a seção de habilidades para incluir:

- Suas habilidades técnicas reais
- Categorias adicionais se necessário
- Organize por nível de experiência ou categoria

## Deploy

### Vercel (Recomendado)

1. Faça push do seu código para GitHub
2. Conecte seu repositório ao Vercel
3. Deploy automático

### Outras Plataformas

O app pode ser deployado em qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Estrutura de Arquivos

```
src/
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx           # Layout raiz com metadados
│   └── page.tsx             # Página principal do portfólio
├── components/
│   └── shared/
│       └── navbar.tsx       # Componente de navegação
└── lib/
    └── utils.ts             # Funções utilitárias
```

## Contribuindo

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Faça suas alterações
4. Envie um pull request

## Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).

## Suporte

Se você tiver alguma dúvida ou precisar de ajuda para customizar o template, abra uma issue no GitHub.

---

Construído com ❤️ usando Next.js e Tailwind CSS
