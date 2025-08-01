import archive from "@/assets/icons/archive.png";
import arrowLeft from "@/assets/icons/arrow-left.png";
import arrowRight from "@/assets/icons/arrow-right.png";
import attachment from "@/assets/icons/attachment.png";
import camcorder from "@/assets/icons/camcorder.png";
import camera from "@/assets/icons/camera.png";
import chatBubbleFilled from "@/assets/icons/chat-bubble-filled.png";
import chatBubbleOutlined from "@/assets/icons/chat-bubble-outlined.png";
import chatBubbleOval from "@/assets/icons/chat-bubble-oval.png";
import chevronRight from "@/assets/icons/chevron-right.png";
import ellipsis from "@/assets/icons/ellipsis-vertical.png";
import forward from "@/assets/icons/forward.png";
import heartFilled from "@/assets/icons/heart-filled.png";
import heartOutlined from "@/assets/icons/heart-outlined.png";
import incoming from "@/assets/icons/incoming.png";
import lockFilled from "@/assets/icons/lock-filled.png";
import lockOutlined from "@/assets/icons/lock-outlined.png";
import logout from "@/assets/icons/logout.png";
import micFilled from "@/assets/icons/mic-filled.png";
import micOutlined from "@/assets/icons/mic-outlined.png";
import minus from "@/assets/icons/minus.png";
import outgoing from "@/assets/icons/outgoing.png";
import pencilFilled from "@/assets/icons/pencil-filled.png";
import pencilOutlined from "@/assets/icons/lock-outlined.png";
import phoneFilled from "@/assets/icons/phone-filled.png";
import phoneOutlined from "@/assets/icons/phone-outlined.png";
import plus from "@/assets/icons/plus.png";
import search from "@/assets/icons/search.png";
import send from "@/assets/icons/send.png";
import statusFilled from "@/assets/icons/status-filled.png";
import statusOutlined from "@/assets/icons/status-outlined.png";
import sticker from "@/assets/icons/sticker.png";
import trash from "@/assets/icons/trash.png";
import user from "@/assets/icons/user.png";
import userGroupFilled from "@/assets/icons/user-group-filled.png";
import userGroupOutline from "@/assets/icons/user-group-outlined.png";

import avatar from "@/assets/images/avatar.png";
import statusBg from "@/assets/images/status.jpg";
import success from "@/assets/images/success.png";
import {
  Call,
  Category,
  Channel,
  Chat,
  Community,
  PopulatedMessage,
  PopulatedStatus,
  User,
} from "@/type";

export const users: User[] = [
  {
    id: "101",
    name: "Shahzeb",
    email: "shahzeb@gmail.com",
    phone: "03123456789",
    isOnline: true,
    lastSeen: new Date(2025, 7, 28, 12, 2, 35),
    picSource: avatar,
  },
  {
    id: "102",
    name: "Samian",
    email: "samian@gmail.com",
    phone: "03123456789",
    isOnline: false,
    lastSeen: new Date(2025, 7, 28, 12, 2, 35),
    picSource: avatar,
  },
  {
    id: "103",
    name: "Soban",
    email: "soban@gmail.com",
    phone: "03123456789",
    isOnline: true,
    lastSeen: new Date(2025, 7, 28, 12, 2, 35),
    picSource: avatar,
  },
  {
    id: "104",
    name: "Ghulam Mustafa",
    email: "mustafa@gmail.com",
    phone: "03123456789",
    isOnline: false,
    lastSeen: new Date(2025, 7, 28, 12, 2, 35),
    picSource: avatar,
  },
  {
    id: "105",
    name: "Karan",
    email: "karan@gmail.com",
    phone: "03123456789",
    isOnline: false,
    lastSeen: new Date(2025, 7, 28, 12, 2, 35),
    picSource: avatar,
  },
  {
    id: "106",
    name: "Kashif Taj",
    email: "kashif@gmail.com",
    phone: "03123456789",
    isOnline: true,
    lastSeen: new Date(2025, 7, 28, 12, 2, 35),
    picSource: avatar,
  },
  {
    id: "107",
    name: "Yasir",
    email: "yasir@gmail.com",
    phone: "03123456789",
    isOnline: true,
    lastSeen: new Date(2025, 7, 28, 12, 2, 35),
    picSource: avatar,
  },
  {
    id: "108",
    name: "Shoaib",
    email: "shoaib@gmail.com",
    phone: "03123456789",
    isOnline: false,
    lastSeen: new Date(2025, 7, 28, 12, 2, 35),
    picSource: avatar,
  },
  {
    id: "109",
    name: "Sayam",
    email: "sayam@gmail.com",
    phone: "03123456789",
    isOnline: true,
    lastSeen: new Date(2025, 7, 28, 12, 2, 35),
    picSource: avatar,
  },
  {
    id: "110",
    name: "Muzamil",
    email: "muzamil@gmail.com",
    phone: "03123456789",
    isOnline: false,
    lastSeen: new Date(2025, 7, 28, 12, 2, 35),
    picSource: avatar,
  },
];

