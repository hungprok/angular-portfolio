import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  menuItems = [
    { name: 'Home', href: '#home-section' },
    { name: 'About', href: '#about-section' },
    { name: 'Resume', href: '#resume-section' },
    { name: 'Skils', href: '#skills-section' },
    { name: 'Projects', href: '#projects-section' },
    { name: 'Contact', href: '#footer' }
  ]

  title = 'Landing Page';

  constructor() { }

  ngOnInit(): void {
    console.log(this.menuItems);
  }

}
