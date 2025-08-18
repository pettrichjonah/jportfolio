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

  @Input() public name = "";
  @Input() set category(value: ImageDirectories) {
    this.imageService.setCategory(value);
  }

  constructor(public imageService: ImageService) {}
}