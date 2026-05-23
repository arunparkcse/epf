import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Fire BEFORE new components render — scroll is at 0 when
        // IntersectionObserver initialises so animations trigger correctly
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
      }
      if (event instanceof NavigationEnd) {
        // Restore CSS smooth-scroll for the user's own scrolling
        requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = '';
          document.body.style.scrollBehavior = '';
        });
      }
    });
  }
}
