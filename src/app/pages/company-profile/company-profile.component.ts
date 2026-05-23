import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-company-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent {

  videoUrl: SafeResourceUrl;

  highlights = [
    { num: '35+', label: 'Years of Excellence', icon: 'fas fa-calendar-check' },
    { num: '500+', label: 'Clients Served', icon: 'fas fa-handshake' },
    { num: '12+', label: 'Industries', icon: 'fas fa-industry' },
    { num: '3', label: 'ISO Certifications', icon: 'fas fa-award' }
  ];

  capabilities = [
    { title: 'Flexible Packaging', desc: 'Multilayer laminates, pouches, cold seal, aluminium foil and more.', icon: 'fas fa-box-open', link: '/flexible-packaging' },
    { title: 'Self-Adhesive Labels', desc: 'High-quality self-adhesive labels for all markets and applications.', icon: 'fas fa-tag', link: '/labels' },
    { title: 'Shrink Sleeves', desc: 'Full-body and partial shrink sleeves for premium brand presentation.', icon: 'fas fa-compress-arrows-alt', link: '/labels' },
    { title: 'In-Mold Labels', desc: 'Durable in-mold labels integrated directly into the packaging.', icon: 'fas fa-layer-group', link: '/labels' },
    { title: 'Wrap-Around Labels', desc: 'Eye-catching wrap-around labels for bottles and containers.', icon: 'fas fa-ring', link: '/labels' },
    { title: 'Rotogravure & Flexo', desc: 'State-of-the-art printing presses for superior colour and detail.', icon: 'fas fa-print', link: '/printing-technology' }
  ];

  certifications = [
    { name: 'ISO 9001:2015', body: 'Quality Management System', icon: 'fas fa-certificate' },
    { name: 'ISO 22000:2018', body: 'Food Safety Management', icon: 'fas fa-shield-alt' },
    { name: 'ISO 14001:2015', body: 'Environmental Management', icon: 'fas fa-leaf' }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/S3LQ3DKEWWY?rel=0&modestbranding=1'
    );
  }
}
