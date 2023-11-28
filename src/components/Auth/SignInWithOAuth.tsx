import React from "react";
import { View, StyleSheet } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { Button } from "tamagui";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warnUpBrowser";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();
  const navigation = useNavigation();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
        navigation.navigate("HomeStack" as never);
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Button
        onPress={onPress}
        backgroundColor={"black"}
        color={"white"}
        size="$4"
      >
        <AntDesign name="google" size={24} color="white" variant="outlined" />
        Sign In with Google
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 40,
  },
});

export default SignInWithOAuth;
