import React from "react";
import PropTypes from "prop-types";

export default function Title({ h4, cls }) {
    return (
        <div>
            <h4 className={`${cls}`}>{h4}</h4>
        </div>
    );
}

Title.propTypes = {
    h4: PropTypes.string.isRequired
}