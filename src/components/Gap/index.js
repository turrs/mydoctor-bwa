import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Gap = ({width,height}) => {
  return (
    <View  style={styles.gap(width,height)}>
      
    </View>
  )
}

export default Gap

const styles = StyleSheet.create({
    gap: (width, height) => ({
        height: height,
        width : width
    })
})