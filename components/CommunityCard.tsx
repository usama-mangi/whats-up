import { Community } from "@/type";
import { Image, Text, TouchableWithoutFeedback, View } from "react-native";
import ChatItem from "./ChatItem";
import { images } from "@/constants";

export default function CommunityCard({ community }: { community: Community }) {
  return (
    <>
      <TouchableWithoutFeedback>
        <View className="flex flex-row items-center gap-4 py-4 px-5 active:bg-gray-300">
          <View className="flex flex-row gap-4 items-center">
            <View className="bg-green-100 p-2 rounded-xl">
              <Image
                source={community.iconSource}
                className="size-10"
                tintColor="#166534"
              />
            </View>
            <Text className="text-lg font-medium">{community.name}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View className="h-[0.1rem] bg-[#eee]" />

      <View className="px-5">
        <ChatItem chat={community.chats[0]} />
        {community.chats.length > 1 && <ChatItem chat={community.chats[1]} />}

        {community.chats.length > 2 && (
          <TouchableWithoutFeedback>
            <View className="flex flex-row gap-4 items-center py-[0.225rem]">
              <View className="flex items-center justify-center size-14">
                <Image
                  source={images.chevronRight}
                  className="size-3"
                  tintColor="#6b7280"
                />
              </View>
              <Text className="text-lg text-gray-600">View All</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </>
  );
}
