import { Component , inject } from '@angular/core';
import { Choices , Question } from '../question';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz', //เอาไปใช้เรียก
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  audio = new Audio();

  quizService: QuizService = inject(QuizService);

  questions: Question[];
  currentQuestionIndex = 0;
  isEnd = false;
  score = 0;


  constructor(){
      this.questions = this.quizService.getQuizData();
      this.questions[this.currentQuestionIndex].choices.sort((a,b)=> 0.5 - Math.random()) //เรียงตัวเลือกใหม่
      this.questions.sort((a, b) => 0.5 - Math.random()); //เรียงข้อใหม่ 
      this.audio.src = '../assets/audio/clickchoice.wav';
  }

  onClickChoice(choice: Choices){
    console.log('User clicked : ' + choice.text);
    this.playSound();

    if(choice.isAnswer) this.score++

    if(this.currentQuestionIndex < this.questions.length - 1){
       this.currentQuestionIndex++
    }else{
      this.isEnd = true;
    }
  }

  private playSound(){
    this.audio.load();
    this.audio.addEventListener('canplaythrough' , () => {
      this.audio.play();
    })
  }

  onClickNewQuizz(){
    this.newquiz()
  }

  private newquiz(){
    this.questions[this.currentQuestionIndex].choices.sort((a,b)=> 0.5 - Math.random()) //เรียงตัวเลือกใหม่
    this.questions.sort((a, b) => 0.5 - Math.random()); //เรียงข้อใหม่ 
    this.isEnd = false;
    this.currentQuestionIndex = 0;
    this.score = 0;
  }
}
