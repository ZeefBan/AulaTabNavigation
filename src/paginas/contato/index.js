import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default function Contato(){

return(

    <View>

    <Text style={Styles.title}> Contatos </Text>

    </View>

);

}
const Styles = StyleSheet.create({

    title: {
        justifyContent:"center",
        textAlign:"center",
        marginTop: '80%', 
        fontSize: 80
}
})