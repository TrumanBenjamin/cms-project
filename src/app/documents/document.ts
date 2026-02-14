import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  documents: Document[] = [];
  documentSelectedEvent = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document | null {
    for (const doc of this.documents) {
      if (doc.id === id) return doc;
    }
    return null;
  }

  addDocument(document: Document) {
    this.documents.push(document);
    this.documentChangedEvent.emit(this.documents.slice());
  }

  updateDocument(document: Document) {
    const index = this.documents.findIndex(d => d.id === document.id);
    if (index < 0) return;

    this.documents[index] = document;
    this.documentChangedEvent.emit(this.documents.slice());
  }

  deleteDocument(document: Document) {
  if (!document) return;

  const pos = this.documents.indexOf(document);
  if (pos < 0) return;

  this.documents.splice(pos, 1);
  this.documentChangedEvent.emit(this.documents.slice());
}
}
