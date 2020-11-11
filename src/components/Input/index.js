import React from "react";
import PropTypes from "prop-types";
import StyledInput, { InputContainer, Prefix, Suffix } from "./style";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { useTheme } from "styled-components";

import Icon from "components/Icon";
import InputText from "components/Input/InputText";

function Input({ placeholder = "请输入内容...", prefix, suffix, ...rest }) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder}></StyledInput>
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
}

// eslint-disable-next-line no-unused-vars
function Search({ placeholder = "请输入搜索内容...", ...rest }) {
  const theme = useTheme;
  return (
    <Input
      placeholder={placeholder}
      prefix={
        <Icon icon={SearchIcon} color={theme.gray3} width={18} height={18} />
      }
      {...rest}
    />
  );
}

Input.Search = Search;
Input.Text = InputText;

Input.propTypes = {
  placeholder: PropTypes.string,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
};

export default Input;
