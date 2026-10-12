# Site da ADA

Uma landing page moderna para a marca ADA, desenvolvida com React, Vite, TypeScript e Tailwind CSS.

## Visão geral

Este projeto é um site leve, com estilo de página de marketing, identidade visual própria, tipografia personalizada e um layout de navegação limpo. Ele foi desenvolvido para apresentar uma empresa ou produto com forte presença visual e uma estrutura de landing page bem elaborada.

## Tecnologias utilizadas

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Oxlint

## Estrutura do projeto

```text
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── styles/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Como começar

### Instalar as dependências

```bash
npm install
```

### Executar o servidor de desenvolvimento

```bash
npm run dev
```

Isso iniciará o servidor de desenvolvimento do Vite, geralmente disponível em:

```text
http://localhost:5173
```

### Gerar a versão de produção

```bash
npm run build
```

### Visualizar a versão de produção

```bash
npm run preview
```

### Verificar o código com o linter

```bash
npm run lint
```

## Scripts disponíveis

- `npm run dev` — inicia o servidor de desenvolvimento local.
- `npm run build` — compila a aplicação para produção.
- `npm run preview` — disponibiliza localmente uma prévia da versão de produção.
- `npm run lint` — executa a ferramenta de análise estática do código do projeto.

## Observações

O projeto utiliza uma paleta de cores personalizada para a marca e uma configuração local de fontes, com os estilos definidos por meio de variáveis de tema do Tailwind CSS. A implementação atual inclui um cabeçalho com a identidade visual da marca e uma estrutura básica de landing page, pronta para ser expandida com seções adicionais.

## Boas práticas

- Sempre crie uma branch para novas features ou correções.
- Descreva bem seus commits.