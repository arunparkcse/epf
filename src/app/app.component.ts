import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { filter } from 'rxjs/operators';
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
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Bypass CSS scroll-behavior:smooth so the jump is truly instant
        document.documentElement.style.scrollBehavior = 'auto';
        document.body.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        // Restore smooth scrolling after the jump is committed
        requestAnimationFrame(() => {
          document.documentElement.style.scrollBehavior = '';
          document.body.style.scrollBehavior = '';
        });
      });
  }
}
