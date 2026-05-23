import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.scss']
})
export class VisionMissionComponent {
  values = [
    { icon: 'fas fa-lightbulb', title: 'Innovation', desc: 'Continuously adopting new technologies and methods to stay ahead of industry trends.' },
    { icon: 'fas fa-handshake', title: 'Integrity', desc: 'Building trust with clients through honest communication and reliable delivery.' },
    { icon: 'fas fa-leaf', title: 'Sustainability', desc: 'Committed to eco-friendly packaging solutions that reduce environmental impact.' },
    { icon: 'fas fa-star', title: 'Excellence', desc: 'Delivering the highest quality in every product and service we provide.' },
    { icon: 'fas fa-users', title: 'Teamwork', desc: 'Empowering our people to collaborate and achieve outstanding results together.' },
    { icon: 'fas fa-globe', title: 'Global Reach', desc: 'Serving clients across the Middle East, GCC, and Africa with world-class standards.' }
  ];
}
