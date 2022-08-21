import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  menuItems = [
    { name: 'About', href: '#about-section' },
    { name: 'Resume', href: '#resume-section' },
    { name: 'Skills', href: '#skills-section' },
    { name: 'Projects', href: '#projects-section' },
    { name: 'Contact', href: '#footer' }
  ]

  constructor() { }
  ngOnInit(): void {
  }
}
