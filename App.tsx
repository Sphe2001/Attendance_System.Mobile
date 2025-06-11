import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import BottomTabs from "./app/navigation/BottomTabs";
import { useFonts, Poppins_400Regular, Poppins_700Bold,Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import ScreenHeight from "./app/components/Screen";
export default function App() {
   const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_600SemiBold
  });
  return (
    <NavigationContainer>
      
         <BottomTabs />
     
     
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
