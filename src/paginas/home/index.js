import React from 'react'

import { StyleSheet, Text, View } from 'react-native';

export default function Home(){

return(

    <View>

    <Text style={Styles.title}> Pagina Home </Text>

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