import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({ providedIn: 'root' })
export class ContactService {
  contacts: Contact[] = [];

  contactSelectedEvent = new EventEmitter<Contact>();
  contactChangedEvent = new EventEmitter<Contact[]>();

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact | null {
    return this.contacts.find(c => c.id === id) ?? null;
  }

  deleteContact(contact: Contact) {
    if (!contact) return;

    const pos = this.contacts.indexOf(contact);
    if (pos < 0) return;

    this.contacts.splice(pos, 1);
    this.contactChangedEvent.emit(this.contacts.slice());
  }

  addContact(contact: Contact) {
    if (!contact) return;

    // make a copy so we don't accidentally keep references
    const newContact: Contact = { ...contact };

    // give it an id if it doesn't have one
    if (!newContact.id) {
      newContact.id = this.getMaxId();
    }

    this.contacts.push(newContact);
    this.contactChangedEvent.emit(this.contacts.slice());
  }

  updateContact(contact: Contact) {
    if (!contact) return;

    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index < 0) return;

    this.contacts[index] = { ...contact };
    this.contactChangedEvent.emit(this.contacts.slice());
  }

  private getMaxId(): string {
    let max = 0;
    for (const c of this.contacts) {
      const current = parseInt(c.id, 10);
      if (!isNaN(current) && current > max) max = current;
    }
    return String(max + 1);
}

}