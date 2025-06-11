import { View, Text } from "react-native";
import React from "react";


type Props = {};

const Moduleinfo = (props: Props) => {
    const Module_Info={
        name:"Object-Orientated-programming",
        code:"OOP216D",
        time:"11:00-12:00",
        venue:"120",
        status:'absent'
    }
  return (
    <View className="w-[80%] h-[25%] border-2 border-white justify-between flex flex-row bg-ModuleInfoBG" >
<View className="border-2 border-green-100   ">
<Text>{Module_Info.name.length > 25 ?  Module_Info.name.substring(0,25) : Module_Info.name}<Text> "{Module_Info.code}" </Text></Text>
<Text>{Module_Info.status}</Text>
</View>
<View className="border-2 border-green-100   ">
<Text>{Module_Info.time}</Text>
<Text>{Module_Info.venue}</Text>
</View>
<View>
    
</View>
    </View>

     
  );
};


export default Moduleinfo;