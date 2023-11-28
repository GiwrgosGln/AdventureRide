import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { SafeAreaView, Text, StyleSheet, View, Button } from "react-native";
import { TamaguiProvider, Theme, YStack } from "tamagui";
import { useFonts } from "expo-font";
import config from "./tamagui.config";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./src/navigations/TabNavigation";

//Auth Imports
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  useAuth,
  useUser,
} from "@clerk/clerk-expo";
import Constants from "expo-constants";
import * as SecureStore from "expo-secure-store";
import SignInWithOAuth from "./src/components/Auth/SignInWithOAuth";
import SignInScreen from "./src/components/Auth/SignIn";
import SignUpScreen from "./src/components/Auth/SignUp";
import LoginScreen from "./src/screens/LoginScreen";

//Stack Imports
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home";
import RegisterScreen from "./src/screens/RegisterScreen";
const Stack = createStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!loaded) {
    return null;
  }

  const tokenCache = {
    getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return null;
      }
    },
  };

  const SignOut = () => {
    const { isLoaded, signOut } = useAuth();
    if (!isLoaded) {
      return null;
    }

    return (
      <View>
        <Button
          title="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </View>
    );
  };

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
    >
      <TamaguiProvider config={config}>
        <Theme name={colorScheme === "dark" ? "dark" : "light"}>
          <YStack f={1} backgroundColor={"$backgroundSoft"}>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Login"
                  component={LoginScreen}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HomeStack"
                  component={TabNavigation}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Register"
                  component={RegisterScreen}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </YStack>
        </Theme>
      </TamaguiProvider>
    </ClerkProvider>
  );
}
