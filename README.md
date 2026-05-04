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

## Licença

Uso pessoal / portfolio — o código está aqui como referência do meu trabalho e da stack que utilizo no front deste site.
