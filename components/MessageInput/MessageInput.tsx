import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import { SimpleLineIcons, Feather,Ionicons, AntDesign } from '@expo/vector-icons';

const MessageInput = () => {
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        // send message
        console.warn("sending: ", message);

        setMessage('');
    }

    const onplusClicked = () => {
        console.warn("On plus clicked");
    }

    const onPress = () => {
        if (message) {
            sendMessage();
        } else {
            onplusClicked();
        }
    }

    return (
        <View
         style={styles.root} >
            <View style={styles.inputContainer}>
              <SimpleLineIcons name="emotsmile" size={24} color="teal" style={styles.icon} />
                
                <TextInput 
                style={styles.input} 
                value={message}
                onChangeText={setMessage}
                placeholder="Start Typing..."
                
                />

                <Feather name="camera" size={24} color="teal" style={styles.icon} />
                <Ionicons name="mic-outline" size={24} color="teal" style={styles.icon} />
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
            {message ? <Ionicons name="send-outline" size={22} color="teal" /> : <AntDesign name="plus" size={24} color="teal" />}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
    },
    inputContainer: {
        backgroundColor: '#FEF9E7',
        flex: 1,
        borderRadius: 22,
        marginRight: 6,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
        color: 'teal',
        fontSize: 15,
    
    },
    icon: {
       marginHorizontal: 4,
    },
    
    buttonContainer: {
        width: 50,
        height: 50,
        backgroundColor: '#A3E4D7',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        right: -3,
    
    },
    buttonText: {
        color: 'teal',
        fontSize: 16,

    }

});

export default MessageInput;
