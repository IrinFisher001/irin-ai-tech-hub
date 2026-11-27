import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AskIrinService } from '../../core/ask-irin/ask-irin.service';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  from: 'user' | 'ai';
  text: string;
  links?: { label: string; route: string }[];
}

@Component({
  selector: 'app-chat-assistant',
  imports: [
  RouterLink,
  FormsModule
],
  templateUrl: './chat-assistant.html',
  styleUrl: './chat-assistant.scss'
})
export class ChatAssistant {

  private readonly irin = inject(AskIrinService);

  isOpen = false;

  messages: ChatMessage[] = [
    {
      from: 'ai',
      text: this.irin.greeting
    }
  ];

  suggestions: string[] = this.irin.starters;

  input = '';

  toggleChat(): void {
    this.isOpen = !this.isOpen;
  }

  send(question?: string): void {

    const q = (question ?? this.input).trim();

    if (!q) {
      return;
    }

    this.messages.push({
      from: 'user',
      text: q
    });

    const answer = this.irin.ask(q);

    setTimeout(() => {

      this.messages.push({
        from: 'ai',
        text: answer.text,
        links: answer.links
      });

      this.suggestions = answer.followUps;

    }, 350);

    this.input = '';
  }
}