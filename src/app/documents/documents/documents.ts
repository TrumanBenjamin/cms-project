import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Document } from '../document.model';
import { DocumentService } from '../document';
import { DocumentListComponent } from '../document-list/document-list';

@Component({
  selector: 'cms-documents',
  standalone: true,
  imports: [CommonModule, DocumentListComponent, RouterOutlet],
  templateUrl: './documents.html',
  styleUrls: ['./documents.css'],
})
export class DocumentsComponent implements OnInit {
  selectedDocument: Document | null = null;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.documentSelectedEvent.subscribe((document: Document) => {
      this.selectedDocument = document;
    });
  }
}
