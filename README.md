# huguenin.dev — Portfolio

Repositório do meu **site pessoal / portfolio**: apresentação, experiência profissional, projetos, formação, certificações com links, download do CV (PT-BR e EN) e alternância de idioma.

---

## Sobre o projeto

Single Page Application focada em performance e em uma experiência visual limpa (modo claro/escuro). O conteúdo é servido estaticamente após o build com **Vite**.

---

## Linguagens e stack

| Área | Tecnologias |
|------|-------------|
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) |
| **UI** | [React 19](https://react.dev/) |
| **Estilização** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Build** | [Vite 6](https://vitejs.dev/) |
| **Animações** | [Framer Motion](https://www.framer.com/motion/) |
| **Ícones** | [Lucide React](https://lucide.dev/) |

Utilitários: `clsx`, `tailwind-merge`.

---

## Spline (3D no hero)

A seção inicial (**hero**) embute uma cena **3D interativa** criada no [Spline](https://spline.design/) e carregada no React com:

- **`@splinetool/react-spline`** — componente React que renderiza a cena publicada no Spline  
- **`@splinetool/runtime`** — runtime usado pelo pacote acima  

A URL da cena aponta para o asset hospedado na CDN do Spline (`prod.spline.design`). O carregamento é feito com **React `lazy` + `Suspense`**, com um fallback leve enquanto a cena inicializa.

---

## Como rodar

**Pré-requisito:** Node.js (recomendado LTS)

```bash
npm install
npm run dev
```

Por padrão o dev server sobe em `http://localhost:3000` (porta definida no `package.json`).

### Build de produção

```bash
npm run build
npm run preview
```

### Checagem de tipos

```bash
npm run lint
```

---

## Publicar no GitHub Pages

O repositório inclui o workflow [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml): a cada push em `main` ou `master` o Vite gera o `dist` e o GitHub publica o site.

1. **Suba o código** para o GitHub (branch `main` ou `master`).
2. No repositório: **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **GitHub Actions** (não “Deploy from a branch”).
4. Faça um push (ou **Actions → Deploy GitHub Pages → Run workflow**) e aguarde o job verde.
5. O endereço aparece em **Settings → Pages** (e no resumo do workflow). Formato típico: `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

O `vite.config.ts` define `base` automaticamente em CI (`GITHUB_PAGES=true`): repositórios com nome `usuario.github.io` usam base `/` (site na raiz do domínio); nos demais, a base vira `/nome-do-repo/` para os assets carregarem certo.

---

## Licença

Uso pessoal / portfolio — o código está aqui como referência do meu trabalho e da stack que utilizo no front deste site.
