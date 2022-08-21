import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hưng Nguyễn Blog';
  menuItems = [
    { name: 'About', href: '#about-section' },
    { name: 'Resume', href: '#resume-section' },
    { name: 'Skils', href: '#skills-section' },
    { name: 'Projects', href: '#projects-section' },
    { name: 'Contact', href: '#footer' }
  ]
}
