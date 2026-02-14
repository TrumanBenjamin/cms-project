import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contact';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'cms-contact-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './contact-detail.html',
  styleUrls: ['./contact-detail.css']
})
export class ContactDetailComponent implements OnInit {
  contact: Contact | null = null;

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id: string = params['id'];
      this.contact = this.contactService.getContact(id);
    });
  }

  onDelete() {
    if (!this.contact) return;

    this.contactService.deleteContact(this.contact);
    this.router.navigateByUrl('/contacts');
  }
}
