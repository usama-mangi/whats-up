import CommunityCard from "@/components/CommunityCard";
import CustomHeader from "@/components/CustomHeader";
import { communities, images } from "@/constants";
import {
  FlatList,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Communities() {
  return (
    <SafeAreaView className="h-full bg-white">
      <CustomHeader title="Communities" />

      <FlatList
        data={communities}
        contentContainerClassName="pb-[20%]"
        renderItem={({ item }) => <CommunityCard community={item} />}
        ItemSeparatorComponent={() => <View className="h-2 bg-[#f2f3f4]" />}
        ListHeaderComponent={() => (
          <>
            <TouchableWithoutFeedback>
              <View className="flex flex-row items-center gap-4 mx-5 my-4">
                <View className="bg-[#ccc] p-2 rounded-xl relative">
                  <Image
                    source={images.userGroup}
                    className="size-10"
                    tintColor="white"
                  />
                  <View className="absolute -bottom-1 -right-1 p-1.5 flex items-center justify-center bg-green-600 rounded-full border border-white">
                    <Image
                      source={images.plus}
                      className="size-2.5"
                      tintColor="white"
                    />
                  </View>
                </View>

                <Text className="text-lg font-medium">New community</Text>
              </View>
            </TouchableWithoutFeedback>

            <View className="h-2 bg-[#f2f3f4]" />
          </>
        )}
      />
    </SafeAreaView>
  );
}
