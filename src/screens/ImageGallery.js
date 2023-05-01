import {
  TouchableOpacity,
  View,
  Image,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import Images from "./Images";

let deviceHeight = Dimensions.get("window").height;
let devicewidth = Dimensions.get("window").width;

const ImageGallery = (props) => {
  return (
    <SafeAreaView style={{ marginTop: "8%" }}>
      <View
        style={{
          height: 50,
          backgroundColor: "#ff0000",
          display: "flex",
          justifyContent: "center",
          paddingLeft: '10%'
        }}
      >
        <Text style={{fontSize: 25, color: 'white'}}>Gallery</Text>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {Images.map((image, index) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                props.navigation.navigate("Show Image", {
                  url: image.url,
                })
              }
            >
              <Image
                source={image.url}
                style={{
                  height: deviceHeight / 4,
                  width: devicewidth / 2 - 6,
                  borderRadius: 10,
                  margin: 2,
                }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ImageGallery;
