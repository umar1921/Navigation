import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 300);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/splash.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default SplashScreen;
