import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[cmsDropdown]',
  standalone: true
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {}

  @HostListener('click')
  toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('document:click', ['$event'])
  closeIfClickedOutside(event: Event) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}
