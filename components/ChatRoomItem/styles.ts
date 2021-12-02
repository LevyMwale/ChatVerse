import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
  
    },
    image: {
      height: 60,
      width: 60,
      borderRadius: 30,
      marginRight: 10,
      borderWidth: 1,
      borderColor: 'white',
    },
    badgeContainer: {
      backgroundColor: '#2C3E50',
      width: 20,
      height: 20,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      borderWidth: 1,
      borderColor: 'orange',
      left: 50,
      top: 5,
      right: 35,
    },
    badgeText: {
     fontSize: 11,
     color: 'white',

    },
    rightContainer: {
      backgroundColor: 'transparent',
      borderRadius: 8,
      flex: 1,
      justifyContent: 'center',
     
  
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    name: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 3,
      top: -6,
      borderWidth: 1,
      borderColor: 'orange',
      borderRadius: 8,
      backgroundColor: 'teal',
      right: 2,
      color: '#FEF9E7',
      padding: 5,
  
    },
    text: {
      fontSize: 16,
      color: 'white'
    },
  });

  export default styles;