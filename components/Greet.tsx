import { View, Text, Button} from "react-native";
import { styles } from "@/app/(tabs)";
import {useState, useEffect} from "react";

export default function Greet({name}){
    const [count, setCount] = useState(0); // count is state

    // Side effect: Log message whenever count changes
    useEffect(() => {
        console.log(`Count updated: ${count}`);
    }, [count]);
    
    return(
        <View>
            <Text style={styles.subheading}>Hello, {name}</Text>
            <Text>Count: {count}</Text>
            <Button title="Increment" onPress={() => setCount(count + 1)} />
        </View>
    )
}