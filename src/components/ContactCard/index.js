import React from "react";
import PropTypes from "prop-types";
import StyledContactCard, { Name, Intro } from "./style";

// import face from "assets/images/face-male-1.jpg";

// 组件
import Avatar from "components/Avatar";

function ContactCard({ contact, children, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={contact.avatar} status="online" />
      <Name>{contact.name}</Name>
      <Intro>{contact.intro}</Intro>
    </StyledContactCard>
  );
}

ContactCard.propTypes = {
  children: PropTypes.any,
};

export default ContactCard;
