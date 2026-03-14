import "./styles.scss";

const DifficultSelector = () => {
  return (
    <div className="difficultSelector">
      <div className="difficultSelector__wrapper">
        <div className="texts"><p className="title">Difficulty</p> <p className="supportText">Choose target level</p></div>
        <div className="difficultButtons">
          <button className="easyButton">Easy</button>
          <button className="mediumButton">Medium</button>
          <button className="hardButton">Hard</button>
        </div>
      </div>
    </div>
  )
}

export default DifficultSelector
