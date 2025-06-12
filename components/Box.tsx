import { View, Text, StyleSheet } from "react-native";

export default function Box({childern,style}){
    return(
        <View style={styles.box}>
            <Text style={[styles.text,style]}>{childern}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:"#fff",
          
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        textAlign:"center",
        color:"white",
    },
});
