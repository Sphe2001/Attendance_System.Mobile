import { View, Text } from "react-native";
import React from "react";
import ScreenHeight from "../components/Screen";
import HomeScreenHeader from "../components/HomeScreenHeader";
import Moduleinfo from "../components/ModuleInfo";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View className="bg-AppBackGround w-full  h-full">
      <HomeScreenHeader />
      <Text
        className="text-white p-AppPadding "
        style={{ fontFamily: "Poppins_600SemiBold", fontSize: 22 }}
      >
        Today Classes
      </Text>
      <View className="  p-AppPadding h-[500px] ">
        <Moduleinfo
          data={{
            name: "Object-Orientated-programming",
            code: "OOP216D",
            time: "11:00-12:00",
            venue: "G-120",
            status: "present",
          }}
        />
        <Moduleinfo
          data={{
            name: "Object-Orientated-programming",
            code: "OOP216D",
            time: "11:00-12:00",
            venue: "G-120",
            status: "present",
          }}
        />
        <Moduleinfo
          data={{
            name: "Object-Orientated-programming",
            code: "OOP216D",
            time: "11:00-12:00",
            venue: "G-120",
            status: "present",
          }}
        />
        <Moduleinfo
          data={{
            name: "Object-Orientated-programming",
            code: "OOP216D",
            time: "11:00-12:00",
            venue: "G-120",
            status: "present",
          }}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
