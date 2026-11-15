// Every user-visible string lives here. A `{ en, pt }` pair is a translatable
// leaf; `getContent(locale)` resolves the whole tree to plain strings.

export type Locale = 'en' | 'pt';
export const locales: Locale[] = ['en', 'pt'];

export const sectionIds = [
  'overview',
  'about',
  'trajectory',
  'results',
  'projects',
  'builds',
  'stack',
  'contact',
] as const;
export type SectionId = (typeof sectionIds)[number];

type T = { en: string; pt: string };
const t = (en: string, pt: string): T => ({ en, pt });

type Localized<V> = V extends T
  ? string
  : V extends readonly (infer I)[]
    ? Localized<I>[]
    : V extends object
      ? { [K in keyof V]: Localized<V[K]> }
      : V;

const isPair = (v: unknown): v is T =>
  !!v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v).sort().join() === 'en,pt';

function localize<V>(value: V, locale: Locale): Localized<V> {
  if (isPair(value)) return value[locale] as Localized<V>;
  if (Array.isArray(value)) return value.map((v) => localize(v, locale)) as Localized<V>;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, localize(v, locale)]),
    ) as Localized<V>;
  }
  return value as Localized<V>;
}

const GH = 'https://github.com/Hugueninfer';

const source = {
  meta: {
    title: t(
      'Pedro Huguenin | Software Engineer — Backend, Full Stack & Applied AI',
      'Pedro Huguenin | Engenheiro de Software — Backend, Full Stack e IA Aplicada',
    ),
    description: t(
      'Software engineer with 5+ years in PHP, Laravel, Python and multi-tenant systems, building applied AI products you can verify.',
      'Engenheiro de software com mais de 5 anos em PHP, Laravel, Python e sistemas multi-tenant, construindo produtos de IA aplicada verificáveis.',
    ),
  },
  ui: {
    skip: t('Skip to content', 'Pular para o conteúdo'),
    masthead: t('Engineering Notes', 'Notas de Engenharia'),
    disciplines: t('Backend / Full stack / Applied AI', 'Backend / Full stack / IA aplicada'),
    profile: t('Professional profile', 'Perfil profissional'),
    switchLabel: t('Ler em português', 'Read in English'),
    switchShort: t('PT', 'EN'),
    repo: t('Repository', 'Repositório'),
    live: t('Live demo', 'Demo online'),
    menu: t('Sections', 'Seções'),
    footer: t(
      'Designed & built by Pedro Huguenin · Astro · GitHub Pages',
      'Design e código por Pedro Huguenin · Astro · GitHub Pages',
    ),
  },
  profile: {
    name: 'Pedro Huguenin',
    role: t('Software Engineer', 'Engenheiro de Software'),
    location: t('Volta Redonda, Brazil', 'Volta Redonda, Brasil'),
  },
  nav: [
    { id: 'overview', label: t('Overview', 'Visão geral') },
    { id: 'about', label: t('Backend first. AI where it earns its place.', 'Backend primeiro. IA onde ela se paga.') },
    { id: 'trajectory', label: t('The path so far.', 'O caminho até aqui.') },
    { id: 'results', label: t('Results by area', 'Resultados por área') },
    { id: 'projects', label: t('Selected work.', 'Trabalhos selecionados.') },
    { id: 'builds', label: t('Smaller builds, real lessons.', 'Projetos menores, lições reais.') },
    { id: 'stack', label: t('What I build with.', 'Com o que eu construo.') },
    { id: 'contact', label: t("Let's talk.", 'Vamos conversar.') },
  ],
  hero: {
    kicker: t(
      'Not the demo — the system behind it: data, contracts, and what happens after deploy.',
      'Não a demo — o sistema por trás dela: dados, contratos e o que acontece depois do deploy.',
    ),
    facts: [
      { label: t('Role', 'Cargo'), value: t('Software Engineer', 'Engenheiro de Software') },
      { label: t('Company', 'Empresa'), value: t('Before', 'Before'), note: t('Jul 2024 – Present', 'Jul 2024 – atual') },
      { label: t('Focus', 'Foco'), value: t('Backend · Applied AI', 'Backend · IA aplicada') },
    ],
  },
  about: {
    eyebrow: t('About', 'Sobre'),
    title: t('Backend first. AI where it earns its place.', 'Backend primeiro. IA onde ela se paga.'),
    lead: t(
      'Five years shipping systems that other people depend on. Now pointing that discipline at applied AI.',
      'Cinco anos entregando sistemas dos quais outras pessoas dependem. Agora, levando essa disciplina para a IA aplicada.',
    ),
    body: [
      t(
        'I started in 2021 as a trainee writing management systems in PHP, Laravel and MySQL — and deploying them myself on Ubuntu. That habit stuck: I care about what happens after the merge, not just before it.',
        'Comecei em 2021 como trainee, escrevendo sistemas de gestão em PHP, Laravel e MySQL — e publicando eu mesmo em servidores Ubuntu. O hábito ficou: me importo com o que acontece depois do merge, não só antes dele.',
      ),
      t(
        'Since then I have built supplier-evaluation platforms with government integrations, tuned PostgreSQL for systems with thousands of users, shipped international projects and, today at Before, designed multi-tenant architecture where tenant isolation, caching and performance are not optional.',
        'Desde então construí plataformas de avaliação de fornecedores com integrações governamentais, otimizei PostgreSQL para sistemas com milhares de usuários, entreguei projetos internacionais e, hoje na Before, desenho arquitetura multi-tenant onde isolamento de tenant, cache e performance não são opcionais.',
      ),
      t(
        'Applied AI is the next step, not a detour. I am taking a postgraduate degree in Software Engineering for Applied AI and building products where the model is one component among many: every answer cites its evidence, every fallback is explicit, and a human makes the final call.',
        'IA aplicada é o próximo passo, não um desvio. Estou cursando a pós-graduação em Engenharia de Software em IA Aplicada e construindo produtos em que o modelo é só um componente entre vários: toda resposta cita sua evidência, todo fallback é explícito e a decisão final é humana.',
      ),
    ],
    pillars: [
      {
        title: t('Multi-tenant by default', 'Multi-tenant por padrão'),
        text: t(
          'The tenant comes from the authenticated session, never from the client. Isolation is enforced in the database and proven by tests.',
          'O tenant vem da sessão autenticada, nunca do cliente. O isolamento é garantido no banco e provado por testes.',
        ),
      },
      {
        title: t('AI you can verify', 'IA verificável'),
        text: t(
          'Structured outputs, cited evidence, evaluation suites and cost per answer. If a claim cannot be traced to its source, it is rejected before it is stored.',
          'Saídas estruturadas, evidências citadas, suítes de avaliação e custo por resposta. Se uma afirmação não pode ser rastreada até a fonte, ela é rejeitada antes de ser salva.',
        ),
      },
      {
        title: t('Built to be operated', 'Feito para ser operado'),
        text: t(
          'Idempotency, retries, health checks, structured logs and graceful degradation are designed in from the first commit, not bolted on after the first incident.',
          'Idempotência, retries, health checks, logs estruturados e degradação graciosa entram no primeiro commit, não depois do primeiro incidente.',
        ),
      },
    ],
    principlesTitle: t('How I work', 'Como eu trabalho'),
    principles: [
      t(
        'Specs before code. A short design doc saves a week of rework.',
        'Especificação antes do código. Um design doc curto poupa uma semana de retrabalho.',
      ),
      t(
        'No silent fallbacks. If a provider fails, the product says so — it never fakes a result.',
        'Sem fallbacks silenciosos. Se um provedor falha, o produto avisa — nunca inventa um resultado.',
      ),
      t(
        'Demos that survive strangers. Every public demo is isolated per visitor and resets itself.',
        'Demos que aguentam desconhecidos. Toda demo pública é isolada por visitante e se reinicia sozinha.',
      ),
    ],
  },
  trajectory: {
    eyebrow: t('Experience & Education', 'Experiência e Formação'),
    title: t('The path so far.', 'O caminho até aqui.'),
    items: [
      {
        title: t('Software Engineer', 'Engenheiro de Software'),
        org: 'Before',
        date: t('Jul 2024 – Present', 'Jul 2024 – atual'),
        kind: 'work',
        points: [
          t('Multi-tenant architecture in PHP and Laravel', 'Arquitetura multi-tenant em PHP e Laravel'),
          t('APIs, Redis caching and performance work', 'APIs, cache com Redis e trabalho de performance'),
          t('Client onboarding time cut by 70%', 'Tempo de onboarding de clientes reduzido em 70%'),
        ],
      },
      {
        title: t('Postgraduate, Software Engineering for Applied AI', 'Pós-graduação, Engenharia de Software em IA Aplicada'),
        org: 'UNIPDS',
        date: t('2026 – In progress', '2026 – em andamento'),
        kind: 'study',
        points: [
          t('LLMs, RAG, embeddings, agents and MCP', 'LLMs, RAG, embeddings, agentes e MCP'),
          t('Evaluation, observability and AI governance', 'Avaliação, observabilidade e governança de IA'),
          t('Each module turned into a shipped project', 'Cada módulo virou um projeto publicado'),
        ],
      },
      {
        title: t('Web Developer', 'Desenvolvedor Web'),
        org: 'Formula X — B2B Growth',
        date: t('Aug 2023 – Present', 'Ago 2023 – atual'),
        kind: 'work',
        points: [
          t('International projects, automations and integrations', 'Projetos internacionais, automações e integrações'),
          t('~20 hours saved per month on average', 'Economia média de ~20 horas por mês'),
          t('PageSpeed improved by ~60%', 'PageSpeed ~60% melhor'),
        ],
      },
      {
        title: t('Full Stack Software Engineer', 'Engenheiro de Software Full Stack'),
        org: 'SENAI Soluções Digitais',
        date: t('Dec 2022 – May 2024', 'Dez 2022 – Mai 2024'),
        kind: 'work',
        points: [
          t('Laravel APIs and PostgreSQL optimization', 'APIs Laravel e otimização de PostgreSQL'),
          t('Searches and filters 50% faster for thousands of users', 'Buscas e filtros 50% mais rápidos para milhares de usuários'),
        ],
      },
      {
        title: t('Full Stack Software Engineer', 'Engenheiro de Software Full Stack'),
        org: 'Sertras',
        date: t('Mar 2022 – Dec 2022', 'Mar 2022 – Dez 2022'),
        kind: 'work',
        points: [
          t('Supplier evaluation platform with government integrations', 'Plataforma de avaliação de fornecedores com integrações governamentais'),
          t('Manual analysis reduced by ~40%', 'Análise manual reduzida em ~40%'),
        ],
      },
      {
        title: t('Developer Trainee', 'Desenvolvedor Trainee'),
        org: 'Dev4B',
        date: t('Mar 2021 – Mar 2022', 'Mar 2021 – Mar 2022'),
        kind: 'work',
        points: [
          t('Management systems in PHP, Laravel and MySQL', 'Sistemas de gestão em PHP, Laravel e MySQL'),
          t('Process automation, maintenance and Ubuntu deploys', 'Automação de processos, manutenção e deploys em Ubuntu'),
        ],
      },
      {
        title: t('B.Sc. Information Systems', 'Bacharelado em Sistemas de Informação'),
        org: 'UniFOA',
        date: t('2021 – 2024', '2021 – 2024'),
        kind: 'study',
        points: [t('Volta Redonda, RJ', 'Volta Redonda, RJ')],
      },
      {
        title: t('Computer Technician', 'Técnico em Informática'),
        org: 'Escola Técnica Pandiá Calógeras',
        date: t('2018 – 2020', '2018 – 2020'),
        kind: 'study',
        points: [t('Foundations of software development', 'Base em desenvolvimento de software')],
      },
    ],
  },
  results: {
    eyebrow: t('Impact', 'Impacto'),
    title: t('Results by area', 'Resultados por área'),
    tabLabel: t('Result area', 'Área de resultado'),
    areas: [
      {
        id: 'efficiency',
        name: t('Efficiency', 'Eficiência'),
        items: [
          { value: '70%', label: t('less time to onboard a new client', 'menos tempo para integrar um novo cliente'), source: 'Before' },
          { value: '~20h', label: t('saved per month through automations', 'economizadas por mês com automações'), source: 'Formula X' },
          { value: '~40%', label: t('less manual supplier analysis', 'menos análise manual de fornecedores'), source: 'Sertras' },
        ],
      },
      {
        id: 'performance',
        name: t('Performance', 'Performance'),
        items: [
          { value: '50%', label: t('faster searches and filters on PostgreSQL', 'buscas e filtros mais rápidos no PostgreSQL'), source: 'SENAI' },
          { value: '~60%', label: t('better PageSpeed scores', 'melhora no PageSpeed'), source: 'Formula X' },
          { value: '~4 s', label: t('p50 latency per agent reply', 'latência p50 por resposta do agente'), source: 'Empório da Música' },
        ],
      },
      {
        id: 'ai',
        name: t('AI quality', 'Qualidade de IA'),
        items: [
          { value: '95–100%', label: t('pass rate on a 43-case evaluation suite', 'de aprovação em uma suíte de avaliação com 43 casos'), source: 'Empório da Música' },
          { value: '4.8–5.0', label: t('LLM-as-judge score out of 5', 'nota do LLM-as-judge, de 5'), source: 'Empório da Música' },
          { value: '0', label: t('findings stored without a page, excerpt and offsets', 'achados salvos sem página, trecho e offsets'), source: 'ComplyFlow AI' },
        ],
      },
      {
        id: 'cost',
        name: t('Cost', 'Custo'),
        items: [
          { value: '~US$0.01', label: t('per agent reply, tracked on every message', 'por resposta do agente, medido em cada mensagem'), source: 'Empório da Música' },
          { value: '~93%', label: t('prompt cache hit rate', 'de acerto no cache de prompt'), source: 'Empório da Música' },
          { value: '$0', label: t('monthly hosting target for public demos', 'de custo mensal de hospedagem nas demos públicas'), source: 'Ledgerlight' },
        ],
      },
      {
        id: 'reliability',
        name: t('Reliability', 'Confiabilidade'),
        items: [
          { value: '1', label: t('transaction for each state change and its event (outbox)', 'transação para cada mudança de estado e seu evento (outbox)'), source: 'BidStream' },
          { value: '24h', label: t('isolated demo tenant per visitor', 'de tenant isolado por visitante na demo'), source: 'Orbit · Agency Hub · ComplyFlow' },
          { value: '127', label: t('automated tests plus CI on every push', 'testes automatizados e CI a cada push'), source: 'Empório da Música' },
        ],
      },
    ],
  },
  projectsSection: {
    eyebrow: t('Featured', 'Destaques'),
    title: t('Selected work.', 'Trabalhos selecionados.'),
  },
  featured: [
    {
      name: 'ComplyFlow AI',
      tag: t('Full stack · Applied AI', 'Full stack · IA aplicada'),
      headline: t(
        'Supplier compliance with evidence you can check — AI suggests, a human decides',
        'Compliance de fornecedores com evidência verificável — a IA sugere, um humano decide',
      ),
      period: t('Personal project · Laravel, FastAPI, Vue', 'Projeto próprio · Laravel, FastAPI, Vue'),
      repo: `${GH}/complyflow-ai`,
      live: 'https://complyflow-ai.onrender.com',
      blocks: [
        {
          label: t('Context', 'Contexto'),
          text: t(
            'Supplier due diligence means reading stacks of PDFs against a checklist. An LLM can speed that up, but an unsupported answer is worse than no answer.',
            'Avaliar fornecedores significa ler pilhas de PDFs contra um checklist. Um LLM acelera isso, mas uma resposta sem suporte é pior que nenhuma.',
          ),
        },
        {
          label: t('Approach', 'Abordagem'),
          text: t(
            'Every finding must cite page, excerpt and valid offsets; unsupported answers are rejected before persistence. Checklists are versioned and immutable once published.',
            'Todo achado precisa citar página, trecho e offsets válidos; respostas sem suporte são rejeitadas antes de salvar. Checklists são versionados e imutáveis depois de publicados.',
          ),
        },
        {
          label: t('System', 'Sistema'),
          text: t(
            'Vue 3 SPA; Laravel 13 owns auth, tenancy, queue and domain; FastAPI isolates extraction and inference. HMAC-signed contracts between runtimes. Groq primary, Gemini fallback, PostgreSQL with pgvector, hash-chained audit log.',
            'SPA em Vue 3; Laravel 13 cuida de auth, tenancy, fila e domínio; FastAPI isola extração e inferência. Contratos assinados por HMAC entre os runtimes. Groq principal, Gemini como contingência, PostgreSQL com pgvector, auditoria com hashes encadeados.',
          ),
        },
        {
          label: t('Outcome', 'Resultado'),
          text: t(
            'A multi-tenant platform with side-by-side supplier comparison, human review on every decision and an isolated 24-hour demo — covered by PHPUnit, pytest, Vitest and Playwright.',
            'Uma plataforma multi-tenant com comparação lado a lado, revisão humana em toda decisão e demo isolada de 24 horas — coberta por PHPUnit, pytest, Vitest e Playwright.',
          ),
        },
      ],
    },
    {
      name: 'Empório da Música',
      tag: t('AI agent · Technical challenge', 'Agente de IA · Desafio técnico'),
      headline: t(
        'Clave, a customer-service agent that knows when to query data and when to read the policy',
        'Clave, uma agente de atendimento que sabe quando consultar dados e quando ler a política',
      ),
      period: t('AI Engineer challenge · LangGraph, FastAPI, Next.js', 'Desafio de AI Engineer · LangGraph, FastAPI, Next.js'),
      repo: `${GH}/emporio-da-musica-agent`,
      live: 'https://emporio-da-musica-murex.vercel.app',
      blocks: [
        {
          label: t('Context', 'Contexto'),
          text: t(
            'A fictional instrument store needed an assistant that answers in Portuguese or English, looks up catalog, promotions and orders, follows the store manual and declines anything out of scope.',
            'Uma loja fictícia de instrumentos precisava de uma assistente que responda em português ou inglês, consulte catálogo, promoções e pedidos, siga o manual da loja e recuse o que estiver fora do escopo.',
          ),
        },
        {
          label: t('Approach', 'Abordagem'),
          text: t(
            "The manual's rules live in tested Python code, not in the prompt. Order lookup requires a verification step to protect customer data.",
            'As regras do manual vivem em código Python testado, não no prompt. A consulta de pedidos exige verificação para proteger os dados do cliente.',
          ),
        },
        {
          label: t('System', 'Sistema'),
          text: t(
            'LangChain agent on a LangGraph graph with Claude, per-conversation memory in SQLite, FastAPI streaming the Vercel AI SDK protocol, the same tools exposed over MCP, and a Next.js chat that renders tool calls as UI.',
            'Agente LangChain em um grafo LangGraph com Claude, memória por conversa em SQLite, FastAPI transmitindo o protocolo do Vercel AI SDK, as mesmas ferramentas expostas via MCP e um chat em Next.js que renderiza tool calls como interface.',
          ),
        },
        {
          label: t('Outcome', 'Resultado'),
          text: t(
            '95–100% on a 43-case evaluation (deterministic checks + LLM-as-judge), ~US$0.01 per reply, ~93% prompt cache hits, ~4 s p50 latency and 127 tests in CI.',
            '95–100% em uma avaliação com 43 casos (checagens determinísticas + LLM-as-judge), ~US$0,01 por resposta, ~93% de acerto no cache de prompt, latência p50 de ~4 s e 127 testes no CI.',
          ),
        },
      ],
    },
    {
      name: 'BidStream',
      tag: t('Distributed systems', 'Sistemas distribuídos'),
      headline: t(
        'An event-driven procurement platform built the way it would run in production',
        'Uma plataforma de compras orientada a eventos, construída como rodaria em produção',
      ),
      period: t('Personal project · TypeScript, Python, Kafka, gRPC', 'Projeto próprio · TypeScript, Python, Kafka, gRPC'),
      repo: `${GH}/bidstream`,
      blocks: [
        {
          label: t('Context', 'Contexto'),
          text: t(
            'Buyers publish requests for quote, suppliers bid in real time and a pricing model estimates a fair price. The business logic is deliberately small — the platform underneath is the point.',
            'Compradores publicam cotações, fornecedores dão lances em tempo real e um modelo estima um preço justo. A regra de negócio é pequena de propósito — o foco é a plataforma por baixo.',
          ),
        },
        {
          label: t('Approach', 'Abordagem'),
          text: t(
            'REST at the edge, gRPC inside, one database per service, transactional outbox instead of dual writes, idempotent consumers with dead-letter queues. Decisions recorded as ADRs.',
            'REST na borda, gRPC por dentro, um banco por serviço, transactional outbox em vez de escrita dupla, consumidores idempotentes com dead-letter queues. Decisões registradas em ADRs.',
          ),
        },
        {
          label: t('System', 'Sistema'),
          text: t(
            'Fastify gateway with SSE, Python and TypeScript services over Kafka (Redpanda), three Postgres databases, Redis cache invalidated by events and OpenTelemetry tracing across HTTP, gRPC and Kafka.',
            'Gateway Fastify com SSE, serviços em Python e TypeScript sobre Kafka (Redpanda), três bancos Postgres, cache Redis invalidado por eventos e tracing com OpenTelemetry atravessando HTTP, gRPC e Kafka.',
          ),
        },
        {
          label: t('Outcome', 'Resultado'),
          text: t(
            'Kill the pricing service and the app keeps working: estimates become null with a reason, health turns red, bids and awards continue.',
            'Derrube o serviço de preços e o app continua funcionando: as estimativas viram nulas com um motivo, o health fica vermelho e lances e adjudicações seguem.',
          ),
        },
      ],
    },
    {
      name: 'Orbit',
      tag: t('Full stack product', 'Produto full stack'),
      headline: t(
        'A personal hub for tasks, habits, finance, notes, focus and workouts',
        'Uma central pessoal para tarefas, hábitos, finanças, notas, foco e treinos',
      ),
      period: t('Personal project · FastAPI, React, PostgreSQL', 'Projeto próprio · FastAPI, React, PostgreSQL'),
      repo: `${GH}/orbit`,
      live: 'https://orbit-huguenin.onrender.com',
      blocks: [
        {
          label: t('Context', 'Contexto'),
          text: t(
            'Personal organization is scattered across apps. Orbit connects the modules through one dashboard and search, in Portuguese, English and German.',
            'A organização pessoal fica espalhada em vários apps. O Orbit conecta os módulos em um dashboard e uma busca, em português, inglês e alemão.',
          ),
        },
        {
          label: t('Approach', 'Abordagem'),
          text: t(
            'Money stored in cents so instalments always add up; paying a card bill never duplicates the purchase. Focus timers live on the server, so reloading never loses a session.',
            'Valores em centavos para que as parcelas sempre fechem; pagar a fatura nunca duplica a compra. O cronômetro de foco vive no servidor, então recarregar nunca perde a sessão.',
          ),
        },
        {
          label: t('System', 'Sistema'),
          text: t(
            'Modular monolith: React + TypeScript with types generated from OpenAPI, FastAPI with Pydantic, SQLAlchemy and Alembic. Optional Telegram bot uses Gemini to turn a voice note into an expense, via an inbox/outbox in PostgreSQL.',
            'Monólito modular: React + TypeScript com tipos gerados do OpenAPI, FastAPI com Pydantic, SQLAlchemy e Alembic. Um bot opcional no Telegram usa Gemini para transformar um áudio em despesa, via inbox/outbox no PostgreSQL.',
          ),
        },
        {
          label: t('Outcome', 'Resultado'),
          text: t(
            'Live with a per-visitor 24-hour demo; tested with pytest on real PostgreSQL, Vitest and Playwright on desktop and mobile; deployed on Render and Neon.',
            'Publicado com demo de 24 horas por visitante; testado com pytest em PostgreSQL real, Vitest e Playwright em desktop e mobile; deploy no Render e Neon.',
          ),
        },
      ],
    },
    {
      name: 'Agency Hub',
      tag: t('SaaS · Multi-tenant', 'SaaS · Multi-tenant'),
      headline: t(
        'Projects, tasks, hours, invoices and boards for agencies in one workspace',
        'Projetos, tarefas, horas, faturas e boards para agências em um só workspace',
      ),
      period: t('Personal project · Laravel 13, React 19, MySQL', 'Projeto próprio · Laravel 13, React 19, MySQL'),
      repo: `${GH}/agency-hub`,
      live: 'https://agency-hub-bf8l.onrender.com',
      blocks: [
        {
          label: t('Context', 'Contexto'),
          text: t(
            'Agencies juggle projects, time tracking and billing across tools. Agency Hub keeps the operational loop — plan, execute, log hours, invoice — inside one tenant.',
            'Agências dividem projetos, controle de horas e cobrança entre várias ferramentas. O Agency Hub mantém o ciclo operacional — planejar, executar, lançar horas, faturar — dentro de um tenant.',
          ),
        },
        {
          label: t('Approach', 'Abordagem'),
          text: t(
            'The authenticated identity determines the tenant and the API validates every sensitive relation. Roles and explicit permissions gate each operation.',
            'A identidade autenticada determina o tenant e a API valida cada relação sensível. Funções e permissões explícitas controlam cada operação.',
          ),
        },
        {
          label: t('System', 'Sistema'),
          text: t(
            'React 19 + Vite SPA and a Laravel 13 / PHP 8.4 REST API in one Docker image and origin; MySQL 8.4 over validated TLS; Sanctum auth; Kanban, timers, Excalidraw boards and notifications.',
            'SPA em React 19 + Vite e API REST em Laravel 13 / PHP 8.4 na mesma imagem Docker e origem; MySQL 8.4 com TLS validado; auth com Sanctum; Kanban, cronômetros, boards com Excalidraw e notificações.',
          ),
        },
        {
          label: t('Outcome', 'Resultado'),
          text: t(
            'Each demo visitor gets their own tenant and user for 24 hours, with only a token hash stored. PHPUnit covers auth, RBAC and tenant isolation.',
            'Cada visitante da demo recebe tenant e usuário próprios por 24 horas, e só o hash do token é salvo. PHPUnit cobre autenticação, RBAC e isolamento entre tenants.',
          ),
        },
      ],
    },
    {
      name: 'Ledgerlight',
      tag: t('In development', 'Em desenvolvimento'),
      headline: t(
        'AI you can verify — accounts payable where humans review only the uncertain fields',
        'IA verificável — contas a pagar em que humanos revisam só os campos incertos',
      ),
      period: t('Personal project · Laravel, Nuxt, Groq', 'Projeto próprio · Laravel, Nuxt, Groq'),
      repo: `${GH}/ledgerlight`,
      blocks: [
        {
          label: t('Context', 'Contexto'),
          text: t(
            'Most teams can demo AI; few can prove what it produced. Invoice processing is a perfect test: every number matters and every mistake costs money.',
            'Muitos times conseguem fazer demo de IA; poucos conseguem provar o que ela produziu. Processar faturas é o teste ideal: todo número importa e todo erro custa dinheiro.',
          ),
        },
        {
          label: t('Approach', 'Abordagem'),
          text: t(
            'An LLM extracts each field with a confidence score; only the uncertain ones go to a human. Every value is traceable to its source, cost and whoever changed it.',
            'Um LLM extrai cada campo com um score de confiança; só os incertos vão para um humano. Todo valor é rastreável até a fonte, o custo e quem o alterou.',
          ),
        },
        {
          label: t('System', 'Sistema'),
          text: t(
            'Laravel API and Nuxt app behind Caddy on one origin, MySQL and Redis in Docker Compose. Exports go to a deliberately unreliable accounting API, handled with retries, idempotency keys, a circuit breaker and a dead-letter queue.',
            'API Laravel e app Nuxt atrás do Caddy na mesma origem, MySQL e Redis em Docker Compose. As exportações vão para uma API contábil propositalmente instável, tratada com retries, chaves de idempotência, circuit breaker e dead-letter queue.',
          ),
        },
        {
          label: t('Outcome', 'Resultado'),
          text: t(
            'Under construction in public, stage by stage: tenant isolation proven by tests, an evals dashboard and an extraction receipt for every invoice.',
            'Em construção em público, etapa por etapa: isolamento de tenant provado por testes, um painel de avaliações e um recibo de extração para cada fatura.',
          ),
        },
      ],
    },
  ],
  buildsSection: {
    eyebrow: t('More projects', 'Mais projetos'),
    title: t('Smaller builds, real lessons.', 'Projetos menores, lições reais.'),
  },
  builds: [
    {
      name: 'Smart Waste AI',
      tag: t('Computer vision', 'Visão computacional'),
      repo: `${GH}/smart-waste-ai`,
      live: 'https://hugueninfer.github.io/smart-waste-ai/',
      tech: ['React', 'TypeScript', 'TensorFlow.js', 'Teachable Machine', 'Tailwind'],
      blocks: [
        { label: t('Problem', 'Problema'), text: t('Turn a public Kaggle dataset into a practical waste classifier anyone can try from a photo or webcam.', 'Transformar um dataset público do Kaggle em um classificador de resíduos que qualquer pessoa testa com foto ou webcam.') },
        { label: t('System', 'Sistema'), text: t('Six classes trained in Teachable Machine and exported to TensorFlow.js; the model runs in a service isolated from the UI.', 'Seis classes treinadas no Teachable Machine e exportadas para TensorFlow.js; o modelo roda em um serviço isolado da interface.') },
        { label: t('Design', 'Design'), text: t('Shows every probability, a confidence level and disposal guidance, plus a local history and dashboard.', 'Mostra todas as probabilidades, o nível de confiança e orientações de descarte, além de histórico local e dashboard.') },
        { label: t('Outcome', 'Resultado'), text: t('Images never leave the browser; only metadata is stored locally.', 'As imagens nunca saem do navegador; só metadados ficam salvos localmente.') },
      ],
    },
    {
      name: 'CineFlix',
      tag: t('Recommendation', 'Recomendação'),
      repo: `${GH}/cineflix-recomendador`,
      live: 'https://recomendador-de-filmes-rho.vercel.app',
      tech: ['JavaScript', 'TensorFlow.js', 'Web Workers', 'i18n'],
      blocks: [
        { label: t('Problem', 'Problema'), text: t('Recommend films and explain why — not just rank them.', 'Recomendar filmes e explicar o porquê — não só ordená-los.') },
        { label: t('System', 'Sistema'), text: t('A 128→64→32→1 TensorFlow.js network trained in a Web Worker over weighted vectors of genre, rating, year and audience age.', 'Uma rede TensorFlow.js 128→64→32→1 treinada em um Web Worker sobre vetores ponderados de gênero, nota, ano e idade do público.') },
        { label: t('Design', 'Design'), text: t('An info button compares each pick with your history; an item-item signal shows how other users influenced it.', 'Um botão de informação compara cada sugestão com seu histórico; um sinal item-item mostra como outros usuários influenciaram.') },
        { label: t('Outcome', 'Resultado'), text: t('Bilingual PT/EN without reloads, deployed on Vercel on every push.', 'Bilíngue PT/EN sem recarregar a página, com deploy no Vercel a cada push.') },
      ],
    },
    {
      name: 'Jus',
      tag: t('Design system', 'Design system'),
      repo: `${GH}/Jus`,
      tech: ['PHP 8.4', 'Symfony 7.4', 'Twig', 'Web Components'],
      blocks: [
        { label: t('Problem', 'Problema'), text: t('Show a design system working inside a realistic product: a fictional electronic court-case panel.', 'Mostrar um design system funcionando em um produto realista: um painel fictício de processo eletrônico.') },
        { label: t('System', 'Sistema'), text: t('Case search, case page and PDF filing built from Twig components and Web Components, with a component catalog.', 'Busca, página do processo e peticionamento em PDF construídos com componentes Twig e Web Components, com catálogo de componentes.') },
        { label: t('Design', 'Design'), text: t('System, light and dark themes chosen via cookie and rendered on the server — no flash, works without JavaScript.', 'Temas sistema, claro e escuro escolhidos via cookie e renderizados no servidor — sem piscar, funciona sem JavaScript.') },
        { label: t('Outcome', 'Resultado'), text: t('A consistent interface from 375 px to desktop, with all data generated for the demo.', 'Uma interface consistente de 375 px ao desktop, com todos os dados gerados para a demonstração.') },
      ],
    },
    {
      name: 'Amazon Price Monitor',
      tag: t('Automation', 'Automação'),
      repo: `${GH}/amazon-price-monitor`,
      tech: ['Python', 'SQLite', 'SMTP', 'Telegram Bot API'],
      blocks: [
        { label: t('Problem', 'Problema'), text: t('Know when a product reaches a target price without checking the page every day.', 'Saber quando um produto chega ao preço-alvo sem abrir a página todo dia.') },
        { label: t('System', 'Sistema'), text: t('A scheduled Python job reads product URLs, stores price history in SQLite and compares it to each target.', 'Um job em Python agendado lê as URLs, grava o histórico de preços em SQLite e compara com cada alvo.') },
        { label: t('Design', 'Design'), text: t('Alerts by Gmail and Telegram, with logic that does not repeat an alert while the price stays below target.', 'Alertas por Gmail e Telegram, com lógica que não repete o alerta enquanto o preço continuar abaixo do alvo.') },
        { label: t('Outcome', 'Resultado'), text: t('A small, dependable tool configured entirely through a JSON file and environment variables.', 'Uma ferramenta pequena e confiável, configurada só por um arquivo JSON e variáveis de ambiente.') },
      ],
    },
  ],
  stack: {
    eyebrow: t('Stack', 'Stack'),
    title: t('What I build with.', 'Com o que eu construo.'),
    lead: t('Used in shipped projects. Not just installed.', 'Usado em projetos publicados. Não só instalado.'),
    groups: [
      {
        name: t('Languages', 'Linguagens'),
        items: [
          { name: 'PHP', note: '8.4' },
          { name: 'Python' },
          { name: 'TypeScript' },
          { name: 'JavaScript' },
          { name: 'SQL', note: 'PostgreSQL, MySQL' },
          { name: 'Bash' },
        ],
      },
      {
        name: t('Backend', 'Backend'),
        items: [
          { name: 'Laravel', note: 'Sanctum, queues' },
          { name: 'FastAPI', note: 'Pydantic' },
          { name: 'Symfony' },
          { name: 'REST / OpenAPI' },
          { name: 'gRPC' },
          { name: 'Multi-tenancy' },
          { name: t('Idempotency & retries', 'Idempotência e retries') },
        ],
      },
      {
        name: t('Data & Messaging', 'Dados e Mensageria'),
        items: [
          { name: 'PostgreSQL', note: 'pgvector' },
          { name: 'MySQL' },
          { name: 'Redis' },
          { name: 'Kafka', note: 'Redpanda' },
          { name: 'SQLAlchemy', note: 'Alembic' },
          { name: 'SQLite' },
        ],
      },
      {
        name: t('Applied AI', 'IA aplicada'),
        items: [
          { name: 'LLM APIs', note: 'Claude, Gemini, Groq' },
          { name: t('Agents', 'Agentes'), note: 'LangChain, LangGraph' },
          { name: 'MCP' },
          { name: 'RAG', note: 'embeddings' },
          { name: t('Evals', 'Avaliações'), note: 'LLM-as-judge' },
          { name: 'TensorFlow.js' },
        ],
      },
      {
        name: t('Frontend', 'Frontend'),
        items: [
          { name: 'React' },
          { name: 'Vue 3', note: 'Nuxt' },
          { name: 'Next.js' },
          { name: 'Tailwind CSS' },
          { name: 'Vite' },
          { name: 'Astro' },
        ],
      },
      {
        name: t('Quality & Ops', 'Qualidade e Operação'),
        items: [
          { name: 'PHPUnit · pytest' },
          { name: 'Vitest · Playwright' },
          { name: 'Docker' },
          { name: 'GitHub Actions' },
          { name: 'OpenTelemetry' },
          { name: 'Terraform' },
          { name: 'Render · Vercel' },
        ],
      },
    ],
  },
  contact: {
    eyebrow: t('Contact', 'Contato'),
    title: t("Let's talk.", 'Vamos conversar.'),
    body: t(
      "I'm open to backend, full stack and applied AI roles — remote or hybrid. If you have a system that needs to hold up, or just want to talk Laravel, multi-tenancy or LLMs in production, write to me.",
      'Estou aberto a vagas de backend, full stack e IA aplicada — remoto ou híbrido. Se você tem um sistema que precisa aguentar o tranco, ou só quer conversar sobre Laravel, multi-tenancy ou LLMs em produção, me escreva.',
    ),
    links: [
      { label: 'Email', value: 'hugueninpedro@gmail.com', url: 'mailto:hugueninpedro@gmail.com' },
      { label: 'LinkedIn', value: 'linkedin.com/in/pedro-huguenin', url: 'https://www.linkedin.com/in/pedro-huguenin' },
      { label: 'GitHub', value: 'github.com/Hugueninfer', url: 'https://github.com/Hugueninfer' },
      { label: 'WhatsApp', value: '+55 24 99877-0906', url: 'https://wa.me/5524998770906' },
      { label: t('Location', 'Localização'), value: t('Volta Redonda, RJ — Brazil', 'Volta Redonda, RJ — Brasil') },
    ],
  },
};

export type SiteContent = Localized<typeof source>;

export function getContent(locale: Locale): SiteContent {
  return localize(source, locale);
}
