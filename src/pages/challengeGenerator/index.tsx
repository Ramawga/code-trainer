import CodeEditor from "../../components/CodeEditor";
import DifficultSelector from "../../components/DifficultSelector";
import LanguagesSelector from "../../components/LanguagesSelector";
import PageTitle from "../../components/PageTitle";
import ProblemDescription from "../../components/ProblemDescription";
import "./styles.scss";
const ChallengeGenerator = () => {
  return (
    <section className="challengeGenerator">
      <div className="wrapper">
        <div className="top_wrapper">
          <div className="w40">
            <PageTitle />
            <ProblemDescription />
          </div>
          <div className="w60">
            <LanguagesSelector />
            <DifficultSelector />
            <CodeEditor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeGenerator;
