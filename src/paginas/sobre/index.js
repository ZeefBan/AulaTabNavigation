import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Sobre(){

return(

    <View >

    <Text style={Styles.title}> Sobre nós</Text>

    </View>


);

}
const Styles = StyleSheet.create({

    title: {
    justifyContent:"center",
    alignItems: "center",
    marginTop: '80%', 
    fontSize: 80

}
})