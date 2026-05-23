import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent {
  benefits = [
    { icon: 'fas fa-star', title: 'Career Growth', desc: 'We invest in our people with continuous training and clear paths for advancement.' },
    { icon: 'fas fa-users', title: 'Great Team', desc: 'Join a diverse, collaborative team of professionals passionate about printing innovation.' },
    { icon: 'fas fa-globe', title: 'Global Exposure', desc: 'Work on projects serving clients across the Middle East, GCC, and Africa.' },
    { icon: 'fas fa-shield-halved', title: 'Safe Environment', desc: 'ISO 45001 certified workplace ensuring the health and safety of every team member.' },
    { icon: 'fas fa-hand-holding-heart', title: 'Competitive Benefits', desc: 'Competitive salary, health insurance, and benefits for all permanent employees.' },
    { icon: 'fas fa-lightbulb', title: 'Innovative Culture', desc: 'Work with the latest printing technology and contribute to industry-leading solutions.' }
  ];
}
