import { View, Text, ImageBackground } from "react-native";
import Avatar from "../Shared/Avatar";
import { Input } from "tamagui";
import globalStyles from "../../styles/styles";
import { useUser } from "@clerk/clerk-expo";

export default function Welcome() {
  const { user } = useUser();
  return (
    <ImageBackground
      source={require("../../assets/Images/home-wallpaper.jpg")}
      blurRadius={2}
    >
      <View style={{ height: 240 }}>
        <View style={globalStyles.container}>
          <Avatar />
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "white" }}>
              Hello {user.firstName},
            </Text>
            <Text style={{ fontSize: 24, fontWeight: "700", color: "white" }}>
              Where are you going next?
            </Text>
          </View>
          <Input
            size="$4"
            style={{ marginTop: 20 }}
            placeholder="Search places..."
            borderWidth={2}
            borderColor={"gray"}
            zIndex={20}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
