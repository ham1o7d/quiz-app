import { QuestionsActions } from "../../@types/Question.action";
import { Question } from "../../@types/Question.type";
import { ConstantQuiz } from "./conatant";

export const getQuestions = (allQuestion: Question[]): QuestionsActions => {
  return {
    type: ConstantQuiz.GET_QUESTIONS,
    payload: allQuestion,
  };
};

export const setScoure = (count: number): QuestionsActions => {
  return{
    type: ConstantQuiz.SET_SCOURE,
    payload: count,
  }
};

