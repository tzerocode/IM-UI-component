import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledFooter, { IconContainer, StyledPopoverContent } from "./style";

import Icon from "components/Icon";
import Button from "components/Button";
import Input from "components/Input";
import Emoji from "components/Emoji";
import Popover from "components/Popover";

import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { ReactComponent as MicrophoneIcon } from "assets/icons/microphone.svg";
import { ReactComponent as PlaneIcon } from "assets/icons/plane.svg";
import { ReactComponent as OptionsIcon } from "assets/icons/options.svg";

import { useTheme } from "styled-components";

function Footer({ animeProps, style, children, ...rest }) {
  const [emojiIconActive, setEmojiIconActive] = useState(false);
  const theme = useTheme();
  return (
    <StyledFooter style={{ ...style, ...animeProps }} {...rest}>
      <Input
        placeholder="输入想和对方说的话"
        prefix={<Icon icon={ClipIcon} />}
        suffix={
          <IconContainer>
            <Popover
              content={<PopoverContent />}
              offset={{ x: "-25%" }}
              onVisible={() => setEmojiIconActive(true)}
              onHide={() => setEmojiIconActive(false)}
            >
              <Icon
                icon={SmileIcon}
                color={emojiIconActive ? undefined : theme.gray3}
              />
            </Popover>
            <Icon icon={MicrophoneIcon} />
            <Button size="52px">
              <Icon
                icon={PlaneIcon}
                color="white"
                style={{ transform: "translateX(-2px)" }}
              />
            </Button>
          </IconContainer>
        }
      />
    </StyledFooter>
  );
}

/* eslint-disable jsx-a11y/accessible-emoji */
function PopoverContent(props) {
  return (
    <StyledPopoverContent>
      <Emoji label="smile">😊</Emoji>
      <Emoji label="grining">😆</Emoji>
      <Emoji label="thumbup">👍</Emoji>
      <Emoji label="indexfingerup">☝️</Emoji>
      <Emoji label="ok">👌</Emoji>
      <Emoji label="handsputtogether">🙏</Emoji>
      <Emoji label="smilewithsunglasses">😎</Emoji>
      <Emoji label="flexedbicep">💪</Emoji>
      <Icon icon={OptionsIcon} style={{ marginLeft: "24px" }} />
    </StyledPopoverContent>
  );
}

Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
export { PopoverContent };
