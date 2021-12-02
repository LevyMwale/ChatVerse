import * as React from 'react';
import { Text, View, Image, StyleSheet, FlatList, } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5, Entypo, FontAwesome  } from '@expo/vector-icons'; 

import chatRoomsData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {
  return (

   
    <View style={styles.page}>
       <View style={styles.accessContainer}>
        <Text style={styles.accessText}>
        </Text>
        <MaterialCommunityIcons name="party-popper" size={27} color="teal" style={{
          bottom: 22,
          left: 9,
        }} />
        <MaterialIcons name="payment" size={27} color="teal" style={{
          bottom: 45,
          left: 44,
        }}/>
        <FontAwesome5 name="shopping-cart" size={24} color="teal" 
        style={{
          bottom: 69,
          left: 77,
        }}
        />
        <MaterialIcons name="library-music" size={27} color="teal" 
        style={{
          bottom: 95,
          left: 116,
        }}
        />
        <FontAwesome5 name="taxi" size={26} color="teal" 
        style={{
          bottom: 120,
          left: 154,
        }}
        />
        
      <Entypo name="location" size={24} color="teal" 
      style={{
        bottom: 144,
        left: 190,
      }}
      />
      <FontAwesome name="hotel" size={25} color="teal" 
      style={{
        bottom: 168,
        left: 229,
      }}
      />
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
    backgroundColor: '#1F2F35'
  },
  text: {
    fontWeight: 'bold',
    color: '#FEF9E7',
    fontSize: 17,
    left: 7,
    top: -2,
  
  },
  accessContainer: {
    backgroundColor: 'orange',
    height: 35,
    width: '80%',
    padding: 4,
    justifyContent: 'space-between',
    alignSelf: 'center',
    bottom: 1,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: 'white',
    
  
    
  
    
  },
  accessText: {

  }

});





