import { Component } from '@angular/core';
import { FEATURED_PROJECTS } from '../../data/featured-projects';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = FEATURED_PROJECTS;
}