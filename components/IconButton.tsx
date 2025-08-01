import { Image, TouchableWithoutFeedback } from "react-native";
import cn from "clsx";
import { IconButtonProps } from "@/type";

const IconButton = ({
  icon,
  className,
  containerClassName,
  onPress,
  tintColor,
}: IconButtonProps) => (
  <TouchableWithoutFeedback onPress={onPress} className={containerClassName}>
    <Image
      source={icon}
      className={cn("size-6", className)}
      tintColor={tintColor ?? "#333"}
    />
  </TouchableWithoutFeedback>
);

export default IconButton;
