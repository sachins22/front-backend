import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Login({route}) {
    const {email, password} = route.params
  return (
    <View style={styles.con}>

      <Text style={styles.text}>mongodb save password and email</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.text}>{password}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    con:{
        flex:1,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"white"
    },
    text:{
        fontSize:24,
        color:'black',
        fontWeight:"bold"
    }
}) 