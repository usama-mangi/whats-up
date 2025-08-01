import { icons } from "@/constants";
import { Image, Text, View } from "react-native";

export default function ListHeader() {
  return (
    <>
      <DayDate day="Friday" />

      {/* Encrypted Message */}
      <View className="max-w-[80%] w-fit px-3 py-2 bg-[#f7e6c7] shadow rounded-md">
        <View className="absolute top-2.5 left-6">
          <Image source={icons.lockOutlined} className="size-3.5" />
        </View>

        <Text
          className="text-[0.9rem] text-gray-600 text-wrap text-center"
          style={{ lineHeight: 16 }}
        >
          Messages and calls are end-to-end{"\n"} encrypted. Only people in this
          chat can read,{"\n"} listen to, or share them. Learn more
        </Text>
      </View>

      <DayDate day="Saturday" />
    </>
  );
}

const DayDate = ({ day }: { day: String }) => (
  <View className="w-fit px-2.5 py-1 bg-white/80 rounded-md">
    <Text className="text-sm text-gray-600 font-medium">{day}</Text>
  </View>
);
