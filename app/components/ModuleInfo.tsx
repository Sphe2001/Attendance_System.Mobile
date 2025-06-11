import { View, Text } from "react-native";
import React from "react";

type Props = {
  data: {
    name: string;
    code: string;
    time: string;
    venue: string;
    status: string;
  };
};

const Moduleinfo = ({ data }: Props) => {
  return (
    <View
      className={`h-[15%] justify-between p-2 rounded-md mb-3  flex flex-row ${
        data.status === "absent"
          ? "bg-ModuleInfoLate"
          : data.status === "present"
          ? "bg-ModuleInfoPresent"
          : "bg-ModuleInfoBG"
      }`}
    >
      <View className="flex justify-between">
        <Text
          style={{ fontFamily: "Poppins_400Regular", fontSize: 12 }}
          className="text-white"
        >
          {data.name.length > 25 ? data.name.substring(0, 25) : data.name}
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 12 }}>
            {" "}
            "{data.code}"{" "}
          </Text>
        </Text>
        <Text
          className="text-white"
          style={{ fontFamily: "Poppins_600SemiBold", fontSize: 15 }}
        >
          {data.status}
        </Text>
      </View>
      <View className="flex justify-between">
        <Text
          className="text-white"
          style={{ fontFamily: "Poppins_600SemiBold", fontSize: 12 }}
        >
          {data.time}
        </Text>
        <Text
          className="text-white text-end"
          style={{ fontFamily: "Poppins_600SemiBold", fontSize: 16 }}
        >
          {data.venue}
        </Text>
      </View>
      <View></View>
    </View>
  );
};

export default Moduleinfo;
