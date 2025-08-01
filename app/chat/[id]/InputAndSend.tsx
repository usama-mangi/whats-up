import IconButton from "@/components/IconButton";
import { icons } from "@/constants";
import { useState } from "react";
import { TextInput, View } from "react-native";

interface InputAndSendProps {
  onSend: (text: string) => void;
}

export default function InputAndSend({ onSend }: InputAndSendProps) {
  const [value, setValue] = useState("");

  function handleSendMessage() {
    onSend(value);
    setValue("");
  }

  return (
    <View className="mx-1.5 my-1 flex flex-row items-center gap-1.5">
      <View className="px-3 flex flex-row items-center flex-1 bg-white shadow rounded-3xl">
        <IconButton
          icon={icons.sticker}
          className="mr-1.5"
          onPress={() => console.log("Emoji Button")}
        />

        <TextInput
          placeholder="Message"
          className="text-lg flex-1"
          value={value}
          multiline
          onChangeText={(v) => setValue(v)}
        />

        <IconButton
          icon={icons.attachment}
          onPress={() => console.log("Link Button")}
        />
        <IconButton
          icon={icons.camera}
          className="ml-2"
          onPress={() => console.log("Camera Button")}
        />
      </View>

      <View className="bg-green-600 shadow size-[3.3rem] rounded-full flex items-center justify-center">
        <IconButton
          icon={value.length > 0 ? icons.send : icons.micFilled}
          className="size-6"
          tintColor="white"
          onPress={handleSendMessage}
        />
      </View>
    </View>
  );
}
