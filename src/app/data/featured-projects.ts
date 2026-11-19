export interface FeaturedProject {
  id: number;
  title: string;
  subtitle: string;
  description: string;

  businessChallenge: string;
  solution: string;

  role: string;
  technologies: string[];
  achievements: string[];

  architectureRoute?: string;

  github?: string;
  image?: string;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
  id: 1,
  title: 'Enterprise Financial Reconciliation Platform',
  subtitle: 'Financial Systems & Process Automation',

  description:
    'Enterprise-grade reconciliation solution designed to improve operational efficiency and reduce manual processing.',

  businessChallenge:
    'High-volume financial transactions required accurate reconciliation, exception handling and reporting across multiple data sources.',

  solution:
    'Designed and developed automated reconciliation workflows, validation processes and reporting mechanisms to streamline financial operations.',

  role:
    'Senior Full Stack Developer / Solution Architect',

  technologies: [
    '.NET Core',
    'Angular',
    'SQL Server',
    'Azure',
    'REST APIs',
    'DevOps'
  ],

  achievements: [
    'Automated reconciliation processes',
    'Improved financial accuracy',
    'Reduced operational overhead',
    'Designed scalable architecture'
  ],

  architectureRoute: '/architecture'
},
  {
  id: 2,
  title: 'Identity & Access Management Platform',
  subtitle: 'Security & Authentication Services',

  description:
    'Centralized authentication and authorization platform supporting secure enterprise applications.',

  businessChallenge:
    'Organizations required a standardized approach to identity management and secure access control.',

  solution:
    'Implemented centralized authentication, role-based security and API authorization using industry-standard security practices.',

  role:
    'Solution Architect / Senior Developer',

  technologies: [
    'Keycloak',
    '.NET',
    'REST APIs',
    'JWT',
    'OAuth'
  ],

  achievements: [
    'Centralized authentication',
    'Improved security governance',
    'Role-based access control',
    'Standardized authorization'
  ],

  architectureRoute: '/architecture'
},
  {
  id: 3,
  title: 'IRIN AI TECH HUB',
  subtitle: 'Professional Portfolio Platform',

  description:
    'Modern Angular portfolio platform showcasing enterprise software engineering, architecture and technical leadership experience.',

  businessChallenge:
    'Create a professional platform demonstrating software engineering capabilities beyond a traditional CV.',

  solution:
    'Developed a responsive, data-driven Angular application showcasing projects, skills, architecture and career achievements.',

  role:
    'Founder & Developer',

  technologies: [
    'Angular',
    'TypeScript',
    'SCSS',
    'GitHub Pages'
  ],

  achievements: [
    'Responsive UI',
    'Professional branding',
    'Data-driven architecture',
    'Recruiter-friendly presentation'
  ],

  architectureRoute: '/architecture'
}
];