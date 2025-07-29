import ArchivedBar from "@/components/ArchivedBar";
import ChatItem from "@/components/ChatItem";
import CustomHeader from "@/components/CustomHeader";
import EncryptedMessage from "@/components/EncryptedMessage";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import { images, chats, categories } from "@/constants";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white">
      <CustomHeader
        title="WhatsUp"
        titleClasses="text-green-600 font-semibold"
        rightIcon={images.camera}
        moreOptionsDialog={[]}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={chats}
        renderItem={({ item }) => <ChatItem chat={item} />}
        contentContainerClassName="pb-[50%]"
        ListHeaderComponent={
          <View className="flex flex-col justify-between items-center">
            <SearchBar />
            <Filter categories={categories} />
            <ArchivedBar />
          </View>
        }
        ListFooterComponent={
          <View>
            <View className="flex flex-row justify-center my-4">
              <Text className="font-medium text-sm">
                Tap and hold on a chat for more options
              </Text>
            </View>

            <EncryptedMessage title="messages" />
          </View>
        }
      />
    </SafeAreaView>
  );
}
