import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Contact} from '../contact.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cms-contact-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css',
})
export class ContactItemComponent {
  @Input() contact!: Contact;
}
