// Projects shown on the home page and on their own case-study pages.
// `featured` projects get the large card; the rest appear as smaller builds.

import { t, type T } from './i18n';

const GH = 'https://github.com/Hugueninfer';
const raw = (repo: string, path: string) => `${GH}/${repo}/raw/main/${path}`;

export interface ProjectSection {
  title: T;
  heading: T;
  text: T;
  image?: { src: string; caption: T };
}

export interface Project {
  slug: string;
  featured: boolean;
  name: string;
  tag: T;
  headline: T;
  period: T;
  tech: string[];
  repo: string;
  live?: string;
  blocks: { label: T; text: T }[];
  sections: ProjectSection[];
}

const L = {
  context: t('Context', 'Contexto'),
  approach: t('Approach', 'Abordagem'),
  system: t('System', 'Sistema'),
  outcome: t('Outcome', 'Resultado'),
  problem: t('Problem', 'Problema'),
  design: t('Design', 'Design'),
};

export const projects: Project[] = [
  {
    slug: 'complyflow-ai',
    featured: true,
    name: 'ComplyFlow AI',
    tag: t('Full stack · Applied AI', 'Full stack · IA aplicada'),
    headline: t(
      'Supplier compliance with evidence you can check — AI suggests, a human decides',
      'Compliance de fornecedores com evidência verificável — a IA sugere, um humano decide',
    ),
    period: t('Personal project', 'Projeto próprio'),
    tech: ['PHP 8.4', 'Laravel 13', 'Python', 'FastAPI', 'Vue 3', 'PostgreSQL', 'Groq', 'Gemini', 'Docker'],
    repo: `${GH}/complyflow-ai`,
    live: 'https://complyflow-ai.onrender.com',
    blocks: [
      {
        label: L.context,
        text: t(
          'Supplier due diligence means reading stacks of PDFs against a checklist. An LLM can speed that up, but an unsupported answer is worse than no answer.',
          'Avaliar fornecedores significa ler pilhas de PDFs contra um checklist. Um LLM acelera isso, mas uma resposta sem suporte é pior que nenhuma.',
        ),
      },
      {
        label: L.approach,
        text: t(
          'Every finding must cite page, excerpt and valid offsets; unsupported answers are rejected before persistence. Checklists are versioned and immutable once published.',
          'Todo achado precisa citar página, trecho e offsets válidos; respostas sem suporte são rejeitadas antes de salvar. Checklists são versionados e imutáveis depois de publicados.',
        ),
      },
      {
        label: L.system,
        text: t(
          'Vue 3 SPA; Laravel 13 owns auth, tenancy, queue and domain; FastAPI isolates extraction and inference. HMAC-signed contracts between runtimes. Groq primary, Gemini fallback, PostgreSQL with pgvector, hash-chained audit log.',
          'SPA em Vue 3; Laravel 13 cuida de auth, tenancy, fila e domínio; FastAPI isola extração e inferência. Contratos assinados por HMAC entre os runtimes. Groq principal, Gemini como contingência, PostgreSQL com pgvector, auditoria com hashes encadeados.',
        ),
      },
      {
        label: L.outcome,
        text: t(
          'A multi-tenant platform with side-by-side supplier comparison, human review on every decision and an isolated 24-hour demo — covered by PHPUnit, pytest, Vitest and Playwright.',
          'Uma plataforma multi-tenant com comparação lado a lado, revisão humana em toda decisão e demo isolada de 24 horas — coberta por PHPUnit, pytest, Vitest e Playwright.',
        ),
      },
    ],
    sections: [
      { title: t("Demo", "Demonstração"), heading: t("Explore without registering", "Explore sem cadastro"), text: t("Each visitor can start a 24-hour isolated demo with fictional suppliers, documents and results. Personal accounts can also follow the complete authoring and analysis workflow.", "Cada visitante pode iniciar uma demonstração isolada por 24 horas com fornecedores, documentos e resultados fictícios. Contas próprias também podem percorrer o fluxo completo de autoria e análise."), image: { src: "https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/login.png", caption: t("Entry · Isolated demo and personal account", "Entrada · Demo isolada e conta própria") } },
      { title: t("Overview", "Visão geral"), heading: t("Risk and pending work in one place", "Risco e trabalho pendente em um só lugar"), text: t("The dashboard summarizes suppliers, requirements, recent analyses and pending reviews. Indicators use the effective status: the latest human review takes precedence over the AI suggestion without erasing the original history.", "O dashboard resume fornecedores, requisitos, análises recentes e revisões pendentes. Os indicadores usam o status efetivo: a revisão humana mais recente prevalece sobre a sugestão da IA sem apagar o histórico original."), image: { src: "https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/dashboard.png", caption: t("Dashboard · Real indicators with fictional data", "Dashboard · Indicadores reais com dados fictícios") } },
      { title: t("Supplier dossier", "Dossiê do fornecedor"), heading: t("Documents, history and decision in one context", "Documentos, histórico e decisão no mesmo contexto"), text: t("The dossier brings together registration data, PDFs, analyses, reviews and the final decision. Published checklists are immutable, and new versions preserve the traceability of previous evaluations.", "O dossiê reúne cadastro, PDFs, análises, revisões e decisão final. Checklists publicados são imutáveis e novas versões preservam a rastreabilidade das avaliações anteriores."), image: { src: "https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/supplier-dossier.png", caption: t("Dossier · Documents and evaluation history", "Dossiê · Documentos e histórico da avaliação") } },
      { title: t("Applied AI", "IA aplicada"), heading: t("Compliance with verifiable evidence", "Conformidade com evidência verificável"), text: t("The pipeline extracts text from PDFs, selects context and asks the model for a structured response per requirement. Every finding must cite a valid page, excerpt and offsets; unsupported responses are rejected before persistence.", "O pipeline extrai texto dos PDFs, seleciona contexto e pede ao modelo uma resposta estruturada por requisito. Cada achado precisa citar página, trecho e offsets válidos; respostas sem suporte são rejeitadas antes da persistência."), image: { src: "https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/compliance-matrix.png", caption: t("Matrix · Findings, confidence and evidence", "Matriz · Achados, confiança e evidências") } },
      { title: t("Human review", "Revisão humana"), heading: t("From evidence to human decision", "Da evidência à decisão humana"), text: t("Reviewers inspect the cited excerpt, keep or correct the suggested status and record a rationale. The final decision is always human, explicit and bound to the exact analysis and checklist versions.", "Revisores consultam o trecho citado, mantêm ou corrigem o status sugerido e registram uma justificativa. A decisão final é sempre humana, explícita e vinculada à versão exata da análise e do checklist.") },
      { title: t("Comparison", "Comparação"), heading: t("Suppliers side by side", "Fornecedores lado a lado"), text: t("The comparison aligns the same requirements across two suppliers and clearly separates AI suggestions, human reviews, missing evidence and obsolete versions.", "A comparação alinha os mesmos requisitos entre dois fornecedores e separa claramente sugestão da IA, revisão humana, ausência de evidência e versões obsoletas."), image: { src: "https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/comparison.png", caption: t("Comparison · Requirements and evidence side by side", "Comparação · Requisitos e evidências lado a lado") } },
      { title: t("Audit", "Auditoria"), heading: t("Verifiable append-only history", "Histórico append-only verificável"), text: t("Sensitive events record actor, action, object, timestamp and chained hashes. The interface verifies the available integrity without presenting the ledger as external proof or certification.", "Eventos sensíveis registram ator, ação, objeto, horário e hashes encadeados. A interface verifica a integridade disponível sem apresentar o ledger como prova externa ou certificação."), image: { src: "https://github.com/Hugueninfer/complyflow-ai/raw/main/complyflow-ai/docs/screenshots/live/audit.png", caption: t("Audit · Events and integrity verification", "Auditoria · Eventos e verificação de integridade") } },
      { title: t("Architecture", "Arquitetura"), heading: t("Laravel, FastAPI and Vue with clear boundaries", "Laravel, FastAPI e Vue com fronteiras claras"), text: t("Vue 3 delivers the SPA; Laravel 13 centralizes authentication, authorization, domain logic, queues and persistence; FastAPI isolates extraction and inference. HMAC-signed contracts and closed schemas connect the runtimes without trusting arbitrary payloads.", "Vue 3 entrega a SPA; Laravel 13 concentra autenticação, autorização, domínio, fila e persistência; FastAPI isola extração e inferência. Contratos assinados por HMAC e schemas fechados conectam os runtimes sem confiar em payloads arbitrários.") },
      { title: t("Security", "Segurança"), heading: t("Multi-tenancy enforced across every layer", "Multi-tenancy aplicado em todas as camadas"), text: t("The organization comes from the authenticated session, never from the client. Public UUIDs, tenant scoping, RBAC, HttpOnly cookies, CSRF, rate limits, idempotency, transactions and relationship validation protect sensitive operations.", "A organização vem da sessão autenticada, nunca do cliente. UUIDs públicos, escopo por tenant, RBAC, cookies HttpOnly, CSRF, rate limits, idempotência, transações e validação de relacionamentos protegem as operações sensíveis.") },
      { title: t("AI providers", "Provedores de IA"), heading: t("Groq primary, Gemini as fallback", "Groq principal, Gemini como contingência"), text: t("The processor uses Groq with structured output and can fall back to Gemini after sanitized provider failures. The simulated local mode is always explicit; the application never silently turns an external failure into a fictional result.", "O processador usa Groq com resposta estruturada e pode recorrer ao Gemini após falhas sanitizadas do provedor. O modo local simulado é sempre explícito; a aplicação nunca transforma silenciosamente uma falha externa em resultado fictício.") },
      { title: t("Quality & operations", "Qualidade & operação"), heading: t("Tested from domain to browser", "Testado do domínio ao navegador"), text: t("PHPUnit, pytest, Vitest, Testing Library and Playwright cover rules, contracts and real user journeys. Multi-stage Docker, PostgreSQL with pgvector, health checks and free deployment on Render complete the delivery. Model availability follows free-tier limits.", "PHPUnit, pytest, Vitest, Testing Library e Playwright cobrem regras, contratos e jornadas reais. Docker multi-stage, PostgreSQL com pgvector, health checks e deploy gratuito no Render completam a entrega. A disponibilidade dos modelos segue os limites dos planos gratuitos.") },
    ],
  },
  {
    slug: 'emporio-da-musica',
    featured: true,
    name: 'Empório da Música',
    tag: t('AI agent · Technical challenge', 'Agente de IA · Desafio técnico'),
    headline: t(
      'Clave, a customer-service agent that knows when to query data and when to read the policy',
      'Clave, uma agente de atendimento que sabe quando consultar dados e quando ler a política',
    ),
    period: t('AI Engineer technical challenge', 'Desafio técnico de AI Engineer'),
    tech: ['Python', 'LangChain', 'LangGraph', 'Claude', 'FastAPI', 'MCP', 'Next.js', 'three.js'],
    repo: `${GH}/emporio-da-musica-agent`,
    live: 'https://emporio-da-musica-murex.vercel.app',
    blocks: [
      {
        label: L.context,
        text: t(
          'A fictional instrument store needed an assistant that answers in Portuguese or English, looks up catalog, promotions and orders, follows the store manual and declines anything out of scope.',
          'Uma loja fictícia de instrumentos precisava de uma assistente que responda em português ou inglês, consulte catálogo, promoções e pedidos, siga o manual da loja e recuse o que estiver fora do escopo.',
        ),
      },
      {
        label: L.approach,
        text: t(
          "The manual's rules live in tested Python code, not in the prompt. Order lookup requires a verification step to protect customer data.",
          'As regras do manual vivem em código Python testado, não no prompt. A consulta de pedidos exige verificação para proteger os dados do cliente.',
        ),
      },
      {
        label: L.system,
        text: t(
          'LangChain agent on a LangGraph graph with Claude, per-conversation memory in SQLite, FastAPI streaming the Vercel AI SDK protocol, the same tools exposed over MCP, and a Next.js chat that renders tool calls as UI.',
          'Agente LangChain em um grafo LangGraph com Claude, memória por conversa em SQLite, FastAPI transmitindo o protocolo do Vercel AI SDK, as mesmas ferramentas expostas via MCP e um chat em Next.js que renderiza tool calls como interface.',
        ),
      },
      {
        label: L.outcome,
        text: t(
          '95–100% on a 43-case evaluation (deterministic checks + LLM-as-judge), ~US$0.01 per reply, ~93% prompt cache hits, ~4 s p50 latency and 127 tests in CI.',
          '95–100% em uma avaliação com 43 casos (checagens determinísticas + LLM-as-judge), ~US$0,01 por resposta, ~93% de acerto no cache de prompt, latência p50 de ~4 s e 127 testes no CI.',
        ),
      },
    ],
    sections: [
      {
        title: t('The store', 'A loja'),
        heading: t('A website with a 3D guitar and a chat that speaks both languages', 'Um site com violão em 3D e um chat que fala os dois idiomas'),
        text: t(
          'The front end is a Next.js website for the fictional store, with a guitar and a ukulele modelled in Blender and rendered with three.js. Clave lives in a floating button and on its own page, and answers in the language the customer writes in — even on the Portuguese page.',
          'O front é um site em Next.js para a loja fictícia, com um violão e um ukulele modelados no Blender e renderizados com three.js. A Clave fica num botão flutuante e numa página própria, e responde no idioma em que o cliente escreve — mesmo na página em português.',
        ),
        image: { src: raw('emporio-da-musica-agent', 'docs/img/site.png'), caption: t('Website · English version with the 3D guitar', 'Site · Versão em inglês com o violão 3D') },
      },
      {
        title: t('Data vs. policy', 'Dados vs. política'),
        heading: t('Never state a price without calling a tool', 'Nunca informar um preço sem chamar uma ferramenta'),
        text: t(
          'The system prompt holds a "need → tool" table and one golden rule taken from the store manual itself: never state a price, stock level, promotion, instalment, deadline, opening hour or order status without calling a tool. Seven tools split the work between catalog data, payment rules, policy sections, store hours and orders.',
          'O prompt de sistema traz uma tabela "necessidade → ferramenta" e uma regra de ouro tirada do próprio manual da loja: nunca informar preço, estoque, promoção, parcelamento, prazo, horário ou status de pedido sem chamar uma ferramenta. Sete ferramentas dividem o trabalho entre dados do catálogo, regras de pagamento, seções da política, horário da loja e pedidos.',
        ),
        image: { src: raw('emporio-da-musica-agent', 'docs/img/chat-produtos.png'), caption: t('Recommendation rendered as catalog cards', 'Recomendação exibida como cards do catálogo') },
      },
      {
        title: t('Privacy', 'Privacidade'),
        heading: t('Orders only after verification', 'Pedidos só depois da verificação'),
        text: t(
          'To look up an order, Clave opens a secure form for order number plus phone or e-mail. Only a verified order can be queried, and the answer comes back as a card with status, items, tracking and return deadlines.',
          'Para consultar um pedido, a Clave abre um formulário seguro com número do pedido mais telefone ou e-mail. Só um pedido verificado pode ser consultado, e a resposta volta como um card com status, itens, rastreio e prazos de devolução.',
        ),
        image: { src: raw('emporio-da-musica-agent', 'docs/img/chat-pedido.png'), caption: t('Verified order card with tracking and deadlines', 'Card de pedido verificado com rastreio e prazos') },
      },
      {
        title: t('Architecture', 'Arquitetura'),
        heading: t('A ReAct agent without a hand-rolled loop', 'Um agente ReAct sem loop feito à mão'),
        text: t(
          'LangChain create_agent (LangGraph underneath) provides the model → tool → answer loop, a checkpointer keyed by conversation id, and middlewares for Anthropic prompt caching and a per-message call limit. FastAPI streams the Vercel AI SDK protocol; an MCP server exposes the same tools to Claude Desktop or Claude Code.',
          'O create_agent do LangChain (com LangGraph por baixo) entrega o loop modelo → ferramenta → resposta, um checkpointer por id de conversa e middlewares de prompt caching da Anthropic e de limite de chamadas por mensagem. O FastAPI transmite o protocolo do Vercel AI SDK; um servidor MCP expõe as mesmas ferramentas para o Claude Desktop ou o Claude Code.',
        ),
      },
      {
        title: t('Evaluation', 'Avaliação'),
        heading: t('Quality measured, not assumed', 'Qualidade medida, não suposta'),
        text: t(
          'An automated evaluation runs 43 cases with deterministic checks and an LLM-as-judge, passing 95–100% with scores of 4.8–5.0 out of 5. Every reply records cost, tokens, cache use and latency: about US$0.01 per reply, ~93% prompt cache hits and ~4 s at p50. 127 tests run in GitHub Actions without calling the model.',
          'Uma avaliação automática roda 43 casos com checagens determinísticas e LLM-as-judge, com 95–100% de aprovação e notas de 4,8 a 5,0. Cada resposta registra custo, tokens, uso de cache e latência: cerca de US$0,01 por resposta, ~93% de acerto no cache e ~4 s no p50. 127 testes rodam no GitHub Actions sem chamar o modelo.',
        ),
      },
      {
        title: t('Operation', 'Operação'),
        heading: t('A public demo that protects its own budget', 'Uma demo pública que protege o próprio orçamento'),
        text: t(
          'The backend runs on Render and the website on Vercel. Per-visitor limits, a daily cap and a maximum message length stop abuse: when a limit is hit, Clave answers with a fixed message without calling the model. The container runs as an unprivileged user and the metrics endpoint requires a token.',
          'O backend roda no Render e o site no Vercel. Limites por visitante, um teto diário e um tamanho máximo de mensagem evitam abuso: quando um limite é atingido, a Clave responde com uma mensagem fixa sem chamar o modelo. O container roda com usuário sem privilégios e o endpoint de métricas exige token.',
        ),
      },
    ],
  },
  {
    slug: 'bidstream',
    featured: true,
    name: 'BidStream',
    tag: t('Distributed systems', 'Sistemas distribuídos'),
    headline: t(
      'An event-driven procurement platform built the way it would run in production',
      'Uma plataforma de compras orientada a eventos, construída como rodaria em produção',
    ),
    period: t('Personal project', 'Projeto próprio'),
    tech: ['TypeScript', 'Python', 'gRPC', 'Kafka', 'PostgreSQL', 'Redis', 'Kubernetes', 'Istio', 'OpenTelemetry'],
    repo: `${GH}/bidstream`,
    blocks: [
      {
        label: L.context,
        text: t(
          'Buyers publish requests for quote, suppliers bid in real time and a pricing model estimates a fair price. The business logic is deliberately small — the platform underneath is the point.',
          'Compradores publicam cotações, fornecedores dão lances em tempo real e um modelo estima um preço justo. A regra de negócio é pequena de propósito — o foco é a plataforma por baixo.',
        ),
      },
      {
        label: L.approach,
        text: t(
          'REST at the edge, gRPC inside, one database per service, transactional outbox instead of dual writes, idempotent consumers with dead-letter queues. Decisions recorded as ADRs.',
          'REST na borda, gRPC por dentro, um banco por serviço, transactional outbox em vez de escrita dupla, consumidores idempotentes com dead-letter queues. Decisões registradas em ADRs.',
        ),
      },
      {
        label: L.system,
        text: t(
          'Fastify gateway with SSE, Python and TypeScript services over Kafka (Redpanda), three Postgres databases, Redis cache invalidated by events and OpenTelemetry tracing across HTTP, gRPC and Kafka.',
          'Gateway Fastify com SSE, serviços em Python e TypeScript sobre Kafka (Redpanda), três bancos Postgres, cache Redis invalidado por eventos e tracing com OpenTelemetry atravessando HTTP, gRPC e Kafka.',
        ),
      },
      {
        label: L.outcome,
        text: t(
          'Kill the pricing service and the app keeps working: estimates become null with a reason, health turns red, bids and awards continue.',
          'Derrube o serviço de preços e o app continua funcionando: as estimativas viram nulas com um motivo, o health fica vermelho e lances e adjudicações seguem.',
        ),
      },
    ],
    sections: [
      {
        title: t('Services', 'Serviços'),
        heading: t('Four services, two languages, one contract', 'Quatro serviços, duas linguagens, um contrato'),
        text: t(
          'edge-gateway (TypeScript, Fastify) owns the public REST API, OpenAPI, the SSE activity stream and timeouts. rfq-service (Python) handles requests for quote and awards; bid-service (TypeScript) takes bids with idempotency keys; pricing-service (Python) predicts prices with a log-log regression over ~6.5k historical awards. Versioned protos define every RPC.',
          'O edge-gateway (TypeScript, Fastify) cuida da API REST pública, do OpenAPI, do stream de atividade via SSE e dos timeouts. O rfq-service (Python) cuida de cotações e adjudicações; o bid-service (TypeScript) recebe lances com chaves de idempotência; o pricing-service (Python) prevê preços com uma regressão log-log sobre ~6,5 mil adjudicações históricas. Protos versionados definem cada RPC.',
        ),
      },
      {
        title: t('Delivery guarantees', 'Garantias de entrega'),
        heading: t('At-least-once delivery, effectively-once effects', 'Entrega ao menos uma vez, efeito exatamente uma vez'),
        text: t(
          'Each state change and its event are written in one database transaction and relayed to Kafka by an outbox — no dual writes. Consumers are idempotent and poison messages go to a dead-letter topic instead of blocking a partition. Bid submission accepts an Idempotency-Key: replays return the original bid and concurrent duplicates create exactly one.',
          'Cada mudança de estado e seu evento são gravados na mesma transação e enviados ao Kafka por um outbox — sem escrita dupla. Os consumidores são idempotentes e mensagens problemáticas vão para um tópico de dead-letter em vez de travar uma partição. O envio de lances aceita Idempotency-Key: repetições devolvem o lance original e duplicatas concorrentes criam exatamente um.',
        ),
      },
      {
        title: t('Degradation', 'Degradação'),
        heading: t('Failure is a feature you can demo', 'Falha como funcionalidade demonstrável'),
        text: t(
          'Each service keeps its own database and builds read models from events, so eventual consistency is surfaced honestly (409 rfq_syncing) instead of hidden. Stopping the pricing service turns estimates into null with a reason while bids and awards keep flowing. An award bumps a per-SKU version in Redis, invalidating every cached quantity in one INCR.',
          'Cada serviço tem seu próprio banco e monta read models a partir dos eventos, então a consistência eventual aparece de forma honesta (409 rfq_syncing) em vez de escondida. Parar o serviço de preços transforma as estimativas em nulas com um motivo, enquanto lances e adjudicações continuam. Uma adjudicação incrementa a versão do SKU no Redis, invalidando todo o cache daquele item com um único INCR.',
        ),
      },
      {
        title: t('Kubernetes & mesh', 'Kubernetes e mesh'),
        heading: t('mTLS, zero-trust policies and canary releases', 'mTLS, políticas zero-trust e releases canário'),
        text: t(
          'A local three-node kind cluster runs the app through Helm and the Gateway API, with Istio in ambient mode: mTLS on every pod-to-pod connection, an ALLOW policy per workload (Redis only from pricing-service) and an L7 policy down to the gRPC method. A weighted GRPCRoute splits traffic between pricing model v1 and v2 for canary, promote and rollback.',
          'Um cluster kind local com três nós roda o app via Helm e Gateway API, com Istio em modo ambient: mTLS em toda conexão entre pods, uma política ALLOW por workload (Redis só a partir do pricing-service) e uma política L7 até o método gRPC. Um GRPCRoute com pesos divide o tráfego entre as versões v1 e v2 do modelo de preços para canário, promoção e rollback.',
        ),
      },
      {
        title: t('Performance', 'Performance'),
        heading: t('Load tests that found real problems', 'Testes de carga que acharam problemas reais'),
        text: t(
          'SLOs are k6 thresholds. The first rounds found a connection-pool leak that locked rfq-service until restart, a throughput ceiling that turned out to be Docker’s port proxy, and tracing overhead that buried the host. The investigation and before/after numbers are documented in the repository.',
          'Os SLOs são thresholds no k6. As primeiras rodadas acharam um vazamento no pool de conexões que travava o rfq-service até reiniciar, um teto de throughput que era o proxy de portas do Docker e um overhead de tracing que sobrecarregava a máquina. A investigação e os números de antes e depois estão documentados no repositório.',
        ),
      },
      {
        title: t('Tests', 'Testes'),
        heading: t('Concurrency covered where it matters', 'Concorrência coberta onde importa'),
        text: t(
          'Unit and integration suites per service — including concurrent awards, consumer idempotency, pool behaviour under cancellation and idempotency under eight concurrent requests — plus 12 end-to-end checks through the public API, both on Docker Compose and through the Istio ingress.',
          'Suítes unitárias e de integração por serviço — incluindo adjudicações concorrentes, idempotência dos consumidores, comportamento do pool sob cancelamento e idempotência com oito requisições simultâneas — mais 12 checagens ponta a ponta pela API pública, tanto no Docker Compose quanto pelo ingress do Istio.',
        ),
      },
    ],
  },
  {
    slug: 'orbit',
    featured: true,
    name: 'Orbit',
    tag: t('Full stack product', 'Produto full stack'),
    headline: t(
      'A personal hub for tasks, habits, finance, notes, focus and workouts',
      'Uma central pessoal para tarefas, hábitos, finanças, notas, foco e treinos',
    ),
    period: t('Personal project', 'Projeto próprio'),
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'Gemini API'],
    repo: `${GH}/orbit`,
    live: 'https://orbit-huguenin.onrender.com',
    blocks: [
      {
        label: L.context,
        text: t(
          'Personal organization is scattered across apps. Orbit connects the modules through one dashboard and search, in Portuguese, English and German.',
          'A organização pessoal fica espalhada em vários apps. O Orbit conecta os módulos em um dashboard e uma busca, em português, inglês e alemão.',
        ),
      },
      {
        label: L.approach,
        text: t(
          'Money stored in cents so instalments always add up; paying a card bill never duplicates the purchase. Focus timers live on the server, so reloading never loses a session.',
          'Valores em centavos para que as parcelas sempre fechem; pagar a fatura nunca duplica a compra. O cronômetro de foco vive no servidor, então recarregar nunca perde a sessão.',
        ),
      },
      {
        label: L.system,
        text: t(
          'Modular monolith: React + TypeScript with types generated from OpenAPI, FastAPI with Pydantic, SQLAlchemy and Alembic. Optional Telegram bot uses Gemini to turn a voice note into an expense, via an inbox/outbox in PostgreSQL.',
          'Monólito modular: React + TypeScript com tipos gerados do OpenAPI, FastAPI com Pydantic, SQLAlchemy e Alembic. Um bot opcional no Telegram usa Gemini para transformar um áudio em despesa, via inbox/outbox no PostgreSQL.',
        ),
      },
      {
        label: L.outcome,
        text: t(
          'Live with a per-visitor 24-hour demo; tested with pytest on real PostgreSQL, Vitest and Playwright on desktop and mobile; deployed on Render and Neon.',
          'Publicado com demo de 24 horas por visitante; testado com pytest em PostgreSQL real, Vitest e Playwright em desktop e mobile; deploy no Render e Neon.',
        ),
      },
    ],
    sections: [
      { title: t("Product", "Produto"), heading: t("Everyday life, connected", "O dia a dia, conectado"), text: t("Orbit brings personal organization into a responsive application available in Portuguese, English and German. A dashboard and search connect the modules, supported by business rules, authentication and operations behind the interface.", "O Orbit reúne organização pessoal em uma aplicação responsiva, disponível em português, inglês e alemão. Dashboard e busca conectam os módulos; a experiência vai da interface às regras de negócio, autenticação e operação."), image: { src: "https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/02-dashboard.png", caption: t("Dashboard · Real capture with fictional data", "Dashboard · Captura real com dados fictícios") } },
      { title: t("Organization", "Organização"), heading: t("Tasks and habits in context", "Tarefas e hábitos com contexto"), text: t("Lists, priorities, deadlines, tags and checklists organize tasks. Habits combine goals and frequency with quantity tracking, a calendar, adherence and streaks to monitor consistency.", "Listas, prioridades, prazos, tags e checklists organizam as entregas. Hábitos combinam metas e frequência com registros de quantidade, calendário, aderência e sequências para acompanhar a consistência."), image: { src: "https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/03-tasks.png", caption: t("Tasks · Actual screenshot with fictional data", "Tarefas · Captura real com dados fictícios") } },
      { title: t("Finances", "Finanças"), heading: t("More than tracking expenses", "Muito além de registrar gastos"), text: t("Accounts, categories, income, expenses, transfers and recurring entries. Cards support installments, billing cycles, due dates, partial payments and refunds. Integer-cent amounts preserve installment totals; paying a bill does not count the purchase twice.", "Contas, categorias, receitas, despesas, transferências e recorrências. Cartões incluem parcelas, fechamento, vencimento, pagamentos parciais e estornos. Valores em centavos preservam a soma das parcelas; pagar uma fatura não duplica a despesa da compra."), image: { src: "https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/05-finance.png", caption: t("Finances · Real capture with fictional data", "Finanças · Captura real com dados fictícios") } },
      { title: t("Notes & Journal", "Notas & Diário"), heading: t("Space to think and write", "Espaço para pensar e registrar"), text: t("Folders and dated entries share a rich-text editor with lists, checklists, code and links. Autosave, optimistic versioning and serialized writes help protect edits. Favorites, search and a trash folder complete the workflow.", "Pastas e registros por data convivem em um editor rico com listas, checklists, código e links. Salvamento automático, versões otimistas e gravações serializadas ajudam a proteger as edições. Favoritos, busca e lixeira completam a organização."), image: { src: "https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/10-journal.png", caption: t("Notes & Journal · Real capture with fictional data", "Notas & Diário · Captura real com dados fictícios") } },
      { title: t("Focus Garden", "Jardim de Foco"), heading: t("Focus that takes shape", "Concentração que ganha forma"), text: t("Focus sessions support pausing, resuming and breaks. Each completion adds a tree to the garden, with four visual growth stages and ten models in non-repeating cycles. The deadline lives on the server, so navigation or a reload does not lose the session.", "Sessões de foco permitem pausas, retomadas e intervalos. Cada conclusão adiciona uma árvore ao jardim, com quatro estágios visuais e dez modelos em ciclos sem repetição. O prazo fica no servidor: navegar ou recarregar não perde a sessão."), image: { src: "https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/11-focus.png", caption: t("Focus Garden · Real capture with fictional data", "Jardim de Foco · Captura real com dados fictícios") } },
      { title: t("Workouts", "Treinos"), heading: t("From routine to training history", "Da rotina ao histórico"), text: t("Reusable routines, resumable sessions and tracking for weight, repetitions and RPE/RIR. History, volume and personal records track progress. Snapshots preserve completed workouts even when the original routine changes.", "Rotinas reutilizáveis, sessões retomáveis e registro de carga, repetições e RPE/RIR. Histórico, volume e recordes acompanham a evolução. Snapshots preservam os treinos realizados mesmo quando a rotina original é editada."), image: { src: "https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/08-workouts.png", caption: t("Workouts · Real capture with fictional data", "Treinos · Captura real com dados fictícios") } },
      { title: t("Applied AI", "IA aplicada"), heading: t("From voice to financial entry", "Da voz ao lançamento financeiro"), text: t("For personal accounts, the optional Telegram bot receives voice messages and uses Gemini to interpret expenses. Missing details are clarified by text before confirmation. PostgreSQL inbox/outbox tables and an embedded worker support processing. The demo simulates this flow: no real audio is sent to the provider.", "Na conta pessoal, o bot opcional do Telegram recebe áudio e usa Gemini para interpretar a despesa. Informações ausentes são esclarecidas por texto antes da confirmação. Inbox/outbox no PostgreSQL e um worker embutido sustentam o processamento. Na demonstração, esse fluxo é simulado: nenhum áudio real é enviado ao provedor."), image: { src: "https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/14-telegram.png", caption: t("Telegram · demo simulation · Real capture with fictional data", "Telegram · simulação da demo · Captura real com dados fictícios") } },
      { title: t("Architecture", "Arquitetura"), heading: t("A modular monolith with clear contracts", "Um monólito modular, contratos claros"), text: t("React and TypeScript consume a FastAPI API built with Pydantic, SQLAlchemy and Alembic. Frontend types are generated from OpenAPI. The SPA and API share a Docker image and origin; PostgreSQL centralizes state. The core runs without Gemini, Telegram, Redis or microservices.", "React e TypeScript consomem uma API FastAPI com Pydantic, SQLAlchemy e Alembic. Tipos do frontend são gerados pelo OpenAPI. A SPA e a API compartilham uma imagem Docker e a mesma origem; PostgreSQL centraliza o estado. O núcleo funciona sem Gemini, Telegram, Redis ou microsserviços.") },
      { title: t("Security", "Segurança"), heading: t("Separate identities, protected data", "Identidades separadas, dados protegidos"), text: t("Each demo visitor receives a separate dataset and temporary token. The API scopes access by owner, and composite keys protect database relationships. Personal accounts use scrypt hashing, HttpOnly cookies, CSRF protection and attempt limits. Sensitive operations use idempotency, transactions and concurrency control.", "Cada visitante da demo recebe seu próprio conjunto de dados e um token temporário. A API aplica escopo por proprietário e o banco protege relações com chaves compostas. Contas pessoais usam hash scrypt, cookie HttpOnly, CSRF e limite de tentativas. Operações sensíveis usam idempotência, transações e controle de concorrência.") },
      { title: t("Demo", "Demonstração"), heading: t("Try the real product", "Experimente de verdade"), text: t("The demo requires no registration and lets visitors create, edit and persist fictional records. Each session lasts 24 hours and can be reset without affecting others. The first load may take a while as hosting wakes up. Telegram remains explicitly simulated.", "A demo dispensa cadastro e permite criar, editar e persistir registros fictícios. Cada sessão dura 24 horas e pode ser reiniciada sem afetar outros visitantes. A primeira abertura pode demorar enquanto a hospedagem desperta. O Telegram permanece explicitamente simulado.") },
      { title: t("Quality & operations", "Qualidade & operação"), heading: t("From testing to deployment", "Do teste ao deploy"), text: t("pytest with real PostgreSQL, Vitest/Testing Library and Playwright cover domain logic, components and desktop/mobile journeys. Ruff, mypy and TypeScript add static checks. Multi-stage Docker, migrations, health checks, structured logs and backups support operations. The deployment uses Render and Neon; Terraform/AWS is a separate lab.", "pytest com PostgreSQL real, Vitest/Testing Library e Playwright cobrem domínio, componentes e jornadas desktop/mobile. Ruff, mypy e TypeScript complementam a validação. Docker multi-stage, migrações, health checks, logs estruturados e rotinas de backup apoiam a operação. A publicação usa Render e Neon; Terraform/AWS é um laboratório separado.") },
    ],
  },
  {
    slug: 'agency-hub',
    featured: true,
    name: 'Agency Hub',
    tag: t('SaaS · Multi-tenant', 'SaaS · Multi-tenant'),
    headline: t(
      'Projects, tasks, hours, invoices and boards for agencies in one workspace',
      'Projetos, tarefas, horas, faturas e boards para agências em um só workspace',
    ),
    period: t('Personal project', 'Projeto próprio'),
    tech: ['PHP 8.4', 'Laravel 13', 'MySQL 8.4', 'React 19', 'Sanctum', 'Docker', 'Render'],
    repo: `${GH}/agency-hub`,
    live: 'https://agency-hub-bf8l.onrender.com',
    blocks: [
      {
        label: L.context,
        text: t(
          'Agencies juggle projects, time tracking and billing across tools. Agency Hub keeps the operational loop — plan, execute, log hours, invoice — inside one tenant.',
          'Agências dividem projetos, controle de horas e cobrança entre várias ferramentas. O Agency Hub mantém o ciclo operacional — planejar, executar, lançar horas, faturar — dentro de um tenant.',
        ),
      },
      {
        label: L.approach,
        text: t(
          'The authenticated identity determines the tenant and the API validates every sensitive relation. Roles and explicit permissions gate each operation.',
          'A identidade autenticada determina o tenant e a API valida cada relação sensível. Funções e permissões explícitas controlam cada operação.',
        ),
      },
      {
        label: L.system,
        text: t(
          'React 19 + Vite SPA and a Laravel 13 / PHP 8.4 REST API in one Docker image and origin; MySQL 8.4 over validated TLS; Sanctum auth; Kanban, timers, Excalidraw boards and notifications.',
          'SPA em React 19 + Vite e API REST em Laravel 13 / PHP 8.4 na mesma imagem Docker e origem; MySQL 8.4 com TLS validado; auth com Sanctum; Kanban, cronômetros, boards com Excalidraw e notificações.',
        ),
      },
      {
        label: L.outcome,
        text: t(
          'Each demo visitor gets their own tenant and user for 24 hours, with only a token hash stored. PHPUnit covers auth, RBAC and tenant isolation.',
          'Cada visitante da demo recebe tenant e usuário próprios por 24 horas, e só o hash do token é salvo. PHPUnit cobre autenticação, RBAC e isolamento entre tenants.',
        ),
      },
    ],
    sections: [
      { title: t("Demo", "Demonstração"), heading: t("Enter without registering", "Entre sem cadastro"), text: t("The entry point separates personal accounts from the temporary experience. Each visitor starts a 24-hour isolated demo with their own fictional data and can explore the product without sharing a public account.", "A entrada separa contas pessoais da experiência temporária. Cada visitante inicia uma demonstração isolada por 24 horas, com dados fictícios próprios e liberdade para explorar o produto sem compartilhar uma conta pública."), image: { src: "https://github.com/Hugueninfer/agency-hub/raw/main/docs/screenshots/login.jpg", caption: t("Sign in · Online demo without registration", "Entrada · Demonstração online sem cadastro") } },
      { title: t("Overview", "Visão geral"), heading: t("Operations in one dashboard", "A operação no mesmo dashboard"), text: t("Project, task, board, monthly hours and recent activity indicators turn the workspace into a quick view of the agency. The dashboard uses the same data that powers the rest of the application.", "Indicadores de projetos, tarefas, boards, horas do mês e atividade recente transformam o workspace em uma visão rápida da agência. O dashboard nasce dos mesmos dados que alimentam o restante da aplicação."), image: { src: "https://github.com/Hugueninfer/agency-hub/raw/main/docs/screenshots/dashboard.jpg", caption: t("Dashboard · Real capture with fictional data", "Dashboard · Captura real com dados fictícios") } },
      { title: t("Projects", "Projetos"), heading: t("Context for every initiative", "Contexto para cada iniciativa"), text: t("The directory brings together active projects, owners and operational information. Creating, editing, archiving and deleting keeps the work portfolio organized within the team tenant.", "O diretório reúne projetos ativos, responsáveis e informações operacionais. Criar, editar, arquivar e excluir mantém o portfólio de trabalho organizado dentro do tenant da equipe."), image: { src: "https://github.com/Hugueninfer/agency-hub/raw/main/docs/screenshots/projects.jpg", caption: t("Projects · Actual screenshot with fictional data", "Projetos · Captura real com dados fictícios") } },
      { title: t("Kanban", "Kanban"), heading: t("From plan to delivery", "Do plano à entrega"), text: t("Tasks move through stages and can be filtered by project, owner or column. Each card brings together assignments, subtasks, comments and the context needed for execution.", "Tarefas avançam por etapas e podem ser filtradas por projeto, responsável ou coluna. Cada card concentra atribuições, subtarefas, comentários e o contexto necessário para a execução."), image: { src: "https://github.com/Hugueninfer/agency-hub/raw/main/docs/screenshots/tasks.jpg", caption: t("Tasks · Actual screenshot with fictional data", "Tarefas · Captura real com dados fictícios") } },
      { title: t("Time & invoicing", "Tempo & faturamento"), heading: t("Track the work, follow the billing", "Trabalho registrado, cobrança acompanhada"), text: t("The team can start timers or add hours manually, filter records and export reports. Invoices move from draft to sent and paid without leaving the same operational flow.", "O time pode iniciar cronômetros ou lançar horas manualmente, filtrar registros e exportar relatórios. Faturas passam por rascunho, envio e pagamento sem sair do mesmo fluxo operacional.") },
      { title: t("Collaboration", "Colaboração"), heading: t("Boards, comments and notifications", "Boards, comentários e notificações"), text: t("Excalidraw boards support visual work, while comments, subtasks and notifications keep decisions and changes close to the deliverables.", "Boards com Excalidraw apoiam o trabalho visual, enquanto comentários, subtarefas e notificações mantêm decisões e mudanças próximas das entregas.") },
      { title: t("Architecture", "Arquitetura"), heading: t("A modular monolith, one origin", "Um monólito modular, uma única origem"), text: t("React 19 and Vite deliver the interface; Laravel 13 and PHP 8.4 expose the REST API. The SPA and API share the same Docker image and origin, while MySQL 8.4 centralizes persistence with migrations and multi-tenant scope.", "React 19 e Vite entregam a interface; Laravel 13 e PHP 8.4 expõem a API REST. SPA e API compartilham a mesma imagem Docker e origem, enquanto o MySQL 8.4 centraliza a persistência com migrações e escopo multi-tenant.") },
      { title: t("Security", "Segurança"), heading: t("Tenant and permissions enforced on the server", "Tenant e permissões aplicados no servidor"), text: t("The authenticated identity determines the tenant, and the API validates every sensitive relationship. Sanctum protects personal accounts; explicit roles and permissions control each operation. The MySQL connection uses TLS with a certificate validated at runtime.", "A identidade autenticada determina o tenant, e a API valida todas as relações sensíveis. Sanctum protege contas pessoais; funções e permissões explícitas controlam cada operação. A conexão com o MySQL usa TLS e certificado validado em runtime.") },
      { title: t("24-hour demo", "Demonstração 24h"), heading: t("Real product data, temporary isolation", "Dados reais de produto, isolamento temporário"), text: t("When entering the demo, the application creates an exclusive tenant and user, loads the default fixture and stores only the token hash. Expiration is absolute: activity does not renew the 24 hours, and expired sessions are removed without affecting other accounts.", "Ao entrar na demo, a aplicação cria um tenant e um usuário exclusivos, carrega a fixture padrão e salva apenas o hash do token. A validade é absoluta: atividade não renova as 24 horas, e sessões vencidas são removidas sem afetar outras contas.") },
      { title: t("Quality & operations", "Qualidade & operação"), heading: t("Tested from domain to deployment", "Testado do domínio ao deploy"), text: t("PHPUnit covers authentication, RBAC, multi-tenant isolation and product rules; Vitest and Testing Library validate the interface. Multi-stage Docker, a health check and infrastructure validators support the free Render deployment with managed MySQL on Aiven.", "PHPUnit cobre autenticação, RBAC, isolamento multi-tenant e regras do produto; Vitest e Testing Library validam a interface. Docker multi-stage, health check e validadores de infraestrutura sustentam a publicação gratuita no Render com MySQL gerenciado no Aiven.") },
    ],
  },
  {
    slug: 'ledgerlight',
    featured: true,
    name: 'Ledgerlight',
    tag: t('In development', 'Em desenvolvimento'),
    headline: t(
      'AI you can verify — accounts payable where humans review only the uncertain fields',
      'IA verificável — contas a pagar em que humanos revisam só os campos incertos',
    ),
    period: t('Personal project · in progress', 'Projeto próprio · em andamento'),
    tech: ['PHP 8.4', 'Laravel', 'Nuxt', 'Vue 3', 'TypeScript', 'MySQL 8.4', 'Redis', 'Groq', 'Docker'],
    repo: `${GH}/ledgerlight`,
    blocks: [
      {
        label: L.context,
        text: t(
          'Most teams can demo AI; few can prove what it produced. Invoice processing is a perfect test: every number matters and every mistake costs money.',
          'Muitos times conseguem fazer demo de IA; poucos conseguem provar o que ela produziu. Processar faturas é o teste ideal: todo número importa e todo erro custa dinheiro.',
        ),
      },
      {
        label: L.approach,
        text: t(
          'An LLM extracts each field with a confidence score; only the uncertain ones go to a human. Every value is traceable to its source, cost and whoever changed it.',
          'Um LLM extrai cada campo com um score de confiança; só os incertos vão para um humano. Todo valor é rastreável até a fonte, o custo e quem o alterou.',
        ),
      },
      {
        label: L.system,
        text: t(
          'Laravel API and Nuxt app behind Caddy on one origin, MySQL and Redis in Docker Compose. Exports go to a deliberately unreliable accounting API, handled with retries, idempotency keys, a circuit breaker and a dead-letter queue.',
          'API Laravel e app Nuxt atrás do Caddy na mesma origem, MySQL e Redis em Docker Compose. As exportações vão para uma API contábil propositalmente instável, tratada com retries, chaves de idempotência, circuit breaker e dead-letter queue.',
        ),
      },
      {
        label: L.outcome,
        text: t(
          'Under construction in public, stage by stage: tenant isolation proven by tests, an evals dashboard and an extraction receipt for every invoice.',
          'Em construção em público, etapa por etapa: isolamento de tenant provado por testes, um painel de avaliações e um recibo de extração para cada fatura.',
        ),
      },
    ],
    sections: [
      {
        title: t('The pitch', 'A proposta'),
        heading: t('"AI you can verify"', '"IA verificável"'),
        text: t(
          'Companies upload vendor invoices as PDFs. An LLM extracts the data with a confidence score per field, people review only what is uncertain, and approved invoices are exported to an accounting system. Every number the model produced is traceable to its source, its confidence, its cost and whoever changed it.',
          'Empresas enviam faturas de fornecedores em PDF. Um LLM extrai os dados com um score de confiança por campo, pessoas revisam só o que é incerto e as faturas aprovadas são exportadas para um sistema contábil. Todo número que o modelo produziu é rastreável até a fonte, a confiança, o custo e quem o alterou.',
        ),
      },
      {
        title: t('Extraction', 'Extração'),
        heading: t('Confidence is a signal, not a promise', 'Confiança é um sinal, não uma promessa'),
        text: t(
          'Extraction runs on Groq, within its free plan. The model’s self-reported confidence is never presented as calibrated truth: an evals dashboard backed by a labeled synthetic dataset shows how the pipeline actually performs, and each invoice carries an extraction receipt with source, confidence and cost.',
          'A extração roda no Groq dentro do plano gratuito. A confiança declarada pelo modelo nunca é apresentada como verdade calibrada: um painel de avaliações com um dataset sintético rotulado mostra o desempenho real do pipeline, e cada fatura tem um recibo de extração com fonte, confiança e custo.',
        ),
      },
      {
        title: t('Integration', 'Integração'),
        heading: t('A client that survives a hostile API', 'Um cliente que sobrevive a uma API hostil'),
        text: t(
          'Approved invoices will go to a simulated accounting API with a chaos mode. The client is designed to handle it with retries using backoff and jitter, idempotency keys, a circuit breaker and a dead-letter queue — so a recruiter can flip chaos on and watch the system recover.',
          'As faturas aprovadas vão para uma API contábil simulada com modo caos. O cliente está sendo projetado para lidar com ela usando retries com backoff e jitter, chaves de idempotência, circuit breaker e dead-letter queue — então quem avalia pode ligar o caos e ver o sistema se recuperar.',
        ),
      },
      {
        title: t('Tenancy', 'Tenancy'),
        heading: t('Isolation designed into the database', 'Isolamento pensado desde o banco'),
        text: t(
          'The plan: multi-tenancy enforced at the database level and proven by tests, and demo accounts built so two visitors at once never collide and one person cannot burn the free AI quota.',
          'O plano: multi-tenancy garantido no nível do banco e provado por testes, e contas de demonstração pensadas para que dois visitantes ao mesmo tempo nunca colidam e uma pessoa sozinha não esgote a cota gratuita de IA.',
        ),
      },
      {
        title: t('Process', 'Processo'),
        heading: t('Specs before code, one stage at a time', 'Especificação antes do código, uma etapa por vez'),
        text: t(
          'The repository starts with a design spec and a roadmap. Each stage lands as its own branch and pull request with small, conventional commits, and CI runs from day one. The goal is a public URL that costs $0 per month to run.',
          'O repositório começa com uma especificação de design e um roadmap. Cada etapa entra em sua própria branch e pull request, com commits pequenos e convencionais, e o CI roda desde o primeiro dia. A meta é uma URL pública com custo de US$0 por mês.',
        ),
      },
    ],
  },
  {
    slug: 'smart-waste-ai',
    featured: false,
    name: 'Smart Waste AI',
    tag: t('Computer vision', 'Visão computacional'),
    headline: t(
      'A waste classifier that runs entirely in the browser, from photo or webcam',
      'Um classificador de resíduos que roda inteiro no navegador, por foto ou webcam',
    ),
    period: t('Personal project', 'Projeto próprio'),
    tech: ['React', 'TypeScript', 'Vite', 'TensorFlow.js', 'Teachable Machine', 'Tailwind CSS', 'Recharts'],
    repo: `${GH}/smart-waste-ai`,
    live: 'https://hugueninfer.github.io/smart-waste-ai/',
    blocks: [
      { label: L.problem, text: t('Turn a public Kaggle dataset into a practical waste classifier anyone can try from a photo or webcam.', 'Transformar um dataset público do Kaggle em um classificador de resíduos que qualquer pessoa testa com foto ou webcam.') },
      { label: L.system, text: t('Six classes trained in Teachable Machine and exported to TensorFlow.js; the model runs in a service isolated from the UI.', 'Seis classes treinadas no Teachable Machine e exportadas para TensorFlow.js; o modelo roda em um serviço isolado da interface.') },
      { label: L.design, text: t('Shows every probability, a confidence level and disposal guidance, plus a local history and dashboard.', 'Mostra todas as probabilidades, o nível de confiança e orientações de descarte, além de histórico local e dashboard.') },
      { label: L.outcome, text: t('Images never leave the browser; only metadata is stored locally.', 'As imagens nunca saem do navegador; só metadados ficam salvos localmente.') },
    ],
    sections: [
      { title: t("Context", "Contexto"), heading: t("From coursework to product", "Do aprendizado ao produto"), text: t("I started my postgraduate degree in Software Engineering for Applied AI and used this project to turn the first lessons into an application that works end to end.", "Comecei a pós-graduação em Engenharia de Software em IA Aplicada e usei este projeto para transformar os primeiros aprendizados em uma aplicação funcionando de ponta a ponta."), image: { src: "https://github.com/Hugueninfer/smart-waste-ai/raw/main/docs/screenshots/dashboard.png", caption: t("Dashboard · Metrics and local history", "Dashboard · Métricas e histórico local") } },
      { title: t("Data", "Dados"), heading: t("A real dataset as the starting point", "Um dataset real como ponto de partida"), text: t("The images came from a public waste-classification dataset on Kaggle, organized into six classes: cardboard, glass, metal, paper, plastic and trash.", "As imagens vieram de um dataset público de classificação de resíduos no Kaggle. A seleção foi organizada em seis classes: cardboard, glass, metal, paper, plastic e trash.") },
      { title: t("Model", "Modelo"), heading: t("Trained in Teachable Machine", "Treinado no Teachable Machine"), text: t("The model was trained and exported to TensorFlow.js with Google Teachable Machine. The app loads model.json, metadata.json and weights.bin directly in the browser.", "O modelo foi treinado e exportado como TensorFlow.js pelo Google Teachable Machine. A aplicação carrega model.json, metadata.json e weights.bin diretamente no navegador."), image: { src: "https://github.com/Hugueninfer/smart-waste-ai/raw/main/docs/screenshots/scanner.png", caption: t("Scanner · Upload, webcam and analysis", "Scanner · Upload, webcam e análise") } },
      { title: t("Experience", "Experiência"), heading: t("More than a prediction", "Mais do que uma previsão"), text: t("Results show every probability, grade the confidence level and give disposal guidance. A local history and a dashboard turn each analysis into context.", "O resultado mostra todas as probabilidades, classifica o nível de confiança e apresenta informações de descarte. Um histórico local e um dashboard transformam cada análise em contexto.") },
      { title: t("Architecture", "Arquitetura"), heading: t("Isolated AI, simple interface", "IA isolada, interface simples"), text: t("React and TypeScript organize routes, hooks and components. A separate service keeps the TensorFlow.js logic out of the UI; LocalStorage persists only metadata, never the images.", "React e TypeScript organizam as rotas, hooks e componentes. Um serviço separado mantém a lógica TensorFlow.js fora da interface; LocalStorage persiste apenas metadados, nunca as imagens.") },
      { title: t("Privacy", "Privacidade"), heading: t("Processing in the browser", "Processamento no próprio navegador"), text: t("Images stay in memory during analysis and are never sent to a backend. The project also ships a mock model for development and a real flow for the exported model.", "As imagens ficam em memória durante a análise e não são enviadas para um backend. O projeto também possui um mock model para desenvolvimento e um fluxo real para o modelo exportado.") },
    ],
  },
  {
    slug: 'cineflix',
    featured: false,
    name: 'CineFlix',
    tag: t('Recommendation', 'Recomendação'),
    headline: t(
      'A film recommender that explains every suggestion',
      'Um recomendador de filmes que explica cada sugestão',
    ),
    period: t('Postgraduate project', 'Projeto da pós-graduação'),
    tech: ['JavaScript', 'TensorFlow.js', 'Web Workers', 'Bootstrap', 'i18n'],
    repo: `${GH}/cineflix-recomendador`,
    live: 'https://recomendador-de-filmes-rho.vercel.app',
    blocks: [
      { label: L.problem, text: t('Recommend films and explain why — not just rank them.', 'Recomendar filmes e explicar o porquê — não só ordená-los.') },
      { label: L.system, text: t('A 128→64→32→1 TensorFlow.js network trained in a Web Worker over weighted vectors of genre, rating, year and audience age.', 'Uma rede TensorFlow.js 128→64→32→1 treinada em um Web Worker sobre vetores ponderados de gênero, nota, ano e idade do público.') },
      { label: L.design, text: t('An info button compares each pick with your history; an item-item signal shows how other users influenced it.', 'Um botão de informação compara cada sugestão com seu histórico; um sinal item-item mostra como outros usuários influenciaram.') },
      { label: L.outcome, text: t('Bilingual PT/EN without reloads, deployed on Vercel on every push.', 'Bilíngue PT/EN sem recarregar a página, com deploy no Vercel a cada push.') },
    ],
    sections: [
      { title: t("Context", "Contexto"), heading: t("From a course module to my own project", "Do módulo ao projeto próprio"), text: t("Final project for module 01 of the Software Engineering for Applied AI postgraduate program (UNIPDS). It turns an e-commerce recommendation template into a complete film recommender, with 51 films and 15 fictional users in local data.", "Projeto de conclusão do módulo 01 da pós em Engenharia de Software em IA Aplicada (UNIPDS). Transforma o template de recomendação de e-commerce em um recomendador de filmes completo, com 51 filmes e 15 usuários fictícios em dados locais."), image: { src: "https://github.com/Hugueninfer/cineflix-recomendador/raw/main/demo.png", caption: t("Recommender · Real capture with fictional data", "Recomendador · Captura real com dados fictícios") } },
      { title: t("Recommendation", "Recomendação"), heading: t("A neural network trained in the browser", "Rede neural treinada no navegador"), text: t("Each film becomes a weighted vector (genre 0.4, rating 0.3, year 0.2, average audience age 0.1). A 128→64→32→1 TensorFlow.js network trains in a Web Worker for 100 epochs and ranks the catalog by compatibility score without freezing the UI.", "Cada filme vira um vetor ponderado (gênero 0.4, nota 0.3, ano 0.2 e idade média do público 0.1). Uma rede TensorFlow.js 128→64→32→1 treina em um Web Worker com 100 épocas e ordena o catálogo por score de compatibilidade, sem travar a interface.") },
      { title: t("Explainability", "Explicabilidade"), heading: t("Understand why each film was suggested", "Entenda o porquê de cada sugestão"), text: t("The ℹ button opens a modal comparing the film with your history: shared genre, rating and era, plus the network score. A first step into explainable AI (XAI).", "O botão ℹ abre um modal comparando o filme com a base: gênero, nota e época em comum com o seu histórico, além do score da rede. É um primeiro passo de IA explicável (XAI)."), image: { src: "https://github.com/Hugueninfer/cineflix-recomendador/raw/main/demo-en.jpg", caption: t("Modal in English · Explanation compared with your history", "Modal em inglês · Explicação comparada com o histórico") } },
      { title: t("Collaborative", "Colaborativo"), heading: t("How other profiles weigh in", "A influência dos outros perfis"), text: t("An item-item signal counts, across the whole base, how many users who watched a film from your history also watched the recommendation — e.g. \"2 of 2 users who watched The Matrix also watched Back to the Future\".", "O item-item conta na base inteira quantos usuários que assistiram a um filme do seu histórico também assistiram ao recomendado — ex.: \"2 de 2 usuários que assistiram Matrix também assistiram De Volta para o Futuro\".") },
      { title: t("Bilingual", "Bilíngue"), heading: t("Portuguese and English", "Português e inglês"), text: t("The PT/EN switch translates the interface, catalog, recommendations and explanations without reloading, using i18n dictionaries and dynamic re-rendering.", "O seletor PT/EN traduz interface, catálogo, recomendações e explicações sem recarregar a página, via dicionários i18n e re-renderização dinâmica.") },
      { title: t("Architecture", "Arquitetura"), heading: t("MVC + event bus + worker", "MVC + event bus + worker"), text: t("Views, controllers and services decoupled through CustomEvents; data in JSON/sessionStorage; the neural network isolated in a Web Worker. Deployed on Vercel on every push.", "Views, Controllers e Services desacoplados por CustomEvents; dados em JSON/sessionStorage; e a rede neural isolada em um Web Worker. Publicado no Vercel com deploy automático a cada push.") },
    ],
  },
  {
    slug: 'jus',
    featured: false,
    name: 'Jus',
    tag: t('Design system', 'Design system'),
    headline: t(
      'A design system proven inside a fictional electronic court-case panel',
      'Um design system posto à prova em um painel fictício de processo eletrônico',
    ),
    period: t('Personal project', 'Projeto próprio'),
    tech: ['PHP 8.4', 'Symfony 7.4', 'Twig', 'Web Components', 'TypeScript', 'Doctrine', 'Vitest'],
    repo: `${GH}/Jus`,
    blocks: [
      { label: L.problem, text: t('Show a design system working inside a realistic product: case search, case page and PDF filing.', 'Mostrar um design system funcionando em um produto realista: busca, página do processo e peticionamento em PDF.') },
      { label: L.system, text: t('Symfony 7.4 with Twig components and three framework-free Web Components, on Doctrine and SQLite.', 'Symfony 7.4 com componentes Twig e três Web Components sem biblioteca, sobre Doctrine e SQLite.') },
      { label: L.design, text: t('Light and dark themes decided on the server — no flash — and pages that work without JavaScript.', 'Temas claro e escuro decididos no servidor — sem piscar — e páginas que funcionam sem JavaScript.') },
      { label: L.outcome, text: t('PHPStan at max level, 100% line coverage on the domain and WCAG 2.2 AA audits in both themes.', 'PHPStan no nível máximo, 100% de cobertura de linhas no domínio e auditorias WCAG 2.2 AA nos dois temas.') },
    ],
    sections: [
      {
        title: t('Product', 'Produto'),
        heading: t('A realistic product to test the components', 'Um produto realista para testar os componentes'),
        text: t(
          'Jus is a fictional electronic court-case panel: search cases, open a case page with parties, deadlines and history, and file PDF documents. Every name, ID and case number is generated for the demo, and no real system’s brand is used.',
          'O Jus é um painel fictício de processo eletrônico: buscar processos, abrir a página do processo com partes, prazos e andamento, e peticionar documentos em PDF. Todo nome, documento e número de processo é gerado para a demonstração, e nenhuma marca de sistema real é usada.',
        ),
        image: { src: raw('Jus', 'docs/screenshots/processo-desktop.png'), caption: t('Case page · light theme', 'Página do processo · tema claro') },
      },
      {
        title: t('Themes', 'Temas'),
        heading: t('Light and dark, decided on the server', 'Claro e escuro, decididos no servidor'),
        text: t(
          'Design tokens hold a pair of values per role (page, surface, text, primary, status tones) emitted as CSS custom properties. The theme choice — system, light or dark — lives in a cookie, so the server renders each page in the right theme without a flash, and the selector is a plain form that works without JavaScript.',
          'Os design tokens têm um par de valores por papel (página, superfície, texto, primária, tons de status) emitidos como CSS custom properties. A escolha do tema — sistema, claro ou escuro — fica num cookie, então o servidor entrega cada página no tema certo sem piscar, e o seletor é um formulário comum que funciona sem JavaScript.',
        ),
        image: { src: raw('Jus', 'docs/screenshots/busca-desktop-escuro.png'), caption: t('Case search · dark theme', 'Busca de processos · tema escuro') },
      },
      {
        title: t('Domain rules', 'Regras de domínio'),
        heading: t('Business rules written once and tested hard', 'Regras de negócio escritas uma vez e bem testadas'),
        text: t(
          'The CNJ case-number check digit is implemented in both PHP and TypeScript. Deadlines are counted in business days, excluding weekends, holidays and the court recess. Confidential cases are filtered in the query itself and in a Symfony Voter, with a parity test between the two. Each screen runs a fixed number of queries, checked by functional tests.',
          'O dígito verificador do número CNJ é implementado em PHP e em TypeScript. Os prazos são contados em dias úteis, excluindo fins de semana, feriados e o recesso forense. Processos sigilosos são filtrados na própria consulta e em um Voter do Symfony, com teste de paridade entre os dois. Cada tela roda um número fixo de consultas, conferido por testes funcionais.',
        ),
      },
      {
        title: t('Components', 'Componentes'),
        heading: t('Progressive enhancement, no framework', 'Aprimoramento progressivo, sem framework'),
        text: t(
          'Three pure Custom Elements — case-number input, timeline filter and upload — enhance native elements in place. PDF uploads are validated by file content, not by name or declared type, with limits defined in a single place. A component catalog documents every piece.',
          'Três Custom Elements puros — campo de número do processo, filtro da linha do tempo e upload — aprimoram os elementos nativos no lugar. Os PDFs enviados são validados pelo conteúdo do arquivo, não pelo nome nem pelo tipo declarado, com limites definidos num só lugar. Um catálogo de componentes documenta cada peça.',
        ),
        image: { src: raw('Jus', 'docs/screenshots/catalogo-desktop.png'), caption: t('Design system catalog', 'Catálogo do design system') },
      },
      {
        title: t('Quality', 'Qualidade'),
        heading: t('Accessibility measured, not assumed', 'Acessibilidade medida, não suposta'),
        text: t(
          'One command runs what the pipeline runs: PHP-CS-Fixer, Symfony and Doctrine lints, PHPStan at max level with no baseline, PHPUnit with 100% line coverage on the domain, ESLint, Stylelint, tsc and Vitest in browser mode with axe-core. A page audit checks WCAG 2.0–2.2 A and AA in both themes and the absence of horizontal scroll on desktop and mobile. Eight ADRs record the decisions.',
          'Um comando roda o mesmo que o pipeline: PHP-CS-Fixer, lints do Symfony e do Doctrine, PHPStan no nível máximo sem baseline, PHPUnit com 100% de cobertura de linhas no domínio, ESLint, Stylelint, tsc e Vitest em modo browser com axe-core. Uma auditoria de páginas confere WCAG 2.0–2.2 A e AA nos dois temas e a ausência de rolagem horizontal no desktop e no celular. Oito ADRs registram as decisões.',
        ),
      },
    ],
  },
  {
    slug: 'amazon-price-monitor',
    featured: false,
    name: 'Amazon Price Monitor',
    tag: t('Automation', 'Automação'),
    headline: t(
      'Price tracking with history and alerts that do not repeat',
      'Monitoramento de preços com histórico e alertas que não se repetem',
    ),
    period: t('Personal project', 'Projeto próprio'),
    tech: ['Python', 'SQLite', 'SMTP', 'Telegram Bot API'],
    repo: `${GH}/amazon-price-monitor`,
    blocks: [
      { label: L.problem, text: t('Know when a product reaches a target price without checking the page every day.', 'Saber quando um produto chega ao preço-alvo sem abrir a página todo dia.') },
      { label: L.system, text: t('A scheduled Python job reads product URLs, stores price history in SQLite and compares it to each target.', 'Um job em Python agendado lê as URLs, grava o histórico de preços em SQLite e compara com cada alvo.') },
      { label: L.design, text: t('Alerts by Gmail and Telegram, with logic that does not repeat an alert while the price stays below target.', 'Alertas por Gmail e Telegram, com lógica que não repete o alerta enquanto o preço continuar abaixo do alvo.') },
      { label: L.outcome, text: t('A small, dependable tool configured entirely through a JSON file and environment variables.', 'Uma ferramenta pequena e confiável, configurada só por um arquivo JSON e variáveis de ambiente.') },
    ],
    sections: [
      {
        title: t('How it works', 'Como funciona'),
        heading: t('A list of products and a target price for each', 'Uma lista de produtos e um preço-alvo para cada'),
        text: t(
          'Products live in a JSON file with a short name, the product URL and a target price. The first run checks immediately; after that the script respects a configurable interval between checks.',
          'Os produtos ficam num arquivo JSON com um nome curto, a URL do produto e o preço-alvo. A primeira execução verifica na hora; depois o script respeita um intervalo configurável entre as verificações.',
        ),
      },
      {
        title: t('History', 'Histórico'),
        heading: t('Every price recorded in SQLite', 'Todo preço registrado em SQLite'),
        text: t(
          'Each reading is stored in a local SQLite database created automatically on first run, so trends can be checked later without any external service.',
          'Cada leitura é gravada num banco SQLite local criado automaticamente na primeira execução, para consultar a evolução depois sem nenhum serviço externo.',
        ),
      },
      {
        title: t('Alerts', 'Alertas'),
        heading: t('Gmail and Telegram, without spam', 'Gmail e Telegram, sem spam'),
        text: t(
          'When a price is equal to or below the target, the script sends an e-mail through Gmail SMTP with an app password and, optionally, a Telegram message. It remembers what it already sent and does not repeat the alert while the price stays below the target.',
          'Quando o preço fica igual ou abaixo do alvo, o script envia um e-mail pelo SMTP do Gmail com senha de app e, opcionalmente, uma mensagem no Telegram. Ele lembra o que já enviou e não repete o alerta enquanto o preço continuar abaixo do alvo.',
        ),
      },
      {
        title: t('Limits', 'Limites'),
        heading: t('Honest about what can break', 'Honesto sobre o que pode quebrar'),
        text: t(
          'Amazon may show a CAPTCHA or block automated requests. The script rotates the User-Agent and waits between requests, and the README states plainly that continuous operation is not guaranteed and that intervals should stay reasonable.',
          'A Amazon pode exibir CAPTCHA ou bloquear requisições automatizadas. O script alterna o User-Agent e espera entre as requisições, e o README deixa claro que o funcionamento contínuo não é garantido e que os intervalos devem ser razoáveis.',
        ),
      },
    ],
  },
];
