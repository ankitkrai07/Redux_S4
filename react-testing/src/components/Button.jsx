import React from "react";
import PropTypes from "prop-types";

export const Button = ({ children, color, size, func }) => {
  return (
    <button
      onClick={func}
      data-testid="testing-button"
      className={`${color} ${size}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
};

/*

 1.button tag should be rendered
 2. Children is matching
 3. Check the props
 4.Onclick func should execute

*/
