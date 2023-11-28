import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import { Button } from "tamagui";
import { LogOut } from "@tamagui/lucide-icons";

export default function SignOut() {
  const { isLoaded, signOut } = useAuth();
  const navigation = useNavigation();

  if (!isLoaded) {
    return null;
  }

  return (
    <View style={{ paddingHorizontal: 40, marginTop: 10 }}>
      <Button
        color={"white"}
        backgroundColor={"black"}
        iconAfter={LogOut}
        onPress={async () => {
          await signOut();
          // Navigate to the login screen after signing out
          navigation.navigate("Login" as never);
        }}
      >
        Sign Out
      </Button>
    </View>
  );
}
