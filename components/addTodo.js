import React, { useState } from "react";
import { StyleSheet, Text,View,TextInput,Button} from "react-native";

export default function AddTodo({submitHandler}){
    const[text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val);
    }
    const changHandler=(vl)=>{
        if(vl.length>3)
        {
        setText('');
        }
    }
    return(
        <View>
            <View style={styles.back}>
            <TextInput 
            style={styles.input}
            placeholder='New ToDo...'
            placeholderTextColor="#0077b6"
            onChangeText={changeHandler}
            clearButtonMode="always"
            value={text}
            />
            </View>
            <View style={{width:400}}>
            <Button onPress={() =>{submitHandler(text);changHandler(text);}} title='Add ToDo' color='#03045e'/>
            </View>
        </View>
    )
}

const styles =StyleSheet.create({
    input:{
        paddingHorizontal:8,
        paddingVertical:6,
        backgroundColor:"white",
        fontSize:15,
        color:'#0077b6'
    },
    back:
    {
        backgroundColor:"#000",
        marginBottom:10,
        marginRight:10,
        borderWidth:1,
        borderBottomWidth:2,
        borderColor:"#0077b6",
    }
})