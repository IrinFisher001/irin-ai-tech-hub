export interface FeaturedProject {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  technologies: string[];
  achievements: string[];
  github?: string;
  image: string;
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 1,
    title: 'Enterprise Banking Reconciliation Platform',
    subtitle: 'Financial Systems & Automation',
    description:
      'Designed and developed enterprise-grade reconciliation solutions integrating banking, payment and accounting platforms.',
    role: 'Senior Full Stack Developer / Solution Architect',
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
    image: 'assets/images/project-placeholder.jpg'
  },
  {
    id: 2,
    title: 'IRIN AI TECH HUB',
    subtitle: 'Professional Portfolio Platform',
    description:
      'Modern Angular-based portfolio demonstrating software engineering, architecture, cloud, DevOps and AI capabilities.',
    role: 'Founder & Developer',
    technologies: [
      'Angular',
      'TypeScript',
      'SCSS',
      'GitHub Pages'
    ],
    achievements: [
      'Responsive UI',
      'Data-driven architecture',
      'Portfolio automation',
      'Professional branding'
    ],
    image: 'assets/images/project-placeholder.jpg'
  },
  {
    id: 3,
    title: 'Enterprise API Platform',
    subtitle: 'Cloud Native Services',
    description:
      'Designed scalable API-driven enterprise solutions using modern architecture and DevOps practices.',
    role: 'Solution Architect',
    technologies: [
      '.NET',
      'Docker',
      'Kubernetes',
      'Azure DevOps',
      'CI/CD'
    ],
    achievements: [
      'Microservice architecture',
      'Automated deployments',
      'Containerized services',
      'Cloud-ready solutions'
    ],
    image: 'assets/images/project-placeholder.jpg'
  }
];