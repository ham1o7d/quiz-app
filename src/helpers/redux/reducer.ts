import { QuestionsActions } from "../../@types/Question.action";
import { AppState } from "../../@types/Question.type";
import { ConstantQuiz } from "./conatant";

const initalState: AppState = {
  questions: [],
  scoure: 0,
};

export const AppReducer = (
  state: AppState = initalState,
  action: QuestionsActions
): AppState => {

  switch (action.type) {
    case ConstantQuiz.GET_QUESTIONS: {
      return {
        ...state,
        questions: action.payload,
      };
    }
    case ConstantQuiz.SET_SCOURE: {
      return {
        ...state,
        scoure: action.payload !==0 ? state.scoure + 1 : 0,
      };
    }

    default:
      return state;
  }
};
