import CallItem from "@/components/CallItem";
import CustomHeader from "@/components/CustomHeader";
import EncryptedMessage from "@/components/EncryptedMessage";
import { calls, icons } from "@/constants";
import {
  FlatList,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Calls() {
  return (
    <SafeAreaView className="h-full bg-white">
      <CustomHeader title="Calls" rightIcon={icons.search} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={[...calls, ...calls, ...calls]}
        contentContainerClassName="pb-[40%]"
        renderItem={({ item }) => <CallItem call={item} />}
        ListHeaderComponent={() => (
          <View className="py-3 px-5 flex">
            <Text className="font-medium text-2xl text-dark-100">
              Favorites
            </Text>

            <TouchableWithoutFeedback>
              <View className="my-4 flex flex-row gap-4 items-center">
                <View className="bg-[#22a55e] p-3 rounded-full">
                  <Image
                    source={icons.heartFilled}
                    className="size-5"
                    tintColor="white"
                  />
                </View>
                <Text className="font-medium text-lg">Add favorite</Text>
              </View>
            </TouchableWithoutFeedback>

            <View className="py-1.5 flex">
              <Text className="font-medium text-2xl text-dark-100">Recent</Text>
            </View>
          </View>
        )}
        ListFooterComponent={<EncryptedMessage title="calls" />}
      />
    </SafeAreaView>
  );
}
