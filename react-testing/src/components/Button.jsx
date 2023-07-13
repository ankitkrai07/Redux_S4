import React from "react";
import PropTypes from "prop-types";

export const Button = ({ children, color, size }) => {
  return (
    <button data-testid="testing-button" className={`${color} ${size}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
};

/*

1. button tag should be rendered
 2. 
 3. 
 4.

*/
