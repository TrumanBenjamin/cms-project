import { Component, Input, OnInit } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-item',
  standalone: true,
  templateUrl: './document-item.html',
  styleUrls: ['./document-item.css']
})
export class DocumentItemComponent implements OnInit {
  @Input() document!: Document;

  constructor() {}

  ngOnInit(): void {}
}
