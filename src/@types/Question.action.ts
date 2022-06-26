import { ConstantQuiz } from "../helpers/redux/conatant";
import { Question } from "./Question.type";


interface GetQuestions{
  type: ConstantQuiz.GET_QUESTIONS;
  payload: Question[]
}

interface SetScoure{
  type: ConstantQuiz.SET_SCOURE,
  payload: number
}

export type QuestionsActions= GetQuestions | SetScoure;