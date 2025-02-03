import { Ionicons } from "@expo/vector-icons";
import { TabTriggerSlotProps } from "expo-router/ui";
import { ComponentProps, Ref, forwardRef } from "react";
import { Pressable, View } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming, withDelay } from "react-native-reanimated";

type Icon = ComponentProps<typeof Ionicons>["name"];
export type TabButtonProps = TabTriggerSlotProps & {
  icon?: Icon;
};

export const TabButton = forwardRef(
  ({ icon, children, isFocused, ...props }: TabButtonProps, ref: Ref<View>) => {
    const top = useSharedValue(0);
    const textTop = useSharedValue(30);

    const styledView = useAnimatedStyle(() => {
      return {
        top: isFocused
          ? withDelay(
              110,
              withSpring((top.value + 35) * -1, {
                stiffness: 100,
                damping: 6.5,
              })
            )
          : withTiming(top.value, { duration: 300 }),
      };
    });

    const styledText = useAnimatedStyle(() => {
      return {
        color: isFocused ? "#f00" : "#555",
        opacity: isFocused ? withTiming(1) : withTiming(0),
        top: isFocused
          ? withTiming(0, { duration: 300 })
          : withTiming(textTop.value),
      };
    });

    return (
      <Pressable
        ref={ref}
        {...props}
        style={[
          {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: 10,
          },
        ]}
      >
        <Animated.View
          style={[
            styledView,
            isFocused
              ? {
                  backgroundColor: "red",
                  position: "absolute",
                  borderWidth: 2,
                  borderColor: "#fff",
                  width: 40,
                  height: 40,
                }
              : undefined,
            {
              borderRadius: 99,
              padding: 10,

              justifyContent: "center",
              alignItems: "center",
            },
          ]}
        >
          <Ionicons
            name={icon}
            style={isFocused ? { color: "white" } : { color: "#555" }}
            size={16}
          />
        </Animated.View>
        {isFocused && (
          <Animated.Text
            style={[
              styledText,
              { fontSize: 14 },
              isFocused ? { color: "#f00", fontWeight: "bold" } : undefined,
            ]}
          >
            {children}
          </Animated.Text>
        )}
      </Pressable>
    );
  }
);
