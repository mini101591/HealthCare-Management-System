import { View, Text, Image, ImageBackground } from "react-native";
import logoImg = require("../../assets/images/adaptive-icon.png");

export default function App(){
  return <View style={{flex:1,backgroundColor:"plum", padding:60}}>
    <Text>
      <Text style={{color:"green"}}>Hello</Text> World
    </Text>
    <Image source={logoImg} style={{width:200, height:200}}/>
    <Image source={{uri:"https://picsum.photos/200"}} style={{height:200,width:200}}/>
    {/*<ImageBackground source={logoImg} style={{flex:1}}>
      <Text>Text Image</Text>
    </ImageBackground>*/}
  </View>
}