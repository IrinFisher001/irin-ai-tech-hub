/**
 * Knowledge base for "Ask IRIN AI" (v1).
 * Every answer here must be true, public-safe and something Irin is happy to publish.
 * Keep out: ID numbers, home address, age, salary, prices, private client names and any
 * confidential project. Edit this file to change what the assistant knows.
 */
export interface KbLink {
  label: string;
  route: string;
}

export interface KbEntry {
  id: string;
  /** Words and phrases that signal this topic. Longer phrases score higher. */
  keywords: string[];
  /** Example questions, used as a second signal. */
  examples: string[];
  answer: string;
  links?: KbLink[];
  followUps?: string[];
}

export const KB: KbEntry[] = [
  {
    id: 'overview',
    keywords: ['who is irin', 'about irin', 'who is irin fisher', 'background', 'overview', 'introduce', 'summary', 'tell me about irin', 'irin fisher'],
    examples: ['Who is Irin?', 'Tell me about Irin', 'Give me an overview'],
    answer:
      'Irin Fisher is a Senior Full Stack Developer, Solution Architect and AI Innovation Consultant with over 13 years of experience delivering enterprise software, cloud architectures and digital transformation across finance, telecoms, manufacturing, insurance, auditing and government.',
    links: [{ label: 'About Irin', route: '/about' }],
    followUps: ['What services does Irin offer?', 'What .NET experience does Irin have?', 'What projects has Irin built?'],
  },
  {
    id: 'experience',
    keywords: ['experience', 'career', 'work history', 'employment', 'years', 'timeline', 'journey', 'worked at', 'companies', 'employers', 'how long'],
    examples: ['How many years of experience does Irin have?', 'What is Irin\u2019s career history?'],
    answer:
      'Irin started in retail and banking operations (including Game and Standard Bank) and moved into software development in 2011. Since then: C# developer roles, nine years as a technical consultant and implementation lead at Blue Turtle Technologies (2014 to 2023), implementation and engineering roles in cash processing, audit and software consultancy, and recent consulting work as a senior developer, solution architect and technical lead.',
    links: [{ label: 'About Irin', route: '/about' }, { label: 'Resume', route: '/resume' }],
    followUps: ['What consulting experience does Irin have?', 'Where can I see Irin\u2019s resume?'],
  },
  {
    id: 'dotnet',
    keywords: ['dotnet', 'csharp', 'aspnet', 'entity framework', 'ef core', 'net core', 'net framework', 'microsoft stack', 'backend', 'back end', 'api', 'apis', 'rest'],
    examples: ['What .NET experience does Irin have?', 'Does Irin know C#?', 'Has Irin built REST APIs?'],
    answer:
      'Irin has more than a decade of C# and .NET experience, including .NET Framework and .NET Core, Entity Framework Core and REST APIs, building enterprise applications and integrations for financial, insurance and business systems.',
    links: [{ label: 'Skills', route: '/skills' }, { label: 'Projects', route: '/projects' }],
    followUps: ['Does Irin work with Angular?', 'Has Irin worked with Azure?'],
  },
  {
    id: 'frontend',
    keywords: ['angular', 'react', 'vue', 'typescript', 'javascript', 'front end', 'frontend', 'scss', 'ui', 'web app', 'dashboard', 'tailwind'],
    examples: ['Does Irin work with Angular?', 'What front end skills does Irin have?', 'Does Irin know React?'],
    answer:
      'On the front end Irin works with Angular, React and Vue, using TypeScript, JavaScript and SCSS, and has built responsive dashboards and enterprise web applications. This portfolio is itself an Angular application.',
    links: [{ label: 'Skills', route: '/skills' }],
    followUps: ['How was this site built?', 'What .NET experience does Irin have?'],
  },
  {
    id: 'azure',
    keywords: ['azure', 'microsoft cloud', 'app service', 'azure devops', 'azure functions'],
    examples: ['Has Irin worked with Azure?', 'What Azure services does Irin use?'],
    answer:
      'Yes. Irin works with Azure services including App Service, Functions, Storage, SQL Database and Azure DevOps, uses GitHub Actions for deployment, and holds the Microsoft Azure Fundamentals certification.',
    links: [{ label: 'Skills', route: '/skills' }, { label: 'Architecture', route: '/architecture' }],
    followUps: ['Does Irin work with AWS?', 'What does Irin do in DevOps?'],
  },
  {
    id: 'aws',
    keywords: ['aws', 'amazon', 'sagemaker', 's3', 'redshift'],
    examples: ['Does Irin work with AWS?', 'Has Irin used Amazon cloud?'],
    answer:
      'Yes. Irin has worked with AWS, including S3, Redshift and SageMaker, and holds the AWS Cloud Practitioner Essentials and Business Professional certificates.',
    links: [{ label: 'Skills', route: '/skills' }],
    followUps: ['Has Irin worked with Azure?', 'What AI experience does Irin have?'],
  },
  {
    id: 'data',
    keywords: ['sql', 'sql server', 'oracle', 'postgres', 'postgresql', 'database', 'databases', 'data', 'reporting', 'ssrs', 'migration', 'analytics'],
    examples: ['What database experience does Irin have?', 'Does Irin know SQL Server?'],
    answer:
      'Irin works with SQL Server, Oracle, PostgreSQL and Redshift, builds SSRS reports, and has delivered data migration and integration work.',
    links: [{ label: 'Skills', route: '/skills' }],
    followUps: ['What does Irin do in data privacy?', 'What .NET experience does Irin have?'],
  },
  {
    id: 'privacy',
    keywords: ['privacy', 'data privacy', 'masking', 'data masking', 'popia', 'onetrust', 'informatica', 'delphix', 'sensitive data', 'security', 'compliance', 'gdpr'],
    examples: ['What does Irin do in data privacy?', 'Has Irin worked with data masking?'],
    answer:
      'Data privacy is a specialist strength. Irin is a OneTrust Certified Professional and has hands-on experience with Informatica (test data, data privacy and master data management) and Delphix (data masking), for organisations that handle sensitive information.',
    links: [{ label: 'Services', route: '/services' }],
    followUps: ['What AI experience does Irin have?', 'What services does Irin offer?'],
  },
  {
    id: 'ai',
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'copilot', 'claude', 'automation', 'rpa', 'uipath', 'data science', 'llm', 'chatbot'],
    examples: ['What AI experience does Irin have?', 'Does Irin do automation?', 'Has Irin used Copilot?'],
    answer:
      'Irin works with Claude, GitHub Copilot, Microsoft Copilot and Cursor, has designed a hybrid architecture with a C# back end and Python machine-learning microservices, and has used UiPath RPA and AWS SageMaker. Irin also completed Data Science training. The approach is practical AI with a person accountable for decisions that matter.',
    links: [{ label: 'Services', route: '/services' }],
    followUps: ['What services does Irin offer?', 'Has Irin worked with Azure?'],
  },
  {
    id: 'devops',
    keywords: ['devops', 'ci cd', 'cicd', 'pipeline', 'pipelines', 'deployment', 'docker', 'github actions', 'octopus', 'git', 'github', 'redgate'],
    examples: ['What does Irin do in DevOps?', 'Does Irin use Docker?', 'Does Irin set up CI/CD?'],
    answer:
      'Irin works with Git and GitHub, GitHub Actions, Docker, Octopus Deploy and Redgate to build automated deployment pipelines. This site is deployed automatically from GitHub with GitHub Actions.',
    links: [{ label: 'Architecture', route: '/architecture' }],
    followUps: ['How was this site built?', 'Has Irin worked with Azure?'],
  },
  {
    id: 'services',
    keywords: ['service', 'services', 'offer', 'what do you do', 'what does irin do', 'what can irin do', 'help my business', 'help with', 'consulting services', 'work with'],
    examples: ['What services does Irin offer?', 'How can Irin help my business?'],
    answer:
      'Irin offers six services: Solution Architecture, Full Stack Development, Cloud Transformation, AI Enablement, Technical Consulting and Digital Innovation. There is also specialist depth in data privacy for organisations that handle sensitive information.',
    links: [{ label: 'See Services', route: '/services' }, { label: 'Contact Irin', route: '/contact' }],
    followUps: ['What AI experience does Irin have?', 'What does Irin do in data privacy?', 'How can I contact Irin?'],
  },
  {
    id: 'architecture',
    keywords: ['architecture', 'architect', 'solution architecture', 'system design', 'integration', 'scalable', 'scalability', 'enterprise architecture', 'design'],
    examples: ['What is Irin\u2019s architecture approach?', 'Does Irin do solution architecture?'],
    answer:
      'Irin is a Solution Architect: system design, integration architecture and scalability planning, so that what is built today still works as the business grows. The approach favours clear integration boundaries, secure access, and automated deployment.',
    links: [{ label: 'Architecture', route: '/architecture' }, { label: 'Services', route: '/services' }],
    followUps: ['Has Irin worked with Azure?', 'What projects has Irin built?'],
  },
  {
    id: 'consulting',
    keywords: ['consulting', 'consultant', 'implementation', 'implementation lead', 'pre sales', 'presales', 'training', 'blue turtle', 'client work', 'strategy'],
    examples: ['What consulting experience does Irin have?', 'Has Irin led implementations?'],
    answer:
      'Irin spent nine years as a technical consultant and implementation lead, customising and implementing enterprise software for clients, with project planning, training, documentation and pre-sales demonstrations.',
    links: [{ label: 'Services', route: '/services' }],
    followUps: ['What services does Irin offer?', 'How can I contact Irin?'],
  },
  {
    id: 'projects',
    keywords: ['project', 'projects', 'portfolio', 'case study', 'case studies', 'built', 'examples', 'reconciliation', 'identity', 'keycloak', 'iam', 'oauth', 'jwt', 'authentication'],
    examples: ['What projects has Irin built?', 'Can I see examples of Irin\u2019s work?'],
    answer:
      'Featured projects include an Enterprise Financial Reconciliation Platform (.NET Core, Angular, SQL Server, Azure) that automates reconciliation and exception handling, an Identity and Access Management Platform (Keycloak, .NET, JWT, OAuth) with centralised authentication and role-based access, and this Angular portfolio itself.',
    links: [{ label: 'Projects', route: '/projects' }],
    followUps: ['How was this site built?', 'What services does Irin offer?'],
  },
  {
    id: 'tools',
    keywords: ['order book', 'print orders', 'small business', 'tools', 'calculator', 'price calculator'],
    examples: ['Has Irin built small business tools?', 'What is the Order Book?'],
    answer:
      'Irin has also built small, practical tools for small businesses, including a phone-friendly order tracker and price calculator for makers, and a print order tracker with artwork approval stages.',
    links: [{ label: 'Projects', route: '/projects' }],
    followUps: ['What projects has Irin built?', 'What services does Irin offer?'],
  },
  {
    id: 'website',
    keywords: ['this site', 'this website', 'how was this built', 'how was this site built', 'how is this site built', 'portfolio built', 'tech stack of this', 'github pages'],
    examples: ['How was this site built?', 'What is this website built with?'],
    answer:
      'This portfolio is an Angular application written in TypeScript with SCSS, hosted on GitHub Pages and deployed automatically by a GitHub Actions pipeline.',
    links: [{ label: 'Architecture', route: '/architecture' }],
    followUps: ['What does Irin do in DevOps?', 'What projects has Irin built?'],
  },
  {
    id: 'skills',
    keywords: ['skills', 'skill', 'technologies', 'technology', 'tech stack', 'tools', 'stack', 'expertise', 'capabilities', 'strengths', 'good at'],
    examples: ['What are Irin\u2019s skills?', 'What technologies does Irin use?'],
    answer:
      'In short: C# and .NET, Angular, React and Vue, TypeScript, SQL Server and Oracle, Azure and AWS, Docker and CI/CD, Python and machine learning, UiPath RPA, and data privacy tools (Informatica, Delphix, OneTrust).',
    links: [{ label: 'Skills', route: '/skills' }],
    followUps: ['What .NET experience does Irin have?', 'What AI experience does Irin have?'],
  },
  {
    id: 'certifications',
    keywords: ['certification', 'certifications', 'certified', 'certificate', 'certificates', 'qualification', 'qualifications', 'education', 'degree', 'diploma', 'studied', 'study', 'university'],
    examples: ['What certifications does Irin have?', 'What is Irin\u2019s education?'],
    answer:
      'Irin holds a Higher National Diploma in Information Technology (CTI Randburg and the University of Greenwich), Microsoft Azure Fundamentals, AWS Cloud Practitioner Essentials and Business Professional, OneTrust Certified Professional, and training in Informatica, Delphix, UiPath RPA and Data Science.',
    links: [{ label: 'Resume', route: '/resume' }],
    followUps: ['What does Irin do in data privacy?', 'Where can I see Irin\u2019s resume?'],
  },
  {
    id: 'resume',
    keywords: ['resume', 'cv', 'curriculum vitae', 'download'],
    examples: ['Where can I see Irin\u2019s resume?', 'Can I download Irin\u2019s CV?'],
    answer: 'You can view and download Irin\u2019s resume on the Resume page.',
    links: [{ label: 'Resume', route: '/resume' }],
    followUps: ['What certifications does Irin have?', 'How can I contact Irin?'],
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'reach', 'get in touch', 'message', 'talk to irin', 'speak to irin', 'linkedin', 'whatsapp', 'phone', 'call'],
    examples: ['How can I contact Irin?', 'What is Irin\u2019s email?'],
    answer:
      'The best way to reach Irin is the Contact page, or by email at Irin.fisher@live.com. Irin\u2019s code is on GitHub at IrinFisher001.',
    links: [{ label: 'Contact Irin', route: '/contact' }],
    followUps: ['What services does Irin offer?'],
  },
  {
    id: 'pricing',
    keywords: ['price', 'pricing', 'cost', 'costs', 'rate', 'rates', 'fee', 'fees', 'charge', 'quote', 'how much', 'budget', 'cheap', 'expensive'],
    examples: ['How much does Irin charge?', 'What are Irin\u2019s rates?'],
    answer:
      'Pricing depends on the scope of the work, so there is no fixed price list. Please use the Contact page to describe what you need and Irin will respond.',
    links: [{ label: 'Contact Irin', route: '/contact' }],
    followUps: ['What services does Irin offer?'],
  },
  {
    id: 'availability',
    keywords: ['available', 'availability', 'hire', 'hiring', 'freelance', 'contract', 'open to work', 'work together', 'engage', 'book'],
    examples: ['Is Irin available for work?', 'Can I hire Irin?'],
    answer:
      'Irin is open to technology and AI consulting conversations. Please use the Contact page and describe what you are looking for.',
    links: [{ label: 'Contact Irin', route: '/contact' }, { label: 'Services', route: '/services' }],
    followUps: ['What services does Irin offer?'],
  },
  {
    id: 'location',
    keywords: ['where', 'location', 'based', 'country', 'city', 'remote', 'timezone', 'time zone'],
    examples: ['Where is Irin based?'],
    answer: 'Irin is based in South Africa. For details about locations and working arrangements, please use the Contact page.',
    links: [{ label: 'Contact Irin', route: '/contact' }],
    followUps: ['How can I contact Irin?'],
  },
  {
    id: 'assistant',
    keywords: ['are you ai', 'are you a bot', 'are you human', 'are you real', 'are you irin', 'who are you', 'what are you', 'what is irin ai', 'how do you work', 'chatgpt'],
    examples: ['Are you an AI?', 'Who are you?', 'How do you work?'],
    answer:
      'I am IRIN AI, an assistant on this site. I am not Irin. I answer from the information published here about Irin\u2019s experience, services, projects and skills, and your questions stay in your browser. For anything else, please contact Irin directly.',
    links: [{ label: 'Contact Irin', route: '/contact' }],
    followUps: ['What services does Irin offer?', 'What projects has Irin built?'],
  },
];

/** Shown as quick-start chips when the chat opens. */
export const STARTER_QUESTIONS: string[] = [
  'What services does Irin offer?',
  'What .NET experience does Irin have?',
  'Has Irin worked with Azure?',
  'What AI experience does Irin have?',
  'What projects has Irin built?',
  'How can I contact Irin?',
];

export const GREETING =
  'Hello, I\u2019m IRIN AI. I answer questions about Irin\u2019s experience, services, projects and skills, using the information on this site. What would you like to know?';

export const FALLBACK =
  'I can only answer questions about Irin\u2019s professional experience, services, projects and skills, and I am not sure about that one. You could try one of the suggestions below, or contact Irin directly.';

export const DECLINE_PERSONAL =
  'I only share Irin\u2019s professional information. For anything else, please use the Contact page.';

export const CONFIDENTIAL =
  'Irin keeps client work confidential and only shares what is published on the Projects page. For more detail, please contact Irin directly.';

export const THANKS = 'You\u2019re welcome. Is there anything else you would like to know about Irin\u2019s work?';
