import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { BlockRightClickDirective } from '../directives/block-right-click.directive';
import { ImageService, ImageDirectories } from '../services/image.service';

@Component({
  selector: 'protectedimage',
  imports: [BlockRightClickDirective],
  templateUrl: './protectedimage.component.html',
  styleUrl: './protectedimage.component.sass',
  standalone: true
})
export class ProtectedimageComponent {

  @ViewChild('closeModalButton') closeModalButton!: ElementRef<HTMLSpanElement>; 

  @Input() public name = "";
  @Input() set category(value: ImageDirectories) {
    this.imageService.setCategory(value);
  }

  constructor(public imageService: ImageService) {}
  
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'visible';
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isModalOpen) {
      this.closeModal();
    }
  }
}