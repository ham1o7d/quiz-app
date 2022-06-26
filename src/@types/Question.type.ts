
export interface AppState{
  questions: Question[];
  scoure: number
}

export interface Question {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}
