import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { AboutComponent } from './about/about.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  {path: '' , component: QuizComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'quiz' , component:QuizComponent},
  {path: 'learn' , component:LearnComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


