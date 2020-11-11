import React from "react";
import PropTypes from "prop-types";
import StyledBlockList, {
  SettingsMenu,
  ClosableAvatar,
  BlockAvatar,
  BlockName,
  CloseIcon,
  FriendList,
} from "./style";
import "styled-components/macro";

// 组件
import Icon from "components/Icon";
import Text from "components/Text";

//icons
import { ReactComponent as ArrowMenuLeft } from "assets/icons/arrowMenuLeft.svg";
import { ReactComponent as CloseCircle } from "assets/icons/closeCircle.svg";

// import face from "assets/images/face-male-1.jpg";

import { useHistory } from "react-router-dom";

import blockedData from "data/blocked";

function BlockList({ children, ...rest }) {
  const history = useHistory();
  return (
    <StyledBlockList {...rest}>
      <SettingsMenu>
        <Icon
          icon={ArrowMenuLeft}
          css={`
            cursor: pointer;
          `}
          onClick={() => history.goBack()}
        />
        <Text size="xxlarge">已屏蔽的好友</Text>
      </SettingsMenu>
      <FriendList>
        {blockedData.map((user, i) => {
          return (
            <ClosableAvatar key={user.id}>
              <BlockAvatar size="105px" src={user.avatar} />
              <CloseIcon width={46} height={51} icon={CloseCircle} />
              <BlockName>{user.name}</BlockName>
            </ClosableAvatar>
          );
        })}
      </FriendList>
    </StyledBlockList>
  );
}

BlockList.propTypes = {
  children: PropTypes.any,
};

export default BlockList;
