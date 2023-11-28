import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import globalStyles from "../styles/styles";
import SignUp from "../components/Auth/SignUp";
import SignInWithOAuth from "../components/Auth/SignInWithOAuth";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <View style={{ alignSelf: "center", marginTop: 60 }}>
        <Text style={globalStyles.header}>Sign Up</Text>
      </View>
      <SignUp />
      <Text style={{ alignSelf: "center", fontSize: 16, marginTop: 305 }}>
        Already have an account?
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Login" as never)}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 16,
            marginTop: 5,
            color: "blue",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
