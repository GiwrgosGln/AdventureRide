import * as React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { Input, Button } from "tamagui";
import { useSignUp } from "@clerk/clerk-expo";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
      navigation.navigate("HomeStack" as never);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.container}>
      {!pendingVerification && (
        <View style={styles.inputAreas}>
          <View>
            <Input
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(email) => setEmailAddress(email)}
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
            color={"white"}
            backgroundColor={"black"}
            onPress={onSignUpPress}
            marginTop={40}
          >
            Sign Up
          </Button>
        </View>
      )}
      {pendingVerification && (
        <View>
          <View>
            <Input
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <Button
            color={"white"}
            backgroundColor={"black"}
            onPress={onPressVerify}
            marginTop={20}
          >
            Verify Email
          </Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    paddingHorizontal: 40,
  },
  inputAreas: {
    gap: 20,
  },
});
