import { Component, Input } from '@angular/core';
import { Document } from '../document.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'cms-document-item',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './document-item.html',
  styleUrls: ['./document-item.css']
})
export class DocumentItemComponent {
  @Input() document!: Document;
}