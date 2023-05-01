import { View, Dimensions, ImageBackground, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

let deviceHeight = Dimensions.get("window").height;
let devicewidth = Dimensions.get("window").width;

const ShowImage = (props) => {
  return (
    <View style={{ justifyContent: "center" }}>
      <TouchableOpacity onPress={() => props.navigation.navigate('ImageGallery')}>
        <ImageBackground
          source={props.route.params.url}
          resizeMode="contain"
          style={{ height: deviceHeight, width: devicewidth }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ShowImage;
