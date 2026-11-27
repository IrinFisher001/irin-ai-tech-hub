import { Injectable } from '@angular/core';
import { GREETING, STARTER_QUESTIONS, answerQuestion } from './ask-irin-engine';
import type { AskIrinAnswer } from './ask-irin-engine';

/**
 * Ask IRIN AI, v1. Answers questions from the curated knowledge base in knowledge-base.ts.
 * Everything runs in the visitor's browser: nothing is sent or stored.
 * A later version can swap ask() for a call to a backend that uses a language model.
 */
@Injectable({ providedIn: 'root' })
export class AskIrinService {
  readonly greeting = GREETING;
  readonly starters = STARTER_QUESTIONS;

  ask(question: string): AskIrinAnswer {
    return answerQuestion(question);
  }
}