export const chats: Chat[] = [
  {
    id: "201",
    name: "Shahzeb",
    imageSource: avatar,
    lastMessage: {
      chatId: "201",
      sentBy: "101",
      content: {
        text: "Hello World",
      },
      time: new Date(2025, 7, 28, 12, 2, 35),
    },
    unreadCount: 8,
  },
  {
    id: "202",
    name: "Samian",
    imageSource: avatar,
    lastMessage: {
      chatId: "202",
      sentBy: "102",
      content: {
        text: "Hello World",
      },
      time: new Date(2025, 7, 28, 12, 1),
    },
    unreadCount: 0,
  },
  {
    id: "203",
    name: "Soban",
    imageSource: avatar,
    lastMessage: {
      chatId: "203",
      sentBy: "103",
      content: {
        text: "Hello World",
      },
      time: new Date(2025, 7, 28, 12, 0, 52),
    },
    unreadCount: 1,
  },
  {
    id: "204",
    name: "Ghulam Mustafa",
    imageSource: avatar,
    lastMessage: {
      chatId: "204",
      sentBy: "104",
      content: {
        text: "Hello World",
      },
      time: new Date(2025, 7, 28, 10, 45),
    },
    unreadCount: 2,
  },
  {
    id: "205",
    name: "Karan",
    imageSource: avatar,
    lastMessage: {
      chatId: "205",
      sentBy: "105",
      content: {
        text: "Hello World",
      },
      time: new Date(2025, 7, 28, 10, 44, 35),
    },
    unreadCount: 3,
  },
  {
    id: "206",
    name: "Kashif Taj",
    imageSource: avatar,
    lastMessage: {
      chatId: "206",
      sentBy: "106",
      content: {
        text: "Hello World",
      },
      time: new Date(2025, 7, 27, 23, 27, 18),
    },
    unreadCount: 1,
  },
  {
    id: "207",
    name: "Yasir",
    imageSource: avatar,
    lastMessage: {
      chatId: "207",
      sentBy: "107",
      content: {
        text: "Hello World",
      },
      time: new Date(2025, 7, 27, 22, 58, 40),
    },
    unreadCount: 4,
  },
  {
    id: "208",
    name: "Shoaib",
    imageSource: avatar,
    lastMessage: {
      chatId: "208",
      sentBy: "108",
      content: {
        text: "Hello World",
      },
      time: new Date(2025, 7, 28, 12, 2, 35),
    },
    unreadCount: 9,
  },
  {
    id: "209",
    name: "Sayam",
    imageSource: avatar,
    lastMessage: {
      chatId: "209",
      sentBy: "109",
      content: {
        text: "Hello World",
      },
      time: new Date(2025, 7, 28, 12, 2, 35),
    },
    unreadCount: 10,
  },
  {
    id: "210",
    name: "Muzamil",
    imageSource: avatar,
    lastMessage: {
      chatId: "210",
      sentBy: "110",
      content: {
        text: "Hello World",
      },
      time: new Date(2025, 7, 28, 12, 2, 35),
    },
    unreadCount: 2,
  },
];

