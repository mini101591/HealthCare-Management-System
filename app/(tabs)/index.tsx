import { View, StyleSheet } from "react-native";
import Counter from "@/components/Counter";



export default function App(){
  return (<View style={styles.container}>
    <Counter />
  </View>)
}

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding:60
  }  
});

