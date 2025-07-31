import { Stack } from "expo-router";
import { ImageSourcePropType } from "react-native";
import { Models } from "react-native-appwrite";

type ProfileOptions =
  | "email"
  | "phone"
  | "address"
  | "password"
  | "name"
  | null;
// Auth Types End

interface TabBarIconProps {
  focused: boolean;
  icon: ImageSourcePropType;
  iconClassname?: string;
  title: string;
}

interface PaymentInfoStripeProps {
  label: string;
  value: string;
  labelStyle?: string;
  valueStyle?: string;
}

interface CustomButtonProps {
  onPress?: () => void;
  title?: string;
  style?: string;
  leftIcon?: React.ReactNode;
  textStyle?: string;
  isLoading?: boolean;
}

interface CustomHeaderProps {
  title: string;
  titleClasses?: string;
  rightIcon?: ReactNode;
  moreOptionsDialog?: ReactNode;
}

interface CustomInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

interface ProfileFieldProps {
  label: string;
  value: string;
  icon: ImageSourcePropType;
}

interface GetMenuParams {
  category: string;
  query: string;
}

interface EmptyComponentProps {
  title: string;
  subtitle: string;
}

interface TitleSubtitleProps {
  title: string;
  subtitle: string | number;
}

interface IconWithTextProps {
  iconPath: ImageSourcePropType;
  text: string;
}

interface ToppingListProps {
  title: string;
  items: MenuCustomization[];
  emptyText: string;
}

interface ProfileDetailRowProps {
  label: string;
  value: string | undefined;
  iconPath: any;
}

// WhatsUp
interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  lastSeen: Date;
  isOnline: boolean;
  picSource: any;
}

interface Chat {
  id: string;
  name: string;
  imageSource: any;
  lastMessage: Message;
  unreadCount: number;
}

interface Message {
  chatId: string;
  sentBy: string;
  content: MessageContent;
  time: Date;
}
interface PopulatedMessage extends Message {
  sentBy: User;
}

interface MessageContent {
  text: string;
  media?: Media;
}

interface Media {
  type: "audio" | "video" | "image" | "gif";
  mediaUrl: string;
}

interface Category {
  title: string;
  chatCount: number;
}

type Status = {
  user: string;
  media: StatusMedia;
  time: Date;
  seen: boolean;
};

interface SelfStatus {
  user: null;
}

interface Populated extends Status {
  user: User;
}
type PopulatedStatus = SelfStatus | Populated;
type StatusMedia = Media | { type: "text"; text: string };

interface Channel {
  id: string;
  name: string;
  messages: Message[];
  lastMessage: Message;
  unreadCount: number;
  imageSource: any;
}

interface Community {
  id: string;
  name: string;
  iconSource: any;
  chats: Chat[];
}

interface Call {
  user: {
    name: string;
    picSource: any;
  };
  count: number;
  time: Date;
  incoming: boolean;
  missed: boolean;
}
