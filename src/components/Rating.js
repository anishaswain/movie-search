import "./Rating.css";
import React, { useState } from "react";
import { StarFilled } from "@ant-design/icons";

export default function Rating(props) {
  const [stars] = useState(Array(5).fill());

  const isFilled = (key) => {
    return key * 2 <= props.rate;
  };

  return (
    <div>
      {stars.map((item, key) => (
        <StarFilled
          className={isFilled(key + 1) ? "filledstar" : "notfilledstar"}
          key={key}
        />
      ))}
    </div>
  );
}

Rating.propTypes = {
  rate: Number,
};
