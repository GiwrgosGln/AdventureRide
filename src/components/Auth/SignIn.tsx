import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { Input, Button } from "tamagui";
import { useSignIn } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "@tamagui/lucide-icons";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const navigation = useNavigation();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
      navigation.navigate("HomeStack" as never);
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Input
          autoCapitalize="none"
          value={emailAddress}
          placeholder="Email..."
          onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
        />
      </View>

      <View>
        <Input
          value={password}
          placeholder="Password..."
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <Button
        size="$4"
        onPress={onSignInPress}
        backgroundColor={"black"}
        color={"white"}
        marginTop={40}
      >
        Sign in
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    gap: 20,
    paddingHorizontal: 40,
  },
});
