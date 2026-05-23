import { Component, OnInit, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavChild { label: string; link: string; }
interface NavItem  { label: string; link: string; children?: NavChild[]; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isScrolled = signal(false);
  menuOpen = signal(false);
  activeDropdown = signal<string | null>(null);

  navItems: NavItem[] = [
    { label: 'Home', link: '/' },
    {
      label: 'About Us', link: '/about-us',
      children: [
        { label: 'Company Overview', link: '/about-us' },
        { label: 'Vision & Mission', link: '/vision-and-mission' },
        { label: 'Certifications', link: '/certifications' },
        { label: 'Printing Technology', link: '/printing-technology' },
        { label: 'Company Profile', link: '/company-profile' }
      ]
    },
    {
      label: 'Products', link: '/flexible-packaging',
      children: [
        { label: 'Flexible Packaging', link: '/flexible-packaging' },
        { label: 'Labels', link: '/labels' }
      ]
    },
    { label: 'Gallery', link: '/gallery' },
    { label: 'Careers', link: '/careers' },
    { label: 'Contact Us', link: '/contact-us' }
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  ngOnInit() {}

  toggleMenu() { this.menuOpen.update(v => !v); }
  closeMenu() { this.menuOpen.set(false); }

  toggleDropdown(label: string) {
    this.activeDropdown.update(v => v === label ? null : label);
  }
  isDropdownOpen(label: string): boolean {
    return this.activeDropdown() === label;
  }
}
