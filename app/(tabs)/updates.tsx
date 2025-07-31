import ChatItem from "@/components/ChatItem";
import CustomHeader from "@/components/CustomHeader";
import StatusCard from "@/components/StatusCard";
import { channels, icons, statuses } from "@/constants";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Updates() {
  return (
    <SafeAreaView className="h-full bg-white">
      <CustomHeader title="Updates" rightIcon={icons.search} />

      <View className="mt-4 flex flex-col">
        <Text className="text-2xl font-medium mx-5">Status</Text>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={statuses}
          contentContainerClassName="my-4 gap-1.5 px-5"
          renderItem={({ item }) => <StatusCard status={item} />}
        />
      </View>

      <View className="mt-2 flex">
        <View className="flex flex-row justify-between items-center mx-5">
          <Text className="text-2xl font-medium">Channels</Text>
          <TouchableOpacity className="bg-[#f5f5f5] px-5 py-2 rounded-full">
            <Text className="font-medium">Explore</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={channels}
          contentContainerClassName="mt-1"
          renderItem={({ item }) => <ChatItem chat={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
