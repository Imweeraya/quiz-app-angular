import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})

//Data of questions
export class QuizService {
  quizData: Question[] = [
    {
        id: 1,
        text: "What is the capital city of France?",
        choices: [
            { id: 1, text: "Berlin", isAnswer: false },
            { id: 2, text: "London", isAnswer: false },
            { id: 3, text: "Paris", isAnswer: true },
            { id: 4, text: "Madrid", isAnswer: false }
        ]
    },
    {
        id: 2,
        text: "How many colors are there in a rainbow?",
        choices: [
            { id: 1, text: "5", isAnswer: false },
            { id: 2, text: "7", isAnswer: true },
            { id: 3, text: "10", isAnswer: false },
            { id: 4, text: "3", isAnswer: false }
        ]
    },
    {
        id: 3,
        text: "What do you call a group of fish?",
        image: '../assets/images/q3.jpg',
        choices: [
            { id: 1, text: "Herd", isAnswer: false },
            { id: 2, text: "Flock", isAnswer: false },
            { id: 3, text: "School", isAnswer: true },
            { id: 4, text: "Pack", isAnswer: false }
        ]
    },
    {
        id: 4,
        text: "Which planet is known as the 'Red Planet'?",
        choices: [
            { id: 1, text: "Venus", isAnswer: false },
            { id: 2, text: "Mars", isAnswer: true },
            { id: 3, text: "Jupiter", isAnswer: false },
            { id: 4, text: "Saturn", isAnswer: false }
        ]
    },
    {
        id: 5,
        text: "What is the name of the toy that goes 'buzz' and can fly?",
        choices: [
            { id: 1, text: "Train", isAnswer: false },
            { id: 2, text: "Kite", isAnswer: true },
            { id: 3, text: "Ball", isAnswer: false },
            { id: 4, text: "Car", isAnswer: false }
        ]
    },
    {
        id: 6,
        text: "How many sides does a triangle have?",
        choices: [
            { id: 1, text: "3", isAnswer: true },
            { id: 2, text: "4", isAnswer: false },
            { id: 3, text: "5", isAnswer: false },
            { id: 4, text: "6", isAnswer: false }
        ]
    },
    {
        id: 7,
        text: "What is the name of the biggest ocean on Earth?",
        image: '../assets/images/q7.png',
        choices: [
            { id: 1, text: "Pacific Ocean", isAnswer: true },
            { id: 2, text: "Atlantic Ocean", isAnswer: false },
            { id: 3, text: "Indian Ocean", isAnswer: false },
            { id: 4, text: "Arctic Ocean", isAnswer: false }
        ]
    },
    {
        id: 8,
        text: "Which animal is known for being the largest mammal on Earth?",
        choices: [
            { id: 1, text: "Elephant", isAnswer: false },
            { id: 2, text: "Blue Whale", isAnswer: true },
            { id: 3, text: "Giraffe", isAnswer: false },
            { id: 4, text: "Lion", isAnswer: false }
        ]
    },
    {
        id: 9,
        text: "What is the process by which plants make their food?",
        choices: [
            { id: 1, text: "Respiration", isAnswer: false },
            { id: 2, text: "Photosynthesis", isAnswer: true },
            { id: 3, text: "Digestion", isAnswer: false },
            { id: 4, text: "Transpiration", isAnswer: false }
        ]
    },
    {
        id: 10,
        text: "How many days are there in a leap year?",
        choices: [
            { id: 1, text: "365", isAnswer: false },
            { id: 2, text: "366", isAnswer: true },
            { id: 3, text: "364", isAnswer: false },
            { id: 4, text: "360", isAnswer: false }
        ]
    },
    {id: 11,
    text: "Who painted the Mona Lisa?",
    image: '../assets/images/q11.jpg',
    choices: [
        { id: 1, text: "Pablo Picasso", isAnswer: false },
        { id: 2, text: "Leonardo Da Vinci", isAnswer: false },
        { id: 3, text: "Vincent van Gogh", isAnswer: true },
        { id: 4, text: "Michelangelo", isAnswer: false }
    ]}

];

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

