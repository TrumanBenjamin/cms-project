import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contact';

@Component({
  selector: 'cms-contact-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-edit.html',
  styleUrls: ['./contact-edit.css'],
})
export class ContactEdit implements OnInit {
  originalContact: Contact | null = null;
  contact: Contact | null = null;
  groupContacts: Contact[] = [];
  editMode: boolean = false;
  id: string | null = null;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'] ?? null;

      if (!this.id) {
        this.editMode = false;
        this.originalContact = null;
        this.groupContacts = [];
        this.contact = {
          id: '',
          name: '',
          email: '',
          phone: '',
          imageUrl: '',
          group: null as any,
        };
        return;
      }

      this.originalContact = this.contactService.getContact(this.id);

      if (!this.originalContact) {
        return;
      }

      this.editMode = true;
      this.contact = JSON.parse(JSON.stringify(this.originalContact));

      if (this.originalContact.group) {
        this.groupContacts = JSON.parse(JSON.stringify(this.originalContact.group));
      } else {
        this.groupContacts = [];
      }
    });
  }

  onSubmit(form: NgForm): void {
    const value = form.value;

    const newContact: Contact = {
      id: this.editMode && this.originalContact ? this.originalContact.id : '',
      name: value.name,
      email: value.email,
      phone: value.phone,
      imageUrl: value.imageUrl,
      group: this.groupContacts
    };

    if (this.editMode && this.originalContact) {
      this.contactService.updateContact(this.originalContact, newContact);
    } else {
      this.contactService.addContact(newContact);
    }

    this.router.navigate(['/contacts']);
  }

  onCancel(): void {
    this.router.navigate(['/contacts']);
  }
}