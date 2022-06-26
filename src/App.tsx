import React, { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import { BackgroundVideo } from "./components/BackgroundVideo";
import { AppState } from "./helpers/redux/store";

const Home = React.lazy(() => import("./pages/Home"));
const Quiz = React.lazy(() => import("./pages/Quiz"));
const Filters = React.lazy(() => import("./pages/Filters"));

function App() {
  const { questions, scoure } = useSelector((state: AppState) => state.QuizApp);
  return (
    <div className="App">
      <BackgroundVideo />
      <Suspense fallback={<h1>Loading....</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
