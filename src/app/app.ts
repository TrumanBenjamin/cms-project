import { Component, signal } from '@angular/core';
import { Header } from './header';
import { ContactsComponent } from './contacts/contacts';

@Component({
  selector: 'cms-root',
  imports: [Header, ContactsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cms');
}
