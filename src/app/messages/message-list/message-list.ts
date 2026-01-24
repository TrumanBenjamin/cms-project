import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message.model';
import { MessageItemComponent } from '../message-item/message-item';
import { MessageEditComponent } from '../message-edit/message-edit';

@Component({
  selector: 'cms-message-list',
  standalone: true,
  imports: [
    CommonModule, 
    MessageItemComponent, 
    MessageEditComponent
  ],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageListComponent {
  messages: Message[] = [
  new Message('1', 'Hello', 'This is the first message', 'Truman'),
  new Message('2', 'Question', 'Are we still meeting today?', 'Rex'),
  new Message('3', 'FYI', 'Don’t forget the assignment is due soon', 'Kent')
];
  onAddMessage(message: Message) {
  this.messages.push(message);
}
}
