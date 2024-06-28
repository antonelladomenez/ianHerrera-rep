import PropTypes from "prop-types";
import React from "react";
import "../styles/style.css";

export const Button = ({ style, className, divClassName, text = "Do something" }) => {
    return (
        <button className={`button ${style} ${className}`}>
            <div className={`do-something ${divClassName}`}>{text}</div>
        </button>
    );
};

Button.propTypes = {
    style: PropTypes.oneOf(["filled", "outlined"]),
    text: PropTypes.string,
};
