import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Fontisto from "@expo/vector-icons/Fontisto";
import { FontAwesome5 } from "@expo/vector-icons";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Paywall"
>;
const Paywall = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView className="flex-1 relative p-2 space-y-4 bg-[#274472] mt-8 rounded-t-2xl border-t-4 border-[#274472]/50">
      <View className="absolute top-0 right-2 z-50 flex-row items-center justify-end p-2">
        <TouchableOpacity onPress={navigation.goBack}>
          <Fontisto name="close" size={32} color="#F83212" />
        </TouchableOpacity>
      </View>

      <View className="flex-1 space-y-8">
        <View className="flex-1 items-center">
          <FontAwesome5 name="award" size={52} color="#F83212" />
          <Text className="text-2xl font-extrabold text-[#FFFFFF]">
            VIBE RACE PRO
          </Text>
          <Text className="text-[#FFFFFF] text-sm">
            Upgrade to Vibe Race Pro to Acess all the Features
          </Text>
        </View>

        <View className="flex space-y-4 m-4">
          <View className="flex-row items-center space-x-4">
            <FontAwesome5 name="user-lock" size={24} color="#F83212" />
            <View className="flex-1 items-start">
              <Text className="text-[#FFFFFF] text-sm font-bold text-left">
                Access all VIBE RACE PRO features
              </Text>
              <Text className="text-[#FFFFFF] text-sm font-light text-left">
                Upgrade to Pro for exclusive features like a travel assistant,
                real-time weather forecasts, intellegent interpretor, and
                personalized recommendations. Enhance your travel experience
                with valuable information and stay ahead of the game.
              </Text>
            </View>
          </View>

          <View className="flex-row items-center space-x-4">
            <FontAwesome5 name="users" size={24} color="#F83212" />
            <View className="flex-1 items-start">
              <Text className="text-[#FFFFFF] text-sm font-bold text-left">
                Connect to Vibe Race Community
              </Text>
              <Text className="text-[#FFFFFF] text-sm font-light text-left">
                Explore a platform for travelers to share, connect, and gain
                inspiration. Earn points by engaging in the community, unlocking
                rewards. Build your reputation in the vibrant{" "}
                <Text className="font-bold">VIBE RACE</Text> community.
              </Text>
            </View>
          </View>

          <View className="flex-row items-center space-x-4">
            <FontAwesome5 name="crown" size={24} color="#F83212" />
            <View className="flex-1 items-start">
              <Text className="text-[#FFFFFF] text-sm font-bold text-left">
                Exclusive early access
              </Text>
              <Text className="text-[#FFFFFF] text-sm font-light text-left">
                Enjoy Subscriber only contents including travel articles,
                destination guides, tips, and valuable information. Stay ahead
                in trip planning, organization, and stay updated with the latest
                trends and insights.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Start with 7 days Free Trial And then 7 days Subscribe 9.99$ after*/}
      {/* Monthly Subscribe 19.99$ * /}
      {/* Yearly Subscribe 29.99$ (Bill Annually Save 25% discount)*/}
    </ScrollView>
  );
};

export default Paywall;
