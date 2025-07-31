import { icons } from "@/constants";
// import useAuthStore from "@/store/auth.store";
import { TabBarIconProps } from "@/type";
import cn from "clsx";
import { Redirect, Tabs } from "expo-router";
import { Image, StatusBar, Text, View } from "react-native";

function TabBarIcon({ focused, icon, iconClassname, title }: TabBarIconProps) {
  return (
    <View className="tab-icon">
      <View
        className={cn(
          "w-20 flex items-center p-1 rounded-full",
          focused && "bg-green-200",
        )}
      >
        <Image
          source={icon}
          className={cn("size-7", iconClassname)}
          tintColor={focused ? "#14532d" : "#444"}
        />
      </View>
      <Text
        className={cn("text-sm", focused ? "font-semibold" : "font-medium")}
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
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon={
                  focused ? icons.chatBubbleFilled : icons.chatBubbleOutlined
                }
                title="Chats"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="updates"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon={focused ? icons.statusFilled : icons.statusOutlined}
                title="Updates"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="communities"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon={focused ? icons.userGroupFilled : icons.userGroupOutline}
                title="Communities"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="calls"
          options={{
            tabBarIcon: ({ focused }) => (
              <TabBarIcon
                focused={focused}
                icon={focused ? icons.phoneFilled : icons.phoneOutlined}
                iconClassname="!size-6 my-0.5"
                title="Calls"
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

export default TabsLayout;
