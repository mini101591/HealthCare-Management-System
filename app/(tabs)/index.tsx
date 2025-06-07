import { View, Text, Image, ImageBackground,ScrollView, Button,Pressable,Modal } from "react-native";
import logoImg = require("../../assets/images/adaptive-icon.png");
import { useState } from "react";

export default function App(){
  const[isModalVisible,setIsModalVisible]= useState(false);
  return <View style={{flex:1,backgroundColor:"plum", padding:60}}>
    <ScrollView>
      <Button 
        title="Click"
        onPress={()=>setIsModalVisible(true)}
        color="midnightblue"
      />
      <Modal 
      visible={isModalVisible}
      onRequestClose={()=>setIsModalVisible(false)}
      animationType="slide"
      presentationStyle="pageSheet"
      >
        <View style={{flex:1,backgroundColor:"lightblue", padding:60}}>
          <Text>Welcome To My Page...</Text>
          <Button title="Close" onPress={()=>setIsModalVisible(false)}/>
        </View>
      </Modal>
      <Button title="try me" disabled/>
      <Pressable onPress={()=>{console.log("Image Pressed");}}><Image source={logoImg} style={{width:200, height:300}}/></Pressable>
      <Text><Text style={{color:"green"}}>Hello</Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </Text>
    {/*<Image source={{uri:"https://picsum.photos/200"}} style={{height:200,width:200}}/>
    <ImageBackground source={logoImg} style={{flex:1}}>
      <Text>Text Image</Text>
    </ImageBackground>*/}
    </ScrollView>
  </View>
}