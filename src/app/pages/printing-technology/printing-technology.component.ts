import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-printing-technology',
  standalone: true,
  imports: [RouterLink, AnimateOnScrollDirective],
  templateUrl: './printing-technology.component.html',
  styleUrls: ['./printing-technology.component.scss']
})
export class PrintingTechnologyComponent {

  videoUrl: SafeResourceUrl;

  facilityImages = [
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/expertise-bg-1-1024x561.jpg', alt: 'EPF Production Line 1', label: 'Production Line' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/expertise-bg-5-1024x561.jpg', alt: 'EPF Facility 2', label: 'Printing Presses' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/expertise-bg-3-1024x561.jpg', alt: 'EPF Facility 3', label: 'Converting Equipment' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/expertise-bg-4-1024x561.jpg', alt: 'EPF Facility 4', label: 'Quality Control' }
  ];

  technologies = [
    {
      title: 'Rotogravure Printing',
      desc: 'High-speed, high-quality printing process ideal for long runs of flexible packaging. Delivers exceptional colour consistency and fine detail reproduction on a variety of substrates.',
      features: ['Excellent colour density', 'Suitable for wide-web printing', 'Up to 10-colour printing', 'High-speed production'],
      icon: 'fas fa-circle-nodes'
    },
    {
      title: 'Flexographic Printing',
      desc: 'Versatile printing technology for flexible packaging, labels, and corrugated materials. Offers excellent performance on various substrates including films, foils, and papers.',
      features: ['Fast drying inks', 'Wide substrate range', 'Cost-effective for medium runs', 'UV & water-based inks'],
      icon: 'fas fa-layer-group'
    },
    {
      title: 'Digital Printing',
      desc: 'State-of-the-art digital technology for short-run, variable-data, and personalised printing with fast turnaround times and no plate-making requirements.',
      features: ['No minimum order qty', 'Variable data printing', 'Rapid prototyping', 'Photo-quality results'],
      icon: 'fas fa-microchip'
    },
    {
      title: 'Lamination & Converting',
      desc: 'Advanced lamination capabilities combining multiple substrates to create high-barrier, multi-layer flexible packaging with superior protection properties.',
      features: ['Solvent-based lamination', 'Solventless lamination', 'Extrusion lamination', 'Co-extrusion films'],
      icon: 'fas fa-stack-overflow'
    },
    {
      title: 'Slitting & Rewinding',
      desc: 'Precision slitting to customer-specified widths and lengths with accurate tension control, ensuring consistent winding quality for high-speed packaging lines.',
      features: ['Razor blade slitting', 'Score slitting', 'Custom widths & lengths', 'Core size flexibility'],
      icon: 'fas fa-scissors'
    },
    {
      title: 'Quality Control Lab',
      desc: 'In-house quality control laboratory with state-of-the-art testing equipment ensuring every product meets international standards before delivery.',
      features: ['Colour spectrophotometry', 'Tensile strength testing', 'Seal strength testing', 'Barrier property testing'],
      icon: 'fas fa-flask'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/S3LQ3DKEWWY?rel=0&modestbranding=1'
    );
  }
}