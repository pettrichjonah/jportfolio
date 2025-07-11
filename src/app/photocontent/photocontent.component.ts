import { Component, ElementRef, HostListener, ViewChild, viewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-photocontent',
    templateUrl: './photocontent.component.html',
    styleUrl: './photocontent.component.sass'
})
export class PhotocontentComponent {

  @ViewChild('closeModalButton') closeModalButton!: ElementRef<HTMLSpanElement>; 

  constructor(private titleService:Title) {
    this.titleService.setTitle("Photos - JP Media");
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModalButton.nativeElement.click();
    }
  }
}
