import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import CustomButton from "../components/CustomButton";

const ProfileScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Welcome to your profile</Text>
        {/* <Text style={styles.textStyle}>
          Your Email is: {route.params.email}
        </Text>
        <Text style={styles.textStyle}>
          Your Pass is: {route.params.password}
        </Text> */}
        <View>
          <CustomButton
            onPress={() => navigation.navigate("LogIn")}
            text="Go to LogIn"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});
