import "./styles.scss";

const LanguagesSelector = () => {
  return (
     <div className="LanguagesSelector">
      <div className="LanguagesSelector__wrapper">
        <div className="texts"><p className="title">LanguagesSelector</p> <p className="supportText">Choose target level</p></div>
        <div className="LanguagesButtons">
          <button className="Language">JavaScript</button>
          <button className="Language">Python</button>
          <button className="Language">Java</button>
        </div>
      </div>
    </div>
  )
}

export default LanguagesSelector
