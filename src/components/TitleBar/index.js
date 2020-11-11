import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Title, Actions } from "./style";

// 导入组件
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";
import Dropdown from "components/Dropdown";
import Seperator from "components/Seperator";

import { DropdownItem } from "components/Dropdown/style";

// 图片
import face from "assets/images/face-male-3.jpg";
import { ReactComponent as Call } from "assets/icons/call.svg";
import { ReactComponent as Camera } from "assets/icons/camera.svg";
import { ReactComponent as Options } from "assets/icons/options.svg";

function TitleBar({
  animeProps,
  style,
  onAvatarClick,
  onVideoClick,
  children,
  ...rest
}) {
  return (
    <StyledTitleBar style={{ ...style, ...animeProps }} {...rest}>
      <Avatar onClick={onAvatarClick} status="offline" src={face} />
      <Title>
        <Paragraph size="large">欧阳天宇</Paragraph>
        <Paragraph type="secondary">
          <Text>在线</Text>
          <Text>· 最后阅读: 3小时前</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon opacity={0.3} icon={Call} onClick={onVideoClick} />
        <Icon opacity={0.3} icon={Camera} />
        <Dropdown
          content={
            <>
              <DropdownItem>
                <Paragraph>个人资料</Paragraph>
              </DropdownItem>
              <DropdownItem>
                <Paragraph>关闭会话</Paragraph>
              </DropdownItem>
              <Seperator />
              <DropdownItem>
                <Paragraph type="danger">屏蔽此人</Paragraph>
              </DropdownItem>
            </>
          }
          align="right"
        >
          <Icon opacity={0.3} icon={Options} />
        </Dropdown>
      </Actions>
    </StyledTitleBar>
  );
}

TitleBar.propTypes = {
  children: PropTypes.any,
};

export default TitleBar;
