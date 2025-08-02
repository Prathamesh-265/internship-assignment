import React from "react";
import rewards from "../data/dummyRewards";

const Rewards = () => {
  return (
    <div className="rewards">
      <h3>Rewards / Unlockables</h3>
      <ul>
        {rewards.map((reward, index) => (
          <li key={index}>{reward}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rewards;
