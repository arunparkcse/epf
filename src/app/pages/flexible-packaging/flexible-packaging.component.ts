import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flexible-packaging',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './flexible-packaging.component.html',
  styleUrls: ['./flexible-packaging.component.scss']
})
export class FlexiblePackagingComponent {
  activeTab = signal(0);

  categories = [
    {
      id: 'confectionary',
      label: 'Confectionary & Bakery',
      icon: 'fas fa-cookie-bite',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Confectionary-and-Bakery.jpg',
      desc: 'Our flexible packaging can effectively showcase your brand and communicate a message of quality and uniqueness on your products. With vibrant full-color labels, your products will surely be marketable to the public.',
      features: ['Chocolates and Energy Bar Wrappers', 'Breads and Chocolates pouches', 'Hard and Soft candy sticks Wrappers', 'Good moisture barrier properties and effective oxygen barrier']
    },
    {
      id: 'chips',
      label: 'Chips & Snacks',
      icon: 'fas fa-bowl-food',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Chips-and-Snacks.jpg',
      desc: 'Regardless of your preferred packaging method, our commitment is to provide you with labels that align perfectly with your brand, ensuring a perfect presentation of your delectable products.',
      features: ['Chips, Crackers, Popcorn pouches', 'Packaging materials suitable for nitrogen flushing', 'Excellent option for preserving freshness and ensuring crispness', 'Popular choice for snack manufacturers']
    },
    {
      id: 'biscuits',
      label: 'Biscuits & Wafers',
      icon: 'fas fa-wheat-awn',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Biscuits-and-Wafers.jpg',
      desc: 'Our labels not only capture attention but also serve as a powerful medium to communicate the essence and quality of your brand, enhancing the overall appeal of your products.',
      features: ['Biscuits, Cookies and wafers pouches', 'Good moisture barrier properties', 'Matte, Glossy Metallic, and see-through combinations', 'Enhanced shelf presentation']
    },
    {
      id: 'ice-cream',
      label: 'Ice Cream',
      icon: 'fas fa-ice-cream',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Ice-Cream.jpg',
      desc: 'Our labels for ice creams are durable and enhance your brand\'s appeal. Designed to withstand freezing temperatures, ensuring your brand maintains strong visibility in the market.',
      features: ['Ice cream Bar and Ice cream sticks packaging', 'Cold seal process packaging', 'Deep freeze application', 'Suitable for nitrogen flushing, good moisture and Oxygen barrier']
    },
    {
      id: 'dairy',
      label: 'Dairy Products',
      icon: 'fas fa-droplet',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Dairy-Products.jpg',
      desc: 'Our dairy labels are known for exceptional adhesion. Whether it\'s milk, yogurt, or other dairy products, our labels maintain their integrity and readability even in humid or wet conditions.',
      features: ['Powered milk, Protein Drink, cheese and butter pouches', 'Baby food and ready to eat spouted pouches', 'High seal strength for vacuum packaging', 'Good impact strength for bulk packaging']
    },
    {
      id: 'food',
      label: 'Food Products',
      icon: 'fas fa-utensils',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Food-Products.jpg',
      desc: 'Our wide selection of Food Labels are tailored to meet all your food packaging and labeling needs. We ensure they arrive at your customers\' hands as fresh and intact as the day they were applied.',
      features: ['Pulses, Spices, Grains and oatmeal pouches', 'Sauce, Mayonnaise and ketchup sachets', 'High seal strength packaging', 'Suitable for hot fill products']
    },
    {
      id: 'detergent',
      label: 'Detergent & Wet Wipes',
      icon: 'fas fa-soap',
      image: 'https://emiratesprintingforms.com/wp-content/uploads/2023/11/Detergent-Soap-Wrapper-and-Wet-Wipes.jpg',
      desc: 'Through our printing capabilities, we deliver solutions with exceptional print quality. You can trust that our labels won\'t tear, wrinkle, or smudge even when exposed to various handling and environmental conditions.',
      features: ['Detergent powder pouches and Bar soap wrappers', 'Wet wipes, napkins and cosmetics packaging', 'Durable protection against moisture and contamination', 'Chemical resistance for soap packaging']
    }
  ];

  setTab(i: number) { this.activeTab.set(i); }
}
