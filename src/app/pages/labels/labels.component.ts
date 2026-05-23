import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-labels',
  standalone: true,
  imports: [RouterLink, CommonModule, AnimateOnScrollDirective],
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent {
  activeTab = signal(0);

  categories = [
    {
      id: 'wrap-around',
      label: 'Wrap Around',
      icon: 'fas fa-rotate',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Wrap-Around.jpg',
      desc: 'We have improved our services by producing BOPP Wrap Around Labels for mineral water and beverage products. Our labels look better with a glossy finish and are tougher against humidity and cold supply chains.',
      features: ['Versatile for plastic, glass, and metal containers', 'Ideal for high-speed line bottling processes', 'Sufficient area for detailed product information', 'Regulatory labeling compliant']
    },
    {
      id: 'self-adhesive',
      label: 'Self-Adhesive',
      icon: 'fas fa-tag',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Self-Adhesive.jpg',
      desc: 'Elevate your efficiency with our precision self-adhesive labels featuring easy-peel technology. Perfect for packaging, organization, and branding across all industries.',
      features: ['Product labelling & address labels', 'Effortless attachment to various products', 'Strong bond with secure surface adhesion', 'Offer labels and packaging applications']
    },
    {
      id: 'shrink-sleeves',
      label: 'Shrink Sleeves',
      icon: 'fas fa-compress',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Shrink-Sleeves.jpg',
      desc: 'Enhance your product packaging with our high-quality shrink-sleeve labels, custom-made to enhance your products, making them look their best in the market.',
      features: ['360-degree coverage for maximum visibility', 'Safeguard against product tampering', 'Flexibility in design, shape, and size', 'High strength and high impact resistance']
    },
    {
      id: 'in-mold',
      label: 'In-Mold Labels',
      icon: 'fas fa-shapes',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/In-Mold-Labels.jpg',
      desc: 'Improve your product\'s visual appeal and durability with our in-mold labels. These labels seamlessly integrate into your packaging during manufacturing, resulting in a polished and long-lasting finish.',
      features: ['Easy peel and tear functionality', 'Good seal strength for secure adhesion', 'Easy-to-open design for consumer convenience', 'Integrated manufacturing process']
    }
  ];

  setTab(i: number) { this.activeTab.set(i); }
}
