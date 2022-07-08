import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Link = ({text}) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default Link

const styles = StyleSheet.create({
    text: {
        fontSize:12,
        color: "#7D8797",
        textDecorationLine:"underline"
    }
})