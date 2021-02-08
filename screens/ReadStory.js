import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';


export  default class ReadStory extends React.Component{
    constructor(){
        super();
        this.state={
        search:'',
       
        }
    }

    retriveStories=async ()=>{
         const storyRef = await db.collection("stories").where("storyId", "==", this.state.search).get()
    }

render(){
    return(
   <View>
<Text style={{fontSize:36,alignSelf:'center'}}>WELCOME TO READ SCREEN</Text>


    <SearchBar
  
        placeholder="Search any story here  : )......"
        onChangeText={(text) => {
            this.setState({
              search: text,
            });
          }}
        value={this.state.search}
      />
   </View>

    )
}

}

const styles=StyleSheet.create({


})