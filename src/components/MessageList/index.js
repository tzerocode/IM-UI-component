import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";

// 导入组件
import MessageCard from "components/MessageCard";
import FilterList from "components/FilterList";

// 图片
// import face1 from "assets/images/face-male-1.jpg";
import { animated } from "react-spring";

// 引用自定义hooks
import useStaggeredList from "hooks/useStaggeredList";

// 模拟数据
import messageData from "data/messages";

function MessageList({ children, ...rest }) {
  const trailAnimes = useStaggeredList(6);
  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["最新消息优先", "在线好友优先"]}
        actionLabel="创建会话"
      >
        <ChatList>
          {messageData.map((message, index) => (
            <animated.div key={message.id} style={trailAnimes[index]}>
              <MessageCard
                key={message.id}
                active={index === 3}
                replied={message.replied}
                avatarSrc={message.avatarSrc}
                name={message.name}
                avatarStatus={message.status}
                statusText={message.statusText}
                time={message.time}
                message={message.message}
                unreadCound={message.unreadCount}
              />
            </animated.div>
          ))}
        </ChatList>
      </FilterList>
    </StyledMessageList>
  );
}

MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
