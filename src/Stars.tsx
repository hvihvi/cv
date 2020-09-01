import * as React from "react";

export const Stars = ({ number }: { number: string }) => {
  return (
    <span style={{ fontSize: "10px" }}>
      &#9733;&#9733;
      {number === "2" ? <>&#9734;</> : <>&#9733;</>}
      {number === "3" ? <>&#9734;</> : <>&#9733;</>}
      {number === "4" ? <>&#9734;</> : <>&#9733;</>}
    </span>
  );
};
