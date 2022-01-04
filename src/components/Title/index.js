import React from "react";

function Title({ h4, cls }) {
    return (
        <div>
            <h4 className={`${cls}`}>{h4}</h4>
        </div>
    );
}

export default Title;
