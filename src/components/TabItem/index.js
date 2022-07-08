import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Idoctor, IdoctorActive, Imap, ImapActive, Imessage, ImessageActive } from '../../assets'
import { TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const TabItem = ({title, onPress, onLongPress, active}) => {
    const Icon = () => {
        if (title === "Doctor") {
            return active ? <IdoctorActive> </IdoctorActive>: <Idoctor></Idoctor>
        }
        if (title === "Message") {
            return active ? <ImessageActive></ImessageActive>:<Imessage></Imessage>
        }
        if (title === "Hospital") {
            return active ? <ImapActive></ImapActive>:<Imap></Imap>
        }
    }
  return (
    <View>
        <TouchableOpacity style={{alignItems:"center"}} onPress={onPress} onLongPress={onLongPress}>
            <Icon></Icon>      
          </TouchableOpacity>
          <Text style={styles.text(active)}>{title}</Text>
    </View>
  )
}

export default TabItem

const styles = StyleSheet.create({
    text:active=>( {
        color : active ? "#0BCAD4":"#495A75"
    })
})