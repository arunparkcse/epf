import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'vision-and-mission',
    loadComponent: () => import('./pages/vision-mission/vision-mission.component').then(m => m.VisionMissionComponent)
  },
  {
    path: 'certifications',
    loadComponent: () => import('./pages/certifications/certifications.component').then(m => m.CertificationsComponent)
  },
  {
    path: 'printing-technology',
    loadComponent: () => import('./pages/printing-technology/printing-technology.component').then(m => m.PrintingTechnologyComponent)
  },
  {
    path: 'company-profile',
    loadComponent: () => import('./pages/company-profile/company-profile.component').then(m => m.CompanyProfileComponent)
  },
  {
    path: 'flexible-packaging',
    loadComponent: () => import('./pages/flexible-packaging/flexible-packaging.component').then(m => m.FlexiblePackagingComponent)
  },
  {
    path: 'labels',
    loadComponent: () => import('./pages/labels/labels.component').then(m => m.LabelsComponent)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery.component').then(m => m.GalleryComponent)
  },
  {
    path: 'careers',
    loadComponent: () => import('./pages/careers/careers.component').then(m => m.CareersComponent)
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '' }
];
