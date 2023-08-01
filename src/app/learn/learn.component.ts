import { Component, inject } from '@angular/core';
import { Question, QuizService } from '../quiz.service';
import { Choices } from '../question';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {
  audio = new Audio();
  eachQ = true;

  quizService: QuizService = inject(QuizService);

  questions: Question[]; // Question is type of questions
  currentQuestionIndex = 0;
  answer:string;
  answerlist: string[] = [];

  constructor(){
    this.audio.src = '../assets/audio/clickchoice.wav';
    this.questions = this.quizService.getQuizDataNoImage();
    this.answer = this.getAnswer();

    let i=0;
    while(i<this.questions.length){
      this.answerlist.push(this.getAnswer2(i));
      i++
    }
    
  }
  

  getAnswer(){
    const choice = this.questions[this.currentQuestionIndex].choices;
    let answer = "";
    let i=0;
    while(i<choice.length){
      if(choice[i].isAnswer==true){
        answer = choice[i].text
        break;
      }
      i++
    }
    return answer;
    
  }

  getAnswer2(index:number){
    const choice = this.questions[index].choices;
    let answer = "";
    let i=0;
    while(i<choice.length){
      if(choice[i].isAnswer==true){
        answer = choice[i].text
        break;
      }
      i++
    }
    return answer;
    
  }

  OnclickNext(){
    if(this.currentQuestionIndex < this.questions.length - 1){
      this.playSound(); //play sound when click
      this.currentQuestionIndex++
      this.answer = this.getAnswer();
   }
    
  }

  OnclickPre(){
    if(this.currentQuestionIndex > 0){
      this.playSound(); //play sound when click
      this.currentQuestionIndex--
      this.answer = this.getAnswer();
   }
  }

  setToEachQuestion(){
    this.eachQ = true;
  }

  setToQuestionList(){
    this.eachQ = false;
  }

   // Play sound
   private playSound(){
    this.audio.load();
    this.audio.addEventListener('canplaythrough' , () => {
      this.audio.play();
    })
  }
  
}
