import { useState } from "react";
import { useSelector } from "react-redux";
import { ITContainer } from "../common/FlexContainer";
import { QuestionCOM } from "../components/Question";
import { Typography } from "../common/Typography";
import { AppState } from "../helpers/redux/store";

const Quiz = () => {
  const [index, setindex] = useState<number>(0);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { questions, scoure } = useSelector((state: AppState) => state.QuizApp);

  const nextQuestion = () => {
    if (index < questions.length - 1) {
      setindex(index + 1);
      setIsClicked(false);
    }
  };

  return (
    <div>
      <ITContainer>
        {index === questions.length - 1 && isClicked && (
          <Typography
            text={"You got " + scoure + " / " + questions.length}
            m={"4rem 0 0"}
            p={"0.5rem 1rem"}
            fS={"3rem"}
            style={{
              backgroundColor: "#05e182",
            }}
            c="#f6ffff"
          />
        )}
        <QuestionCOM
          index={index}
          numOfQuestions={questions.length}
          question={questions[index]}
          nextQuestion={nextQuestion}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
          isFinshed={questions.length - 1 === index}
        />
      </ITContainer>
    </div>
  );
};

export default Quiz;
