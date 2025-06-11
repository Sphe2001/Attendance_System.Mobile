import { View, Text, Vibration, Pressable } from "react-native";
import React, { forwardRef } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Home/HomeScreen";
import QRCodeScreen from "../ScanningSection/QRCode/QRCodeScreen";
import { Entypo } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Animated, { useSharedValue } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="TimeTable"
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "#050c0f",

          borderTopWidth: 0,
          width: "100%",
          height: 80,
          alignItems: "center",
        },
        tabBarAllowFontScaling: true,
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              color: focused ? "#94d4d6" : "white",
              marginTop: 3,

              fontFamily: "Poppins_400Regular",
              fontSize: 11,
            }}
          >
            {route.name}
          </Text>
        ),
        tabBarIcon: ({ focused, color, size }) => {
          return route.name === "TimeTable" ? (
            <Entypo
              name="home"
              color={focused ? "#52C9CE" : "white"}
              size={focused ? 25 : 22}
            />
          ) : route.name === "Scan Code" ? (
            <AntDesign
              name="qrcode"
              color={focused ? "#52C9CE" : "white"}
              size={focused ? 25 : 22}
            />
          ) : (
            <AntDesign
              name="user"
              color={focused ? "#52C9CE" : "white"}
              size={focused ? 25 : 22}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="TimeTable"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Scan Code"
        component={QRCodeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={QRCodeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
