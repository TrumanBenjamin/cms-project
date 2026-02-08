import { Component, Input, Output, EventEmitter, } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-item',
  standalone: true,
  templateUrl: './document-item.html',
  styleUrls: ['./document-item.css']
})
export class DocumentItemComponent {
  @Input() document!: Document;

   @Output() documentSelected = new EventEmitter<Document>();

  onSelected() {
    this.documentSelected.emit(this.document);
  }
}
