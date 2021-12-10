/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons'; 

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';
import styles from '../components/ChatRoomItem/styles';
import { View } from '../components/Themed';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
       name="ChatVerse-ZM"
        component={HomeScreen}
         options={{ headerTitle: (props) => <HomeHeader {...props} /> }} 
         />
      <Stack.Screen name="ChatRoom"
       component={ChatRoomScreen} 
       options={{ headerTitle: ChatRoomHeader
      }}
       
       />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}


const HomeHeader = (props) => {
  return (
    <View style={{
      backgroundColor: 'teal',
      flex: 1,
      height: 45,
      borderRadius: 11,
      borderWidth: 1,
      borderColor: 'green',
      

    }}>
      <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }} style={{
         width: 35,
         height: 35,
         borderRadius: 17,
         top: 4,
         right: 15,
         borderWidth: 1,
         borderColor: 'teal'


    }} />
       <Text style={{
         fontSize: 20,
         fontWeight: '400',
         marginHorizontal: 6,
         marginLeft: 98,
         top: -27,
         color: '#FEF9E7' 
         


       }}>CHAT-VERSE</Text>
       <Feather name="camera" size={24} color="black" style={{
         marginHorizontal: 6,
         marginLeft: 98,
         top: -56,
         left: 163,
         color: 'white',
       }}/>
       <Feather name="edit" size={24} color="black" style={{
          marginHorizontal: 6,
          marginLeft: 98,
          top: -82,
          left: 200,
          color: 'white',
       }}/>
    </View>
     
  )
  };

  const ChatRoomHeader = (props) => {
    return (
      <View style={{
        backgroundColor: '#4C7685',
        flex: 1,
        height: 45,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: 'green',
        
  
      }}>
        <Image source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }} style={{
           width: 35,
           height: 35,
           borderRadius: 17,
           top: 4,
           right: 15,
           borderWidth: 1,
           borderColor: 'teal'
  
  
      }} />
         <Text style={{
           fontSize: 20,
           fontWeight: 'bold',
           marginHorizontal: 6,
           marginLeft: 45,
           top: -27,
           color: '#FEF9E7' 
           
  
  
         }}>{props.children}</Text>
         <Ionicons name="md-videocam-outline" size={24} color="black" style={{
           marginHorizontal: 6,
           marginLeft: 55,
           top: -56,
           left: 163,
           color: 'white',
         }}/>
         <MaterialIcons name="call" size={24} color="black" style={{
            marginHorizontal: 6,
            marginLeft: 50,
            top: -82,
            left: 200,
            color: 'white',
         }}/>
      </View>
       
    )
    }



/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Modal')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
