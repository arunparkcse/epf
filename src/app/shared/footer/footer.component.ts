import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', link: '/' },
    { label: 'About Us', link: '/about-us' },
    { label: 'Certifications', link: '/certifications' },
    { label: 'Flexible Packaging', link: '/flexible-packaging' },
    { label: 'Labels', link: '/labels' },
    { label: 'Printing Technology', link: '/printing-technology' },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Contact Us', link: '/contact-us' }
  ];
}
