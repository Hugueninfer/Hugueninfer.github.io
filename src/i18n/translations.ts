export type Language = 'en' | 'pt';

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      education: 'Education',
      resume: 'Resume',
      hireMe: 'Hire Me',
    },
    hero: {
      available: 'Available for new projects',
      subtitle:
        'Back End Developer with over 5 years of experience creating robust and scalable solutions using PHP, Laravel, and modern architectures.',
      viewProjects: 'View Projects',
      contact: 'Contact Me',
    },
    about: {
      title: 'About Me',
      portraitAlt: 'Photo of Pedro Huguenin',
      p1: 'Innovative Backend Developer with over 5 years of experience creating and optimizing robust and scalable solutions, with solid experience in fullstack projects.',
      p2: 'Specialized in developing efficient architectures and implementing high-quality code that drives performance and user experience. Consistently delivers excellence in software and possesses advanced skills in analysis and problem-solving.',
    },
    skills: {
      badge: 'Expertise',
      title: 'Technical',
      titleHighlight: 'Skills',
      description:
        "A comprehensive suite of tools and technologies I've mastered over 5+ years of software development.",
      categories: [
        {
          title: 'Back End',
          description:
            'PHP, Python, Laravel, MySQL, PostgreSQL, RESTful APIs, OOP, SOLID, Clean Code, DDD, TDD, MVC, RabbitMQ.',
        },
        {
          title: 'Front End',
          description: 'JavaScript, React, Vue, Tailwind CSS, HTML5, CSS3, jQuery, Bootstrap.',
        },
        {
          title: 'DevOps & Tools',
          description: 'Docker, Git, CI/CD, Linux (Ubuntu), Redis, FTP, WordPress (Elementor/Webflow).',
        },
        {
          title: 'CMS & E-commerce',
          description: 'WordPress, Shopify, Webflow, Hubspot.',
        },
        {
          title: 'Security & Quality',
          description: 'OWASP Top 10, Unit Testing, Design Patterns, QA Integration.',
        },
        {
          title: 'Emerging Tech',
          description: 'AI Integrations, Automation Workflows, Multi-tenant Systems.',
        },
      ],
    },
    projects: {
      badge: 'Portfolio',
      title: 'Featured Projects',
      items: [
        {
          title: 'Amazon Price Monitor',
          category: 'Backend / Python',
          description:
            'Price tracker for Amazon products with SQLite history and alerts via Gmail and Telegram. Notifies when the price reaches or drops below the target value, with smart logic to avoid duplicate alerts.',
          tags: ['Python', 'SQLite', 'Gmail', 'Telegram', 'Scraping'],
          url: 'https://github.com/Hugueninfer/amazon-price-monitor',
        },
      ],
    },
    experience: {
      badge: 'Journey',
      title: 'Professional Experience',
      items: [
        {
          role: 'Back End Developer',
          company: '(Before)',
          location: 'Campo Grande, Brazil',
          period: '07/2024 - Present',
          description:
            'Designed and developed scalable RESTful APIs using PHP Laravel and Docker. Implemented Redis cache layers and optimized MySQL queries. Developed multi-tenant systems, streamlining critical biometric workflows with a 70% reduction in client onboarding time.',
        },
        {
          role: 'Freelance Web Developer',
          company: '(Formula X)',
          location: 'Copenhagen, Denmark',
          period: '08/2023 - Present',
          description:
            'Executed WordPress site redesigns, achieving a 60% increase in PageSpeed. Developed plugins and AI integrations on Elementor and Webflow, automating workflows that reduced client operational effort by 20 hours/month.',
        },
        {
          role: 'Back End Developer',
          company: '(SENAI Soluções Digitais)',
          location: 'Santa Catarina, Brazil',
          period: '12/2022 - 05/2024',
          description:
            'Optimized job search and filtering flows, reducing database query response time by 50%. Developed and maintained Laravel APIs, ensuring data integrity in high-volume Postgres environments.',
        },
        {
          role: 'Fullstack Developer',
          company: '(Sertras Gestão de Fornecedores Ltda.)',
          location: 'Rio de Janeiro, Brazil',
          period: '03/2022 - 12/2022',
          description:
            'Developed supplier performance evaluation system with automated feedback collection. Managed web infrastructure on WordPress and implemented complex integrations with government APIs.',
        },
        {
          role: 'Trainee Developer',
          company: '(Dev4B)',
          location: 'Rio de Janeiro, Brazil',
          period: '03/2021 - 03/2022',
          description:
            'Implemented inventory control systems with PHP Laravel and MySQL, cutting operational management time by 40%. Built high-conversion landing pages and managed production deployments via FTP on Linux Ubuntu.',
        },
      ],
    },
    education: {
      educationTitle: 'Education',
      certificationsTitle: 'Certifications',
      languagesTitle: 'Languages',
      items: [
        {
          degree: 'Information Systems',
          school: 'UniFOA - University Center of Volta Redonda',
          period: '2021 - 2024',
          description:
            'Data structures & algorithms, database management (SQL/NoSQL), software engineering, OOP, operating systems, distributed systems, computer networks, artificial intelligence...',
        },
        {
          degree: 'Computer Technician',
          school: 'Pandiá Calógeras Technical School',
          period: '2018 - 2020',
          description: 'Programming logic, hardware, networks, web (HTML/CSS/JS), databases, OS, security...',
        },
      ],
      certifications: [
        { name: 'SCRUM Fundamentals', url: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-PedroHugueinn-1017705.pdf' },
        { name: 'OWASP Top 10 Security', url: 'https://www.udemy.com/certificate/UC-a49d2bf1-7b8b-4e26-a1d0-2e8cba8a16c3/' },
        { name: 'Laravel MVC Application', url: 'https://cursos.alura.com.br/certificate/60f14daf-2d50-4f4d-bf50-601c58b17a54' },
        { name: 'React with TypeScript', url: 'https://cursos.alura.com.br/certificate/562fb700-ec61-40a0-a6d0-267d4466d3ba' },
        { name: 'RabbitMQ In Practice', url: 'https://www.udemy.com/certificate/UC-85968aa2-118c-43c2-95a1-6ed5ce5dfd9c/' },
      ],
      languages: [
        { name: 'Portuguese', level: 'Native', width: 'w-full' },
        { name: 'English', level: 'Intermediate - B2', width: 'w-2/3' },
      ],
    },
    resume: {
      badge: 'Resume',
      title: 'Download CV',
      description: 'Available in English and Portuguese.',
      downloadEn: 'Download EN',
      downloadPt: 'Download PT-BR',
    },
    footer: {
      description:
        'Back End Developer specialized in building robust, scalable solutions. Let\'s build something great together.',
      copyright: '© 2026 Pedro Huguenin. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
    },
  },
  pt: {
    nav: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      education: 'Educação',
      resume: 'Currículo',
      hireMe: 'Contrate-me',
    },
    hero: {
      available: 'Disponível para novos projetos',
      subtitle:
        'Desenvolvedor Back End com mais de 5 anos de experiência criando soluções robustas e escaláveis com PHP, Laravel e arquiteturas modernas.',
      viewProjects: 'Ver Projetos',
      contact: 'Fale Comigo',
    },
    about: {
      title: 'Sobre Mim',
      portraitAlt: 'Foto de Pedro Huguenin',
      p1: 'Desenvolvedor Backend inovador com mais de 5 anos de experiência na criação e otimização de soluções robustas e escaláveis, com sólida atuação em projetos fullstack.',
      p2: 'Especializado no desenvolvimento de arquiteturas eficientes e na implementação de código de alta qualidade que impulsiona a performance e a experiência do usuário. Consistentemente entrega software de excelência e possui habilidades avançadas em análise e resolução de problemas.',
    },
    skills: {
      badge: 'Especialidades',
      title: 'Habilidades',
      titleHighlight: 'Técnicas',
      description:
        'Um conjunto abrangente de ferramentas e tecnologias que desenvolvi ao longo de mais de 5 anos de desenvolvimento de software.',
      categories: [
        {
          title: 'Back End',
          description:
            'PHP, Python, Laravel, MySQL, PostgreSQL, APIs RESTful, POO, SOLID, Clean Code, DDD, TDD, MVC, RabbitMQ.',
        },
        {
          title: 'Front End',
          description: 'JavaScript, React, Vue, Tailwind CSS, HTML5, CSS3, jQuery, Bootstrap.',
        },
        {
          title: 'DevOps & Ferramentas',
          description: 'Docker, Git, CI/CD, Linux (Ubuntu), Redis, FTP, WordPress (Elementor/Webflow).',
        },
        {
          title: 'CMS & E-commerce',
          description: 'WordPress, Shopify, Webflow, Hubspot.',
        },
        {
          title: 'Segurança & Qualidade',
          description: 'OWASP Top 10, Testes Unitários, Design Patterns, Integração com QA.',
        },
        {
          title: 'Tecnologias Emergentes',
          description: 'Integrações com IA, Automação de Workflows, Sistemas Multi-tenant.',
        },
      ],
    },
    projects: {
      badge: 'Portfólio',
      title: 'Projetos em Destaque',
      items: [
        {
          title: 'Amazon Price Monitor',
          category: 'Backend / Python',
          description:
            'Rastreador de preços de produtos na Amazon com histórico em SQLite e alertas via Gmail e Telegram. Notifica quando o preço atinge ou fica abaixo do valor alvo, com lógica inteligente para evitar alertas duplicados.',
          tags: ['Python', 'SQLite', 'Gmail', 'Telegram', 'Scraping'],
          url: 'https://github.com/Hugueninfer/amazon-price-monitor',
        },
      ],
    },
    experience: {
      badge: 'Trajetória',
      title: 'Experiência Profissional',
      items: [
        {
          role: 'Desenvolvedor Back End',
          company: '(Before)',
          location: 'Campo Grande, Brasil',
          period: '07/2024 - Atualmente',
          description:
            'Projetei e desenvolvi APIs RESTful escaláveis usando PHP Laravel e Docker. Implementei camadas de cache com Redis e otimizei consultas MySQL. Desenvolvi sistemas multi-tenant, dinamizando fluxos críticos de biometria com redução de 70% no tempo de onboarding.',
        },
        {
          role: 'Desenvolvedor Web Freelancer',
          company: '(Formula X)',
          location: 'Copenhague, Dinamarca',
          period: '08/2023 - Atualmente',
          description:
            'Executei redesigns de sites WordPress, alcançando 60% de aumento no PageSpeed. Desenvolvi plugins e integrações com IA no Elementor e Webflow, automatizando workflows que reduziram 20 horas/mês de esforço operacional.',
        },
        {
          role: 'Desenvolvedor Back End',
          company: '(SENAI Soluções Digitais)',
          location: 'Santa Catarina, Brasil',
          period: '12/2022 - 05/2024',
          description:
            'Otimizei fluxos de busca e filtragem de vagas, reduzindo em 50% o tempo de resposta do banco de dados. Desenvolvi e mantive APIs Laravel, garantindo integridade de dados em ambientes Postgres de alta volumetria.',
        },
        {
          role: 'Desenvolvedor Fullstack',
          company: '(Sertras Gestão de Fornecedores Ltda.)',
          location: 'Rio de Janeiro, Brasil',
          period: '03/2022 - 12/2022',
          description:
            'Desenvolvi o sistema de avaliação de fornecedores com coleta automatizada de feedbacks. Gerenciei a infraestrutura web no WordPress e implementei integrações complexas com APIs governamentais.',
        },
        {
          role: 'Desenvolvedor Trainee',
          company: '(Dev4B)',
          location: 'Rio de Janeiro, Brasil',
          period: '03/2021 - 03/2022',
          description:
            'Implementei sistemas de controle de estoque com PHP Laravel e MySQL, reduzindo em 40% o tempo de gestão operacional. Desenvolvi landing pages de alta conversão e gerenciei deploys em produção via FTP em Linux Ubuntu.',
        },
      ],
    },
    education: {
      educationTitle: 'Formação',
      certificationsTitle: 'Certificações',
      languagesTitle: 'Idiomas',
      items: [
        {
          degree: 'Sistemas de Informação',
          school: 'UniFOA - Centro Universitário de Volta Redonda',
          period: '2021 - 2024',
          description:
            'Estruturas de dados e algoritmos, gerenciamento de banco de dados (SQL/NoSQL), engenharia de software, POO, sistemas operacionais, sistemas distribuídos, redes de computadores, inteligência artificial...',
        },
        {
          degree: 'Técnico em Informática',
          school: 'Escola Técnica Pandiá Calógeras',
          period: '2018 - 2020',
          description: 'Lógica de programação, hardware, redes, desenvolvimento web (HTML/CSS/JS), banco de dados, SO, segurança...',
        },
      ],
      certifications: [
        { name: 'SCRUM Fundamentals', url: 'https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-PedroHugueinn-1017705.pdf' },
        { name: 'OWASP Top 10 Security', url: 'https://www.udemy.com/certificate/UC-a49d2bf1-7b8b-4e26-a1d0-2e8cba8a16c3/' },
        { name: 'Laravel: Criando Aplicação MVC', url: 'https://cursos.alura.com.br/certificate/60f14daf-2d50-4f4d-bf50-601c58b17a54' },
        { name: 'React com TypeScript', url: 'https://cursos.alura.com.br/certificate/562fb700-ec61-40a0-a6d0-267d4466d3ba' },
        { name: 'RabbitMQ In Practice', url: 'https://www.udemy.com/certificate/UC-85968aa2-118c-43c2-95a1-6ed5ce5dfd9c/' },
      ],
      languages: [
        { name: 'Português', level: 'Nativo', width: 'w-full' },
        { name: 'Inglês', level: 'Intermediário - B2', width: 'w-2/3' },
      ],
    },
    resume: {
      badge: 'Currículo',
      title: 'Baixar CV',
      description: 'Disponível em português e inglês.',
      downloadEn: 'Baixar EN',
      downloadPt: 'Baixar PT-BR',
    },
    footer: {
      description:
        'Desenvolvedor Back End especializado em construir soluções robustas e escaláveis. Vamos criar algo incrível juntos.',
      copyright: '© 2026 Pedro Huguenin. Todos os direitos reservados.',
      privacy: 'Privacidade',
      terms: 'Termos',
      cookies: 'Cookies',
    },
  },
};

export type Translations = typeof translations.en;
