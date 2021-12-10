import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const blue = 'white'
const grey = '#A3E4D7'

const myID = 'u1';

const Message = ({ message }) => {

    const isMe = message.user.id == myID;

    return (
        <View style={[
            styles.container, isMe ? styles.rightContainer : styles.leftContainer
        ]}
        >
            <Text style={{ color: isMe ? '#0B5345' : 'black',
             fontSize: isMe ? 16 : 15,
            }}
            
            >{message.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2980B9',
        borderRadius: 26,
        padding: 10,
        margin: 10,
        maxWidth: '75%',
        borderWidth: 1,
        borderColor: 'green'
    },
    leftContainer: {
        backgroundColor: grey,
        marginLeft: 10,
        marginRight: 'auto',

    },
    rightContainer: {
        backgroundColor: blue,
        marginLeft: 'auto',
        marginRight: 10,
    },

});

export default Message;
