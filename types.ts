
export enum Level {
  SD = 'SD',
  SMP = 'SMP',
  SMA = 'SMA'
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Subject {
  id: string;
  name: string;
  level: Level;
  icon?: string;
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: number[];
  timeLeft: number;
  isFinished: boolean;
  isStarted: boolean;
}

export interface FestivalInfo {
  title: string;
  date: string;
  description: string;
  level: Level;
}
