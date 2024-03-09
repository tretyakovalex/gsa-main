import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  imgs: string[] = [
    '/assets/images/IMG_1.jpeg',
    '/assets/images/IMG_2.jpeg',
    '/assets/images/IMG_3.jpeg',
    '/assets/images/IMG_4.jpeg',
    '/assets/images/IMG_5.jpeg',
    '/assets/images/IMG_6.jpeg',
    '/assets/images/IMG_7.jpeg',
    '/assets/images/IMG_8.jpeg',
    '/assets/images/IMG_9.jpeg',
    '/assets/images/IMG_10.jpeg',
    '/assets/images/IMG_11.jpeg',
    '/assets/images/IMG_12.jpeg',
    '/assets/images/IMG_13.jpeg',
    '/assets/images/IMG_14.jpeg',
    '/assets/images/IMG_15.jpeg'
  ];

  constructor(private renderer: Renderer2){}

  columns = 4; // Number of columns

  // Generate an array of numbers representing column indices
  columnIndices = Array(this.columns).fill(0).map((x, i) => i);

  getImagesForColumn(columnIndex: number): string[] {
    const totalImages = this.imgs.length;
    const imagesPerColumn = Math.ceil(totalImages / this.columns);
    const startIndex = columnIndex * imagesPerColumn;
    const endIndex = Math.min(startIndex + imagesPerColumn, totalImages);
    console.log(this.imgs.slice(startIndex, endIndex));
    return this.imgs.slice(startIndex, endIndex);
  }

    // // --- lazy loading images ---
    // loaded(event: Event) {
    //   const img = event.target as HTMLImageElement;
    //   const blurredImageDiv = img.parentElement;
    //   this.renderer.addClass(blurredImageDiv, 'loaded');
    // }
  
    // getModifiedImageUrl(originalUrl: string): string {
    //   const [imageName, fileExtension] = originalUrl.split('.');
    //   const modifiedUrl = `${imageName}-small.${fileExtension}`;
    //   return modifiedUrl;
    // }
    // // ----------------------------

}
