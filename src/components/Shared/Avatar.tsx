import { View, Text } from "react-native";
import React from "react";
import { Avatar, XStack } from "tamagui";
import { useUser } from "@clerk/clerk-expo";

export default function ProfileAvatar() {
  const { user } = useUser();
  return (
    <View
      style={{
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 40,
      }}
    >
      <Avatar circular size="$4">
        <Avatar.Image accessibilityLabel="Cam" src={user.profileImageUrl} />
        <Avatar.Fallback backgroundColor="$blue10" />
      </Avatar>
    </View>
  );
}
