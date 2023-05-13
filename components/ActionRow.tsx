import { TouchableOpacity, Text } from "react-native";
import FontAwesome5  from "@expo/vector-icons/FontAwesome5";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

type Props = {
  title: string;
  screen: any;
  bgColor: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
};

const ActionRow = ({
  title,
  screen,
  bgColor,
  icon,
  requiresPro,
  vertical,
}: Props) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      className={`flex-1 m-2 justify-center items-center py-4 space-x-2 rounded-2xl shadow-md  ${
        vertical ? "flex-col" : "flex-row"
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <FontAwesome5 name={icon} size={28} color="#FFFFFF" />
      <Text className="text-zinc-50 font-semibold text-lg">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRow;
