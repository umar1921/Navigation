import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({onPress, text, type ="PRIMARY"}) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[styles.container, styles[`container_${type}`]]}>
      <Text style={[styles.text, styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container: {
    padding: 8,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 20,
  },
  container_PRIMARY: {
    backgroundColor: "#ff5a66",
  },
  container_SECONDARY: {
    borderWidth: 1,
    borderColor: '#ff5a66'
  },
  text: {
    fontSize: 16,
    color: '#ff5a66'
  },
  text_PRIMARY: {
    color: 'white'
  },
})