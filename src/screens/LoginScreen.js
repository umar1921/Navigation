import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
// import { firebaseConfig } from "./src/config/firebase";
import CustomButton from "../components/CustomButton";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={{ marginBottom: 10 }}>
        <Image
          source={require("../../assets/adaptive-icon.png")}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Enter Your Email"
          placeholderTextColor="#003f5c"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder="Enter Your Password"
          placeholderTextColor="#003f5c"
          keyboardType="number-pad"
          autoCapitalize="none"
          secureTextEntry={true}
          onSubmitEditing={Keyboard.dismiss}
        />
      </View>
      <View style={styles.buttonView}>
        <CustomButton
          onPress={() => navigation.navigate("Profile")}
          text="Login"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "80%",
    height: 40,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 1,
  },
  TextInput: {
    height: 40,
    flex: 1,
    padding: 5,
    marginLeft: 10,
  },
  buttonView: {
    justifyContent: "center",
    padding: 10,
    width: "90%",
    textAlign: "center",
  },
});
