import { Image, Text, View } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

export default function NetworkErrorScreen() {
  const { isConnected, isInternetReachable, details } = useNetInfo();
  return !isConnected ? (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        paddingHorizontal: 30,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fffe",
        zIndex: 10000,
      }}
    >
      <Image
        source={require("../assets/no-network.png")}
        style={{ width: "40%", height: "40%", objectFit: "contain" }}
        // tintColor={""}
      />
      <Text style={{textAlign: "center", fontSize: 16}}>
        No internet connection, Turn on your data and continue browsing
      </Text>
    </View>
  ) : null;
}
