import * as React from 'react';
import { useState } from 'react';
import { Text, View, Image, StyleSheet, FlatList, Pressable, TextInput, } from 'react-native';
import { Auth } from 'aws-amplify'
import OtherFunctions from '../components/OtherFunctions/OtherFunctions';
import ChatRoomItem from '../components/ChatRoomItem';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5, Entypo, FontAwesome  } from '@expo/vector-icons'; 

import chatRoomsData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {

  const logOut = () => {
    Auth.signOut();
  }

  return (


    <View style={styles.page}>
      <OtherFunctions />
        <Pressable onPress={logOut} style={{
        backgroundColor: 'teal',
        height: 33,
        width: '20%',
        borderRadius: 18,
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginTop: 4,
        justifyContent: 'center',
        top: 8,
        left: 8,
        
      }}>
        <Text style={{
          color: '#FEF9E7',
          fontWeight: '700'
        }}>Logout</Text>
      </Pressable> 
      <View style={styles.inputContainer}>     
            <TextInput style={{
            marginHorizontal: 24,
            fontSize: 15,
            fontWeight: '800',
            color: 'teal'
            }}/>
            <MaterialCommunityIcons name="cloud-search-outline" size={24} color="blue" style={{
              bottom: 25,
              left: 9
            }} />
            </View>  
      <FlatList
        data={chatRoomsData}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={() => 
        <Text style={styles.text}>Messages</Text>}
      /> 
    </View>
   
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white'
  },
  text: {
    fontWeight: 'bold',
    color: 'teal',
    fontSize: 17,
    left: 7,
    top: -2,
  
  },
inputContainer: {
  backgroundColor: 'white',
  height: 33,
  width: '72%',
  alignSelf: 'flex-end',
  right: 9,
  bottom: 25,
  borderRadius: 17,
  borderWidth: 1,
  borderColor: 'teal'
  
},
input: {
  color: 'black'
}

});


