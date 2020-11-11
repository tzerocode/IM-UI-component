import styled from "styled-components";
import StyledText from "components/Text/style";

import Avatar from "components/Avatar";
import Icon from "components/Icon";
import Text from "components/Text";

const BlockAvatar = styled(Avatar)`
  grid-area: avatar;
`;

const BlockName = styled(Text).attrs({ size: "xxlarge" })`
  grid-area: name;
  margin-top: 20px;
`;

const CloseIcon = styled(Icon)`
  grid-area: 2/3/5/4;
  z-index: 10;
  margin-top: 10px;
`;

const ClosableAvatar = styled.div`
  display: grid;
  grid-template-areas:
    "avatar avatar avatar"
    "avatar avatar avatar"
    "avatar avatar avatar"
    "name name name";
  justify-items: center;
`;

const SettingsMenu = styled.div`
  height: 148px;
  display: grid;
  grid-template-columns: 10px 1fr;
  align-items: center;

  ${StyledText} {
    grid-column: span 1/-1;
    justify-self: center;
  }
`;

const FriendList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  justify-items: center;
`;

const StyledBlockList = styled.div`
  padding: 2vh 4vw;
`;

export default StyledBlockList;
export {
  SettingsMenu,
  BlockAvatar,
  BlockName,
  CloseIcon,
  ClosableAvatar,
  FriendList,
};
