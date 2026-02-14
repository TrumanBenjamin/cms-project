import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import { Document } from '../document.model';
import { DocumentService } from '../document';
import { DocumentItemComponent } from '../document-item/document-item';

@Component({
  selector: 'cms-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent, RouterLink],
  templateUrl: './document-list.html',
  styleUrls: ['./document-list.css'],
})
export class DocumentListComponent implements OnInit {
  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();

    this.documentService.documentChangedEvent.subscribe((documents: Document[]) => {
      this.documents = documents;
  });
  }
}