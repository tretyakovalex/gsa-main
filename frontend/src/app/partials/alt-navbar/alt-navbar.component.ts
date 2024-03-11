import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alt-navbar',
  templateUrl: './alt-navbar.component.html',
  styleUrls: ['./alt-navbar.component.scss']
})
export class AltNavbarComponent {
  isMenuOpen: boolean = false;
  screenWidth: number = 0;

  ngOnInit() {
    // Initialize screen width on component initialization
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
    // this.checkScreenWidth();
  }

  constructor(private router: Router) { }

  isRouteActive(routePath: string): boolean {
    return this.router.url === routePath;
  }

  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the user has scrolled past a certain threshold
    this.isSticky = window.scrollY > 100; // Adjust the threshold as needed
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // Update screen width on window resize
    this.screenWidth = window.innerWidth;
    // this.checkScreenWidth();
    console.log(this.screenWidth);
  }

  // checkScreenWidth() {
  //   // Update isMenuOpen based on screen width
  //   this.isMenuOpen = this.screenWidth <= 900;
  //   console.log(this.isMenuOpen);
  // }

  toggleMenu() {
    // Toggle isMenuOpen on button click
    this.isMenuOpen = !this.isMenuOpen;
    console.log(this.isMenuOpen);
  }
}
