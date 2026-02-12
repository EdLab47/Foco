export interface InstructionStep {
  id: number;
  title: string;
  content: string[];
  icon?: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  checked: boolean;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}