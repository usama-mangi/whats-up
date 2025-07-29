import { getHourMin } from "@/lib/date-formatter";
import { Chat } from "@/type";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function ChatItem({ chat }: { chat: Chat }) {
  return (
    <TouchableWithoutFeedback>
      <View className="chat-item">
        <TouchableOpacity className="rounded-full object-contain">
          <Image
            source={chat.imageSource}
            alt="profile"
            className="size-14 rounded-full"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View className="flex justify-between flex-1">
          <View className="flex flex-row justify-between items-center">
            <Text className="font-medium text-lg">{chat.name}</Text>
            <Text className="text-gray-200 text-sm">
              {getHourMin(chat.lastMessage.time)}
            </Text>
          </View>
          <View className="flex flex-row justify-between">
            <Text>{chat.lastMessage.content.text}</Text>
            {chat.unreadCount > 0 && (
              <View className="bg-[#28aa28] size-6 rounded-full flex items-center justify-center">
                <Text className="text-xs font-semibold text-white">
                  {chat.unreadCount}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
