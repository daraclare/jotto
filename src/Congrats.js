import React from "react";

export const Congrats = props => {
  const message = props.success ? "You WON!!!" : "";
  return (
    <div data-test="component-congrats">
      <p className="message">{message}</p>
    </div>
  );
};
