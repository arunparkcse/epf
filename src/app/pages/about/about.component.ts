import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  whyChooseUs = [
    { num: '01', title: 'Customer Support', desc: 'We\'re here for flexible packaging and labels with dedicated after-sales support.', icon: 'fas fa-headset' },
    { num: '02', title: 'Quality', desc: 'Certified for excellence in Flexible Packaging and Labels with international standards.', icon: 'fas fa-award' },
    { num: '03', title: 'Experienced Team', desc: 'Highly proficient and expert team with deep printing industry knowledge.', icon: 'fas fa-users' },
    { num: '04', title: 'Production Facility', desc: 'Leading printing company in Kizad, Abu Dhabi with state-of-the-art facilities.', icon: 'fas fa-industry' }
  ];

  subPages = [
    { label: 'Company Overview', link: '/about-us', icon: 'fas fa-building' },
    { label: 'Vision & Mission', link: '/vision-and-mission', icon: 'fas fa-eye' },
    { label: 'Certifications', link: '/certifications', icon: 'fas fa-certificate' },
    { label: 'Printing Technology', link: '/printing-technology', icon: 'fas fa-cogs' },
    { label: 'Company Profile', link: '/company-profile', icon: 'fas fa-file-alt' }
  ];
}
