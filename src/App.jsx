/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import Question from "./components/Question";
import "./App.css";
import Welcome from "./components/Welcome";
import { QuizContext } from "./context/quiz";
import GameOver from "./components/GameOver";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);
  useEffect(() => {
    //embaralhar perguntas
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
