import { StatusBar,StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: 'black',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      borderRadius:20
      
    },
    title: {
      color:"white",
      fontSize: 20,
    },
    heading:{
       
       
        padding:20,
        fontSize: 25,
        textAlign:"center"
    },
    input: {
        height: 40,
        margin: 100,
        borderWidth: 1,
        padding: 10,
      },
  });