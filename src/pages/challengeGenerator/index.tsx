import DifficultSelector from "../../components/DifficultSelector";
import LanguagesSelector from "../../components/LanguagesSelector";
import "./styles.scss";
const ChallengeGenerator = () => {
  return (
    <section className="challengeGenerator">
      <div className="wrapper">
        <div className="top_wrapper">
          <div className="w60">
            <DifficultSelector />
          </div>
          <div className="w40">
            <LanguagesSelector />
          </div>
        </div>
        <div className="mid_wrapper">
          <div className="w40"></div>
          <div className="w60"></div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeGenerator;
