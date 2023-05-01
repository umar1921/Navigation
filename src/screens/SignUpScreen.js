import React, {useState} from "react";
import { SafeAreaView } from "react-native";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textView}>
        <Text style={styles.welcomeText}>Create new account</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Full Name"
          placeholderTextColor="#979797"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number"
          placeholderTextColor="#979797"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="E-mail Address"
          placeholderTextColor="#979797"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#979797"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textView:{
    flex: .3,
  },
  welcomeText:{
    fontSize: 30,
    padding: 10,
    color: '#ff5a66'
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
    padding: 10,
    marginLeft: 10,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "68%",
    borderRadius: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff5a66",
  },
  loginBtnFacebook:{
    width: "68%",
    borderRadius: 20,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4267b2",
  },
  loginText:{
    color: '#fff'
  },
});
