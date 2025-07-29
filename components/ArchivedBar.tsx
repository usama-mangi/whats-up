import { images } from "@/constants";
import { Image, Text } from "react-native";
import { View } from "react-native";

export default function ArchivedBar() {
  return (
    <View className="flex flex-row items-center gap-4 w-full my-2 px-5">
      <View className="mx-3">
        <Image source={images.archive} tintColor="#4b5563" className="size-6" />
      </View>
      <Text className="text-lg font-semibold text-gray-600">Archived</Text>
    </View>
  );
}
