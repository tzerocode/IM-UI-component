import styled from "styled-components";
import StyledMessageCard from "components/MessageCard/style";

const ChatList = styled.div`
  ${StyledMessageCard} {
    margin-bottom: 20px;
  }
`;

const StyledMessageList = styled.div`
  height: 100vh;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default StyledMessageList;
export { ChatList };
