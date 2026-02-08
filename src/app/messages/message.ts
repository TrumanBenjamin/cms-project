import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Message[] = [];
  messageChangedEvent = new EventEmitter<Message[]>();

  constructor() {
    this.messages = MOCKMESSAGES;
  }

  getMessages(): Message[] {
    return this.messages.slice();
  }

  getMessage(id: string): Message | null {
    for (const msg of this.messages) {
      if (msg.id === id) {
        return msg;
      }
    }
    return null;
  }

    addMessage(message: Message) {
    const maxId = this.messages.reduce((max, m) => Math.max(max, Number(m.id) || 0), 0);
    message.id = String(maxId + 1);

    this.messages.push(message);
    this.messageChangedEvent.emit(this.messages.slice());
  }
}
