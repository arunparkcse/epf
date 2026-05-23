import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2
} from '@angular/core';

/**
 * Usage:
 *   <div animateOnScroll>                        → default: fade-up
 *   <div animateOnScroll="fade-in">              → fade in
 *   <div animateOnScroll delay="200">            → 200ms delay
 *   <div animateOnScroll="slide-left" delay="400">
 *
 * Available animations: fade-up | fade-in | slide-left | slide-right | zoom-in
 */
@Directive({
  selector: '[animateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy {
  @Input('animateOnScroll') animation: string = 'fade-up';
  @Input() delay: number = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const el = this.el.nativeElement as HTMLElement;
    const anim = this.animation || 'fade-up';

    // Apply initial hidden state
    this.renderer.addClass(el, 'aos-init');
    this.renderer.addClass(el, `aos-${anim}`);
    if (this.delay) {
      this.renderer.setStyle(el, 'transition-delay', `${this.delay}ms`);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.renderer.addClass(el, 'aos-animate');
            this.observer.unobserve(el); // fire once
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    this.observer.observe(el);
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }
}
