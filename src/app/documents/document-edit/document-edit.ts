import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  originalDocument: Document | null = null;
  document: Document | null = null;
  editMode = false;
  id: string | null = null;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'] ?? null;

      if (!this.id) {
        this.editMode = false;
        this.originalDocument = null;
        this.document = {
          id: '',
          name: '',
          description: '',
          url: '',
          children: [],
        };
        return;
      }

      this.originalDocument = this.documentService.getDocument(this.id);

      if (!this.originalDocument) {
        return;
      }

      this.editMode = true;

      this.document = JSON.parse(JSON.stringify(this.originalDocument));
    });
  }

  onSubmit(form: NgForm): void {
    const value = form.value;

    const newDocument: Document = {
      id: this.editMode && this.originalDocument ? this.originalDocument.id : '',
      name: value.name,
      description: value.description,
      url: value.url,
      children:
        this.editMode && this.originalDocument
          ? this.originalDocument.children
          : [],
    };

    if (this.editMode && this.originalDocument) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }

    this.router.navigate(['/documents']);
  }

  onCancel(): void {
    this.router.navigate(['/documents']);
  }
}