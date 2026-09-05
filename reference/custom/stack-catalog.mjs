// Local Simple Icons SVGs with custom fallbacks; see icons/simple-icons-sources.json.
// Technology names identify tools,
// not affiliation or endorsement. No external image requests.
const technologies = [
  ['modelcontextprotocol','MCP','Especialização em andamento'],['langchain','LangChain','Especialização em andamento'],['langgraph','LangGraph','Especialização em andamento'],
  ['pydantic','Pydantic','Backend'],['tanstack','TanStack Query','Frontend'],['reacthookform','React Hook Form','Frontend'],
  ['livewire','Livewire','Frontend'],['testinglibrary','Testing Library','Testes'],['dockercompose','Docker Compose','Infraestrutura'],
  ['openapiinitiative','OpenAPI','Backend'],['render','Render','Infraestrutura'],['neon','Neon','Dados'],
  ['php','PHP','Backend'],['laravel','Laravel','Backend'],['python','Python','Backend'],['fastapi','FastAPI','Backend'],
  ['mysql','MySQL','Dados'],['postgresql','PostgreSQL','Dados'],['redis','Redis','Cache'],['sqlalchemy','SQLAlchemy','Dados'],['rabbitmq','RabbitMQ','Mensageria'],
  ['javascript','JavaScript','Frontend'],['typescript','TypeScript','Frontend'],['react','React','Frontend'],['vuejs','Vue.js','Frontend'],['vitejs','Vite','Frontend'],
  ['html5','HTML5','Frontend'],['css3','CSS3','Frontend'],['bootstrap','Bootstrap','Frontend'],['tailwindcss','Tailwind CSS','Frontend'],
  ['pytest','pytest','Testes'],['vitest','Vitest','Testes'],['playwright','Playwright','Testes'],
  ['git','Git','Versionamento'],['github','GitHub','Código'],['githubactions','GitHub Actions','CI/CD'],
  ['docker','Docker','Infraestrutura'],['linux','Linux','Infraestrutura'],['terraform','Terraform','Infraestrutura'],['amazonwebservices','AWS','Fundamentos','original-wordmark'],
];
export const stackCatalog = technologies.map(([id,name,role,variant='original'])=>({
  id,name,role,ext:'svg',iconUrl:`/assets/custom/icons/${id==='dockercompose'?'docker':id==='css3'?'css':id}.svg`,
}));
export const additionalStack = 'Outras tecnologias presentes na minha experiência e nos projetos: Pydantic, Alembic, TanStack Query, React Hook Form, Livewire, Testing Library, Docker Compose, OpenAPI, Render e Neon.';
export const aiStudies = 'Foco da especialização em IA aplicada, em andamento: LLMs, RAG, embeddings, bancos vetoriais, MCP, agentes, LangChain e LangGraph.';
