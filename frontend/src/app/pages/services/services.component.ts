import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  titleText: string = 'Our Services';
  title_bg_img_path: string = '/assets/our_service_background.jpeg';

}
