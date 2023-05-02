import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

const ProfileScreen = ({ navigation }) => {
  const route = useRoute();

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Welcome {route.params.user}</Text>
        <Text style={styles.textStyle}>
          Your Email is: {route.params.email}
        </Text>
        <Text style={styles.textStyle}>
          Your Pass is: {route.params.password}
        </Text>
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
