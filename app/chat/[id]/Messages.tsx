import ChatBubble from "@/components/ChatBubble";
import { PopulatedMessage } from "@/type";
import { FlatList } from "react-native";
import ListHeader from "./ListHeader";

interface MessagesProps {
  messages: PopulatedMessage[];
}

const Messages = ({ messages }: MessagesProps) => (
  <FlatList
    showsVerticalScrollIndicator={false}
    contentContainerClassName="gap-2.5 pb-2"
    data={messages}
    renderItem={({ item }) => <ChatBubble message={item} />}
    ListHeaderComponentClassName="items-center gap-2.5 pt-2"
    ListHeaderComponent={ListHeader}
  />
);

export default Messages;
