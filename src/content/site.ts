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
  'recommendations',
  'stack',
  'contact',
] as const;
export type SectionId = (typeof sectionIds)[number];

const source = {
  meta: {
    title: t(
      'Pedro Huguenin | AI Engineer — LLMs, RAG & AI Agents on a Backend Foundation',
      'Pedro Huguenin | AI Engineer — LLMs, RAG e Agentes de IA com base em Backend',
    ),
    description: t(
      'AI Engineer at Linkeed building customer-service agents, RAG and MCP integrations in production, on top of 5+ years of backend engineering in PHP, Laravel, Python and PostgreSQL.',
      'AI Engineer na Linkeed construindo agentes de atendimento, RAG e integrações MCP em produção, sobre mais de 5 anos de engenharia backend em PHP, Laravel, Python e PostgreSQL.',
    ),
  },
  ui: {
    skip: t('Skip to content', 'Pular para o conteúdo'),
    masthead: t('Engineering Notes', 'Notas de Engenharia'),
    disciplines: t('Applied AI / Backend / Full stack', 'IA aplicada / Backend / Full stack'),
    profile: t('Professional profile', 'Perfil profissional'),
    switchLabel: t('Ler em português', 'Read in English'),
    switchShort: t('PT', 'EN'),
    repo: t('Repository', 'Repositório'),
    live: t('Live demo', 'Demo online'),
    menu: t('Sections', 'Seções'),
    themeLabel: t('Switch light / dark theme', 'Alternar tema claro / escuro'),
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
    role: t('AI Engineer', 'AI Engineer'),
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
    { id: 'recommendations', label: t('In their words.', 'O que dizem sobre mim.') },
    { id: 'stack', label: t('What I build with.', 'Com o que eu construo.') },
    { id: 'contact', label: t("Let's talk.", 'Vamos conversar.') },
  ],
  hero: {
    kicker: t(
      'Not the demo — the system behind it: data, contracts, and what happens after deploy.',
      'Não a demo — o sistema por trás dela: dados, contratos e o que acontece depois do deploy.',
    ),
    facts: [
      { label: t('Role', 'Cargo'), value: t('AI Engineer', 'AI Engineer') },
      { label: t('Company', 'Empresa'), value: t('Linkeed', 'Linkeed'), note: t('Nov 2026 – Present', 'Nov 2026 – atual') },
      { label: t('Focus', 'Foco'), value: t('LLMs · RAG · AI agents · MCP', 'LLMs · RAG · Agentes de IA · MCP') },
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
        'Since then I have built supplier-evaluation platforms with government integrations, tuned PostgreSQL for systems with tens of thousands of users, built Shopify stores for European companies and, at Before, designed a multi-tenant architecture and Pix payment integrations where isolation, idempotency and performance are not optional.',
        'Desde então construí plataformas de avaliação de fornecedores com integrações governamentais, otimizei PostgreSQL para sistemas com dezenas de milhares de usuários, criei lojas Shopify para empresas europeias e, na Before, desenhei uma arquitetura multi-tenant e integrações de pagamento Pix onde isolamento, idempotência e performance não são opcionais.',
      ),
      t(
        'Today I am an AI Engineer at Linkeed, an AI-first software house, working on customer-service agents, RAG and MCP integrations in production. I am also taking an MBA in Software Engineering for Applied AI. The model is one component among many: every answer cites its evidence, personal data is masked before it reaches the model, and a human makes the final call where it matters.',
        'Hoje sou AI Engineer na Linkeed, uma software house AI-first, trabalhando com agentes de atendimento, RAG e integrações MCP em produção. Também curso um MBA em Engenharia de Software em IA Aplicada. O modelo é só um componente entre vários: toda resposta cita sua evidência, dados pessoais são mascarados antes de chegar ao modelo e a decisão final é humana onde importa.',
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
    currentLabel: t('Current', 'Atual'),
    impactLabel: t('Impact', 'Impacto'),
    techLabel: t('Worked with', 'Trabalhei com'),
    items: [
      {
        role: t('AI Engineer', 'AI Engineer'),
        org: 'Linkeed',
        logo: '/logos/companies/linkeed.webp',
        date: t('Nov 2026 – Present', 'Nov 2026 – atual'),
        current: true,
        summary: t(
          'AI-first software house. I work on an AI-powered management platform for a property management company: a resident-facing customer-service agent (WhatsApp and webchat) and an internal RAG assistant over the company documents.',
          'Software house AI-first. Trabalho em uma plataforma de gestão com IA para uma administradora de condomínios: um agente de atendimento para moradores (WhatsApp e webchat) e um assistente RAG interno sobre os documentos da empresa.',
        ),
        tech: [
          { icon: 'si:typescript', name: 'TypeScript' },
          { icon: 'si:python', name: 'Python' },
          { icon: 'si:fastapi', name: 'FastAPI' },
          { icon: 'si:nextdotjs', name: 'Next.js' },
          { icon: 'si:langgraph', name: 'LangGraph' },
          { icon: 'si:modelcontextprotocol', name: 'MCP' },
          { icon: 'si:supabase', name: 'Supabase' },
          { icon: 'si:postgresql', name: 'pgvector' },
        ],
        impact: {
          metric: t('minutes', 'minutos'),
          label: t('to adjust agent behavior, instead of a code deploy', 'para ajustar o comportamento do agente, em vez de um deploy'),
          details: [
            t(
              'Evolving a LangGraph agent with tool calling that answers residents from FAQs and documents and only opens service requests after the resident confirms.',
              'Evoluo um agente LangGraph com tool calling que responde moradores a partir de FAQs e documentos e só abre chamados depois que o morador confirma.',
            ),
            t(
              'Built in-app configuration (editable prompt, team routing by keyword and emergency alerts) so behavior changes no longer need a deploy.',
              'Construí configuração dentro do app (prompt editável, roteamento por palavra-chave e alertas de emergência) para que mudanças de comportamento não dependam de deploy.',
            ),
            t(
              'Building an MCP server with OAuth so employees can query the system from Claude with the same permissions they have in the app.',
              'Construo um servidor MCP com OAuth para que colaboradores consultem o sistema pelo Claude com as mesmas permissões que têm no app.',
            ),
            t(
              'Working on an internal RAG assistant (pgvector + embeddings) over PDFs, Office documents and spreadsheets, with OCR when needed.',
              'Trabalho em um assistente RAG interno (pgvector + embeddings) sobre PDFs, documentos Office e planilhas, com OCR quando necessário.',
            ),
            t(
              'Applying LGPD guardrails across the pipeline: personal data masked before reaching the model, PII stripped from logs and identity verification before exposing user data.',
              'Aplico guardrails de LGPD em todo o pipeline: dados pessoais mascarados antes de chegar ao modelo, PII removida dos logs e verificação de identidade antes de expor dados do usuário.',
            ),
          ],
        },
      },
      {
        role: t('Software Engineer', 'Engenheiro de Software'),
        org: 'Before',
        logo: '/logos/companies/before.webp',
        date: t('Jul 2024 – Oct 2026', 'Jul 2024 – Out 2026'),
        current: false,
        summary: t(
          'Backend engineering on a multi-tenant platform in PHP and Laravel: architecture, payments, APIs, PostgreSQL performance and Docker environments.',
          'Engenharia backend em uma plataforma multi-tenant em PHP e Laravel: arquitetura, pagamentos, APIs, performance em PostgreSQL e ambientes Docker.',
        ),
        tech: [
          { icon: 'si:php', name: 'PHP' },
          { icon: 'si:laravel', name: 'Laravel' },
          { icon: 'si:vuedotjs', name: 'Vue.js' },
          { icon: 'si:postgresql', name: 'PostgreSQL' },
          { icon: 'si:redis', name: 'Redis' },
          { icon: 'si:docker', name: 'Docker' },
          { icon: 'tb:api', name: 'REST APIs' },
          { icon: 'tb:building-skyscraper', name: 'Multi-tenancy' },
        ],
        impact: {
          metric: '70%',
          label: t('less time to onboard a new client', 'menos tempo para integrar um novo cliente'),
          details: [
            t(
              'Cut new-client onboarding from 10 days to 3, enabling 2x more activations per month without growing the team, by designing a multi-tenant architecture in Laravel.',
              'Reduzi o onboarding de novos clientes de 10 para 3 dias, permitindo 2x mais ativações por mês sem aumentar o time, ao desenhar uma arquitetura multi-tenant em Laravel.',
            ),
            t(
              'Increased monthly revenue by ~12% and cut checkout completion from ~2 days to under 30 seconds by integrating Pix with automatic webhook confirmation (~3,000 transactions/month).',
              'Aumentei a receita mensal em ~12% e reduzi a conclusão do checkout de ~2 dias para menos de 30 segundos ao integrar o Pix com confirmação automática por webhook (~3.000 transações/mês).',
            ),
            t(
              'Cut search and filter response time from 2.4 s to 1.1 s for ~15,000 users by optimizing PostgreSQL queries, indexes and data structures.',
              'Reduzi o tempo de resposta de buscas e filtros de 2,4 s para 1,1 s para ~15.000 usuários otimizando consultas, índices e estruturas no PostgreSQL.',
            ),
            t(
              'Freed ~20 hours/month for the finance team by automating payment reconciliation, and cut the operations team’s manual work by ~40% (~60 tasks/week) with internal systems.',
              'Liberei ~20 horas/mês do time financeiro automatizando a conciliação de pagamentos e reduzi em ~40% o trabalho manual da operação (~60 tarefas/semana) com sistemas internos.',
            ),
            t(
              'Cut environment setup from ~1 day to 15 minutes by containerizing the applications with Docker, Nginx and Linux.',
              'Reduzi a configuração de ambiente de ~1 dia para 15 minutos containerizando as aplicações com Docker, Nginx e Linux.',
            ),
          ],
        },
      },
      {
        role: t('Full Stack Developer', 'Desenvolvedor Full Stack'),
        org: 'Formula X — B2B Growth',
        logo: '/logos/companies/formula-x.webp',
        date: t('Aug 2023 – Present', 'Ago 2023 – atual'),
        current: true,
        summary: t(
          'Client projects for a Copenhagen-based B2B growth agency: Shopify stores for European companies, WordPress and Webflow sites, custom plugins and API integrations.',
          'Projetos para clientes de uma agência de crescimento B2B de Copenhague: lojas Shopify para empresas europeias, sites em WordPress e Webflow, plugins sob medida e integrações via API.',
        ),
        tech: [
          { icon: 'si:shopify', name: 'Shopify' },
          { icon: 'si:wordpress', name: 'WordPress' },
          { icon: 'si:woocommerce', name: 'WooCommerce' },
          { icon: 'si:elementor', name: 'Elementor' },
          { icon: 'si:webflow', name: 'Webflow' },
          { icon: 'si:php', name: 'PHP' },
          { icon: 'si:javascript', name: 'JavaScript' },
        ],
        impact: {
          metric: '38 → 87',
          label: t('mobile PageSpeed across ~30 client websites', 'de PageSpeed mobile em ~30 sites de clientes'),
          details: [
            t(
              'Built e-commerce stores for European companies with Shopify, including an airline ticket store and a tire store.',
              'Construí lojas virtuais para empresas europeias com Shopify, incluindo uma loja de passagens aéreas e uma de pneus.',
            ),
            t(
              'Raised mobile PageSpeed from 38 to 87 across ~30 sites by optimizing assets, scripts and loading in WordPress, PHP and JavaScript.',
              'Elevei o PageSpeed mobile de 38 para 87 em ~30 sites otimizando assets, scripts e carregamento em WordPress, PHP e JavaScript.',
            ),
            t(
              'Increased landing page conversion from 2.1% to 3.4% by redesigning and optimizing pages with WordPress, Elementor and Webflow.',
              'Aumentei a conversão de landing pages de 2,1% para 3,4% redesenhando e otimizando páginas com WordPress, Elementor e Webflow.',
            ),
            t(
              'Saved ~15 hours/month of manual work per client with custom plugins, automations and API integrations, including AI tools, and kept ~95% retention across ~20 B2B clients over 3 years.',
              'Economizei ~15 horas/mês de trabalho manual por cliente com plugins sob medida, automações e integrações via API, incluindo ferramentas de IA, e mantive ~95% de retenção em ~20 clientes B2B ao longo de 3 anos.',
            ),
          ],
        },
      },
      {
        role: t('Full Stack Developer', 'Desenvolvedor Full Stack'),
        org: 'SENAI Soluções Digitais',
        logo: '/logos/companies/senai.webp',
        date: t('Dec 2022 – May 2024', 'Dez 2022 – Mai 2024'),
        current: false,
        summary: t(
          'Full stack development of a job platform with ~50,000 users: Laravel APIs on PostgreSQL, with React and React Native clients.',
          'Desenvolvimento full stack de uma plataforma de vagas com ~50.000 usuários: APIs Laravel sobre PostgreSQL, com clientes em React e React Native.',
        ),
        tech: [
          { icon: 'si:php', name: 'PHP' },
          { icon: 'si:laravel', name: 'Laravel' },
          { icon: 'si:postgresql', name: 'PostgreSQL' },
          { icon: 'si:react', name: 'React · React Native' },
          { icon: 'si:docker', name: 'Docker' },
          { icon: 'tb:api', name: 'REST APIs' },
        ],
        impact: {
          metric: '50%',
          label: t('faster searches and filters', 'buscas e filtros mais rápidos'),
          details: [
            t(
              'Cut search and filter response time from 3.2 s to 1.5 s on a platform with ~50,000 users by optimizing PostgreSQL queries and indexes.',
              'Reduzi o tempo de resposta de buscas e filtros de 3,2 s para 1,5 s em uma plataforma com ~50.000 usuários otimizando consultas e índices no PostgreSQL.',
            ),
            t(
              'Shipped ~40 backend features in 18 months by building REST APIs and business rules in PHP/Laravel.',
              'Entreguei ~40 funcionalidades de backend em 18 meses construindo APIs REST e regras de negócio em PHP/Laravel.',
            ),
            t(
              'Cut new-feature development time by ~30% by refactoring critical modules with SOLID, MVC and design patterns.',
              'Reduzi em ~30% o tempo de desenvolvimento de novas funcionalidades refatorando módulos críticos com SOLID, MVC e design patterns.',
            ),
            t(
              'Cut environment setup for ~6 developers from 4 hours to 20 minutes by standardizing it with Docker and Linux.',
              'Reduzi a configuração de ambiente de ~6 desenvolvedores de 4 horas para 20 minutos padronizando-a com Docker e Linux.',
            ),
          ],
        },
      },
      {
        role: t('Full Stack Developer', 'Desenvolvedor Full Stack'),
        org: 'Sertras',
        logo: '/logos/companies/sertras.webp',
        date: t('Mar 2022 – Dec 2022', 'Mar 2022 – Dez 2022'),
        current: false,
        summary: t(
          'Full stack work on a supplier evaluation platform with real-time government integrations.',
          'Trabalho full stack em uma plataforma de avaliação de fornecedores com integrações governamentais em tempo real.',
        ),
        tech: [
          { icon: 'si:php', name: 'PHP' },
          { icon: 'si:laravel', name: 'Laravel' },
          { icon: 'si:mysql', name: 'MySQL' },
          { icon: 'si:javascript', name: 'JavaScript' },
          { icon: 'si:wordpress', name: 'WordPress' },
        ],
        impact: {
          metric: '~40%',
          label: t('less time per supplier compliance analysis', 'menos tempo por análise de compliance de fornecedor'),
          details: [
            t(
              'Cut compliance analysis for ~300 suppliers/month from 45 to 27 minutes per supplier by automating the evaluation with PHP, Laravel, JavaScript and MySQL.',
              'Reduzi a análise de compliance de ~300 fornecedores/mês de 45 para 27 minutos por fornecedor automatizando a avaliação com PHP, Laravel, JavaScript e MySQL.',
            ),
            t(
              'Eliminated ~1,200 manual tax and regulatory checks per month by integrating the system with government APIs in real time.',
              'Eliminei ~1.200 checagens fiscais e regulatórias manuais por mês integrando o sistema a APIs governamentais em tempo real.',
            ),
            t(
              'Kept 99.5% uptime for business-critical operations and cut the corporate website load time from 6 s to 2.5 s.',
              'Mantive 99,5% de uptime nas operações críticas e reduzi o carregamento do site institucional de 6 s para 2,5 s.',
            ),
          ],
        },
      },
      {
        role: t('Trainee Developer', 'Desenvolvedor Trainee'),
        org: 'Dev4B',
        logo: '/logos/companies/dev4b.webp',
        date: t('Mar 2021 – Mar 2022', 'Mar 2021 – Mar 2022'),
        current: false,
        summary: t(
          'Where I started: management systems in PHP, Laravel and MySQL, from code to deploy.',
          'Onde comecei: sistemas de gestão em PHP, Laravel e MySQL, do código ao deploy.',
        ),
        tech: [
          { icon: 'si:php', name: 'PHP' },
          { icon: 'si:laravel', name: 'Laravel' },
          { icon: 'si:mysql', name: 'MySQL' },
          { icon: 'si:bootstrap', name: 'Bootstrap' },
          { icon: 'si:ubuntu', name: 'Ubuntu' },
        ],
        impact: {
          metric: '~50',
          label: t('production deploys with no critical incidents', 'deploys em produção sem incidentes críticos'),
          details: [
            t(
              'Cut inventory management time from ~10 to 6 hours per week by building a stock entry and exit system with PHP, Laravel and MySQL, replacing ~5 spreadsheets.',
              'Reduzi a gestão de estoque de ~10 para 6 horas por semana construindo um sistema de entrada e saída com PHP, Laravel e MySQL, substituindo ~5 planilhas.',
            ),
            t(
              'Increased landing page engagement by ~25% with responsive interfaces in HTML5, CSS3, Bootstrap and JavaScript.',
              'Aumentei em ~25% o engajamento de landing pages com interfaces responsivas em HTML5, CSS3, Bootstrap e JavaScript.',
            ),
            t(
              'Published and ran the applications myself on Ubuntu servers with Git.',
              'Publiquei e operei as aplicações eu mesmo em servidores Ubuntu com Git.',
            ),
          ],
        },
      },
    ],
  },
  education: {
    eyebrow: t('Education', 'Formação'),
    title: t('Where I studied.', 'Onde estudei.'),
    items: [
      {
        degree: t('MBA, Software Engineering for Applied AI', 'MBA, Engenharia de Software em IA Aplicada'),
        school: 'UNIPDS',
        level: t('Postgraduate (lato sensu)', 'Pós-graduação lato sensu'),
        date: t('Sep 2026 – Sep 2027', 'Set 2026 – Set 2027'),
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
          { value: t('10 → 3 days', '10 → 3 dias'), label: t('to onboard a new client (-70%)', 'para integrar um novo cliente (-70%)'), source: 'Before' },
          { value: '~15h', label: t('of manual work saved per client each month', 'de trabalho manual economizadas por cliente a cada mês'), source: 'Formula X' },
          { value: t('~1,200', '~1.200'), label: t('manual regulatory checks eliminated per month', 'checagens regulatórias manuais eliminadas por mês'), source: 'Sertras' },
        ],
      },
      {
        id: 'business',
        name: t('Business', 'Negócio'),
        items: [
          { value: '~12%', label: t('more monthly revenue after the Pix integration', 'a mais de receita mensal após a integração com Pix'), source: 'Before' },
          { value: t('2.1% → 3.4%', '2,1% → 3,4%'), label: t('landing page conversion', 'de conversão em landing pages'), source: 'Formula X' },
          { value: '~95%', label: t('retention across ~20 B2B clients over 3 years', 'de retenção em ~20 clientes B2B ao longo de 3 anos'), source: 'Formula X' },
        ],
      },
      {
        id: 'performance',
        name: t('Performance', 'Performance'),
        items: [
          { value: t('2.4 → 1.1 s', '2,4 → 1,1 s'), label: t('search response time for ~15,000 users', 'de tempo de busca para ~15.000 usuários'), source: 'Before' },
          { value: '38 → 87', label: t('mobile PageSpeed across ~30 websites', 'de PageSpeed mobile em ~30 sites'), source: 'Formula X' },
          { value: t('3.2 → 1.5 s', '3,2 → 1,5 s'), label: t('search response time for ~50,000 users', 'de tempo de busca para ~50.000 usuários'), source: 'SENAI' },
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
  recommendations: {
    eyebrow: t('Recommendations', 'Recomendações'),
    title: t('In their words.', 'O que dizem sobre mim.'),
    lead: t(
      'From people who worked with me, as posted on LinkedIn.',
      'De pessoas que trabalharam comigo, como publicado no LinkedIn.',
    ),
    translated: t('Translated from Portuguese', ''),
    items: [
      {
        name: 'Roberto Peres de Souza Júnior',
        url: 'https://www.linkedin.com/in/roberto-peres-souza-jr/',
        role: t('Project Coordinator · Before TI', 'Coordenador de Projetos · Before TI'),
        relation: t('Supervised Pedro directly · Oct 2026', 'Supervisionava Pedro diretamente · out 2026'),
        quote: t(
          'I had the pleasure of working with him and seeing up close his growth and dedication as a back-end developer. Beyond his strong command of Laravel, Huguenin recently stood out by diving headfirst into new technologies focused on Artificial Intelligence. He played a key role in structuring and documenting AI agents, showing exemplary commitment to making the project happen. Huguenin is an extremely committed professional, with clear communication and impeccable day-to-day alignment.',
          'Tive o prazer de trabalhar com ele e ver de perto sua evolução e dedicação como desenvolvedor back-end. Além do seu forte domínio em Laravel, o Huguenin se destacou recentemente ao mergulhar de cabeça em novas tecnologias voltadas para Inteligência Artificial. Ele teve um papel fundamental na estruturação e documentação de agentes de IA, demonstrando um empenho exemplar para fazer o projeto acontecer. O Huguenin é um profissional extremamente comprometido, com uma comunicação clara e um alinhamento impecável no dia a dia.',
        ),
      },
      {
        name: 'Denilson Felix',
        url: 'https://www.linkedin.com/in/denilson-felix-488b76198/',
        role: t('Graphic Designer · Digital Arts & Branding', 'Designer Gráfico · Artes Digitais e Branding'),
        relation: t('Worked with Pedro on a different team · Apr 2024', 'Trabalhou com Pedro em outra equipe · abr 2024'),
        quote: t(
          'Pedro is extremely dedicated to what he does. He anticipates problems, proposes improvements and has a very critical eye that helps the team evolve. No matter how complex the project is, having him on the team makes a huge difference.',
          'Pedro é um profissional extremamente dedicado no que faz, antecipa-se aos problemas, propõe melhorias e possui um olhar bastante critico que proporciona evolução para equipe, não importa quão complexo seja o projeto tê-lo no time é um diferencial enorme.',
        ),
      },
      {
        name: 'Rondineiler de Paula',
        url: 'https://www.linkedin.com/in/rondineiler/',
        role: t('Full Stack Developer', 'Desenvolvedor FullStack'),
        relation: t('Same team as Pedro · Jul 2023', 'Mesma equipe que Pedro · jul 2023'),
        quote: t(
          'I had the great pleasure of working with Pedro, who was always very proactive, communicative and attentive to detail. He picks up new things easily and quickly puts them to work in the projects he builds, delivering great work and meeting deadlines.',
          'Tive um grande prazer de trabalhar com o Pedro que sempre foi muito proativo, comunicativo e atento aos detalhes, além de ter muita facilidade de aprender coisas novas e logo implementá-las nos projetos desenvolvidos, prestando um ótimo serviço e respeitando os prazos.',
        ),
      },
      {
        name: 'Pedro Hugo Barbosa',
        url: 'https://www.linkedin.com/in/pedro-hugo-b502/',
        role: t('Full Stack Developer · Node.js, NestJS, TypeScript, Vue.js', 'Desenvolvedor Full Stack · Node.js, NestJS, TypeScript, Vue.js'),
        relation: t('Same team as Pedro · Nov 2022', 'Mesma equipe que Pedro · nov 2022'),
        quote: t(
          'Pedro is a very committed, dedicated and responsible professional. He is the kind of person who dives headfirst into projects and keeps surprising us with his strategic view of the market, always attentive and helpful in everything that was his responsibility.',
          'Pedro é um profissional muito comprometido, dedicado e responsável em sua função, é aquele profissional que entra de cabeça nos projetos e tá sempre nos surpreendendo com sua visão estratégica do mercado, sempre atencioso e prestativo em todas as funções que eram de sua responsabilidade.',
        ),
      },
    ],
  },
  stack: {
    eyebrow: t('Stack', 'Stack'),
    title: t('What I build with.', 'Com o que eu construo.'),
    lead: t('Used in shipped projects. Not just installed.', 'Usado em projetos publicados. Não só instalado.'),
    groups: [
      {
        name: t('Languages', 'Linguagens'),
        items: [
          { name: 'PHP', note: '8.4', icons: ['si:php'] },
          { name: 'Python', icons: ['si:python'] },
          { name: 'TypeScript', icons: ['si:typescript'] },
          { name: 'JavaScript', icons: ['si:javascript'] },
          { name: 'SQL', note: 'PostgreSQL, MySQL', icons: ['si:postgresql', 'si:mysql'] },
          { name: 'HTML · CSS', note: 'Sass', icons: ['si:html5', 'si:css', 'si:sass'] },
          { name: 'Bash', icons: ['si:gnubash'] },
        ],
      },
      {
        name: t('Backend', 'Backend'),
        items: [
          { name: 'Laravel', note: 'Sanctum, queues, Livewire', icons: ['si:laravel'] },
          { name: 'Symfony', note: 'Doctrine', icons: ['si:symfony', 'si:doctrine'] },
          { name: 'CodeIgniter', icons: ['si:codeigniter'] },
          { name: 'FastAPI', note: 'Pydantic', icons: ['si:fastapi', 'si:pydantic'] },
          { name: 'Fastify', icons: ['si:fastify'] },
          { name: 'REST / OpenAPI', icons: ['si:openapiinitiative'] },
          { name: 'gRPC', icons: ['tb:arrows-exchange'] },
          { name: 'Multi-tenancy', icons: ['tb:building-skyscraper'] },
          { name: t('Idempotency & retries', 'Idempotência e retries'), icons: ['tb:repeat'] },
        ],
      },
      {
        name: t('Frontend', 'Frontend'),
        items: [
          { name: 'React', icons: ['si:react'] },
          { name: 'Angular', icons: ['si:angular'] },
          { name: 'Vue 3', note: 'Nuxt', icons: ['si:vuedotjs', 'si:nuxt'] },
          { name: 'Next.js', icons: ['si:nextdotjs'] },
          { name: 'Twig · Blade', note: t('server templates', 'templates no servidor'), icons: ['tb:template'] },
          { name: 'Web Components', icons: ['si:webcomponentsdotorg'] },
          { name: 'Tailwind CSS', icons: ['si:tailwindcss'] },
          { name: 'Bootstrap', icons: ['si:bootstrap'] },
          { name: 'Vite · Webpack', icons: ['si:vite', 'si:webpack'] },
          { name: 'three.js', icons: ['si:threedotjs'] },
          { name: 'Astro', icons: ['si:astro'] },
        ],
      },
      {
        name: t('CMS & Platforms', 'CMS e Plataformas'),
        items: [
          { name: 'WordPress', icons: ['si:wordpress'] },
          { name: 'Elementor', icons: ['si:elementor'] },
          { name: 'Shopify', icons: ['si:shopify'] },
          { name: 'Webflow', icons: ['si:webflow'] },
          { name: 'HubSpot', icons: ['si:hubspot'] },
        ],
      },
      {
        name: t('Data & Messaging', 'Dados e Mensageria'),
        items: [
          { name: 'PostgreSQL', note: 'pgvector', icons: ['si:postgresql'] },
          { name: 'Supabase', icons: ['si:supabase'] },
          { name: 'MySQL', icons: ['si:mysql'] },
          { name: 'Redis', icons: ['si:redis'] },
          { name: 'Kafka', note: 'Redpanda', icons: ['si:apachekafka'] },
          { name: 'SQLAlchemy', note: 'Alembic', icons: ['si:sqlalchemy'] },
          { name: 'SQLite', icons: ['si:sqlite'] },
        ],
      },
      {
        name: t('Applied AI', 'IA aplicada'),
        items: [
          { name: 'LLM APIs', note: 'OpenAI, Claude, Gemini, Groq, OpenRouter', icons: ['si:claude', 'si:googlegemini', 'si:openrouter'] },
          { name: t('Agents', 'Agentes'), note: 'LangChain, LangGraph', icons: ['si:langchain', 'si:langgraph'] },
          { name: 'MCP', icons: ['si:modelcontextprotocol'] },
          { name: 'RAG', note: 'embeddings', icons: ['tb:database-search'] },
          { name: t('Evals', 'Avaliações'), note: 'LLM-as-judge', icons: ['tb:checklist'] },
          { name: 'TensorFlow.js', note: 'Teachable Machine', icons: ['si:tensorflow'] },
        ],
      },
      {
        name: t('Testing & Quality', 'Testes e Qualidade'),
        items: [
          { name: 'PHPUnit', icons: ['tb:test-pipe'] },
          { name: 'pytest', icons: ['si:pytest'] },
          { name: 'Vitest', note: 'Testing Library', icons: ['si:vitest', 'si:testinglibrary'] },
          { name: 'Playwright', icons: ['tb:masks-theater'] },
          { name: 'PHPStan · ESLint', icons: ['tb:code', 'si:eslint'] },
          { name: 'k6', note: t('load testing', 'testes de carga'), icons: ['si:k6'] },
        ],
      },
      {
        name: t('Infra & DevOps', 'Infra e DevOps'),
        items: [
          { name: 'Docker', note: 'Compose', icons: ['si:docker'] },
          { name: 'Kubernetes', note: 'Helm, kind', icons: ['si:kubernetes', 'si:helm'] },
          { name: 'Istio', icons: ['si:istio'] },
          { name: 'GitHub Actions', icons: ['si:githubactions'] },
          { name: 'OpenTelemetry', note: 'Jaeger', icons: ['si:opentelemetry', 'si:jaeger'] },
          { name: 'Terraform', icons: ['si:terraform'] },
          { name: 'Caddy', icons: ['si:caddy'] },
          { name: 'Linux', note: 'Ubuntu', icons: ['si:linux', 'si:ubuntu'] },
          { name: 'Git', icons: ['si:git'] },
          { name: 'Render · Vercel', note: 'Neon', icons: ['si:render', 'si:vercel'] },
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
