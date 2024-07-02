import { useState, useEffect } from "react";
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function confirmPassword() {
    if (username === "admin" && password === "admin") {
      Alert.alert("Login success");
    } else {
      Alert.alert("Login failed");
    }
  }

  useEffect(() => {
    confirmPassword();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button
            title="Login"
            onPress={() => {
              confirmPassword();
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
