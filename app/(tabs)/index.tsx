import { View, Text, StyleSheet } from "react-native";
import Greet from "@/components/Greet";



export default function App(){
  return <View style={styles.container}>
    <Text style={styles.heading}>Stylesheet API</Text>
    <Greet name="John" />
    <Greet name="Kale" />
    <View style={[styles.box,styles.lightblueBg]}>
      <Text>LIGHTBLUEBOX</Text>
    </View>
     <View style={[styles.box,styles.lightgreenBg]}>
      <Text>LIGHTGREENBOX</Text>
    </View>
  </View>
}

export const styles = StyleSheet.create({
  container:{flex:1,backgroundColor:"plum", padding:60},
  heading:{fontSize:20},
  subheading:{fontSize:10,fontStyle:"any",color:"red"},
  box:{
    height:100,
    width:100,
    padding:10
  },
  lightblueBg:{
    backgroundColor:"lightblue"
  },
  lightgreenBg:{
    backgroundColor:"lightgreen"
  }
});

