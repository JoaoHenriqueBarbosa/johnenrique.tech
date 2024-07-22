# ContraTurno: CRM para Escolas de Contraturno

## Índice

1. [Introdução](#introdu%C3%A7%C3%A3o)
2. [Tecnologias](#tecnologias)
3. [Funcionalidades](#funcionalidades)
4. [Configuração e Instalação](#configura%C3%A7%C3%A3o-e-instala%C3%A7%C3%A3o)
5. [Configuração](#configura%C3%A7%C3%A3o)
6. [Executando a Aplicação](#executando-a-aplica%C3%A7%C3%A3o)
7. [Uso](#uso)

## Introdução

O ContraTurno é um ecossistema completo projetado escolas de contraturno, disponível em plataformas móveis e desktop. Inclui funcionalidades como registro de alunos, registro de professores, gerenciamento de cursos, gerenciamento de horários dos alunos, controle de presença para professores, um dashboard para coordenação e administração e diversos relatórios.

## Tecnologias

- **Linguagem de Programação**: TypeScript
- **Framework**: Next.js
- **ORM**: Prisma
- **Banco de Dados**: PostgreSQL

## Funcionalidades

### Geral

- Visualização e interação em tempo real usando Tanstack's React Query e atualizações otimistas em todo o sistema.

### Gerenciamento de Alunos

- Tabela interativa estilo DataGrid para registros.
- Acesso baseado em permissões para alterar, excluir ou visualizar registros.
- Visualização e registro de imagens dos alunos.
- Visualização dos horários dos alunos e status de presença diário.
- Opções de menu de contexto, como "Gerar formulário de registro" (PDF com informações e campos de assinatura).
- Opção de enviar o horário do aluno via WhatsApp para o número de contato registrado.

### Dashboard para Coordenação e Administração

- Pesquisa rápida com atalhos de teclado (⌘+P).
- Módulos disponíveis:
  - Dashboard
  - Alunos
  - Oficinas
  - Equipe
  - Bases auxiliares
  - Lista de presença
  - Ponto eletrônico
  - Relatórios
  - Horários dos alunos
  - Funções da equipe
- Estatísticas e relatórios:
  - Alunos ativos, inativos, com benefício familiar, alunos prioritários.
  - Alunos presentes hoje (manhã/tarde).
  - Alunos por ponto de ônibus, oficina, dia da semana, idade e escola.

### Gerenciamento de Professores

- Semelhante ao gerenciamento de alunos com DataGrid interativo.
- Acesso baseado em permissões para visualizar, alterar e excluir registros.

### Gerenciamento de Cursos

- Gerenciamento dos cursos oferecidos pela escola.
- Associação de alunos aos cursos.

### Gerenciamento de Horários dos Alunos

- Gerenciamento dos horários dos alunos.
- Visualização e atualização conforme necessário.

### Presença para Professores

- Lista de presença digital.
- Registro da presença dos alunos.

### Relatórios

- Diversos relatórios gerenciais e operacionais.
- Exportação de relatórios em formatos como PDF.

## Configuração e Instalação

1. Clone o repositório:
   ```bash
   git clone <repository_url>
   ```
2. Instale as dependências usando npm, pnpm, yarn ou bun:
   ```bash
   npm install
   # ou
   pnpm install
   # ou
   yarn install
   # ou
   bun install
   ```

## Configuração

Defina as variáveis de ambiente no arquivo `.env`:
```env
CLOUDINARY_URL=
EDGE_CONFIG=
NEXTAUTH_SECRET=
NEXTAUTH_URL="http://localhost:3000"
NEXT_PUBLIC_NEXT_URL="http://localhost:3000"
NEXT_URL="http://localhost:3000"
POSTGRES_PRISMA_URL=
POSTGRES_URL_NON_POOLING=
```

## Executando a Aplicação

Execute o projeto usando o gerenciador de pacotes apropriado:
```bash
npm run dev
# ou
pnpm run dev
# ou
yarn run dev
# ou
bun run dev
```

## Uso

### Visão Geral do Dashboard

- Funcionalidade de pesquisa com atalhos de teclado.
- Acesso a vários módulos para gerenciar alunos, equipe, cursos, presença e relatórios.
- Estatísticas e visualização de dados em tempo real para uma administração eficiente.

### Gerenciamento de Alunos e Equipe

- Registre e gerencie informações de alunos e equipe com facilidade.
- Utilize menus de contexto para gerar PDFs e enviar horários via WhatsApp.

### Presença e Agendamento

- Acompanhe a presença dos alunos e horários.
- Gere e visualize vários relatórios para uma melhor tomada de decisão.