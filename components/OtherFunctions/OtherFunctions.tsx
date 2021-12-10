import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Fontisto, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';


export default function OtherFunctions() {

    return (
        <View style={styles.transactions}>
        <View style={styles.taxi}>
            <Fontisto name="taxi" size={19} color="#D4EFDF" /> 
        </View>
        <Text style={styles.taxiText}>
            Ulendo
        </Text>
        <View style={styles.mobileMoney}>
        <FontAwesome name="money" size={24} color="#FDEBD0" /> 
        </View>
        <Text style={styles.mobileText}>
                Mobile Money
            </Text>
        <View style={styles.shoppingCart}>
        <Entypo name="shopping-bag" size={24} color="green" />
        </View>
        <Text style={styles.shoppingText}>
                Trade
            </Text>
            <View style={styles.groupsContainer}>
            <MaterialIcons name="groups" size={24} color="green" />
        </View>
        <Text style={styles.groupText}>
                Groups
            </Text>
        </View>
        
    )
};

const styles = StyleSheet.create({
    transactions: {
      height: 83,
      width: '95%',
      borderWidth: 1,
      borderColor: 'green',
      padding: 4,
      marginTop: 8,
      bottom: 3,
      borderRadius: 20,
      marginHorizontal: 9,

    },


    taxi: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#283747',
        alignItems: 'center',
        justifyContent: 'center',
        left: 27,
        bottom: -4,
        borderWidth: 1,
        borderColor: 'green'
    },
    taxiText: {
        color: 'teal',
        left: 28,
        top: 5,
        
    },
    mobileMoney: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: '#283747',
        alignItems: 'center',
        justifyContent: 'center',
        left: 106,
        bottom: 67,
        borderWidth: 1,
        borderColor: 'teal'

    },
    mobileText: {
        color: 'teal',
        left: 86,
        bottom: 65,
        
    },
    shoppingCart: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        left: 187,
        bottom: 138,
        borderWidth: 1,
        borderColor: 'teal'
    },
    shoppingText: {
        color: 'teal',
        left: 192,
        bottom: 136,
        
    },
    groupsContainer: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        left: 268,
        bottom: 209,
        borderWidth: 1,
        borderColor: 'teal'
    },
    groupText: {
        color: 'teal',
        left: 269,
        bottom: 207,
        
    },

})

