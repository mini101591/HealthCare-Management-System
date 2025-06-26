import { View, StyleSheet, Text} from "react-native";
import Counter from "@/components/Counter";
import React, { useState } from 'react';
import TaskInput from "@/components/TaskInput";


function App(){

  return (<View style={styles.container}>
    {/* <Counter /> */}
    <Text style={styles.title}>To-Do List</Text>
    <TaskInput />
  </View>)
}

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'plum',
    padding:60
  },
   title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
});

export default App;
