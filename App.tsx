import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Paywall from "./screens/Paywall";
import FindPlacesScreen from "./screens/FindPlacesScreen";
import TravelTrackerScreen from "./screens/TravelTrackerScreen";
import TravelAssistanceScreen from "./screens/TravelAssistanceScreen";
import WeatherForcastScreen from "./screens/WeatherForcastScreen";
import ActivitiesScreen from "./screens/ActivitiesScreen";
import MyFavoriteScreen from "./screens/MyFavoriteScreen";
import InterpreterScreen from "./screens/InterpreterScreen";

export type RootStackParamList = {
  Paywall: undefined;
  HomeScreen: undefined;
  FindPlacesScreen: undefined;
  TravelTrackerScreen: undefined;
  TravelAssistanceScreen: undefined;
  WeatherForcastScreen: undefined;
  ActivitiesScreen: undefined;
  MyFavoriteScreen: undefined;
  InterpreterScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "slide_from_right",
          presentation: "modal",
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TravelTrackerScreen"
          component={TravelTrackerScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="FindPlacesScreen"
          component={FindPlacesScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="TravelAssistanceScreen"
          component={TravelAssistanceScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="WeatherForcastScreen"
          component={WeatherForcastScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ActivitiesScreen"
          component={ActivitiesScreen}
        />

        <Stack.Screen
          options={{ headerShown: false }}
          name="MyFavoriteScreen"
          component={MyFavoriteScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="InterpreterScreen"
          component={InterpreterScreen}
        />
        <Stack.Screen
          options={{
            animation: "slide_from_bottom",
            headerShown: false,
            presentation: "modal",
            animationDuration: 2,
          }}
          name="Paywall"
          component={Paywall}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
