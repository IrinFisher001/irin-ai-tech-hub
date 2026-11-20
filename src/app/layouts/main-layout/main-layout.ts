import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { ChatAssistant } from '../../shared/chat-assistant/chat-assistant';

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    ChatAssistant
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {}