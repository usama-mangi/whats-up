import CustomHeader from "@/components/CustomHeader";
import { chats } from "@/constants";
import { useLocalSearchParams } from "expo-router";
import {
  Alert,
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatDetails() {
  const id = useLocalSearchParams().id as string;

  const chat = chats.find((c) => c.id === id);

  if (!chat) return Alert.alert("Select a chat with details");

  return (
    <SafeAreaView className="h-full bg-white flex items-center gap-2">
      <CustomHeader title={chat.name} />

      <TouchableWithoutFeedback>
        <View>
          <Image source={chat.imageSource} className="size-28" />
        </View>
      </TouchableWithoutFeedback>

      <Text>{chat.name}</Text>
    </SafeAreaView>
  );
}
