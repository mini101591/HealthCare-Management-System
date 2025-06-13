import {View,Text,StyleSheet,Button} from "react-native";
import { useState } from "react";

const Counter = () => {
    const [count,setCounter] = useState(0);
    
    return(
        <View>
            <Text style={styles.heading}>Counter APP</Text>
            <Text style={styles.subheading}>Count: {count}</Text>
            <Button title="Increment" onPress={()=>setCounter(count+1)}/>
            <View style={styles.spacing} />
            <Button title="Decrement" onPress={()=>setCounter(count-1)}/>
            <View style={styles.spacing} />
            <Button title="Reset" onPress={() => setCounter(0)} />
        </View>
    )
}

export const styles = StyleSheet.create({
  heading:{
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  subheading:{
    fontSize: 20,
    marginVertical: 10,
    color: "red",
  },
  spacing:{
    marginVertical: 10,
  }
  
});

export default Counter;