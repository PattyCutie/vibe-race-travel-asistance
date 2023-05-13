import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "InterpreterScreen"
>;

const InterpreterScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="flex-1 px-2 bg-[#D15D84]">
      <View className="flex-row items-center justify-start ">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="flex-row space-x-2 p-2 "
        >
          <FontAwesome5 name="arrow-left" size={28} color="#FFFFFF" />
          <Text className="text-[#FFFFFF]  text-lg">Back</Text>
        </TouchableOpacity>
      </View>
      <Text>Find Places Screen</Text>
    </SafeAreaView>
  );
};

export default InterpreterScreen;
