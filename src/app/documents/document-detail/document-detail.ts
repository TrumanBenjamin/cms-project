import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Document } from '../document.model';
import { DocumentService } from '../document';
import { RouterLink } from '@angular/router';
import { WindRefService } from '../../wind-ref'; 

@Component({
  selector: 'cms-document-detail',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './document-detail.html',
  styleUrls: ['./document-detail.css'],
})
export class DocumentDetailComponent implements OnInit {
  document: Document | null = null;
  children: Document[] = [];
  nativeWindow: Window | null = null;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private route: ActivatedRoute,
    private windRef: WindRefService
  ) {}

  ngOnInit(): void {
    this.nativeWindow = this.windRef.getNativeWindow();

    this.route.params.subscribe((params) => {
      const id: string = params['id'];
      this.document = this.documentService.getDocument(id);
      this.children = this.document?.children ?? [];
    });
  }

  onView() {
    const url = this.document?.url;
    if (!url || !this.nativeWindow) return;
    this.nativeWindow.open(url);
  }

  onDelete() {
    if (!this.document) return;

    this.documentService.deleteDocument(this.document);
    this.router.navigateByUrl('/documents');
  }
}