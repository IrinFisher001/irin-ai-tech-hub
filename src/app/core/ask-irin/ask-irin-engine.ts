import { CONFIDENTIAL, DECLINE_PERSONAL, FALLBACK, GREETING, KB, STARTER_QUESTIONS, THANKS } from './knowledge-base';
import type { KbEntry, KbLink } from './knowledge-base';

export interface AskIrinAnswer {
  text: string;
  links: KbLink[];
  followUps: string[];
  /** Id of the matched topic, or null when nothing matched. Handy for testing. */
  matched: string | null;
}

export { STARTER_QUESTIONS, GREETING };

const STOP = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'do', 'does', 'did', 'has', 'have', 'had', 'of', 'to', 'in', 'on', 'at',
  'for', 'with', 'about', 'and', 'or', 'what', 'which', 'who', 'how', 'can', 'could', 'you', 'your', 'he', 'she', 'his',
  'her', 'him', 'irin', 'tell', 'me', 'please', 'any', 'some', 'it', 'this', 'that', 'there', 'i', 'my', 'we', 'would',
]);

const PERSONAL = /\b(id number|identity number|passport|home address|street address|where do you live|where does irin live|date of birth|birthday|how old|\bage\b|salary|marital|married|religion|race|bank account|banking|password|children)\b/;
const CLIENTS = /\b(client names?|which clients|who are (your|irins?) clients|which companies|customer list|nda|confidential|private client)\b/;
const GREET = /^(hi|hello|hey|howzit|good (morning|afternoon|evening))\b/;
const THANK = /\b(thanks|thank you|cheers|appreciate)\b/;

/** Light stemming so "services" matches "service" and "projects" matches "project". */
function stem(t: string): string {
  if (t.length <= 4) return t;
  if (t.endsWith('ies')) return t.slice(0, -3) + 'y';
  if (t.endsWith('ing')) return t.slice(0, -3);
  if (t.endsWith('ed')) return t.slice(0, -2);
  if (t.endsWith('es')) return t.slice(0, -2);
  if (t.endsWith('s') && !t.endsWith('ss')) return t.slice(0, -1);
  return t;
}

/** Lower-cases, maps tech tokens (.NET, C#, CI/CD), strips punctuation and stems each word. */
export function prep(text: string): string {
  const cleaned = text
    .toLowerCase()
    .replace(/asp\.net/g, ' aspnet ')
    .replace(/\.net/g, ' dotnet ')
    .replace(/c#/g, ' csharp ')
    .replace(/ci\/cd/g, ' cicd ')
    .replace(/node\.js/g, ' nodejs ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
  return cleaned ? cleaned.split(' ').map(stem).join(' ') : '';
}

interface Compiled {
  entry: KbEntry;
  keywords: string[];
  examples: string[][];
}

const COMPILED: Compiled[] = KB.map((entry) => ({
  entry,
  keywords: entry.keywords.map(prep).filter((k) => k.length > 0),
  examples: entry.examples.map((e) => prep(e).split(' ').filter((t) => t && !STOP.has(t))),
}));

function score(c: Compiled, padded: string, qTokens: Set<string>): number {
  let s = 0;
  for (const kw of c.keywords) {
    if (padded.includes(' ' + kw + ' ')) s += 2 + kw.split(' ').length;
  }
  let best = 0;
  for (const ex of c.examples) {
    if (!ex.length) continue;
    const hits = ex.filter((t) => qTokens.has(t)).length;
    best = Math.max(best, hits / ex.length);
  }
  return s + best * 3;
}

const byId = (id: string): KbEntry => KB.find((e) => e.id === id) as KbEntry;

export function answerQuestion(question: string): AskIrinAnswer {
  const raw = (question || '').trim().slice(0, 300);
  const lower = raw.toLowerCase();
  const none = { links: [] as KbLink[], matched: null as string | null };

  if (!raw) {
    return { text: GREETING, followUps: STARTER_QUESTIONS.slice(0, 3), ...none };
  }
  if (PERSONAL.test(lower)) {
    return { text: DECLINE_PERSONAL, links: [{ label: 'Contact Irin', route: '/contact' }], followUps: STARTER_QUESTIONS.slice(0, 3), matched: 'declined' };
  }
  if (CLIENTS.test(lower)) {
    return { text: CONFIDENTIAL, links: [{ label: 'Projects', route: '/projects' }, { label: 'Contact Irin', route: '/contact' }], followUps: STARTER_QUESTIONS.slice(0, 3), matched: 'confidential' };
  }
  const words = lower.split(/\s+/).length;
  if (words <= 4 && GREET.test(lower)) {
    return { text: GREETING, followUps: STARTER_QUESTIONS.slice(0, 3), ...none, matched: 'greeting' };
  }
  if (words <= 6 && THANK.test(lower)) {
    return { text: THANKS, followUps: STARTER_QUESTIONS.slice(0, 3), ...none, matched: 'thanks' };
  }

  const prepared = prep(raw);
  const padded = ' ' + prepared + ' ';
  const qTokens = new Set(prepared.split(' ').filter((t) => t && !STOP.has(t)));

  let top: Compiled | null = null;
  let topScore = 0;
  for (const c of COMPILED) {
    const s = score(c, padded, qTokens);
    if (s > topScore) {
      topScore = s;
      top = c;
    }
  }

  if (!top || topScore < 2.5) {
    return { text: FALLBACK, links: [{ label: 'Contact Irin', route: '/contact' }], followUps: STARTER_QUESTIONS.slice(0, 3), matched: null };
  }
  const e = top.entry;
  return { text: e.answer, links: e.links ?? [], followUps: e.followUps ?? [], matched: e.id };
}
// byId is exported for tests that want to read an entry directly.
export { byId };
