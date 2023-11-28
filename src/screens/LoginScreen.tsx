import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "tamagui/linear-gradient";
import globalStyles from "../styles/styles";
import SignIn from "../components/Auth/SignIn";
import { Image } from "tamagui";
import SignInWithOAuth from "../components/Auth/SignInWithOAuth";

import { useNavigation } from "@react-navigation/native";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  useAuth,
  useUser,
} from "@clerk/clerk-expo";
import SignOut from "../components/Auth/SignOut";

export default function LoginScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Check if the user is signed in and navigate after 1 second
    const timer = setTimeout(() => {
      navigation.navigate("HomeStack" as never);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      <SignedOut>
        <View style={globalStyles.container}>
          <View style={{ alignSelf: "center", marginTop: 60 }}>
            <Text style={globalStyles.header}>Log In</Text>
          </View>
          <SignIn />
          <Text
            style={{ alignSelf: "center", fontSize: 16, marginVertical: 10 }}
          >
            or
          </Text>
          <SignInWithOAuth />
          <Text style={{ alignSelf: "center", fontSize: 16, marginTop: 200 }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Register" as never)}
          >
            <Text
              style={{
                alignSelf: "center",
                fontSize: 16,
                marginTop: 5,
                color: "blue",
              }}
            >
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </SignedOut>
      <SignedIn>
        <View style={{ flex: 1 }}>
          <LinearGradient
            width={"100%"}
            height={"100%"}
            borderRadius="$4"
            colors={["$blue8", "$blue9"]}
            start={[0, 1]}
            end={[0, 0]}
          >
            <View
              style={{ flex: 1, justifyContent: "center", alignSelf: "center" }}
            >
              <Text style={{ marginTop: -200, fontSize: 38, color: "white" }}>
                Adventure Ride
              </Text>
            </View>
          </LinearGradient>
        </View>
      </SignedIn>
    </View>
  );
}
