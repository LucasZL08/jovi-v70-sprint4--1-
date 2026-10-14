# Jovi-v70 – Sprint 4 (Front-end Design + Web Development)

Landing page do **Jovi-v70**, aplicativo focado na produtividade dos estudantes (bloqueio de redes sociais, Câmera IA que gera resumos e controle de internet).
Este projeto é a **evolução da Sprint 03**: a landing page em HTML/CSS foi migrada para **React** e estilizada com **Tailwind CSS**.

🔗 **Deploy na Vercel:** https://jovi-v70-sprint4-1.vercel.app/
🔗 **Repositório Git:** https://github.com/SEU-USUARIO/SEU-REPOSITORIO

## Tecnologias utilizadas

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) (ambiente de desenvolvimento e build)
- [Tailwind CSS 4](https://tailwindcss.com/)
- JavaScript (ES6+)
- Git + Vercel (versionamento e deploy)

## O que mudou em relação à Sprint 03

- Páginas em HTML puro viraram **componentes React** (`Header`, `Hero`, `Solucao`, `ModoEstudo`, `Equipe`, `Contato`, etc.).
- Todo o CSS foi substituído por **classes do Tailwind** (cores da Sprint 03 mantidas no tema).
- Layout **responsivo** para Desktop, Tablet e Mobile.
- **Novas funcionalidades:**
  1. **Menu hambúrguer** no celular.
  2. **Seção "Modo Estudo" interativa:** botão que liga e desliga o modo e mostra quais apps ficam bloqueados ou liberados.
  3. **Formulário de contato com validação** (nome, e-mail e mensagem) e aviso de sucesso.
  4. **Seção Hero** de abertura com chamada para ação.

## Como instalar as dependências

Pré-requisito: [Node.js](https://nodejs.org/) versão 20 ou superior (inclui o npm).

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Abra no navegador o endereço exibido no terminal (normalmente `http://localhost:5173`).

## Como executar os servidores

O projeto **não possui back-end**: é apenas front-end. O formulário de contato apenas simula o envio (não grava nem envia os dados).

## Usuários e senhas para teste

O projeto **não possui autenticação**, portanto não há usuários nem senhas.

## Deploy na Vercel

O projeto está publicado em: https://SEU-PROJETO.vercel.app

## Estrutura de pastas

```
├── index.html
├── package.json
├── vite.config.js
├── INTEGRANTES.TXT
└── src
    ├── main.jsx          # ponto de entrada
    ├── App.jsx           # junta todos os componentes
    ├── index.css         # Tailwind + cores do tema
    ├── data/dados.js     # textos e listas do site
    └── components/       # componentes da página
```

## Integrantes

| Nome | RM |
|------|----|
| Vinicius Di Tulio Gomes Silva | 573019 |
| Lucas Zarantonelli Lourenço | 569164 |
| Felipe Romano de Paula Souza | 571653 |
| Nicole Barbosa Oliveira de Lima | 569505 |
| Ryan Romagnoli Santos | 568845 |
