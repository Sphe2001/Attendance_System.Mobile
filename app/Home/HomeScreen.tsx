import { View, Text } from "react-native";
import React from "react";
import ScreenHeight from "../components/Screen";
import HomeScreenHeader from "../components/HomeScreenHeader";
import Moduleinfo from "../components/ModuleInfo";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View className="bg-AppBackGround w-full  h-full" >
<HomeScreenHeader/>
<Text className="text-white p-AppPadding " style={{fontFamily: "Poppins_600SemiBold",fontSize:22}}>Today Classes</Text>
   <View className=" h-[500px] border-2 border-white ">
    <Moduleinfo/>
   </View>
   </View>

     
  );
};


export default HomeScreen;
