import React from "react";
import { StyleSheet, Text,TouchableOpacity,View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
export default function TodoItem({item,pressHandler}){

    return(
        <TouchableOpacity onPress={() => pressHandler(item.key)} style={styles.item}>
            <View style={{flexDirection:'row'}}>
            <MaterialIcons name='delete' size={20} color={'#e63946'}/>
            <Text style={{marginLeft:10,color:'#0077b6'}}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles=StyleSheet.create({
    item:{
        padding:16,
        width:400,
        marginTop:16,
        borderColor:'#333',
        borderWidth:1,
        borderRadius:40,
    }
})