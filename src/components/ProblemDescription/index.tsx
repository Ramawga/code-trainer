import "./styles.scss";
import { useState } from "react";

interface ProblemDescription {
  description: String;
  hint: String;
  title: String;
}

const ProblemDescription = ({ description, hint, title }: ProblemDescription) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ProblemDescriptionContainer">
      <div className="titleContainer">
        <p>Problem Description</p>
      </div>
      <div className="ProblemDescription">
        <p className="ProblemTitle">{title}</p>
        <p>
         {description}
        </p>
      </div>
      <div className="hintsContainer">
        <div className="hintWrapper" onClick={() => setOpen(!open)}>
          <p className="hintTitle">Hints (click to expand)</p>
          <div
            className="hint"
            style={{
              maxHeight: open ? "300px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.6s ease",
            }}
          >
            <p className="hintText">
             {hint}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
