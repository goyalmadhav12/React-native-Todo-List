import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}


const styles=StyleSheet.create({
    header:{
    paddingVertical:15,
    backgroundColor:'#1d3557',
    },
    title:{
        textAlign:'center',
        color:'#a8dadc',
        fontSize:20,
        fontWeight:'bold',
    },

})