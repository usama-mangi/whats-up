import { icons } from "@/constants";
import { getHourMinAorP } from "@/lib/date-formatter";
import { PopulatedMessage } from "@/type";
import { Image, Text, View } from "react-native";

export default function ChatBubble({ message }: { message: PopulatedMessage }) {
  return (
    <View className="flex flex-row items-start justify-start gap-1 px-5">
      <Image source={message.sentBy.picSource} className="size-9" />

      <View className="bg-white px-3 py-1.5 rounded-2xl flex flex-shrink gap-1.5">
        <Text className="text-blue-600 flex-shrink">{message.sentBy.name}</Text>
        <Text className="text-lg" style={{ lineHeight: 20 }}>
          {message.content.text}
        </Text>
        <Text className="text-xs font-medium self-end text-gray-200">
          {getHourMinAorP(message.time)}
        </Text>
      </View>

      <View className="self-center bg-[#bbb] rounded-full p-1">
        <Image source={icons.forward} className="size-7" tintColor="#eee" />
      </View>
    </View>
  );
}
