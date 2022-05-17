import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

export default function PopupOption({
    btnClick,
    btnTitle1,
    btnTitle2,
    btnType1,
    close,
}) {
    return (
        <div className="d-flex justify-content-between pt-3 px-2">
            <Button
                title={btnTitle1}
                variant="success"
                className="expand-sm"
                type={btnType1}
                onClick={btnClick}
            >
                {btnTitle1}
            </Button>
            <Button
                title={btnTitle2}
                variant="danger"
                className="expand-sm"
                onClick={() => close()}
            >
                {btnTitle2}
            </Button>
        </div>
    );
}

PopupOption.propTypes = {
    btnClick: PropTypes.func,
    btnTitle1: PropTypes.string.isRequired,
    btnTitle2: PropTypes.string.isRequired,
    btnType1: PropTypes.string.isRequired,
    close: PropTypes.func.isRequired,
};
