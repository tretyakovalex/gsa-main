import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-title-component',
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.scss']
})
export class TitleComponentComponent {
  @Input() titleText!: string;
  @Input() backgroundImagePath: string = '/assets/about_us_background.webp';

  isSticky: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check if the user has scrolled past a certain threshold
    this.isSticky = window.scrollY > 100; // Adjust the threshold as needed
  }
}
