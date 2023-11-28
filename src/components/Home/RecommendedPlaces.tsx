import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function RecommendedPlaces() {
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
          justifyContent: "space-between",
          marginBottom: 5,
          marginHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            color: "#000",
          }}
        >
          Recommended
        </Text>
      </View>

      <ScrollView
        horizontal
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((imageUrl, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.imageRecommended} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: "row",
  },
  imageContainer: {
    margin: 5,
    borderRadius: 8,
    overflow: "hidden",
  },
  imageRecommended: {
    width: 200,
    height: 120,
  },
});
