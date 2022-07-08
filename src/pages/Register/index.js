import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { Button, Gap, Input } from '../../components'

const Register = () => {
  return (
    <View style={styles.container}>
      <View>
      <Header title="Daftar Akun"></Header>
     </View>
      <View style={styles.Input}>
        <Input name="Full Name"></Input>
        <Input name="Email Adress"></Input>
        <Input name="Pekerjaan"></Input>
        <Input name="Password" secureTextEntry={false} multiline={true}></Input>
        <Gap height={40}></Gap>
        <Button title="Continue" type="secondary"></Button>
      </View>
     
      </View>
    
   
  )
}

export default Register

const styles = StyleSheet.create({
  container: {  
    flex:1,
    backgroundColor: "white"
  },
  Input: {
    padding:40
  }
})