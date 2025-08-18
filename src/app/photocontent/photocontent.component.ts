import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProtectedimageComponent } from "../protectedimage/protectedimage.component";
import { ImageDirectories, ImageService } from '../services/image.service';

@Component({
    selector: 'app-photocontent',
    templateUrl: './photocontent.component.html',
    styleUrl: './photocontent.component.sass'
})
export class PhotocontentComponent {

  @ViewChild('closeModalButton') closeModalButton!: ElementRef<HTMLSpanElement>; 

  constructor(
    private titleService: Title,
    private imageService: ImageService
  ) {
    this.titleService.setTitle("Photos - JP Media");
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModalButton.nativeElement.click();
    }
    this.imageService.setCategory(ImageDirectories.EditorsPicks);
  }
}
