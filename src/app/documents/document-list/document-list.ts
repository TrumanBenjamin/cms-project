import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Document } from '../document.model';
import { DocumentItemComponent } from '../document-item/document-item';

@Component({
  selector: 'cms-document-list',
  imports: [CommonModule, DocumentItemComponent],
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentListComponent {
  documents: Document[] = [
    new Document(
      '1',
      'CIT 260 - Object Oriented Programming',
      'Learn the basics of OOP with classes, objects, and inheritance.',
      'https://example.com/cit260.pdf',
      []
    ),
    new Document(
      '2',
      'CIT 366 - Full Web Stack Development',
      'Learn to build modern web applications using a full stack approach.',
      'https://example.com/cit366.pdf',
      []
    ),
    new Document(
      '3',
      'CIT 425 - Data Warehousing',
      'Learn concepts behind data warehouses and analytics.',
      'https://example.com/cit425.pdf',
      []
    ),
    new Document(
      '4',
      'CIT 460 - Enterprise Development',
      'Learn patterns and practices for enterprise apps.',
      'https://example.com/cit460.pdf',
      []
    ),
    new Document(
      '5',
      'CIT 495 - Senior Practicum',
      'Capstone-style practicum course with real project work.',
      'https://example.com/cit495.pdf',
      []
    ),
  ];

  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
