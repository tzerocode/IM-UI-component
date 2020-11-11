import { animated } from "react-spring";
import styled from "styled-components";

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: -30px;
  & > * {
    margin-left: 16px;
  }
`;

const StyledPopoverContent = styled.div`
  display: flex;
  & > * {
    margin: 0 8px;
    font-size: 16px;
  }
`;

const StyledFooter = styled(animated.footer)`
  padding: 12px 30px;
  width: 100%;
`;

export default StyledFooter;
export { IconContainer, StyledPopoverContent };
