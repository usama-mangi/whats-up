import { images } from "@/constants";
// import useAuthStore from "@/store/auth.store";
import { TabBarIconProps } from "@/type";
import cn from "clsx";
import { Redirect, Tabs } from "expo-router";
import { Image, StatusBar, Text, View } from "react-native";

function TabBarIcon({ focused, icon, title }: TabBarIconProps) {
  return (
    <View className="tab-icon">
      <View
        className={cn(
          "w-20 flex items-center p-1 rounded-full",
          focused && "bg-[#58f15355]",
        )}
      >
        <Image
          source={icon}
          className="size-7"
          tintColor={focused ? "#1C892D" : "#000"}
        />
      </View>
      <Text
        className={cn(
          "text-sm",
          focused ? "font-quicksand-bold" : "font-quicksand-semibold",
        )}
      >
        {title}
      </Text>
    </View>
  );
}

function TabsLayout() {
  // const { isAuthenticated } = useAuthStore();
  const isAuthenticated = true;

  if (!isAuthenticated) return <Redirect href="/sign-in" />;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: "10%",
            position: "absolute",
          },
          tabBarIconStyle: {
            width: "auto",
            height: "100%",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Chats",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} icon={images.home} title="Home" />
            ),
          }}
        />
        <Tabs.Screen
          name="updates"
          options={{
            title: "Updates",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon={images.star}
                title="Updates"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="communities"
          options={{
            title: "Communities",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon={images.location}
                title="Communities"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="calls"
          options={{
            title: "Calls",
            tabBarIcon: ({ focused }) => (
              <TabBarIcon focused={focused} icon={images.phone} title="Calls" />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

export default TabsLayout;
