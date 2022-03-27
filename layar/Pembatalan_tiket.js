import React from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView} from "react-native";


const Pembatalan =(props)=> {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
  
  
      return(
        <SafeAreaView style={styles.background}>
          
          <View>
              <Text style={styles.text}>
                  Tidak Ada Aktifitas Pembatalan Tiket
              </Text>
          </View>
        </SafeAreaView>
      );
  
  };
  
  const styles = StyleSheet.create({
    background : {
      backgroundColor: "white",
      flex : 1,
      alignItems:"center",
      justifyContent :'center'
    },
    text :{
        fontWeight:'bold',
        fontSize : 20,
        color : '#00579c',
       
       
    }
  });
  export default Pembatalan;

  