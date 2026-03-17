import "./styles.scss";

type Props = {
  onClick: () => void;
};

const GenerateButton = ({ onClick }: Props) => {
  return (
    <div className="generateButtonContainer">
      <button className="generateButton" onClick={onClick}>
        <p>Generate</p>
      </button>
    </div>
  )
}

export default GenerateButton
