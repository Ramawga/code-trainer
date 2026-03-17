import "./styles.scss";

type Props = {
  setLanguage: (language: string) => void;
  language: string;
};

const LanguagesSelector = ({ setLanguage, language }: Props) => {
  const languages = ["JavaScript", "Python", "Java"];
  return (
    <div className="LanguagesSelector">
      <div className="LanguagesSelector__wrapper">
        <div className="texts">
          <p className="title">Languages</p>{" "}
          <p className="supportText">Select one </p>
        </div>
        <div className="LanguagesButtons">
          {languages.map((lang) => (
            <button
              key={lang}
              className={`Language ${language === lang ? "active" : ""}`}
              onClick={() => setLanguage(lang)}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagesSelector;
