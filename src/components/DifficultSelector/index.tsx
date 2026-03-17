import "./styles.scss";
type Props = {
  setDifficulty: (difficulty: string) => void;
  difficulty: string;
};
const DifficultSelector = ({ setDifficulty, difficulty }: Props) => {
   const difficulties = ["Easy", "Medium", "Hard"];
  return (
    <div className="difficultSelector">
      <div className="difficultSelector__wrapper">
        <div className="texts"><p className="title">Difficulty</p> <p className="supportText">Choose target level</p></div>
        <div className="difficultButtons">
          {difficulties.map((level) => (
            <button
              key={level}
              className={`${level.toLowerCase()}Button ${
                difficulty === level ? "active" : ""
              }`}
              onClick={() => setDifficulty(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DifficultSelector
