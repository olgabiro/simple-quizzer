import {Quiz} from "./quiz/quiz";

export const QUIZ: Quiz = new Quiz(
  [
    {
      description: "What is the longest?",
      answers: [
        {
          description: "Snake",
          correct: false
        },
        {
          description: "Bread",
          correct: false
        },
        {
          description: "This code",
          correct: true
        },
        {
          description: "Poos",
          correct: false
        }
      ]
    },
    {
      description: "What is the sweetest?",
      answers: [
        {
          description: "test",
          correct: false
        },
        {
          description: "Bread",
          correct: false
        },
        {
          description: "Schoggigipfeli",
          correct: false
        },
        {
          description: "<3",
          correct: true
        }
      ]
    },
    {
      description: "What is the best?",
      answers: [
        {
          description: "Miu",
          correct: false
        },
        {
          description: "Barni",
          correct: true
        },
        {
          description: "Pasta",
          correct: true
        },
        {
          description: "Poos",
          correct: false
        }
      ]
    }
  ]
)
