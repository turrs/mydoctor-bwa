import { StyleSheet, Text, View , ScrollView } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { hospitalBackground } from '../../assets'
import ListHospital from '../../components/ListHospital'


const Hospital = () => {
  return (
      <View style={styles.page}>
          <ImageBackground source={hospitalBackground} style={{flex:1}}>
              <View style={styles.wrapper}>
                  <Text style={styles.hospital}> Nearby Hospital</Text>
                  <Text style={styles.avaliable}> 3 Tersedia</Text>
             </View>
          </ImageBackground>   
          <View style={styles.content}>
              <ScrollView style={styles.scrollView}>
              <ListHospital></ListHospital>
              <ListHospital></ListHospital>
              <ListHospital></ListHospital>
                  <ListHospital></ListHospital>
                  
             </ScrollView>
          </View>
    </View>
  )
}

export default Hospital

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor:"#112340"
    },
    content: {
        flex:1,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
        marginTop: -80,
        
    },
    scrollView: {
        marginBottom: -3,
    },
    hospital: {
        color: "#FFFFFF",
        fontSize:20
    },
    avaliable: {
        color: "#FFFFFF",
        fontSize:14
    },
    wrapper:{
        alignItems: "center",
        paddingTop:60,
    }
})