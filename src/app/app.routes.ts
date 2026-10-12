import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Architecture } from './pages/architecture/architecture';
import { Resume } from './pages/resume/resume';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: 'skills',
    component: Skills
  },
  {
    path: 'projects',
    component: Projects
  },
  {
    path: 'architecture',
    component: Architecture
  },
  {
    path: 'resume',
    component: Resume
  },
  {
    path: 'contact',
    component: Contact
  },
  {
    path: '**',
    redirectTo: ''
  }
];