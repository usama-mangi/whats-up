import { images } from "@/constants";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Image, TextInput, View } from "react-native";

function SearchBar() {
  const params = useLocalSearchParams<{ query: string }>();
  const [query, setQuery] = useState(params.query);

  function handleSearch(text: string) {
    setQuery(text);

    if (!text) router.setParams({ query: undefined });
  }

  function handleSubmit() {
    if (query.trim()) router.setParams({ query });
  }

  return (
    <View className="searchbar">
      <Image
        source={images.search}
        className="size-6"
        resizeMode="contain"
        tintColor="dark-100"
      />
      <TextInput
        className="w-full"
        placeholder="Ask Meta AI or Search"
        value={query}
        onChangeText={handleSearch}
        onSubmitEditing={handleSubmit}
        placeholderTextColor="#5a5a5a"
        returnKeyType="search"
      />
    </View>
  );
}

export default SearchBar;
