import { icons } from "@/constants";
import { getDateTime } from "@/lib/date-formatter";
import { Call } from "@/type";
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import cn from "clsx";

export default function CallItem({ call }: { call: Call }) {
  return (
    <TouchableWithoutFeedback>
      <View className="chat-item">
        <TouchableOpacity className="rounded-full object-contain">
          <Image
            source={call.user.picSource}
            alt="profile"
            className="size-14 rounded-full"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View className="flex flex-row justify-between items-center flex-1">
          <View className="flex items-start">
            <Text
              className={cn(
                "font-medium text-lg",
                call.missed && "text-red-500",
              )}
            >
              {call.user.name} {call.count > 1 ? `(${call.count})` : ""}
            </Text>
            <View className="flex flex-row gap-2 items-center">
              <Image
                source={call.incoming ? icons.incoming : icons.outgoing}
                className="size-3"
                tintColor={call.missed ? "red" : "green"}
              />
              <Text className="text-gray-200">{getDateTime(call.time)}</Text>
            </View>
          </View>
          <View className="">
            <Image
              source={icons.phoneOutlined}
              className="size-5"
              tintColor="#444"
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
