import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Document } from '../document.model';
import { DocumentService } from '../document';
import { DocumentItemComponent } from '../document-item/document-item';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cms-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent, RouterLink],
  templateUrl: './document-list.html',
  styleUrls: ['./document-list.css'],
})
export class DocumentListComponent implements OnInit, OnDestroy {
  documents: Document[] = [];
  subscription!: Subscription;

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documents = this.documentService.getDocuments();

    this.subscription = this.documentService.documentListChangedEvent
      .subscribe((documentsList: Document[]) => {
        this.documents = documentsList;
      });
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}