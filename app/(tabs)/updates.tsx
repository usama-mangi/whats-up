import ChatItem from "@/components/ChatItem";
import CustomHeader from "@/components/CustomHeader";
import StatusCard from "@/components/StatusCard";
import { channels, images, statuses } from "@/constants";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Updates() {
  return (
    <SafeAreaView className="h-full bg-white">
      <CustomHeader title="Updates" rightIcon={images.search} />

      <View className="mt-4 px-5 flex flex-col">
        <Text className="text-2xl font-medium">Status</Text>

        <FlatList
          data={statuses}
          contentContainerClassName="my-4 gap-1.5"
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <StatusCard status={item} />}
        />
      </View>

      <View className="mt-2 px-5 flex">
        <View className="flex flex-row justify-between items-center">
          <Text className="text-2xl font-medium">Channels</Text>
          <TouchableOpacity className="bg-[#f5f5f5] px-5 py-2 rounded-full">
            <Text className="font-medium">Explore</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={channels}
          contentContainerClassName="mt-1"
          renderItem={({ item }) => <ChatItem chat={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
