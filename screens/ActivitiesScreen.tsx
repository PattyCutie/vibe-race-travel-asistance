import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { SafeAreaView } from "react-native-safe-area-context";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "ActivitiesScreen"
>;
const ActivitiesScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="flex-1 px-2 bg-[#FFB067]">
      <View className="flex-row items-center justify-start ">
        <TouchableOpacity
          onPress={navigation.goBack}
          className="flex-row space-x-2 p-2 "
        >
          <FontAwesome5 name="arrow-left" size={28} color="#FFFFFF" />
          <Text className="text-[#FFFFFF]  text-lg">Back</Text>
        </TouchableOpacity>
      </View>
      <Text >Activities Screen</Text>
    </SafeAreaView>
  );
};

export default ActivitiesScreen;
