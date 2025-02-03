import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  domain?: string;
  code: number;
  description: string;
};

const ErrorScreen: React.FC<Props> = (props) => {
  const { domain, code, description } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>
        An error occurred while yyyy
        {domain} {code} {description} 
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
    margin: 20,
  },
});

export default ErrorScreen;
