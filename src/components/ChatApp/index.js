import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledChatApp, { Nav, Sidebar, Content, Drawer } from "./style";

import NavBar from "components/NavBar";
import MessageList from "components/MessageList";
import Conversation from "components/Conversation";
import Profile from "components/Profile";
import ContactList from "components/ContactList";
import FileList from "components/FileList";
import NoteList from "components/NoteList";
import EditProfile from "components/EditProfile";
import Settings from "components/Settings";
import BlockList from "components/BlockList";
import VideoCall from "components/VideoCall";

// router component
import { Route, Switch, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";

function ChatApp({ children, ...rest }) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [videoCalling, setVideoCalling] = useState(false);

  const location = useLocation();

  const getFirstSgmtPath = (location) => location.pathname.split("/")[1];

  const transitions = useTransition(location, getFirstSgmtPath, {
    from: { opacity: 0, transform: "translate3d(-100px,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-100px,0,1)" },
  });
  return (
    <StyledChatApp {...rest}>
      <Nav>
        <NavBar />
      </Nav>
      <Sidebar>
        {transitions.map(({ item: location, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={location}>
              <Route exact path="/">
                <MessageList />
              </Route>
              <Route exact path="/contacts">
                <ContactList />
              </Route>
              <Route exact path="/files">
                <FileList />
              </Route>
              <Route exact path="/notes">
                <NoteList />
              </Route>
              <Route path="/settings">
                <EditProfile />
              </Route>
            </Switch>
          </animated.div>
        ))}
      </Sidebar>
      <Content>
        {videoCalling && (
          <VideoCall onHandleOffClicked={() => setVideoCalling(false)} />
        )}
        <Switch>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/settings/blocked">
            <BlockList />
          </Route>
          <Route path="/">
            <Conversation
              onAvatarClick={() => setShowDrawer(true)}
              onVideoClick={() => setVideoCalling(true)}
            />
          </Route>
        </Switch>
      </Content>
      <Drawer show={showDrawer}>
        <Profile onCloseClick={() => setShowDrawer(false)} />
      </Drawer>
      {children}
    </StyledChatApp>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any,
};

export default ChatApp;
