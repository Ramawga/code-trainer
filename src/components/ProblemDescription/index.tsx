import "./styles.scss";
import { useState } from "react";

const ProblemDescription = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="ProblemDescriptionContainer">
      <div className="titleContainer">
        <p>Problem Description</p>
      </div>
      <div className="ProblemDescription">
        <p>
          Given an array of integers, determine if it can be partitioned into
          two subsets such that the sum of elements in both subsets is equal.
          Return true if such a partition exists, otherwise false. Example:
          const nums = [1, 5, 11, 5] // returns true because [1,5,5] and [11]
          have equal sums Details 1 ≤ nums.length ≤ 200 0 ≤ nums[i] ≤ 100
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
              Consider transforming into a subset-sum problem: check if there
              exists a subset summing to total/2 using DP or bitset
              optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
