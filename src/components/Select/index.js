import React from "react";
import PropTypes from "prop-types";
import StyledSelect from "./style";
import LabelContainer from "components/LabelContainer";

function Select({ label, type, children, ...rest }) {
  const SelectWithoutLabel = (
    <StyledSelect type={type} {...rest}>
      {children}
    </StyledSelect>
  );
  return label ? (
    <LabelContainer label={label}>SelectWithoutLabel</LabelContainer>
  ) : (
    SelectWithoutLabel
  );
}

Select.propTypes = {
  type: PropTypes.oneOf(["form"]),
  children: PropTypes.any,
};

export default Select;
