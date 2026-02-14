import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[blockRightClick]',
  standalone: true
})
export class BlockRightClickDirective {
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }
}
