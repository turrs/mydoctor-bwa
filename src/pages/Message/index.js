import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ListChat } from '../../components'

const Message = () => {
  return (
    <View style={styles.container}>
      <View style={styles.page}>
      <Text style={styles.text}>Message</Text>
        <View style={styles.content}>
          <ListChat></ListChat>
          <ListChat></ListChat>
          <ListChat></ListChat>
          <ListChat></ListChat>
        </View>  
        </View>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#112340",
    flex:1,
  },
  page: {
    backgroundColor: "#ffffff",
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius:20,
  },
  content: {
   
  },
  text: {
    color: "#112340",
    fontSize: 20,
    paddingLeft: 20,
    paddingTop:40,
  }
})