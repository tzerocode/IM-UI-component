import React from "react";
import PropTypes from "prop-types";
import StyledContactList, { Contacts } from "./style";

import FliterList from "components/FilterList";
import ContactCard from "components/ContactCard";

//
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";

import contactsData from "data/contacts";

function ContactList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(10);
  return (
    <StyledContactList {...rest}>
      <FliterList options={["新添加优先", "按姓名排序"]} actionLabel="添加好友">
        <Contacts>
          {contactsData.map((contact, i) => (
            <animated.div key={contact.id} style={trailAnimes[i]}>
              <ContactCard key={contact.id} contact={contact} />
            </animated.div>
          ))}
        </Contacts>
      </FliterList>
    </StyledContactList>
  );
}

ContactList.propTypes = {
  children: PropTypes.any,
};

export default ContactList;
