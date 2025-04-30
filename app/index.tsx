// Suggested code may be subject to a license. Learn more: ~LicenseLog:2601289245.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:165378430.
import { Text, View, Image } from "react-native";
import Rating from "./rating";

export default function Index() {
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
    }}>
      <View style={{
          width: 180,
          backgroundColor: "white",
          borderRadius: 10,
          padding: 10,
          justifyContent: "center",
      }}>
        <Image
            source={{uri: 'https://img01.ztat.net/article/spp-media-p1/bed8d9d0204c49789e480ced28f6cf72/174008a95d94400ea0eceee4d9f50e9b.jpg?imwidth=300'}}
            style={{ width: 160, height: 230, borderRadius: 10 }}
          />
        <Text>Nike Performance</Text>
        <Text 
          numberOfLines={1}
          ellipsizeMode="tail">
            JUNIPER 3 - Trail running shoes
            </Text>
        <Rating stars={4} />
        <Text>119, 95 €</Text>
        <Text>(Plus) Premium Delivery</Text>
        </View>
    </View>
  );
}
