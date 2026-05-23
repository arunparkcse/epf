import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent {
  certs = [
    { title: 'ISO 9001:2015', subtitle: 'Quality Management System', icon: 'fas fa-certificate', color: 'blue', desc: 'Demonstrates our commitment to consistently providing products and services that meet customer and regulatory requirements.' },
    { title: 'ISO 14001:2015', subtitle: 'Environmental Management', icon: 'fas fa-leaf', color: 'green', desc: 'Confirms our dedication to minimising environmental impact and continually improving our environmental performance.' },
    { title: 'ISO 45001:2018', subtitle: 'Occupational Health & Safety', icon: 'fas fa-shield-halved', color: 'orange', desc: 'Ensures a safe and healthy workplace by preventing work-related injury and ill health for our employees and visitors.' },
    { title: 'BRC/IOP', subtitle: 'Global Standard Packaging', icon: 'fas fa-box', color: 'purple', desc: 'Industry-leading food safety and quality standard for packaging and packaging materials worldwide.' },
    { title: 'FSSC 22000', subtitle: 'Food Safety Management', icon: 'fas fa-utensils', color: 'red', desc: 'Globally recognised food safety management system certification covering the entire food supply chain.' },
    { title: 'Halal Certified', subtitle: 'Islamic Compliance', icon: 'fas fa-moon', color: 'teal', desc: 'Our products and processes comply with Halal standards, ensuring suitability for Islamic markets across the region.' }
  ];
}
