import { Category } from "@/type";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Text, FlatList, TouchableOpacity, Platform } from "react-native";
import cn from "clsx";

function Filter({ categories }: { categories: Category[] }) {
  const searchParms = useLocalSearchParams();
  const [active, setActive] = useState(searchParms.category || "");

  function handlePress(id: string) {
    setActive(id);

    if (id === "all") router.setParams({ category: undefined });
    else router.setParams({ category: id });
  }

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.title}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName="gap-2 my-3"
      renderItem={({ item }) => (
        <TouchableOpacity
          className={cn(
            "filter",
            active === item.title ? "bg-[#58f15366]" : "",
          )}
          onPress={() => handlePress(item.title)}
        >
          <Text
            className={cn(
              "font-semibold",
              active === item.title ? "text-[#1C892D]" : "text-gray-500",
            )}
          >
            {item.title} {item.title !== "All" ? item.chatCount : ""}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
}

export default Filter;
