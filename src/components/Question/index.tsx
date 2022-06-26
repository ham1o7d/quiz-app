import { useState } from "react";
import { useDispatch } from "react-redux";
import { Question } from "../../@types/Question.type";
import { ITContainer } from "../../common/FlexContainer";
import { setScoure } from "../../helpers/redux/actions";
import { Button } from "../../common/Button";
import { Typography } from "../../common/Typography";
import { useNavigate } from "react-router";

interface Props {
  question: Question;
  nextQuestion: () => void;
  isClicked: boolean;
  isFinshed: boolean;
  index: number;
  numOfQuestions: number;
  setIsClicked: (bool: boolean) => void;
}

export const QuestionCOM = ({
  question,
  nextQuestion,
  index,
  numOfQuestions,
  isClicked,
  isFinshed,
  setIsClicked,
}: Props) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userAnswer, setUserAnswer] = useState<string>("");
  const allAnswers: string[] = [
    ...question.incorrect_answers,
    question.correct_answer,
  ].sort();

  const answerCheck = (ua: string) => {
    setUserAnswer(ua);
    setIsClicked(true);
    if (question.correct_answer === ua) dispatch(setScoure(1));
  };

  return (
    <ITContainer m={"4rem 0 0"} h={"45rem"} jc={"space-evenly"}>
      <Typography
        text={index + 1 + "/" + numOfQuestions + " " + question.question}
        fS={"2.5rem"}
        component={"h2"}
        w={"80%"}
        style={{ textAlign: "center" }}
      />
      <ITContainer>
        {allAnswers.map((ans) => (
          <Button
            title={ans}
            p={"1rem 1.5rem"}
            style={{ marginBottom: "1.5rem" }}
            key={ans}
            w={"27rem"}
            onClick={(e) => answerCheck(ans)}
            bg={
              isClicked && question.correct_answer === ans
                ? "#23b86d"
                : isClicked && userAnswer === ans
                ? "#bd1919"
                : "white  "
            }
            disabled={isClicked}
          />
        ))}
      </ITContainer>
      <Button
        disabled={!isClicked}
        title={isFinshed ? "Finsh Quiz" : "Next Question"}
        bg="#53a3d1"
        c="#f6ffff"
        fS="2rem"
        p="0.8rem 2rem"
        onClick={
          index + 1 === numOfQuestions
            ? () => {
                navigate("/");
                dispatch(setScoure(0));
              }
            : () => nextQuestion()
        }
      />
    </ITContainer>
  );
};
