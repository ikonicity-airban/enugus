import Animated, {
  FadeInDown,
  FadeInUp,
  LinearTransition,
  SlideInUp,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";
import { gridData } from "../../lib/constants";
import { Ionicons } from "@expo/vector-icons"; // Add this import
import { CardProps } from "../../lib/types";
import { useEffect } from "react";
import { ExpoRouter, RelativePathString, router } from "expo-router";
import { Pressable } from "react-native";

const HomeScreen = () => {
  const position = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(position.value, { duration: 500 }) },
      ],
    };
  });

  return (
    <Animated.FlatList
   
      data={gridData}
      ListHeaderComponent={Header}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        padding: 16,
        flex: 1,
        gap: 10,
      }}
      numColumns={2}
      renderItem={({ item, index }) => (
        <FlatListItem item={item} index={index} />
      )}
    />
  );
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const FlatListItem = ({ item, index }: { item: CardProps; index: number }) => {
  const position = useSharedValue(100);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withDelay(
            index * 200,
            withTiming(position.value, { duration: 500 })
          ),
        },
      ],
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#eee",
      borderRadius: 10,
      padding: 16,
      gap: 10,
      elevation: 3,

      shadowRadius: 4,
      margin: 10,
    };
  });

  useEffect(() => {
    position.value = 0;
  });

  return (
    <AnimatedPressable
      onPress={() =>
        router.navigate(
          item.route as ExpoRouter.__routes<RelativePathString>["href"]
        )
      }
      style={[animatedStyle]}
    >
      <Ionicons name={item.icon} size={40} color="#b44c" />
      <Animated.Text
        style={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
      >
        {item.title}
      </Animated.Text>
      <Animated.Text
        style={{
          textAlign: "center",
          color: "#777",
        }}
      >
        {item.description}
      </Animated.Text>
    </AnimatedPressable>
  );
};

const Header = () => {
  return (
    <Animated.View
      style={{
        height: 100,
        backgroundColor: "#eaeaea",
        borderColor: "#fff",
        borderWidth: 1,
        borderRadius: 10,
        // elevation: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Animated.Image
        entering={SlideInUp.duration(1000)}
        source={require("../../assets/splash-icon.png")}
        style={{ width: "50%", height: "50%" }}
      />
      <Animated.Text
        entering={SlideInUp.duration(1000)}
        style={{
          fontSize: 23,
          fontWeight: "bold",
          color: "#e55",
          textTransform: "uppercase",
        }}
      >
        app
      </Animated.Text>
    </Animated.View>
  );
};

export default HomeScreen;
