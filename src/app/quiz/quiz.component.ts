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

  questions: Question[]; // Question is type of questions
  currentQuestionIndex = 0;
  isEnd = false;
  score = 0;


  //intitial value when start
  constructor(){ 
      this.questions = this.quizService.getQuizData();
      this.questions[this.currentQuestionIndex].choices.sort((a,b)=> 0.5 - Math.random()) //เรียงตัวเลือกใหม่
      this.questions.sort((a, b) => 0.5 - Math.random()); //เรียงข้อใหม่ 
      this.audio.src = '../assets/audio/clickchoice.wav';
  }

  //Method when user click choice
  onClickChoice(choice: Choices){ //variable choice type Choices
    console.log('User clicked : ' + choice.text);
    console.log('Score : ' + this.score);
    this.playSound(); //play sound when click

    if(choice.isAnswer) this.score++ //if answer is correct

    if(this.currentQuestionIndex < this.questions.length - 1){
       this.currentQuestionIndex++
    }else{
      this.isEnd = true;
    }
  }

  // Play sound
  private playSound(){
    this.audio.load();
    this.audio.addEventListener('canplaythrough' , () => {
      this.audio.play();
    })
  }


  // OnClick for New quiz
  onClickNewQuizz(){ //function public for call new quizz
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
