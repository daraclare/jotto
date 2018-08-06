import React from "react";
import PropTypes from "prop-types";

export const Congrats = props => {
  const message = props.success ? "You WON!!!" : "";
  return (
    <div data-test="component-congrats">
      <p className="message">{message}</p>
    </div>
  );
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};
