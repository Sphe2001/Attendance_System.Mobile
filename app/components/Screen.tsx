import { View, Text } from "react-native";
import React from "react";
import Constants from 'expo-constants';

type Props = {
    children:React.JSX.Element
};

const ScreenHeight = ({children}: Props) => {
    const {statusBarHeight} = Constants;
  return (
    <View  className="bg-HomeScreenHeaderBG" style={{paddingTop:statusBarHeight,height:20}}>
      {children}
    </View>
  );
};

export default ScreenHeight;
