import { View, Text, Image } from "react-native";
import React from "react";
import Constants from "expo-constants";

type Props = {};

const HomeScreenHeader = (props: Props) => {
  const profile_info = {
    name: "Blessing Netshodwe",
    email: "221661591@tut4life.ac.za",
    img: require("../../assets/profile_pic.png"),
  };
  const { statusBarHeight } = Constants;
  return (
    <View
      style={{
        borderEndStartRadius: 15,
        borderEndEndRadius: 15,
        paddingTop: statusBarHeight,
      }}
      className="bg-HomeScreenHeaderBG p-AppPadding  w-full h-[35%]"
    >
      <View className="mt-[15px]">
        <View className="flex flex-row gap-2">
          <Image
            width={30}
            height={30}
            className="rounded-full"
            source={profile_info.img}
          ></Image>

          <View className="flex">
            <View className="h-[14px]"></View>
            <View>
              <Text
                className="text-white"
                style={{ fontFamily: "Poppins_400Regular", fontSize: 19 }}
              >
                {profile_info.name}
              </Text>
            </View>
            <View className="-mt-[5px]">
              <Text
                className="text-[#656868]"
                style={{ fontFamily: "Poppins_400Regular", fontSize: 13 }}
              >
                {profile_info.email}
              </Text>
            </View>
          </View>
        </View>
        <View className="mt-5">
          <Text
            style={{ fontFamily: "Poppins_700Bold", fontSize: 40 }}
            className="text-[#E5E6E6]"
          >
            Hi, Blessing
          </Text>
          <Text
            style={{ fontFamily: "Poppins_700Bold", fontSize: 24 }}
            className="text-[#B0B2B5] -mt-[5px]"
          >
            Welcome to your Classes
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HomeScreenHeader;
