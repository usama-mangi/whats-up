import { icons } from "@/constants";
import { Chat } from "@/type";
import { router } from "expo-router";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";

export default function Header({ chat }: { chat: Chat }) {
  return (
    <TouchableWithoutFeedback>
      <View className="flex flex-row items-center gap-3 px-2 py-1.5 bg-white">
        <TouchableWithoutFeedback onPress={() => router.back()}>
          <View className="flex flex-row items-center gap-1.5">
            <Image
              source={icons.arrowLeft}
              className="size-6"
              tintColor="#444"
            />
            <Image source={chat.imageSource} className="size-10" />
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => router.navigate(`/chat/details/${chat.id}`)}
        >
          <View className="flex-1">
            <Text className="text-xl" numberOfLines={1}>
              {chat.name}
            </Text>
            <Text className="text-sm" numberOfLines={1}>
              You, Shahzeb, Samian, Soban, Ghulam Mustafa, Amir
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <View className="flex flex-row items-center gap-5">
          <Image
            source={icons.camcorder}
            className="size-6"
            tintColor="black"
          />
          <Image
            source={icons.phoneOutlined}
            className="size-6"
            tintColor="black"
          />
          <Image source={icons.ellipsis} className="size-6" tintColor="black" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
