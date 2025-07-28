import { PopulatedStatus } from "@/type";
import { Image, ImageBackground, Text, View } from "react-native";
import cn from "clsx";
import { images } from "@/constants";
import AddStatusCard from "./AddStatusCard";

export default function StatusCard({ status }: { status: PopulatedStatus }) {
  if (status.user === null) return <AddStatusCard />;

  return (
    <View className="h-[9.5rem] w-[5.2rem] rounded-2xl overflow-hidden bg-[#f5f5f5]">
      {status.media.type === "image" && (
        <ImageBackground
          source={images.statusBg}
          className="h-full w-full"
          resizeMode="cover"
        />
      )}
      <View
        className={cn(
          "absolute top-2 left-2 overflow-hidden rounded-full object-cover p-0.5",
          status.seen ? "" : "border-2 border-green-300",
        )}
      >
        <Image
          source={status.user.picSource}
          alt="pic"
          className="size-9"
          resizeMode="contain"
        />
      </View>
      <View className="absolute bottom-2 left-2">
        <Text
          className="text-sm font-medium text-dark-100"
          style={{ lineHeight: 14 }}
        >
          {status.user.name}
        </Text>
      </View>
    </View>
  );
}
