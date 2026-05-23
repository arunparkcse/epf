import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, AnimateOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  submitted = signal(false);
  form = { name: '', email: '', phone: '', subject: '', message: '' };

  constructor(private sanitizer: DomSanitizer) {}

  onSubmit() {
    this.submitted.set(true);
    setTimeout(() => this.submitted.set(false), 4000);
    this.form = { name: '', email: '', phone: '', subject: '', message: '' };
  }

  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  offices = [
    {
      city: 'Abu Dhabi Office',
      address: 'P.O. Box 4678, Abu Dhabi, U.A.E.',
      phone: '+971 2 673 0800',
      phoneLink: '+97126730800',
      email: 'info@epfe.ae',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14497.958233459638!2d54.7409082!3d24.7100678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e66c17c0f9a61%3A0xad9f31b5baf962ba!2sEmirates%20Printing%20Forms%20Est!5e0!3m2!1sen!2sae!4v1697107434995!5m2!1sen!2sae',
      badge: 'Headquarters'
    },
    {
      city: 'Dubai Office',
      address: 'P.O. Box 27222, Dubai, U.A.E.',
      phone: '+971 4 282 7877',
      phoneLink: '+97142827877',
      email: 'info@epfe.ae',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14434.448132157651!2d55.3393434!3d25.2499891!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d192a5993f7%3A0xedf6dbc72469ceb7!2sEmirates%20Printing%20Forms!5e0!3m2!1sen!2sae!4v1707312037467!5m2!1sen!2sae',
      badge: 'Sales Office'
    }
  ];
}
