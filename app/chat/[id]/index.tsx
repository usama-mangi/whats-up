import { chats, messages } from "@/constants";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import InputAndSend from "./InputAndSend";
import Messages from "./Messages";

export default function Index() {
  const id = useLocalSearchParams().id as string;

  const chat = chats.find((c) => c.id === id);

  if (!chat) return router.back();

  return (
    <KeyboardAvoidingView behavior="height" isTVSelectable={false}>
      <SafeAreaView className="h-full bg-[#a0805230]">
        <Header chat={chat!} />

        <Messages messages={messages} />

        <InputAndSend
          onSend={(text) => console.log(`${text} sent to ${chat.name}`)}
        />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
