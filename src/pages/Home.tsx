import { Link } from "react-router-dom";
import { ITContainer } from "../common/FlexContainer";
import { Button } from "../common/Button";
import { Typography } from "../common/Typography";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const ulText: string[] = [
    "Multiple Ways Of Testing 💡",
    "Millions Of Questions 👀",
    "More And More Categories 📚",
    "Clean And Uniqe Style 💅",
  ];
  return (
    <div>
      <ITContainer
        jc={"space-evenly"}
        fd={"column"}
        ai={"center"}
        d={"flex"}
        m={"8rem 0 0 0 "}
        p={"5rem 0 "}
      >
        <Typography
          className="typo"
          component={"p"}
          fS="5rem"
          text="Test Your Knowledge"
          c="#c6ceff"
          style={{ fontWeight: "bolder" }}
        />
        <ITContainer
          d="flex"
          // style={{ border: "1px solid black" }}
          ai={"flex-start"}
          jc={"center"}
          m={"4.5rem 0"}
          w={"36rem"}
        >
          {ulText.map((item) => (
            <Typography
              key={item}
              m=" 0 0 1.5rem "
              as="li"
              text={item}
              fS="2.5rem"
              style={{ fontWeight: "600", color: "" }}
              c="#92e4f1"
            />
          ))}
        </ITContainer>
        <Button
          onClick={() => navigate("/filters")}
          title="Get Started"
          bg="#53a3d1"
          c="#f6ffff"
          fS="3rem"
          p="0.8rem 2rem"
          br="12px"
        />
      </ITContainer>
    </div>
  );
};
export default Home;
