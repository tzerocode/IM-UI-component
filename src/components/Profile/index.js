import React from "react";
import PropTypes from "prop-types";
// 导入样式组件
import StyledProfile, {
  SocialLinks,
  ContactSection,
  AlbumSection,
  AlbumTitle,
  Album,
  Photo,
  CloseIcon,
} from "./style";
// 加载
import "styled-components/macro";

// 组件
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Emoji from "components/Emoji";
import Icon from "components/Icon";
import Seperator from "components/Seperator";
import Text from "components/Text";
import Button from "components/Button";

// 图片
import face from "assets/images/face-male-3.jpg";
import photo1 from "assets/images/photo1.jpg";
import photo2 from "assets/images/photo2.jpg";
import photo3 from "assets/images/photo3.jpg";

// 自定义图标
import { ReactComponent as Cross } from "assets/icons/cross.svg";

// 第三方icons
import {
  faWeibo,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
function Profile({
  showEditBtn,
  showCloseIcon = true,
  onCloseClick,
  onEdit,
  status,
  children,
  ...rest
}) {
  return (
    <StyledProfile {...rest}>
      {showCloseIcon && <CloseIcon icon={Cross} onClick={onCloseClick} />}
      <Avatar
        css={`
          margin: 26px 0;
          grid-area: 1/1/3/2;
        `}
        src={face}
        size="160px"
        status={status}
        statusIconSize="25px"
      />
      {showEditBtn && (
        <Button
          size="52px"
          onClick={onEdit}
          css={`
            grid-area: 1/1/3/2;
            align-self: end;
            margin-left: 100px;
            z-index: 10;
          `}
        >
          <FontAwesomeIcon
            css={`
              font-size: 24px;
            `}
            icon={faPen}
          />
        </Button>
      )}
      <Paragraph
        size="xlarge"
        css={`
          margin-bottom: 12px;
        `}
      >
        ThackerMan
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        css={`
          margin-bottom: 18px;
        `}
      >
        惠州市 惠城区
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        css={`
          margin-bottom: 18px;
        `}
      >
        帮助客户构建网站,并协助在社交网络上进行推广{" "}
        <Emoji label="fire">🔥</Emoji>
      </Paragraph>
      <SocialLinks>
        <Icon.Social
          icon={faWeibo}
          bgColor="#F06767"
          href="https://www.weibo.com"
        />
        <Icon.Social
          icon={faGithub}
          bgColor="black"
          href="https://www.weibo.com"
        />
        <Icon.Social
          icon={faLinkedin}
          bgColor="#2483C0"
          href="https://www.weibo.com"
        />
      </SocialLinks>
      <Seperator
        css={`
          margin: 30px 0;
        `}
      />
      <ContactSection>
        <Description label="联系电话">+86 18688888888</Description>
        <Description label="电子邮件">admin@th.com</Description>
        <Description label="个人网站">https://blog.bybenk.cn</Description>
      </ContactSection>
      <Seperator
        css={`
          margin: 30px 0;
        `}
      />
      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">相册(31)</Text>

          <a>查看全部</a>
        </AlbumTitle>
        <Album>
          <Photo src={photo1} alt="" />
          <Photo src={photo2} alt="" />
          <Photo src={photo3} alt="" />
        </Album>
      </AlbumSection>
    </StyledProfile>
  );
}

function Description({ label, children }) {
  return (
    <Paragraph>
      <Text type="secondary">{label}: </Text>
      <Text>{children}</Text>
    </Paragraph>
  );
}

Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
export { Description };
