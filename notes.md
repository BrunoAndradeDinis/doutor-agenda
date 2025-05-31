# Roteiro Aula 01: Setup do Projeto

- [x] Inicialização do projeto Next.js
- [x] Configuração de ferramentas (ESlint, Prettier, Tailwind)
- [x] Configuração do Drizzle e banco de dados
- [x] Configuração do shadcn/ui

### 1. Inicio do projeto

Por onde começar?

1. Requisitos funcionais

- Autenticação
  - Usuário pode ter mais de uma clinica.
- Clinica deve conseguir gerenciar médicos(CRUD)
  - Disponibilidade;
  - Preço da consulta
- Clinica deve conseguir gerenciar pacientes desses médicos (CRUD)
- CLinica deve conseguir realizar agendamentos de tal médico para tal paciente
- Teremos planos de assinatura

2. Tabela de dados - Configuração do banco de dados

Entidades principais:

- User (Usuários)
- Clinic (Clínicas)
- Doctor (Médicos)
- Patient (Pacientes)
- Appointment (Agendamentos)

  2.1. Relações

- User <-> Clinic (n:n)

  - Um usuário pode estar associado a várias clínicas
  - Uma clínica pode ter vários usuários

- Doctor -> Clinic (n:1)

  - Um médico pertence a apenas uma clínica
  - Uma clínica pode ter vários médicos
  - Atributos importantes: disponibilidade, preço da consulta

- Patient -> Clinic (n:1)

  - Um paciente pertence a uma clínica
  - Uma clínica pode ter vários pacientes

- Appointment
  - Relaciona-se com Doctor (n:1)
  - Relaciona-se com Patient (n:1)
  - Relaciona-se com Clinic (n:1)
  - Atributos importantes: data, hora, status

Iremos precisar de um ORM:
Um ORM (Object-Relational Mapping) é uma técnica de programação que permite

Para o banco de dados usaremos o Neon como uma plataforma de banco de dados PostgreSQL serverless (sem servidor).

Para utilizar a relação many to many iremos usar uma terceira tabela para junção, então ela será uma tabela intermediária a `UserToClinics`.

#### ShadCn

Utilizaremos o shadcn na versão 2.5.0

```bash
  npx shadcn@2.5.0
```

### Resumo do Desenvolvimento até o momento

1. Estrutura do Projeto

   - Criação do projeto Next.js 14 com App Router
   - Configuração do TypeScript
   - Implementação do ESLint e Prettier
   - Setup do TailwindCSS

2. Componentes e UI

   - Instalação e configuração do shadcn/ui
   - Criação dos componentes base:
     - Button
     - Input
     - Label
     - Card
   - Implementação do tema claro/escuro

3. Autenticação

   - Setup do NextAuth.js
   - Configuração do Prisma como ORM
   - Criação do schema do banco de dados com as entidades principais
   - Implementação da autenticação com credenciais (email/senha)
   - Página de login (/auth/sign-in)
   - Página de registro (/auth/sign-up)

4. Layout e Estrutura

   - Criação do layout principal da aplicação
   - Implementação da navegação básica
   - Componentes de header e footer
   - Páginas protegidas por autenticação

5. Banco de Dados
   - Configuração do Neon (PostgreSQL)
   - Schema inicial com as entidades:
     - User
     - Clinic
     - Doctor
     - Patient
     - Appointment
   - Tabela de junção UserToClinics para relação many-to-many

## Roteiro Aula 02: Autenticação e Configurações do Estabelecimento

- [x] Tela de login e criação de conta
  - Criado a tela de login e criação de conta com validação utilizando o Zod junto com o shadcn + tailwind, usando o "use-client" para utilização de hooks nas páginas do usuário.
- [x] Login com e-mail e senha
  - Utilizaremos o BetterAuth
  - Validações de usuário e sessão para utilização das rotas
- [] Login com o Google
- [x] Fundamentos do Next.js (Rotas, Páginas, Layouts)
  - No layout usamos o Sonner (toats) para exibir mensagens de validações e confirmações.
  - Rotas foram utilizadas após validarmos se o usuário está logado ou não e caso esteja logado evitar acessar a tela de login.
  - E as páginas utilizadas nas rotas, utilizamos também server actions para comunicação direta com o banco de dados
- [x] Criação de clínica
  - Criamos o formulário de criação de clínica à partir do component dialog do shadcn e realizamos as alterações para pegar o nome da clínica e efetivar a criação no nosso banco de dados.
- [x] Implementações realizadas:
  - Configuração do BetterAuth para gerenciamento de autenticação
  - Implementação de server actions para operações no banco de dados
  - Uso do Sonner para feedback visual através de toasts
  - Proteção de rotas baseada no estado de autenticação
  - Redirecionamentos automáticos:
    - Usuários não autenticados -> página de login
    - Usuários autenticados -> bloqueio de acesso à tela de login
  - Dialog personalizado do shadcn para criação de clínica
  - Validações de formulários usando Zod
  - Estrutura de componentes client-side com "use client"
  - Integração completa entre front-end e back-end para:
    - Autenticação de usuários
    - Criação de contas
    - Gerenciamento de clínicas
  - Sistema de layouts aninhados do Next.js para:
    - Layout principal da aplicação
    - Áreas protegidas
    - Áreas públicas


## Roteiro Aula 03: Gerenciamento de Profissionais e Disponibilidade

- [] Sidebar e Route Groups
- [] Página de médicos
- [] Criação de médicos & NextSafeAction
- [] Listagem de médicos
- [] Atualização de médicos
- [] Deleção de médicos




  

Código: A7
