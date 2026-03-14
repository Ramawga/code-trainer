import CodeEditor from "../../components/CodeEditor";
import DifficultSelector from "../../components/DifficultSelector";
import LanguagesSelector from "../../components/LanguagesSelector";
import ProblemDescription from "../../components/ProblemDescription";
import "./styles.scss";
const ChallengeGenerator = () => {
  return (
    <section className="challengeGenerator">
      <div className="wrapper">
        <div className="top_wrapper">
          <div className="w40">
            <LanguagesSelector />
          </div>
          <div className="w60">
            <DifficultSelector />
          </div>
        </div>
        <div className="mid_wrapper">
          <div className="w40"><ProblemDescription/></div>
          <div className="w60">
            <CodeEditor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeGenerator;
