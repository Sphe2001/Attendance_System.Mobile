import { View, Text, Vibration, Pressable } from "react-native";
import React, { forwardRef } from "react";
import {
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../Home/HomeScreen";
import QRCodeScreen from "../ScanningSection/QRCode/QRCodeScreen";
import { Entypo } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useSharedValue } from "react-native-reanimated";

const Tab = createBottomTabNavigator();


const handleTabPress = () => {
  Vibration.vibrate(100);
};

const CustomTabBarButton = forwardRef((props: any, ref: any) => (
  <Pressable
    {...props}
    ref={ref}
    onPress={() => {
      props?.onPress?.();
      handleTabPress();
    }}
  />
));
CustomTabBarButton.displayName = "CustomTabBarButton";

const BottomTabs = () => {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#192223",
          padding:5
         },
        tabBarLabel: ({ focused }) => (
          <Text style={{ color: focused ? "#52C9CE" : "white" ,marginTop:3, borderBottomWidth : focused ? 3 : 0, borderColor: "#9FD3D5", fontFamily: "Poppins_400Regular"}}>{route.name}</Text>
        ),
          tabBarIcon:({focused,color,size})=>{
            return(
              route.name === "Home" ? <Entypo name="home"  color={focused ? "#52C9CE" : "white" } size={ focused ? 30 : 25}/> :  route.name === "ScanQRCode" ? <AntDesign name="qrcode"  color={focused ? "#52C9CE" : "white" }  size={ focused ? 30 : 25}/> :<AntDesign name="user"  color={focused ? "#52C9CE" : "white" }  size={ focused ? 30 : 25}/>
            )
          },
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        
        }}
      />
      <Tab.Screen
        name="ScanQRCode"
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
