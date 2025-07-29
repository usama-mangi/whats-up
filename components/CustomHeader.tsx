import { images } from "@/constants";
import { CustomHeaderProps } from "@/type";
import { View, Text, Image } from "react-native";
import cn from "clsx";

function CustomHeader({
  title,
  titleClasses,
  rightIcon,
  moreOptionsDialog,
}: CustomHeaderProps) {
  return (
    <View className="my-3 mx-5">
      <View className="custom-header-row">
        {title && (
          <Text
            className={cn("text-dark-100 text-[1.7rem]", titleClasses ?? "")}
          >
            {title}
          </Text>
        )}

        <View className="flex flex-row items-center gap-5">
          {rightIcon && (
            <Image
              source={rightIcon}
              className="size-6"
              tintColor="black"
              resizeMode="contain"
            />
          )}
          <Image
            source={images.ellipsis}
            className="size-6"
            tintColor="black"
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

export default CustomHeader;
