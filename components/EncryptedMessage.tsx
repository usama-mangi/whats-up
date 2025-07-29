import { images } from "@/constants";
import { Image, Text, View } from "react-native";

export default function EncryptedMessage({ title }: { title: string }) {
  return (
    <>
      <View className="h-[0.1rem] bg-[#f5f5f5]" />

      <View className="flex flex-row items-center justify-center gap-1 py-3">
        <Image source={images.lock} className="size-4" tintColor="#444" />
        <Text className="text-sm text-gray-500">
          Your personal {title} are{" "}
          <Text className="text-green-700">end-to-end encrypted</Text>
        </Text>
      </View>
    </>
  );
}
