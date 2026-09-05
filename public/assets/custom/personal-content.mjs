import {stackCatalog} from './stack-catalog.mjs';
export const whatsapp = 'https://wa.me/5524998770906';
export const experience = [
  {name:'Before',role:'Engenheiro de Software',span:'07/2024 — atual',note:'Arquitetura multi-tenant em PHP e Laravel, APIs, Redis e performance. Redução de 70% no tempo de onboarding de clientes.'},
  {name:'Formula X — B2B Growth',role:'Desenvolvedor Web',span:'08/2023 — atual',note:'Projetos internacionais, automações e integrações. Economia média de 20 horas mensais e melhoria de aproximadamente 60% no PageSpeed.'},
  {name:'SENAI Soluções Digitais',role:'Engenheiro de Software Full Stack',span:'12/2022 — 05/2024',note:'APIs Laravel e otimização de PostgreSQL. Buscas e filtros 50% mais rápidos para sistemas com milhares de usuários.'},
  {name:'Sertras',role:'Engenheiro de Software Full Stack',span:'03/2022 — 12/2022',note:'Plataforma de avaliação de fornecedores e integrações governamentais. Redução de aproximadamente 40% na análise manual.'},
  {name:'Dev4B',role:'Desenvolvedor Trainee',span:'03/2021 — 03/2022',note:'Sistemas de gestão com PHP, Laravel e MySQL, automação de processos, manutenção e publicação em Ubuntu.'},
];
export const studies = [
  {title:'Engenharia de Software em IA Aplicada',school:'UNIPDS · Pós-graduação',date:'2026 — em andamento',text:'Especialização que conecta minha experiência em backend à construção de aplicações com inteligência artificial. A formação abrange LLMs, RAG, embeddings, agentes, MCP, avaliação e observabilidade — com foco em integrar modelos a sistemas com qualidade, segurança e contexto.'},
  {title:'Bacharelado em Sistemas de Informação',school:'UniFOA',date:'2021 — 2024',text:'Formação em sistemas de informação, em Volta Redonda, RJ.'},
  {title:'Técnico em Informática',school:'Escola Técnica Pandiá Calógeras',date:'2018 — 2020',text:'Base técnica em informática e desenvolvimento de software.'},
];
export const projects = [
  {id:'orbit',name:'Orbit',kind:'Full stack · Produto · IA aplicada',stack:['Python','FastAPI','PostgreSQL','React','TypeScript','Docker','Gemini API'],summary:'Uma central pessoal para organizar tarefas, hábitos, finanças, notas, foco e treinos. Produto full stack com persistência real e integração opcional de IA para registrar despesas por áudio.',repo:'https://github.com/Hugueninfer/orbit',live:'https://orbit-huguenin.onrender.com',status:'Projeto próprio',sections:[
    ['Produto','O dia a dia, conectado','O Orbit reúne organização pessoal em uma aplicação responsiva, disponível em português, inglês e alemão. Dashboard e busca conectam os módulos; a experiência vai da interface às regras de negócio, autenticação e operação.','https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/02-dashboard.png','Dashboard · Captura real com dados fictícios'],
    ['Organização','Tarefas e hábitos com contexto','Listas, prioridades, prazos, tags e checklists organizam as entregas. Hábitos combinam metas e frequência com registros de quantidade, calendário, aderência e sequências para acompanhar a consistência.','https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/03-tasks.png','Tarefas · Captura real com dados fictícios'],
    ['Finanças','Muito além de registrar gastos','Contas, categorias, receitas, despesas, transferências e recorrências. Cartões incluem parcelas, fechamento, vencimento, pagamentos parciais e estornos. Valores em centavos preservam a soma das parcelas; pagar uma fatura não duplica a despesa da compra.','https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/05-finance.png','Finanças · Captura real com dados fictícios'],
    ['Notas & Diário','Espaço para pensar e registrar','Pastas e registros por data convivem em um editor rico com listas, checklists, código e links. Salvamento automático, versões otimistas e gravações serializadas ajudam a proteger as edições. Favoritos, busca e lixeira completam a organização.','https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/10-journal.png','Notas & Diário · Captura real com dados fictícios'],
    ['Jardim de Foco','Concentração que ganha forma','Sessões de foco permitem pausas, retomadas e intervalos. Cada conclusão adiciona uma árvore ao jardim, com quatro estágios visuais e dez modelos em ciclos sem repetição. O prazo fica no servidor: navegar ou recarregar não perde a sessão.','https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/11-focus.png','Jardim de Foco · Captura real com dados fictícios'],
    ['Treinos','Da rotina ao histórico','Rotinas reutilizáveis, sessões retomáveis e registro de carga, repetições e RPE/RIR. Histórico, volume e recordes acompanham a evolução. Snapshots preservam os treinos realizados mesmo quando a rotina original é editada.','https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/08-workouts.png','Treinos · Captura real com dados fictícios'],
    ['IA aplicada','Da voz ao lançamento financeiro','Na conta pessoal, o bot opcional do Telegram recebe áudio e usa Gemini para interpretar a despesa. Informações ausentes são esclarecidas por texto antes da confirmação. Inbox/outbox no PostgreSQL e um worker embutido sustentam o processamento. Na demonstração, esse fluxo é simulado: nenhum áudio real é enviado ao provedor.','https://github.com/Hugueninfer/orbit/raw/main/docs/screenshots/showcase/14-telegram.png','Telegram · simulação da demo · Captura real com dados fictícios'],
    ['Arquitetura','Um monólito modular, contratos claros','React e TypeScript consomem uma API FastAPI com Pydantic, SQLAlchemy e Alembic. Tipos do frontend são gerados pelo OpenAPI. A SPA e a API compartilham uma imagem Docker e a mesma origem; PostgreSQL centraliza o estado. O núcleo funciona sem Gemini, Telegram, Redis ou microsserviços.'],
    ['Segurança','Identidades separadas, dados protegidos','Cada visitante da demo recebe seu próprio conjunto de dados e um token temporário. A API aplica escopo por proprietário e o banco protege relações com chaves compostas. Contas pessoais usam hash scrypt, cookie HttpOnly, CSRF e limite de tentativas. Operações sensíveis usam idempotência, transações e controle de concorrência.'],
    ['Demonstração','Experimente de verdade','A demo dispensa cadastro e permite criar, editar e persistir registros fictícios. Cada sessão dura 24 horas e pode ser reiniciada sem afetar outros visitantes. A primeira abertura pode demorar enquanto a hospedagem desperta. O Telegram permanece explicitamente simulado.'],
    ['Qualidade & operação','Do teste ao deploy','pytest com PostgreSQL real, Vitest/Testing Library e Playwright cobrem domínio, componentes e jornadas desktop/mobile. Ruff, mypy e TypeScript complementam a validação. Docker multi-stage, migrações, health checks, logs estruturados e rotinas de backup apoiam a operação. A publicação usa Render e Neon; Terraform/AWS é um laboratório separado.'],
  ]},
  {id:'workflow',name:'Workflow',kind:'Full stack · Automação',stack:['PHP 8.3','Laravel','React 19','Sanctum','Docker'],summary:'Plataforma de gestão que reúne projetos, tarefas, quadros, faturamento e controle de tempo, com permissões e organização multi-tenant.',repo:'https://github.com/Hugueninfer/workflow',live:'',status:'Repositório privado',sections:[
    ['Produto','Organização em um só lugar','Projetos e tarefas com subtarefas, comentários e anexos. Quadros, faturamento e controle de tempo integram a organização do trabalho em uma única plataforma.'],
    ['Arquitetura','Backend com limites claros','API Laravel organizada em Controller, Service, Repository e Model. Autenticação Sanctum com cookies e CSRF, middleware de tenant e permissões por operação. Frontend React com Vite, Tailwind, arrastar e soltar e Excalidraw.'],
    ['Automação','Integração com Fathom','Integração via webhook com Fathom para conectar eventos de reuniões ao fluxo de gestão de tarefas. Uma aplicação de automação sobre a arquitetura do produto.'],
  ]},
];
export const photos = [
  {src:'/media/pedro/portrait.jpeg',alt:'Retrato de Pedro Huguenin de óculos e camiseta preta',label:'Pedro Huguenin'},
  {src:'/media/pedro/couple.jpeg',alt:'Pedro com sua esposa em um auditório',label:'Minha família'},
  {src:'/media/pedro/graduation.jpeg',alt:'Pedro na formatura, acompanhado de amigos',label:'Formação'},
  {src:'/media/pedro/maltese.jpeg',alt:'Cachorro maltês branco com laço rosa',label:'Companhia de todos os dias'},
  {src:'/media/personal/pedro-mar.jpeg',alt:'Pedro nas pedras à beira-mar',label:'Fora do código'},
  {src:'/media/personal/acampamento.jpeg',alt:'Barracas de acampamento entre pinheiros',label:'Ao ar livre'},
  {src:'/media/personal/computador.jpeg',alt:'Interior de um computador com placa GeForce RTX',label:'Tecnologia de perto'},
];
export function buildPersonalContent() {
  const expertise = {
    expertiseHeading:'Minha bancada',
    expertiseTitle:'Bancada interativa — software e IA aplicada',
    expertiseSub:'Explore arquitetura, IA, interfaces e produto nesta bancada interativa. Os fluxos são demonstrações visuais.',
    expertiseTabs:[
      {name:'Backend',group:'Arquitetura',year:'Experiência',note:'APIs, camadas e decisões de engenharia.'},
      {name:'IA aplicada',group:'Especialização',year:'Em andamento',note:'Entrada, modelo, validação e persistência: a engenharia por trás de uma aplicação com IA.'},
      {name:'Interfaces',group:'Full stack',year:'Componentes',note:'Da estrutura da aplicação a uma interface consistente.'},
      {name:'Produto',group:'Projetos',year:'Na prática',note:'Orbit e Workflow: contexto, implementação e evolução.'},
    ],
  };
  const companies = experience.map(e=>({...e,logo:'',tag:e.span,note:`${e.span} · ${e.note}`}));
  const projectData = Object.fromEntries(projects.map(p=>[p.id,{name:p.name,company:'Pedro Huguenin',mark:'petal',year:'2026',type:p.kind,tagline:p.summary,intro:p.summary,meta:[['Projeto',p.status],['Tecnologias',p.stack.join(' · ')]],live:p.live,metrics:[],sections:p.sections,story:p.sections,results:[],quote:null,gallery:[],showcase:[]}]));
  const content = {
    PERSONAL:true, PROJECTS:projectData,PROJECT_ORDER:projects.map(p=>p.id),WORK_FEED:[],WORK:[],AI_WORK:[],AI_TOOLS:[
      {id:'php',name:'PHP',ext:'svg',role:'Backend'},
      {id:'laravel',name:'Laravel',ext:'svg',role:'APIs e sistemas'},
      {id:'python',name:'Python',ext:'svg',role:'FastAPI e integrações'},
      {id:'react',name:'React',ext:'svg',role:'Interfaces'},
      {id:'postgresql',name:'PostgreSQL',ext:'svg',role:'Dados'},
      {id:'docker',name:'Docker',ext:'svg',role:'Ambientes e entrega'},
      {id:'github',name:'GitHub',ext:'svg',role:'Código e CI/CD'},
      {id:'tailwind',name:'Tailwind',ext:'svg',role:'Interfaces'},
    ],SCREENSHOTS:[],MOSAIC:[],
    LIFE_SHOTS:photos.map(p=>p.src),MOSAIC_LEAD:photos[0].src,COMPANIES:companies,STREET_BRANDS:experience.map(e=>({name:e.name,role:e.role})),STREET_AHEAD:'Próximos projetos',
    NAV_LABELS:{home:'Início',work:'Projetos',ai:'IA aplicada',about:'Sobre',contact:'Contato'},NAV_ITEMS:[{label:'Início',href:'/'},{label:'Projetos',href:'/work'},{label:'IA aplicada',href:'/ai'},{label:'Sobre',href:'/about'}],NAV_CTA:{label:'Contato',href:'/contact'},
    SITE:{email:'hugueninpedro@gmail.com',availability:'Software com foco em IA aplicada',location:'Rio de Janeiro · Brasil',disciplines:'Backend · Full stack · IA aplicada',responseTime:'assim que possível',socials:[{label:'WhatsApp',url:whatsapp},{label:'LinkedIn',url:'https://www.linkedin.com/in/pedro-huguenin'},{label:'GitHub',url:'https://github.com/Hugueninfer'}]},
    STATS:[{v:'5+',l:'Anos em desenvolvimento de software'},{v:'70%',l:'Menos tempo de onboarding · Before'},{v:'50%',l:'Buscas mais rápidas · SENAI'},{v:'20h',l:'Economia mensal média · Formula X'}],
    FOCUS:[
      {title:'Backend & arquitetura',yr:'5+',unit:' anos',desc:'PHP, Laravel, APIs REST e sistemas multi-tenant. Minha base profissional em engenharia de software.'},
      {title:'Aplicações full stack',yr:'',unit:' Na prática',desc:'Interfaces, dados e integrações trabalhando juntos. Orbit e Workflow conectam essas camadas em projetos próprios.'},
      {title:'Inteligência artificial',yr:'',unit:' Especialização em andamento',desc:'Transição para IA aplicada com base em engenharia de software e pós-graduação em andamento, com foco em LLMs, RAG e agentes.'},
    ],
    COPY:{
      home:{heroTitle:['Engenharia de software.','Meu próximo passo: *IA aplicada.*'],heroSub:'Sou Pedro Huguenin, engenheiro de software com mais de 5 anos de experiência em backend, APIs e sistemas multi-tenant. Estou direcionando minha carreira para IA aplicada, conectando essa base à construção de aplicações inteligentes, com foco em arquitetura, segurança e qualidade.',heroCta:'Conheça os projetos',heroCtaHref:'/work',heroCta2:'Minha trajetória',heroCta2Href:'/about',focusTitle:['Backend sólido.','*Novas possibilidades com IA.*'],focusSub:'Arquitetura, integrações e qualidade como base para aplicações inteligentes.',statsTitle:['Experiência que gera','*resultado.*'],statsSub:'Melhorias em desempenho, automação e operação nos projetos em que atuei.',statsCta:'Veja minha trajetória',statsCtaHref:'/about',companiesTitle:['Onde construí *experiência*'],companiesNote:'Do primeiro sistema de gestão a arquiteturas multi-tenant e projetos internacionais.',toolsTitle:['Tecnologia com *propósito.*'],toolsSub:'Tecnologias que conectam arquitetura, interfaces, dados e entrega.'},
      work:{heroEyebrow:'Pedro Huguenin · Projetos',railTitle:['Código, produto','*e engenharia na prática.*'],railIntro:'Orbit e Workflow conectam backend, interfaces e integrações para resolver problemas de organização, automação e processamento de dados.',railCtaShots:'Ver os projetos',railCtaShotsHref:'#projetos',railCtaAi:'Meu foco em IA',railCtaAiHref:'/ai',railCardCta:'Conhecer projeto',ndaNames:[],galleryHeading:[],galleryIntro:'',spotlightTitle:['Software e *automação.*'],spotlightDesc:'Da arquitetura à experiência de uso.'},
      ai:{heroTitle:['Do backend','*à IA aplicada.*'],heroSub:'Minha transição para IA aplicada é uma evolução de mais de 5 anos construindo software. Conecto experiência em backend e integrações a projetos com IA, com especialização em Engenharia de Software em IA Aplicada em andamento.',heroCta:'Ver aplicações',heroCtaHref:'#ai-work',heroCta2:'Vamos conversar',heroCta2Href:'/contact',loopTitle:['Meu foco em','*IA aplicada.*'],loopSub:'Áreas da minha especialização em andamento, orientadas à integração entre modelos, dados e aplicações.',loopSteps:[{k:'LLMs',t:'Modelos e integração',d:'APIs generativas, engenharia de prompts e function calling para conectar modelos a aplicações.'},{k:'Conhecimento',t:'RAG e embeddings',d:'Recuperação de contexto, bancos vetoriais e avaliação de respostas baseadas em documentos.'},{k:'Agentes',t:'Fluxos com ferramentas',d:'MCP, LangChain, LangGraph, memória e supervisão humana em fluxos de agentes.'},{k:'Engenharia',t:'Qualidade e operação',d:'Observabilidade, avaliação, segurança e governança ao longo do ciclo de vida da aplicação.'}],workTitle:['Integrações que viram','*funcionalidade.*'],workSub:'No Orbit, a integração com Gemini interpreta despesas por áudio. No Workflow, webhooks conectam eventos externos à gestão de tarefas.',stackTitle:['Minha base','*de engenharia.*'],stackSub:'Da API à interface, com atenção à qualidade e à operação.'},
      about:{heroLead:'Sou Pedro Huguenin Ferreira, engenheiro de software no Rio de Janeiro. Atuo com PHP, Laravel, APIs e sistemas multi-tenant. Minha próxima etapa conecta essa trajetória à *engenharia de software com IA aplicada.*',statement:['Experiência em backend.','Visão de produto.','Uma nova direção:','*IA aplicada.*'],statementBody:'Minha carreira foi construída na entrega e evolução de sistemas. Estou direcionando essa experiência para IA aplicada, com projetos próprios e pós-graduação em andamento, mantendo arquitetura, segurança e qualidade no centro das decisões.',statementEyebrow:'Minha trajetória',credTitle:['Experiência em software.','*Evolução com propósito.*'],credMeta:'2021 — atual · Rio de Janeiro, Brasil',credLead:'APIs REST, integrações, bancos de dados e aplicações full stack. Meu foco é entender o problema, construir uma solução consistente e cuidar do que acontece depois da entrega.',companiesTitle:['Experiência *profissional*'],companiesNote:'Experiência em desenvolvimento, integrações e evolução de sistemas.'},
      contact:{heroTitle:['Vamos *conversar?*'],heroSub:'Vamos conversar sobre software, automação e IA aplicada. Estou em transição para essa área e busco oportunidades em que minha experiência em backend faça a diferença. Entre em contato pelo WhatsApp ou por e-mail.'},
      notFound:{heroTitle:['Página *não encontrada*'],heroSub:'Este endereço não existe no portfólio. Volte ao início para conhecer meus projetos.',bubble:'Não encontrei esta página.',ctaLabel:'Voltar ao início'},
      privacy:{heroTitle:['Privacidade'],heroSub:'Informações sobre esta versão local do portfólio.',updated:'Atualizado em 4 de setembro de 2026',contactLabel:'Dúvidas',sections:[{h:'Nesta versão local',p:['Não há cadastro ou formulário. A coleta de analytics da referência está desativada. Textos, fontes e imagens são servidos localmente.','O navegador pode guardar preferências de aparência. Links para WhatsApp, GitHub e LinkedIn levam a serviços externos, sujeitos às suas próprias políticas.']}]},
    },
  };
  Object.assign(content.COPY.home, expertise);
  content.AI_TOOLS = stackCatalog;
  content.COPY.privacy.sections[0].p[0] = 'Não há cadastro ou formulário. A coleta de analytics da referência está desativada. Textos, fontes, fotos pessoais e ícones SVG são servidos localmente. As capturas do Orbit são carregadas do repositório público no GitHub, que recebe as requisições dessas imagens.';
  content.COPY.home.toolsSub = 'Backend, interfaces, dados, testes e infraestrutura: uma stack voltada à construção e evolução de aplicações.';
  return content;
}
