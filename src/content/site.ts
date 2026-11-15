// Every user-visible string on the home page lives here (project case studies
// live in ./projects). `getContent(locale)` resolves the tree to plain strings.

import { t, localize, locales, type Locale, type Localized } from './i18n';
import { projects } from './projects';

export { locales, type Locale };

export const sectionIds = [
  'overview',
  'about',
  'experience',
  'education',
  'certifications',
  'results',
  'projects',
  'builds',
  'stack',
  'contact',
] as const;
export type SectionId = (typeof sectionIds)[number];

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
    caseStudy: t('Read case study', 'Ver estudo de caso'),
    allProjects: t('All projects', 'Todos os projetos'),
    atAGlance: t('At a glance', 'Em resumo'),
    stackLabel: t('Stack', 'Stack'),
    linksLabel: t('Links', 'Links'),
    typeLabel: t('Type', 'Tipo'),
    previous: t('Previous project', 'Projeto anterior'),
    next: t('Next project', 'Próximo projeto'),
    credential: t('Show credential', 'Ver credencial'),
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
    { id: 'experience', label: t('Where I have worked.', 'Onde trabalhei.') },
    { id: 'education', label: t('Where I studied.', 'Onde estudei.') },
    { id: 'certifications', label: t('Certifications', 'Certificações') },
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
  experience: {
    eyebrow: t('Work experience', 'Experiência profissional'),
    title: t('Where I have worked.', 'Onde trabalhei.'),
    items: [
      {
        role: t('Software Engineer', 'Engenheiro de Software'),
        org: 'Before',
        date: t('Jul 2024 – Present', 'Jul 2024 – atual'),
        current: true,
        points: [
          t('Multi-tenant architecture in PHP and Laravel', 'Arquitetura multi-tenant em PHP e Laravel'),
          t('APIs, Redis caching and performance work', 'APIs, cache com Redis e trabalho de performance'),
        ],
        impact: t('Client onboarding time cut by 70%', 'Tempo de onboarding de clientes reduzido em 70%'),
      },
      {
        role: t('Web Developer', 'Desenvolvedor Web'),
        org: 'Formula X — B2B Growth',
        date: t('Aug 2023 – Present', 'Ago 2023 – atual'),
        current: true,
        points: [
          t('International projects, automations and integrations', 'Projetos internacionais, automações e integrações'),
          t('Performance work on client websites', 'Trabalho de performance em sites de clientes'),
        ],
        impact: t('~20 hours saved per month and PageSpeed ~60% better', '~20 horas economizadas por mês e PageSpeed ~60% melhor'),
      },
      {
        role: t('Full Stack Software Engineer', 'Engenheiro de Software Full Stack'),
        org: 'SENAI Soluções Digitais',
        date: t('Dec 2022 – May 2024', 'Dez 2022 – Mai 2024'),
        current: false,
        points: [
          t('Laravel APIs and PostgreSQL optimization', 'APIs Laravel e otimização de PostgreSQL'),
          t('Systems used by thousands of people', 'Sistemas usados por milhares de pessoas'),
        ],
        impact: t('Searches and filters 50% faster', 'Buscas e filtros 50% mais rápidos'),
      },
      {
        role: t('Full Stack Software Engineer', 'Engenheiro de Software Full Stack'),
        org: 'Sertras',
        date: t('Mar 2022 – Dec 2022', 'Mar 2022 – Dez 2022'),
        current: false,
        points: [
          t('Supplier evaluation platform', 'Plataforma de avaliação de fornecedores'),
          t('Government integrations', 'Integrações governamentais'),
        ],
        impact: t('Manual analysis reduced by ~40%', 'Análise manual reduzida em ~40%'),
      },
      {
        role: t('Developer Trainee', 'Desenvolvedor Trainee'),
        org: 'Dev4B',
        date: t('Mar 2021 – Mar 2022', 'Mar 2021 – Mar 2022'),
        current: false,
        points: [
          t('Management systems in PHP, Laravel and MySQL', 'Sistemas de gestão em PHP, Laravel e MySQL'),
          t('Process automation, maintenance and Ubuntu deploys', 'Automação de processos, manutenção e deploys em Ubuntu'),
        ],
        impact: t('First production systems, deployed end to end', 'Primeiros sistemas em produção, publicados de ponta a ponta'),
      },
    ],
    currentLabel: t('Current', 'Atual'),
    impactLabel: t('Impact', 'Impacto'),
  },
  education: {
    eyebrow: t('Education', 'Formação'),
    title: t('Where I studied.', 'Onde estudei.'),
    items: [
      {
        degree: t('Postgraduate, Software Engineering for Applied AI', 'Pós-graduação, Engenharia de Software em IA Aplicada'),
        school: 'UNIPDS',
        level: t('Postgraduate', 'Pós-graduação'),
        date: t('2026 – In progress', '2026 – em andamento'),
        text: t(
          'Connects my backend experience to building AI applications: LLMs, RAG, embeddings, agents, MCP, evaluation and observability, with a focus on integrating models into systems with quality, security and context.',
          'Conecta minha experiência em backend à construção de aplicações com IA: LLMs, RAG, embeddings, agentes, MCP, avaliação e observabilidade, com foco em integrar modelos a sistemas com qualidade, segurança e contexto.',
        ),
      },
      {
        degree: t('B.Sc. Information Systems', 'Bacharelado em Sistemas de Informação'),
        school: 'UniFOA',
        level: t('University', 'Faculdade'),
        date: t('2021 – 2024', '2021 – 2024'),
        text: t(
          'Undergraduate degree in Information Systems in Volta Redonda, RJ, completed while working as a developer.',
          'Graduação em Sistemas de Informação em Volta Redonda, RJ, concluída enquanto trabalhava como desenvolvedor.',
        ),
      },
      {
        degree: t('Computer Technician', 'Técnico em Informática'),
        school: 'Escola Técnica Pandiá Calógeras',
        level: t('Technical school', 'Escola técnica'),
        date: t('2018 – 2020', '2018 – 2020'),
        text: t(
          'Technical foundation in computing and software development.',
          'Base técnica em informática e desenvolvimento de software.',
        ),
      },
    ],
  },
  certifications: {
    eyebrow: t('Additional training', 'Formação complementar'),
    title: t('Certifications', 'Certificações'),
    items: [
      { name: 'OWASP Top 10', issuer: '', area: t('Security', 'Segurança'), year: '2024', url: '' },
      { name: 'Scrum Fundamentals', issuer: '', area: t('Agile', 'Agilidade'), year: '2024', url: '' },
      { name: t('React and TypeScript', 'React e TypeScript'), issuer: 'Alura', area: t('Frontend', 'Frontend'), year: '2022', url: '' },
      { name: 'Laravel MVC', issuer: 'Alura', area: t('Backend', 'Backend'), year: '2021', url: '' },
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
  buildsSection: {
    eyebrow: t('More projects', 'Mais projetos'),
    title: t('Smaller builds, real lessons.', 'Projetos menores, lições reais.'),
  },
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

const content = { ...source, projects };

export type SiteContent = Localized<typeof content>;
export type ProjectContent = SiteContent['projects'][number];

export function getContent(locale: Locale): SiteContent {
  return localize(content, locale);
}
