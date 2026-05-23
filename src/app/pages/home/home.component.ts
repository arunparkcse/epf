import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  private slideInterval: ReturnType<typeof setInterval> | null = null;
  videoUrl: SafeResourceUrl;

  heroSlides = [
    {
      tag: 'Since 1989',
      heading: 'Your One Stop Solution For',
      highlight: 'Flexible Packaging & Labels',
      sub: 'Leading manufacturer in the UAE — modern facility in Kizad, Abu Dhabi.',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/10.jpg'
    },
    {
      tag: 'Innovation',
      heading: 'Unwrapping Innovation In',
      highlight: 'Flexible Packaging',
      sub: 'State-of-the-art printing technology delivering superior quality solutions.',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/21.jpg'
    },
    {
      tag: 'Custom Labels',
      heading: 'Customized Labels That',
      highlight: 'Make Lasting Impressions',
      sub: 'From wrap-around to shrink sleeves — labels that elevate your brand.',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Shrink-Sleeves.jpg'
    }
  ];

  stats = [
    { value: '35+', label: 'Years Experience' },
    { value: '500+', label: 'Clients Served' },
    { value: '10+', label: 'Industries' },
    { value: '3', label: 'ISO Certifications' }
  ];

  products = [
    {
      title: 'Flexible Packaging',
      desc: 'Innovative and sustainable flexible packaging solutions that preserve product quality and extend shelf life.',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/10.jpg',
      link: '/flexible-packaging',
      tags: ['Confectionary', 'Chips & Snacks', 'Dairy', 'Ice Cream']
    },
    {
      title: 'Labels',
      desc: 'Elevate your product\'s visual appeal with top-quality labels — wrap-around, self-adhesive, shrink sleeves & in-mold.',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/21.jpg',
      link: '/labels',
      tags: ['Wrap Around', 'Self-Adhesive', 'Shrink Sleeves', 'In-Mold']
    }
  ];

  industries = [
    { name: 'Food', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-1-1.png', link: '/flexible-packaging' },
    { name: 'Dairy', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-7.png', link: '/flexible-packaging' },
    { name: 'Beverage', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-8.png', link: '/flexible-packaging' },
    { name: 'Automobile', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-4.png', link: '/labels' },
    { name: 'Home Care', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-2.png', link: '/flexible-packaging' },
    { name: 'Baby Food', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-3.png', link: '/flexible-packaging' },
    { name: 'Personal Care', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-5.png', link: '/labels' },
    { name: 'Retail', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-6.png', link: '/labels' },
    { name: 'Pharmaceuticals', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-9.png', link: '/labels' },
    { name: 'Pet Food', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-10.png', link: '/flexible-packaging' },
    { name: 'Transport', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-11.png', link: '/labels' },
    { name: 'Electronics', icon: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/i-12.png', link: '/labels' }
  ];

  processSteps = [
    { num: '01', title: 'Design', desc: 'Our design team brings creativity and expertise to every project, ensuring captivating visual designs.', icon: 'fas fa-pencil-ruler', image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/icon-p-1.png' },
    { num: '02', title: 'Printing', desc: 'State-of-the-art printing capabilities guarantee superior results with meticulous attention to detail.', icon: 'fas fa-print', image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/icon-p-2.png' },
    { num: '03', title: 'Finishing', desc: 'Finishing touches add that extra perfection to your materials, ensuring they stand out and leave an impression.', icon: 'fas fa-star', image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/icon-p-3.png' },
    { num: '04', title: 'Logistics & Dispatch', desc: 'Timely and secure delivery of your printed materials, providing peace of mind and convenience.', icon: 'fas fa-truck', image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/icon-p-4.png' }
  ];

  clients = Array.from({length: 26}, (_, i) => ({
    src: `https://emiratesprintingforms.com/wp-content/uploads/2023/11/client-${i+1}.png`,
    alt: `Client ${i+1}`
  }));

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/S3LQ3DKEWWY?rel=0&modestbranding=1&autoplay=0'
    );
  }

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    if (this.slideInterval) clearInterval(this.slideInterval);
  }

  startSlider() {
    this.slideInterval = setInterval(() => {
      this.currentSlide.update(v => (v + 1) % this.heroSlides.length);
    }, 5000);
  }

  goToSlide(i: number) { this.currentSlide.set(i); }
  prevSlide() { this.currentSlide.update(v => (v - 1 + this.heroSlides.length) % this.heroSlides.length); }
  nextSlide() { this.currentSlide.update(v => (v + 1) % this.heroSlides.length); }
}