export const messages: PopulatedMessage[] = [
  {
    chatId: "201",
    sentBy: {
      id: "101",
      name: "Shahzeb",
      email: "shahzeb@gmail.com",
      phone: "03123456789",
      isOnline: true,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    content: {
      text: "https://www.facebook.com/share/v/16eBngtthc/",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
  },
  {
    chatId: "201",
    sentBy: {
      id: "102",
      name: "Samian",
      email: "samian@gmail.com",
      phone: "03123456789",
      isOnline: true,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    content: {
      text: "😂 Bha ehro talent be aahy cha pakistan main",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
  },
  {
    chatId: "201",
    sentBy: {
      id: "101",
      name: "Shahzeb",
      email: "shahzeb@gmail.com",
      phone: "03123456789",
      isOnline: true,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    content: {
      text: "Au paanr heraan rehji wayas",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
  },
  {
    chatId: "201",
    sentBy: {
      id: "102",
      name: "Samian",
      email: "samian@gmail.com",
      phone: "03123456789",
      isOnline: true,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    content: {
      text: "Jani agar sabh talented thi wanjan ta looteenda kehen khen.\n\n Hane khabr pawe thi kehen khe looteenda 😁",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
  },
  {
    chatId: "201",
    sentBy: {
      id: "105",
      name: "Ghulam Mustafa",
      email: "mustafa@gmail.com",
      phone: "03123456789",
      isOnline: true,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    content: {
      text: `eShifa is looking for an  "App Developer".

      ➡️ Senior Mobile Application Developer(Remote,Hybrid)
      ➡️ Junior Mobile Application Developer(Islamabad)
      
      Location: Islamabad
      Deadline: August 3, 2025

      Join our incredible team by sending your application to eshifa.msa@eshifa.org.

      *Please don't forget to mention the position you are applying for in the email subject.*`,
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
  },
];

export const categories: Category[] = [
  {
    title: "All",
    chatCount: 10,
  },
  {
    title: "Unread",
    chatCount: 5,
  },
  {
    title: "Favourites",
    chatCount: 3,
  },
  {
    title: "Groups",
    chatCount: 2,
  },
];

export const statuses: PopulatedStatus[] = [
  {
    user: null,
  },
  {
    user: {
      id: "101",
      name: "Shahzeb",
      email: "shahzeb@gmail.com",
      phone: "03123456789",
      isOnline: true,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    media: {
      type: "text",
      text: "Hi there! I am using WhatsUp.",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
    seen: false,
  },
  {
    user: {
      id: "102",
      name: "Samian",
      email: "samian@gmail.com",
      phone: "03123456789",
      isOnline: true,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    media: {
      type: "image",
      mediaUrl: "@/assets/images/login-graphic.png",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
    seen: false,
  },
  {
    user: {
      id: "103",
      name: "Soban",
      email: "soban@gmail.com",
      phone: "03123456789",
      isOnline: false,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    media: {
      type: "text",
      text: "Hi there! I am using WhatsUp.",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
    seen: false,
  },
  {
    user: {
      id: "104",
      name: "Ghulam Mustafa",
      email: "gm@gmail.com",
      phone: "03123456789",
      isOnline: false,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    media: {
      type: "text",
      text: "Hi there! I am using WhatsUp.",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
    seen: true,
  },
  {
    user: {
      id: "105",
      name: "Karan",
      email: "karan@gmail.com",
      phone: "03123456789",
      isOnline: false,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    media: {
      type: "text",
      text: "Hi there! I am using WhatsUp.",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
    seen: true,
  },
  {
    user: {
      id: "106",
      name: "Kashif",
      email: "kashif@gmail.com",
      phone: "03123456789",
      isOnline: true,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    media: {
      type: "text",
      text: "Hi there! I am using WhatsUp.",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
    seen: false,
  },
  {
    user: {
      id: "107",
      name: "Yasir",
      email: "yasir@gmail.com",
      phone: "03123456789",
      isOnline: false,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    media: {
      type: "text",
      text: "Hi there! I am using WhatsUp.",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
    seen: true,
  },
  {
    user: {
      id: "108",
      name: "Shoaib",
      email: "shoaib@gmail.com",
      phone: "03123456789",
      isOnline: true,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    media: {
      type: "text",
      text: "Hi there! I am using WhatsUp.",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
    seen: false,
  },
  {
    user: {
      id: "109",
      name: "Sayam",
      email: "sayam@gmail.com",
      phone: "03123456789",
      isOnline: true,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    media: {
      type: "text",
      text: "Hi there! I am using WhatsUp.",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
    seen: true,
  },
  {
    user: {
      id: "110",
      name: "Muzamil",
      email: "muzamil@gmail.com",
      phone: "03123456789",
      isOnline: true,
      lastSeen: new Date(2025, 7, 28, 12, 2, 35),
      picSource: avatar,
    },
    media: {
      type: "text",
      text: "Hi there! I am using WhatsUp.",
    },
    time: new Date(2025, 7, 28, 12, 2, 35),
    seen: true,
  },
];

export const channels: Channel[] = [
  {
    id: "301",
    name: "Earn 24/7",
    messages: [],
    lastMessage: chats[0].lastMessage,
    unreadCount: 2,
    imageSource: avatar,
  },
  {
    id: "302",
    name: "Random Facts",
    messages: [],
    lastMessage: chats[1].lastMessage,
    unreadCount: 23,
    imageSource: avatar,
  },
  {
    id: "303",
    name: "Memes hi memes",
    messages: [],
    lastMessage: chats[3].lastMessage,
    unreadCount: 25,
    imageSource: avatar,
  },
  {
    id: "304",
    name: "Hollywood Online",
    messages: [],
    lastMessage: chats[4].lastMessage,
    unreadCount: 5,
    imageSource: avatar,
  },
  {
    id: "305",
    name: "The Knight",
    messages: [],
    lastMessage: chats[5].lastMessage,
    unreadCount: 29,
    imageSource: avatar,
  },
];

export const communities: Community[] = [
  {
    id: "501",
    name: "iCodeGuru Announcements",
    iconSource: userGroupFilled,
    chats: [chats[0], chats[1], chats[2]],
  },
  {
    id: "502",
    name: "GDGoC CUI x Web Development",
    iconSource: userGroupFilled,
    chats: [chats[3], chats[4]],
  },
  {
    id: "503",
    name: "Software Engineers",
    iconSource: userGroupFilled,
    chats: [chats[5], chats[6], chats[7]],
  },
  {
    id: "504",
    name: "Machine Learning Pakistan",
    iconSource: userGroupFilled,
    chats: [chats[8], chats[9]],
  },
  {
    id: "505",
    name: "Mentor Tech Club",
    iconSource: userGroupFilled,
    chats: [chats[0], chats[2], chats[1]],
  },
];

export const calls: Call[] = [
  {
    user: {
      name: "Shahzeb",
      picSource: avatar,
    },
    count: 2,
    incoming: true,
    missed: true,
    time: new Date(2025, 7, 28, 12, 2, 35),
  },
  {
    user: {
      name: "Samian",
      picSource: avatar,
    },
    count: 1,
    incoming: true,
    missed: false,
    time: new Date(2025, 7, 28, 12, 2, 35),
  },
  {
    user: {
      name: "Soban",
      picSource: avatar,
    },
    count: 4,
    incoming: false,
    missed: true,
    time: new Date(2025, 7, 28, 12, 2, 35),
  },
  {
    user: {
      name: "Ghulam Mustafa",
      picSource: avatar,
    },
    count: 5,
    incoming: true,
    missed: true,
    time: new Date(2025, 7, 28, 12, 2, 35),
  },
];

export const images = {
  avatar,
  statusBg,
  success,
};

export const icons = {
  archive,
  arrowLeft,
  arrowRight,
  attachment,
  camcorder,
  camera,
  chatBubbleFilled,
  chatBubbleOutlined,
  chatBubbleOval,
  chevronRight,
  ellipsis,
  forward,
  heartFilled,
  heartOutlined,
  incoming,
  lockFilled,
  lockOutlined,
  logout,
  micFilled,
  micOutlined,
  minus,
  outgoing,
  pencilFilled,
  pencilOutlined,
  phoneFilled,
  phoneOutlined,
  plus,
  search,
  send,
  statusFilled,
  statusOutlined,
  sticker,
  trash,
  user,
  userGroupFilled,
  userGroupOutline,
};
