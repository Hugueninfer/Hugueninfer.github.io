import test from 'node:test';
import assert from 'node:assert/strict';
import {buildPersonalContent} from '../reference/custom/personal-content.mjs';
test('published tool grid includes CV technologies with local theme icons',()=>{
  const tools=buildPersonalContent().AI_TOOLS;
  for(const name of ['FastAPI','MySQL','Redis','TypeScript','Vue.js','pytest','Terraform','RabbitMQ','Pydantic','TanStack Query','React Hook Form','Livewire','Testing Library','Docker Compose','OpenAPI','Render','Neon']){
    const tool=tools.find(t=>t.name===name);
    assert.ok(tool,`missing CV technology: ${name}`);
    assert.match(tool.iconUrl,/^\/assets\/custom\/icons\/[^/]+\.svg$/);
  }
  assert.equal(new Set(tools.map(t=>t.id)).size,tools.length);
  for(const name of ['MCP','LangChain','LangGraph']) {
    const tool=tools.find(t=>t.name===name);
    assert.ok(tool, `missing AI technology in shared grid: ${name}`);
    assert.equal(tool.role,'Especialização em andamento');
  }
});
