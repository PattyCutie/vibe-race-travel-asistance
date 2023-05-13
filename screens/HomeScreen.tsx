import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import ActionRow from "../components/ActionRow";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="flex-1 relative bg-slate-100 px-2">
      <ScrollView>
        <View className="sticky top-0 z-50 flex flex-row items-center justify-between m-1 mt-4 px-4 rounded-2xl bg-slate-200">
          <Image
            source={require("../assets/viberace.png")}
            style={{
              resizeMode: "contain",
            }}
            className="w-40 h-20"
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("Paywall")}
            className="items-center"
          >
            <FontAwesome5 name="user-circle" size={36} color="#7F8FA3" />
            <Text className="uppercase text-[#7F8FA3] font-semibold">
              Upgrade
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex py-2">
          <View className="flex-row">
            <ActionRow
              title="Find Places"
              screen="FindPlacesScreen"
              bgColor="#8155BA"
              icon="globe"
              vertical
            />
            <ActionRow
              title="Travel Tracker"
              screen="TravelTrackerScreen"
              bgColor="#D6304C"
              icon="map-marker-alt"
              vertical
            />
          </View>
          <View className="flex">
            <ActionRow
              title="Travel Assistance"
              screen="TravelAssistanceScreen"
              bgColor="#468CCA"
              icon="hands-helping"
              vertical
            />
            <ActionRow
              title="Weather Forcast"
              screen="WeatherForcastScreen"
              bgColor="#55B7A0"
              icon="cloud-sun"
              vertical
            />
            <ActionRow
              title="Interpretor"
              screen="InterpreterScreen"
              bgColor="#DA746F"
              icon="comments"
              vertical
            />
            <ActionRow
              title="Activities"
              screen="ActivitiesScreen"
              bgColor="#FFB067"
              icon="users"
              vertical
            />
            <ActionRow
              title="My Favorite"
              screen="MyFavoriteScreen"
              bgColor="#D15D84"
              icon="bookmark"
              vertical
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
