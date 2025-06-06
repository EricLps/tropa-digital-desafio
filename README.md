# 🚀 Tropa Digital - Painel de Eventos

Bem-vindo ao **Painel de Eventos** da Tropa Digital!  
Este projeto foi criado para facilitar o gerenciamento de eventos e equipes, com uma experiência moderna, intuitiva e responsiva.

🔗 **Acesse aqui:** [tropa-digital-desafio-r9cc.vercel.app](https://tropa-digital-desafio-r9cc.vercel.app/)

---

## ✨ Funcionalidades

- 🛡️ **Login:** Tela de autenticação simulada (pronta para integração real).
- 📊 **Dashboard:** Visualização e gerenciamento dos eventos cadastrados.
- 🧭 **Sidebar:** Navegação entre as principais sessões do painel.
- 👤 **Header:** Exibe informações do usuário logado.
- 🚪 **Logout:** Redirecionamento seguro de volta para a tela de login.

---

## 🗂️ Estrutura de Pastas

```
src/
  app/
    dashboard/
      mainPage/
        page.tsx           # Página inicial do dashboard
        page.module.scss   # Estilos do dashboard
    components/
      LoginForm/           # Componente de login
      Sidebar/             # Menu lateral
      Header/              # Cabeçalho do dashboard
      EventsTable/         # Listagem de eventos
  assets/                  # Imagens e ícones (SVG, PNG, etc.)
  styles/                  # Estilos globais (SCSS)
```

---

## 🛠 Tecnologias Utilizadas

- **Next.js 13+ (App Router)**  
  - Framework React para SSR/SSG, rotas modernas e performance.
- **React 18**  
  - Criação de componentes reativos e reutilizáveis.
- **SCSS Modules**  
  - Cada componente possui seu próprio arquivo de estilo `.module.scss`, garantindo escopo local, organização e fácil manutenção.
- **CSS Modules**  
  - Abordagem para estilização local sem conflitos globais.
- **TypeScript**  
  - Tipagem estática para maior robustez e produtividade.
- **Vercel**  
  - Deploy contínuo e hospedagem serverless.

---

## 🚦 Como rodar o projeto localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/EricLps/tropa-digital-desafio.git
   cd tropa-digital-desafio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse:**  
   [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🧭 Navegação

- Após o login, você será redirecionado para `/dashboard/mainPage`.
- Para sair, clique em **Sair** no menu lateral e você retornará para a tela de login.

---

## ⚙️ Personalização

- Os caminhos das páginas e a navegação podem ser facilmente adaptados.
- O login é simulado, mas a estrutura está pronta para integração com autenticação real (JWT/OAuth/etc).
- Para alterar estilos, edite os arquivos `.module.scss` de cada componente.

---

## 🤝 Contribuição

Pull requests são super bem-vindos!  
Para grandes alterações, por favor abra uma issue antes para discutirmos o que será feito.

---

## 📢 Observações

- O projeto foi construído utilizando **Next.js** (com o novo App Router), **React** e estilização por **SCSS Modules** (CSS Modules).  
- Não foi utilizado Tailwind, Styled Components ou outras soluções CSS-in-JS, garantindo alta performance e escopo local de estilos.
- A estrutura e exemplos de código seguem boas práticas para fácil escalabilidade e manutenção.

