export const EMAIL = "ali88haider8875@gmail.com"
export const RESUME = "https://drive.google.com/file/d/1QkCl4wrxLNBQDE3Q6AnMpvWELAwQbvZm/view?usp=sharing"
export const LINKEDIN = "https://www.linkedin.com/in/haider-zafar-b4872a1b8"
export const GITHUB = "https://github.com/haider88ali"

export const navLinks = [
  ["About", "#about"],
  ["Services", "#ai"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
]

export const stats = [
  ["5+", "Years Exp"],
  ["15+", "Tech Stack"],
  ["10+", "Live Sites"],
]

export const aiServices = [
  { icon: "fa-layer-group", title: "Full Stack Development",
    desc: "End-to-end web applications — Laravel, PHP, Node.js and React.js — from database design and APIs to polished, responsive interfaces." },
  { icon: "fa-cloud", title: "Cloud Applications",
    desc: "Scalable, multi-tenant cloud apps and SaaS platforms, containerized with Docker and deployed on AWS with CI/CD and monitoring." },
  { icon: "fa-wand-magic-sparkles", title: "Generative AI Apps",
    desc: "LLM-powered products — chat, content generation, summarization and extraction — built on top models and shipped to production." },
  { icon: "fa-robot", title: "AI Automation & Agents",
    desc: "Autonomous agents and workflows that handle support, sales ops and back-office tasks, wired into n8n, WhatsApp and your existing tools." },
  { icon: "fa-magnifying-glass-chart", title: "RAG & Semantic Search",
    desc: "Retrieval pipelines with embeddings and vector search so AI answers from your own documents and data, with sources." },
  { icon: "fa-bolt", title: "FastAPI AI Backends",
    desc: "Fast, async Python APIs serving models and agents — streaming responses, auth, queues and clean deployment with Docker and AWS." },
]

export const skillGroups = [
  { title: "Generative AI & Automation", ai: true, items: [
    ["fa-brain", "LLMs"], ["fa-wand-magic-sparkles", "Generative AI"], ["fa-robot", "AI Agents"], ["fa-diagram-project", "n8n Automation"],
    ["fa-database", "RAG & Vector DB"], ["fa-code-branch", "Prompt Engineering"],
  ]},
  { title: "Languages & Databases", items: [
    ["new-html.png", "HTML"], ["css.png", "CSS"], ["tailwind.svg", "Tailwind"], ["js.png", "JS"],
    ["php1.png", "PHP"], ["python.svg", "Python"], ["sql.png", "SQL"], ["mysql.png", "MySQL"], ["postgresql.svg", "PostgreSQL"],
  ]},
  { title: "Frameworks", items: [
    ["laravel.png", "Laravel"], ["fastapi.svg", "FastAPI"], ["react.png", "React.js"],
    ["nextjs.webp", "Next.js"], ["vue.png", "Vue.js"], ["nodejs.png", "Node.js"],
  ]},
  { title: "Tools", items: [
    ["jira.webp", "Jira"], ["git.png", "Git"], ["clickup.png", "ClickUp"], ["docker.svg", "Docker"], ["aws.svg", "AWS Cloud"],
  ]},
  { title: "Marketplace Integrations", integration: true, items: [
    ["shopify.svg", "Shopify"], ["woocommerce.svg", "WooCommerce"], ["amazon.svg", "Amazon"],
    ["ebay.svg", "eBay"], ["kaufland.svg", "Kaufland"], ["temu.svg", "Temu"],
  ]},
]

export const projects = [
  { title: "Visticle eSales", url: "https://visticle-esales.com/", img: "visticle.PNG",
    desc: "Multi-tenant eSales admin platform with marketplace integrations — Shopify, WooCommerce, Amazon, eBay, Kaufland, Temu, and more." },
  { title: "The Entertainer", url: "https://www.theentertainerme.com/en-ae/dubai-n-emirates", img: "entertainer.PNG",
    desc: "Leading BOGO platform for restaurants, hotels, and attractions across the UAE." },
  { title: "The Entertainer Business", url: "https://business.theentertainerme.com/en-ae/", img: "entertainer-business.png",
    desc: "One platform for all your rewards and engagement needs — customer loyalty, employee rewards, and CRM solutions tailored to each business." },
  { title: "LinenTech", url: "https://www.linentech.net/", img: "project2.PNG",
    desc: "Trusted by 200+ laundries worldwide to streamline operations and boost productivity." },
  { title: "SeoKitHub", url: "https://seokithub.com/", img: "seokithub.PNG",
    desc: "Free SEO kit hub with 10+ browser-based tools — site audits, backlink checker, schema generator, sitemaps, and more. No login required." },
]
