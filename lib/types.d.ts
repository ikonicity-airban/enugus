import { Ionicons } from "@expo/vector-icons";
import { ExpoRouter, RelativePathString } from "expo-router";
import { ComponentProps } from "react";

export type CardProps = {
    id: string;
    title: string;
    icon: Icon;
    description: string;
    route: ExpoRouter.__routes<RelativePathString>['href'] | string;
  };

export type Icon = ComponentProps<typeof Ionicons>["name"];
