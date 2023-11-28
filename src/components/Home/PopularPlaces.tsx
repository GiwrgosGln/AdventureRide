import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { BlurView } from "expo-blur";
import { EvilIcons } from "@expo/vector-icons";

export default function PopularPlaces() {
  const images = [
    "https://4kwallpapers.com/images/wallpapers/maligne-lake-canada-purple-sky-mountain-range-reflection-2048x2048-4493.jpg",
    "https://wallpaperaccess.com/full/50943.jpg",
    "https://img.freepik.com/premium-photo/starry-night-lake_68067-618.jpg",
    "https://wallpaperaccess.com/full/50943.jpg",
    "https://img.freepik.com/premium-photo/starry-night-lake_68067-618.jpg",
  ];
  return (
    <View
      style={{
        marginTop: 30,
        marginLeft: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 10,
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            color: "#000",
          }}
        >
          Popular places
        </Text>
        <Text style={{ alignSelf: "center", fontWeight: "700", color: "gray" }}>
          View all
        </Text>
      </View>

      <ScrollView
        horizontal
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((imageUrl, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.imagePopular} />
            <View>
              <BlurView
                style={styles.titleContainer}
                intensity={25}
                tint="dark"
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.titleText}>Mount Fuji, </Text>
                  <Text style={{ color: "white" }}>Tokyo</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    alignItems: "center",
                  }}
                >
                  <EvilIcons name="location" size={24} color="lightgray" />
                  <Text style={{ color: "lightgray" }}>Tokyo, </Text>
                  <Text style={{ color: "lightgray" }}>Japan</Text>
                </View>
              </BlurView>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    margin: 5,
    borderRadius: 8,
    overflow: "hidden",
  },
  imagePopular: {
    width: 170,
    height: 220,
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
  scrollView: {
    flexDirection: "row",
  },
});
