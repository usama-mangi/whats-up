import arrowBack from "../assets/icons/arrow-back.png";
import arrowDown from "@/assets/icons/arrow-down.png";
import arrowRight from "@/assets/icons/arrow-right.png";
import bag from "@/assets/icons/bag.png";
import check from "@/assets/icons/check.png";
import clock from "@/assets/icons/clock.png";
import dollar from "@/assets/icons/dollar.png";
import envelope from "@/assets/icons/envelope.png";
import home from "@/assets/icons/home.png";
import location from "@/assets/icons/location.png";
import logout from "@/assets/icons/logout.png";
import minus from "@/assets/icons/minus.png";
import pencil from "@/assets/icons/pencil.png";
import person from "@/assets/icons/person.png";
import phone from "@/assets/icons/phone.png";
import plus from "@/assets/icons/plus.png";
import search from "@/assets/icons/search.png";
import star from "@/assets/icons/star.png";
import trash from "@/assets/icons/trash.png";
import user from "@/assets/icons/user.png";

import avatar from "@/assets/images/avatar.png";
import statusBg from "@/assets/images/status.jpg";
import success from "@/assets/images/success.png";
import { Category, Channel, Chat, PopulatedStatus, User } from "@/type";

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

export const images = {
  avatar,
  success,
  arrowBack,
  arrowDown,
  arrowRight,
  bag,
  check,
  clock,
  dollar,
  envelope,
  home,
  location,
  logout,
  minus,
  pencil,
  person,
  phone,
  plus,
  search,
  star,
  statusBg,
  trash,
  user,
};
