import ChatBubble from "@/components/ChatBubble";
import { chats, icons, images, messages } from "@/constants";
import { Chat } from "@/type";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { id }: { id: string } = useLocalSearchParams();

  const chat = chats.find((c) => c.id === id);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "position" : "height"}
      isTVSelectable={false}
    >
      <SafeAreaView className="h-full bg-[#a0805230]">
        {/* Header */}
        <Header chat={chat!} />

        {/* Messages */}
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerClassName="gap-2.5 pb-2"
          data={messages}
          renderItem={({ item }) => <ChatBubble message={item} />}
          ListHeaderComponentClassName="items-center gap-2.5 pt-2"
          ListHeaderComponent={
            <>
              {/* Day/Date */}
              <View className="w-fit px-2.5 py-1 bg-white/80 rounded-md">
                <Text className="text-sm text-gray-600 font-medium">
                  Friday
                </Text>
              </View>

              {/* Encrypted Message */}
              <View className="max-w-[80%] w-fit px-3 py-2 bg-[#f7e6c7] shadow rounded-md">
                <View className="absolute top-2.5 left-6">
                  <Image source={icons.lockOutlined} className="size-3.5" />
                </View>

                <Text
                  className="text-[0.9rem] text-gray-600 text-wrap text-center"
                  style={{ lineHeight: 16 }}
                >
                  Messages and calls are end-to-end{"\n"} encrypted. Only people
                  in this chat can read,{"\n"} listen to, or share them. Learn
                  more
                </Text>
              </View>

              {/* Day/Date */}
              <View className="w-fit px-2.5 py-1 bg-white/80 rounded-md">
                <Text className="text-sm text-gray-600 font-medium">
                  Saturday
                </Text>
              </View>
            </>
          }
        />

        <View className="mx-1.5 my-1 ">
          <View className="px-3 py-0.5 flex flex-row items-center gap-2 bg-white shadow rounded-full">
            <Image source={icons.emoji} className="size-6" />
            <TextInput placeholder="Message" className="text-lg flex-1" />
            <Image source={icons.link} className="size-6" />
            <Image source={icons.camera} className="size-6" />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

function Header({ chat }: { chat: Chat }) {
  return (
    <TouchableWithoutFeedback>
      <View className="flex flex-row items-center gap-3 px-2 py-1.5 bg-white">
        <TouchableWithoutFeedback onPress={() => router.back()}>
          <View className="flex flex-row items-center gap-1.5">
            <Image
              source={icons.arrowLeft}
              className="size-6"
              tintColor="#444"
            />
            <Image source={chat.imageSource} className="size-10" />
          </View>
        </TouchableWithoutFeedback>

        <View className="flex-1">
          <Text className="text-xl" numberOfLines={1}>
            {chat.name}
          </Text>
          <Text className="text-sm" numberOfLines={1}>
            You, Shahzeb, Samian, Soban, Ghulam Mustafa, Amir
          </Text>
        </View>

        <View className="flex flex-row items-center gap-5">
          <Image
            source={icons.camcorder}
            className="size-6"
            tintColor="black"
          />
          <Image
            source={icons.phoneOutlined}
            className="size-6"
            tintColor="black"
          />
          <Image source={icons.ellipsis} className="size-6" tintColor="black" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
