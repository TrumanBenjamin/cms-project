import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { ContactsComponent } from './contacts/contacts';
import { DocumentsComponent } from './documents/documents/documents';
import { MessageListComponent } from './messages/message-list/message-list';

@Component({
  selector: 'cms-root',
  imports: [
    CommonModule,
    HeaderComponent, 
    ContactsComponent, 
    DocumentsComponent, 
    MessageListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  selectedFeature: string = 'documents';

  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }

  protected readonly title = signal('cms');
}
