import { Component, HostListener, OnInit  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  screenWidth: number = 0;

  ngOnInit() {
    // Initialize screen width on component initialization
    this.screenWidth = window.innerWidth;
    console.log(this.screenWidth);
    // this.checkScreenWidth();
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
