import React from "react";
import PropTypes from "prop-types";
import StyledFilterList from "./style";

import Filter from "components/Filter";
import Button from "components/Button";
import Input from "components/Input";
import Icon from "components/Icon";
import Option from "components/Option";

import { ReactComponent as Plus } from "assets/icons/plus.svg";

function FilterList({
  children,
  options,
  filterLabel = "列表推荐",
  actionLabel,
  ...rest
}) {
  return (
    <StyledFilterList {...rest}>
      <Input.Search />
      <Filter style={{ padding: "20px 0" }}>
        {options && (
          <Filter.Filters label={filterLabel}>
            <select>
              {options.map((option, index) => (
                <Option key={index}>{option}</Option>
              ))}
            </select>
          </Filter.Filters>
        )}

        {actionLabel && (
          <Filter.Action label={actionLabel}>
            <Button>
              <Icon icon={Plus} width={12} height={12} />
            </Button>
          </Filter.Action>
        )}
      </Filter>
      {children}
    </StyledFilterList>
  );
}

FilterList.propTypes = {
  children: PropTypes.any,
  options: PropTypes.array,
  filterLabel: PropTypes.string,
  actionLabel: PropTypes.string,
};

export default FilterList;
