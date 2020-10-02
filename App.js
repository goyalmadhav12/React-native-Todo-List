import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList,Alert,TouchableWithoutFeedback,Keyboard} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
export default function App() {
  const [todos, setTodos] = useState([
  ]);
  // { text: "Add Items", key: "1"},
  //   { text: "React native", key: "2" },
  //   { text: "Data structure", key: "3" },
  //   { text: "Algorithms", key: "4" },
  //   { text: "Competitive Programming", key: "5" },
  const [count,setCount]=useState(6);
  const pressHandler=(key)=> {
    // setCount(prevCount=>prevCount-1);
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo =>todo.key!=key)
    })
  }
  const submitHandler=(text)=>{
    if(text.length>3)
    {
    setCount(prevCount=>prevCount+1);
    setTodos(prevTodos =>{
      return([...prevTodos,{text: text , key:count.toString()}]);
    });
    }
    else{
      Alert.alert('OOPs!','Todos must be atleast over 3 characters long!',[{text:'Okay'},{text:'No'}]);
    }
  }
  return (
    // <Sandbox/>
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log("Dismissed keyboard");
    }}>
      <View style={styles.container}>
        <Header />
        {/* <Test/> */}
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => <TodoItem item={item} pressHandler={pressHandler}/>}
            />
          </View>
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a8dadc",
    marginTop:33,
  },
  content: {
    flex:1,
    paddingTop: 25,
    paddingLeft: 10,
    backgroundColor: "#a8dadc",
  },
  list: {
    flex:1,
    backgroundColor: "#a8dadc",
  },
});
