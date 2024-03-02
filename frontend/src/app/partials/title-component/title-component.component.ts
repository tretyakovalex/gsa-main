import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-component',
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.scss']
})
export class TitleComponentComponent {
  @Input() titleText!: string;
  @Input() backgroundImagePath: string = '/assets/about_us_background.webp';
}
