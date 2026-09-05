# Pedro Huguenin — Portfólio

Portfólio de engenharia de software, backend e IA aplicada, com projetos Orbit e Workflow, trajetória profissional, formação e contato.

Site: https://hugueninfer.github.io/

## Publicação no GitHub Pages

Requer Node.js 24. A publicação utiliza os módulos de navegador versionados, sem servidor em produção.

```bash
npm run build:pages
node --test tests/pages-export.test.mjs
```

A saída estática fica em `out/`. Cada página tem seu próprio `index.html`, permitindo acesso direto às rotas. O workflow de GitHub Actions publica após alterações em `main`.

## Desenvolvimento local

```bash
npm ci
npm run dev
```

## Conteúdo e personalização

- `reference/custom/personal-content.mjs`: conteúdo profissional e projetos.
- `reference/custom/translations.mjs`: português, inglês e alemão.
- `reference/custom/stack-catalog.mjs`: tecnologias e tooltips.
- `reference/custom/`: personagens, animações, estilos e ícones.
- `scripts/prepare-reference.mjs`: regenera os módulos públicos personalizados.
- `scripts/build-pages.mjs`: cria a versão estática para publicação.

## Créditos

A experiência visual foi adaptada do site público [Pleurat](https://www.pleurat.com/), com personalização de conteúdo, personagens, cores e interações. Não há afiliação ou endosso. Os arquivos de referência não são apresentados como criação original deste portfólio.

Os ícones de tecnologias vêm de [Simple Icons](https://simpleicons.org/), com exceções personalizadas. Fontes, licenças e avisos individuais estão em `reference/custom/icons/`. Marcas pertencem aos respectivos titulares.
