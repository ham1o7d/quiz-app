import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Button } from "../common/Button";
import { ITContainer } from "../common/FlexContainer";
import { SelectInput } from "../common/SelectInput";
import { Typography } from "../common/Typography";
import {
  CategoryOptions,
  DifficultyOptions,
  QuestionsTypeOptions,
} from "../helpers/FiltersOptions";
import { getQuestions } from "../helpers/redux/actions";

const Filters = () => {
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [numOfQues, setNumOfQues] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchQuestions = async () => {
    setIsLoading(true);
    fetch(
      `https://opentdb.com/api.php?amount=${numOfQues}&category=${category}&difficulty=${difficulty}&type=${type}`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch(getQuestions(res.results));
        setIsLoading(false);
        navigate("/quiz");
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err);
      });
  };

  return (
    <ITContainer>
      <ITContainer w="70%">
        <ITContainer ai="flex-start" m="4rem 0 3rem">
          <Typography
            text="Questions Filters"
            fS="3.5rem"
            p="0 0 0.5rem"
            style={{ borderBottom: "3px solid #6ea6c7" }}
          />
        </ITContainer>
        <ITContainer ai="flex-start">
          <Typography
            text={"Number Of Questions:"}
            c="black"
            style={{ fontWeight: "bolder" }}
            fS="2.5rem"
          />
          <input
            type="number"
            min={10}
            max={50}
            value={numOfQues}
            onChange={(e) => setNumOfQues(parseInt(e.target.value))}
            style={{
              width: "100%",
              height: "4rem",
              fontSize: "1.8rem",
              backgroundColor: "#6ea6c7",
              color: "white",
              border: "none",
              outline: "none",
              padding: "0 0.5rem",
              borderRadius: "5px",
              margin: "1rem 0 2rem",
            }}
          />
        </ITContainer>

        <SelectInput
          lable="Select Category"
          name="category"
          setValue={setCategory}
          options={CategoryOptions}
        />
        <SelectInput
          lable="Select Difficulty"
          name="difficulty"
          setValue={setDifficulty}
          options={DifficultyOptions}
        />
        <SelectInput
          lable="Select Type"
          name="type"
          setValue={setType}
          options={QuestionsTypeOptions}
        />
        <Button
          title={isLoading ? "Loading...." : "Start"}
          p="0.5rem 2.5rem"
          fS="3.3rem"
          bg="#1da4f1fb"
          c="#e2e2e2"
          m="2rem 0 0 "
          br="10px"
          onClick={() => fetchQuestions()}
        />
      </ITContainer>
    </ITContainer>
  );
};

export default Filters;
