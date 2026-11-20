import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Service {
  title: string;
  promise: string;
  detail: string;
  tech: string[];
}

/** Services page: the six ways Irin helps businesses, plus a data privacy specialist band. */
@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services: Service[] = [
    {
      title: 'Solution Architecture',
      promise: 'Design scalable enterprise systems.',
      detail: 'System design, integration architecture and scalability planning, so what is built today still works as the business grows.',
      tech: ['Azure', 'AWS', 'REST APIs', 'SQL Server', 'Oracle'],
    },
    {
      title: 'Full Stack Development',
      promise: 'Modern applications, from database to screen.',
      detail: 'Enterprise web applications and APIs, built, tested and handed over properly.',
      tech: ['C#', '.NET Core', 'Entity Framework Core', 'Angular', 'React', 'Vue', 'TypeScript', 'SQL Server', 'Python'],
    },
    {
      title: 'Cloud Transformation',
      promise: 'Azure, integration and modernisation.',
      detail: 'Moving and connecting systems in the cloud, with the deployment pipelines to keep them running.',
      tech: ['Azure', 'AWS', 'Docker', 'GitHub Actions', 'CI/CD', 'Octopus Deploy'],
    },
    {
      title: 'AI Enablement',
      promise: 'Business AI and automation that people can trust.',
      detail: 'Practical AI solutions, from assistants and automation to machine-learning services, with human oversight on every decision that matters.',
      tech: ['Claude', 'GitHub Copilot', 'Microsoft Copilot', 'Python ML', 'UiPath RPA', 'AWS SageMaker'],
    },
    {
      title: 'Technical Consulting',
      promise: 'Technology strategy and execution.',
      detail: 'Years as a technical consultant and implementation lead: understanding what the business needs, planning the work, training the people and documenting the result.',
      tech: ['Implementation', 'Project planning', 'Training', 'Documentation', 'Pre-sales'],
    },
    {
      title: 'Digital Innovation',
      promise: 'Finding the opportunities technology opens up.',
      detail: 'Helping businesses see what could be automated, connected or built, and proving it with working prototypes before they commit.',
      tech: ['Concept prototypes', 'Process automation', 'Opportunity mapping'],
    },
  ];
}
