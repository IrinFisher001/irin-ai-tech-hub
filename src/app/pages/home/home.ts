import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Home page: hero, value tiles, statistics banner and a closing call to action. */
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  /** Floating technology chips shown under the hero text. */
  chips = ['.NET', 'Angular', 'Azure', 'AWS', 'SQL Server', 'AI', 'Cloud', 'DevOps'];

  /** "How I create value" tiles. */
  tiles = [
    { title: 'Architecture', text: 'Designing scalable enterprise solutions.' },
    { title: 'Software Engineering', text: 'Building modern full-stack applications.' },
    { title: 'Cloud', text: 'Azure and cloud-native architectures.' },
    { title: 'AI', text: 'Applying AI to improve business outcomes, with a person accountable.' },
  ];

  /** Statistics banner. Keep every figure one you can explain if asked. */
  stats = [
    { value: '13+', label: 'Years of experience' },
    { value: '20+', label: 'Enterprise projects' },
    { value: 'Full Stack', label: 'Architecture and development' },
    { value: 'AI + Cloud', label: 'Solutions that scale' },
  ];
}
