import { Component } from '@angular/core';
import { DropdownDirective } from './shared/dropdown.directive';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'cms-header',
  standalone: true,
  imports: [
    DropdownDirective,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {}