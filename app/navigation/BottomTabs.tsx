import { View, Text, Vibration, Pressable } from "react-native";
import React, { forwardRef } from "react";
import {
  BottomTabBarButtonProps,
  BottomTabBarProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../Home/HomeScreen";
import { Entypo } from "@expo/vector-icons";
type Props = {};

const BottomTabs = (props: Props) => {
  const handleTabPress = () => {
    Vibration.vibrate(100);
  };

  //u create da tab here its the bottom tab
  const Tab = createBottomTabNavigator();
  // u return the tab as a component im not sure if thats how it works but that how i understand it
  //Tab.Navigator -> u can customise it to match the design u want like how imma don it now
  // use forwardRef Coz tabBarButton will pass a ref and we want to give the ref to the child which is the pressable
  const CustomTabBarButton = forwardRef((props: any, ref: any) => {
    return (
      <Pressable
        {...props}
        ref={ref}
        onPress={() => {
          props?.onPress?.();
          handleTabPress();
        }}
      />
    );
  });
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarButton: (props) => <CustomTabBarButton {...props} />,
        tabBarLabelStyle: {
          fontSize: 12,
          textAlign: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "TimeTable",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
