import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { BlockRightClickDirective } from '../../../shared/directives/block-right-click.directive';
import { ImagePathResolutionService, ImageDirectories } from '../../../shared/services/image-path-resolution.service';

@Component({
  selector: 'protectedimage',
  imports: [BlockRightClickDirective],
  templateUrl: './protected-image.component.html',
  styleUrl: './protected-image.component.sass',
  standalone: true
})
export class ProtectedImageComponent {

  @ViewChild('closeModalButton') closeModalButton!: ElementRef<HTMLSpanElement>; 

  @Input() public name = "";
  @Input() set category(value: ImageDirectories) {
    this.imageService.setCategory(value);
  }

  constructor(public imageService: ImagePathResolutionService) {}
  
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