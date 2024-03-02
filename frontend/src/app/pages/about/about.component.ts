import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  titleText: string = 'About Us';
  title_bg_img_path: string = '/assets/about_us_background.webp';

}
