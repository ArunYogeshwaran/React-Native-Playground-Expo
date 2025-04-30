import { Text, View } from "react-native";

const Rating = ({ stars }: { stars: number }) => {
    const fullStars = "⭐️".repeat(stars);
    const emptyStars = "☆".repeat(5 - stars);
  
    return (
      <View style={{ flexDirection: "row" }}>
        <Text>
          {fullStars}
          {emptyStars}
        </Text>
        <Text> ({stars})</Text>
      </View>
    );
  };

  export default Rating;