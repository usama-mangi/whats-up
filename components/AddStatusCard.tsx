import { icons, images } from "@/constants";
import { Image, Text, View } from "react-native";

export default function AddStatusCard() {
  return (
    <View className="h-[9.5rem] w-[5.2rem] rounded-2xl overflow-hidden bg-[#f5f5f5]">
      <View className="absolute top-2.5 left-2.5 p-0.5">
        <View className="relative w-full h-full">
          <Image
            source={images.avatar}
            alt="pic"
            className="size-9 rounded-full"
            resizeMode="contain"
          />
          <View className="absolute -right-1.5 -bottom-1.5 bg-green-600 rounded-full p-1 border border-white">
            <Image source={icons.plus} className="size-3" tintColor="white" />
          </View>
        </View>
      </View>
      <View className="absolute bottom-2.5 left-2.5 w-9/12">
        <Text
          className="text-sm font-medium text-dark-100"
          style={{ lineHeight: 14 }}
        >
          Add Status
        </Text>
      </View>
    </View>
  );
}
