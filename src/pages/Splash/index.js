import React, { useEffect } from 'react'
import {Text,View} from 'react-native'
import { ILSplash } from '../../assets/ilustration'
const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    },3000)
  })
    return (
     <View style={{ flex:1, alignItems:"center",   justifyContent:"center"}}>
        <ILSplash></ILSplash>
        <Text style={{padding:15, fontSize:20, color:"#112340"}}>My Doctor</Text>
    </View>
  )
}

export default Splash