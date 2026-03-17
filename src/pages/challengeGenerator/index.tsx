//react
import { useState } from "react";
import { generateChallenge } from "../../services/geminiService";
//style
import "./styles.scss";
//components
import CodeEditor from "../../components/CodeEditor";
import DifficultSelector from "../../components/DifficultSelector";
import GenerateButton from "../../components/GenerateButton";
import LanguagesSelector from "../../components/LanguagesSelector";
import PageTitle from "../../components/PageTitle";
import ProblemDescription from "../../components/ProblemDescription";
import SubmitButton from "../../components/submitButton";

const ChallengeGenerator = () => {
  const [language, setLanguage] = useState("JavaScript");
  const [difficulty, setDifficulty] = useState("Easy");

  const [problem, setProblem] = useState({
    title: "",
    description: "",
    hint: "",
    starterCode: "",
  });

    const handleGenerate = async () => {
    const result = await generateChallenge(language, difficulty);
    setProblem(result);
  };

  return (
    <section className="challengeGenerator">
      <div className="wrapper">
        <div className="top_wrapper">
          <div className="w40">
            <PageTitle />
            <ProblemDescription title={problem.title} description={problem.description}
              hint={problem.hint}/>
          </div>
          <div className="w60">
            <LanguagesSelector language={language} setLanguage={setLanguage}/>
            <DifficultSelector difficulty={difficulty} setDifficulty={setDifficulty}/>
            <GenerateButton onClick={handleGenerate}/>
            <CodeEditor starterCode={problem.starterCode}/>
            <SubmitButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeGenerator;
