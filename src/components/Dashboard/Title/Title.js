import React from "react";

function Title({ h3, cls }) {
    return (
        <div>
            <h3 className={`${cls}`}>{h3}</h3>
        </div>
    );
}

export default Title;
