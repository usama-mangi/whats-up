import ArchivedBar from "@/components/ArchivedBar";
import ChatItem from "@/components/ChatItem";
import CustomHeader from "@/components/CustomHeader";
import Filter from "@/components/Filter";
import SearchBar from "@/components/SearchBar";
import { images, chats, categories } from "@/constants";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white">
      <CustomHeader
        title="WhatsUp"
        titleClasses="text-[#28aa28] font-semibold"
        rightIcon={images.bag}
        moreOptionsDialog={[]}
      />

      <FlatList
        data={chats}
        renderItem={({ item }) => <ChatItem chat={item} />}
        contentContainerClassName="pb-[25%] px-5"
        ListHeaderComponent={() => (
          <View className="flex flex-col justify-between items-center">
            <SearchBar />
            <Filter categories={categories} />
            <ArchivedBar />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
