import React from "react";
import PropTypes from "prop-types";
import StyledInputText from "./style";

function InputText({children,...rest}) {
  return (
    <StyledInputText {...rest}>
      {children}
    </StyledInputText>
  );
}

InputText.propTypes = {
  children: PropTypes.any
};

export default InputText;
