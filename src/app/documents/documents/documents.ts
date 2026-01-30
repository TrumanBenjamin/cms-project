import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model'
import { DocumentListComponent } from '../document-list/document-list';
import { DocumentDetailComponent } from '../document-detail/document-detail';

@Component({
  selector: 'cms-documents',
  standalone: true,
  imports: [CommonModule, 
    DocumentListComponent, 
    DocumentDetailComponent],
  templateUrl: './documents.html',
  styleUrl: './documents.css',
})
export class DocumentsComponent {
  selectedDocument?: Document;

  onSelectedDocument(document: Document) {
    this.selectedDocument = document;
  }
}
