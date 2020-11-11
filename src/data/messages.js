import face1 from "assets/images/face-male-1.jpg";
import face3 from "assets/images/face-male-2.jpg";
import face5 from "assets/images/face-male-3.jpg";

import face2 from "assets/images/face-female-1.jpg";
import face4 from "assets/images/face-female-2.jpg";
import face6 from "assets/images/face-female-3.jpg";

export default [
  {
    id: 1,
    avatarSrc: face1,
    name: "李铭浩",
    status: "online",
    statusText: "在线",
    time: "3 小时之前",
    message: "即使爬到最高的山上，一次也只能脚踏实地地迈一步",
    unreadCount: 2,
    replied: false,
  },
  {
    id: 2,
    avatarSrc: face2,
    name: "孙文佳",
    status: "offline",
    statusText: "离线",
    time: "下午 14:45",
    message: "好的，明天我就把资料送过去！感谢提醒！",
    unreadCount: 2,
    replied: false,
  },
  {
    id: 3,
    avatarSrc: face3,
    name: "慕容天宇",
    status: "offline",
    statusText: "离线",
    time: "早上 06:18",
    message: "明天约一把王者荣耀，不连赢5把不罢休 🤘",
    unreadCount: 0,
    replied: true,
  },
  {
    id: 4,
    avatarSrc: face4,
    name: "郭文菲",
    status: "online",
    statusText: "在线",
    time: "2018年9月5日",
    message: "明天我要去上课，如果有空的话我再和你说",
    unreadCount: 0,
    replied: true,
  },
  {
    id: 5,
    avatarSrc: face5,
    name: "张峰",
    status: "online",
    statusText: "在线",
    time: "2018年9月1日",
    message: "公司打印机坏了，找个人维修一下",
    unreadCount: 0,
    replied: false,
  },
  {
    id: 6,
    avatarSrc: face6,
    name: "李凝",
    status: "offline",
    statusText: "离线",
    time: "2018年8月31日",
    message: "你知道吗？昨天发生了一件很神奇的事情！",
    unreadCount: 0,
    replied: true,
  },
];
