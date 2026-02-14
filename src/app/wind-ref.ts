import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WindRefService {
  getNativeWindow(): Window | null {
    return typeof window !== 'undefined' ? window : null;
  }
}