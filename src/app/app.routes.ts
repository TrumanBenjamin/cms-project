import { Routes } from '@angular/router';

import { DocumentsComponent } from './documents/documents/documents';
import { DocumentDetailComponent } from './documents/document-detail/document-detail';
import { DocumentEdit } from './documents/document-edit/document-edit';

import { MessageListComponent } from './messages/message-list/message-list';
import { ContactsComponent } from './contacts/contacts';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail';
import { ContactEdit } from './contacts/contact-edit/contact-edit';

export const routes: Routes = [
  { path: '', redirectTo: 'documents', pathMatch: 'full' },

  {
    path: 'documents',
    component: DocumentsComponent,
    children: [
      { path: 'new', component: DocumentEdit },
      { path: ':id', component: DocumentDetailComponent },
      { path: ':id/edit', component: DocumentEdit },
    ]
  },

  { path: 'messages', component: MessageListComponent },
  
    {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      { path: 'new', component: ContactEdit },
      { path: ':id', component: ContactDetailComponent },
      { path: ':id/edit', component: ContactEdit },
    ]
    },
];