import React from "react";
import MessageCard from ".";

import face1 from "assets/images/face-male-1.jpg";

export default {
  title: "UI 组件/MessageCard",
  component: MessageCard,
};

export const Default = () => (
  <MessageCard
    avatarSrc={face1}
    name="许耀威"
    avatarStatus="online"
    statusText="在线"
    time="3 小时前"
    message="即使英语再难，我也要啃下来！"
    unreadCount={2}
  />
);

export const Active = () => (
  <MessageCard
    avatarSrc={face1}
    name="许耀威"
    avatarStatus="online"
    statusText="在线"
    time="3 小时前"
    message="即使英语再难，我也要啃下来！"
    unreadCount={2}
    active
  />
);

export const Replied = () => (
  <MessageCard
    avatarSrc={face1}
    name="许耀威"
    avatarStatus="online"
    statusText="在线"
    time="3 小时前"
    message="即使英语再难，我也要啃下来！"
    unreadCount={2}
    active
    replied
  />
);

export const RepliedInActive = () => (
  <MessageCard
    avatarSrc={face1}
    name="许耀威"
    avatarStatus="online"
    statusText="在线"
    time="3 小时前"
    message="即使英语再难，我也要啃下来！"
    unreadCount={2}
    replied
  />
);
