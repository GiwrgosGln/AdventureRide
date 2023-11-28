import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Button, Input } from "tamagui";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import SignInWithOAuth from "../components/Auth/SignInWithOAuth";
import LoginScreen from "./LoginScreen";
import { BlurView } from "expo-blur";
import SignOut from "../components/Auth/SignOut";
import globalStyles from "../styles/styles";
import { LinearGradient } from "tamagui/linear-gradient";
import Welcome from "../components/Home/Welcome";
import PopularPlaces from "../components/Home/PopularPlaces";
import RecommendedPlaces from "../components/Home/RecommendedPlaces";

export default function Home() {
  const navigation = useNavigation();
  const { user } = useUser();

  const isAuthenticated = user && user.id; // Check if the user is authenticated

  // Check authentication and navigate to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigation.navigate("Login" as never);
    }
  }, [isAuthenticated, navigation]);

  if (!isAuthenticated) {
    // If not authenticated, prevent rendering the rest of the component
    return null;
  }

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Welcome />
      <PopularPlaces />
      <RecommendedPlaces />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    resizeMode: "contain",
    height: 220,
    opacity: 0.9,
  },
  scrollView: {
    flexDirection: "row",
  },
  imageContainer: {
    margin: 5,
    borderRadius: 8,
    overflow: "hidden",
  },
  imagePopular: {
    width: 170,
    height: 220,
  },
  imageRecommended: {
    width: 200,
    height: 120,
  },
  titleContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    padding: 5,
    zIndex: 2,
  },
  titleText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
