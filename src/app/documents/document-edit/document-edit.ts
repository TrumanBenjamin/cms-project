import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Document } from '../document.model';
import { DocumentService } from '../document';

@Component({
  selector: 'cms-document-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './document-edit.html',
  styleUrls: ['./document-edit.css'],
})
export class DocumentEdit implements OnInit {
  editMode = false;
  id: string | null = null;
  originalDocument: Document | null = null;
  document: Document = {
    id: '',
    name: '',
    description: '',
    url: '',
    children: []
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private documentService: DocumentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'] ?? null;
      this.editMode = this.id !== null;

      if (this.editMode && this.id) {
        const found = this.documentService.getDocument(this.id);
        if (found) {
          this.originalDocument = found;

          this.document = {
            ...found,
            children: found.children ? [...found.children] : []
          };
        }
      } else {
        this.document = {
          id: '',
          name: '',
          description: '',
          url: '',
          children: []
        };
      }
    });
  }

  onSubmit(): void {
    if (this.editMode) {
      if (this.originalDocument) {
        this.documentService.updateDocument(this.originalDocument, this.document);
      }
    } else {
      this.documentService.addDocument(this.document);
    }

    this.router.navigateByUrl('/documents');
  }

  onCancel(): void {
    this.router.navigateByUrl('/documents');
  }
}
