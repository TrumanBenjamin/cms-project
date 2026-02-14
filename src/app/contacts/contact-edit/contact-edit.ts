import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contact';

@Component({
  selector: 'cms-contact-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-edit.html',
  styleUrls: ['./contact-edit.css']
})
export class ContactEdit implements OnInit {
  editMode = false;
  contact: Contact = {
    id: '',
    name: '',
    email: '',
    phone: '',
    imageUrl: '',
    group: null as any
  };

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (!id) {
        this.editMode = false;
        return;
      }

      this.editMode = true;
      const found = this.contactService.getContact(id);
      if (found) this.contact = { ...found };
    });
  }

  onSave(): void {
    if (this.editMode) {
      this.contactService.updateContact(this.contact);
    } else {
      this.contactService.addContact(this.contact);
    }

    this.router.navigateByUrl('/contacts');
  }

  onCancel(): void {
    this.router.navigateByUrl('/contacts');
  }
}
