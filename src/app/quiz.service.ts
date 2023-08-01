import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})

//Data of questions
export class QuizService {
    
  constructor() { }

  getQuizData() {
    return this.quizData;
  }

  quizDataNoImg: Question[] = []

  getQuizDataNoImage(){
    return this.quizData.filter(question => !question.image);
  }
}
export { Question };

