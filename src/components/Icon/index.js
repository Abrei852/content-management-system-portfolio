import React from "react";

export default function IconWrapper({ size, icon }) {
    return(
        <React.Fragment>
            <i className={`${icon}`} style={{fontSize: size + "px"}}/>
        </React.Fragment>
    )
}
