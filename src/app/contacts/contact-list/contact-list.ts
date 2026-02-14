import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Contact } from '../contact.model';
import { ContactService } from '../contact';
import { ContactItemComponent } from '../contact-item/contact-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cms-contact-list',
  standalone: true,
  imports: [CommonModule, ContactItemComponent,  RouterLink],
  templateUrl: './contact-list.html',
  styleUrls: ['./contact-list.css']
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();

    this.contactService.contactChangedEvent.subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }
}
