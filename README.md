# Tropa Digital - Painel de Eventos

Este projeto é um painel de eventos construído com [Next.js 13+ (App Router)](https://nextjs.org/docs/app), React e SCSS Modules, com foco em experiência de usuário moderna e componentes reutilizáveis.

## Funcionalidades

- **Login:** Tela de autenticação simulada.
- **Dashboard:** Visualização de eventos cadastrados.
- **Sidebar:** Navegação entre sessões do painel.
- **Header:** Cabeçalho com informações do usuário.
- **Logout:** Redirecionamento seguro para a tela de login.

## Estrutura de Pastas

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
  assets/                  # Imagens e ícones
  styles/                  # Estilos globais
```

## Como rodar o projeto

1. **Instale as dependências:**
   ```bash
   npm install
   ```
2. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```
3. **Acesse:**  
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Navegação

- Após login, você será redirecionado para `/dashboard/mainPage`.
- Para sair, clique em **Sair** no menu lateral. Você voltará para a tela de login.

## Personalização

- Os caminhos das páginas e a navegação podem ser facilmente adaptados.
- O login é simulado, mas pode ser integrado com autenticação real.

## Tecnologias

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [SCSS Modules](https://sass-lang.com/)

## Contribuição

Pull requests são bem-vindos!  
Para grandes alterações, por favor abra uma issue primeiro para discutir o que você gostaria de mudar.

---

**Desenvolvido por Tropa Digital.**
