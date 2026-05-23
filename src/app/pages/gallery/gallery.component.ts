import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink, CommonModule, AnimateOnScrollDirective],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  activeFilter = signal('all');
  lightboxOpen = signal(false);
  lightboxImg = signal('');

  filters = ['all', 'flexible-packaging', 'labels', 'facility'];

  images = [
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/10.jpg', category: 'flexible-packaging', alt: 'Flexible Packaging 1' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/21.jpg', category: 'labels', alt: 'Labels' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Confectionary-and-Bakery.jpg', category: 'flexible-packaging', alt: 'Confectionary & Bakery' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Chips-and-Snacks.jpg', category: 'flexible-packaging', alt: 'Chips & Snacks' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Biscuits-and-Wafers.jpg', category: 'flexible-packaging', alt: 'Biscuits & Wafers' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Ice-Cream.jpg', category: 'flexible-packaging', alt: 'Ice Cream' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Dairy-Products.jpg', category: 'flexible-packaging', alt: 'Dairy Products' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Food-Products.jpg', category: 'flexible-packaging', alt: 'Food Products' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Detergent-Soap-Wrapper-and-Wet-Wipes.jpg', category: 'flexible-packaging', alt: 'Detergent & Wet Wipes' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Wrap-Around.jpg', category: 'labels', alt: 'Wrap Around Labels' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Self-Adhesive.jpg', category: 'labels', alt: 'Self-Adhesive Labels' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Shrink-Sleeves.jpg', category: 'labels', alt: 'Shrink Sleeves' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/In-Mold-Labels.jpg', category: 'labels', alt: 'In-Mold Labels' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/about-11.jpg', category: 'facility', alt: 'Facility' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/about-5.jpg', category: 'facility', alt: 'Production' },
    { src: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/about-4.jpg', category: 'facility', alt: 'EPF Team' }
  ];

  get filtered() {
    return this.activeFilter() === 'all'
      ? this.images
      : this.images.filter(i => i.category === this.activeFilter());
  }

  setFilter(f: string) { this.activeFilter.set(f); }
  openLightbox(src: string) { this.lightboxImg.set(src); this.lightboxOpen.set(true); }
  closeLightbox() { this.lightboxOpen.set(false); }
}
