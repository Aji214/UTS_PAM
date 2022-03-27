import React from "react";
import { StyleSheet, Text, View,Picker} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { SafeAreaView,TextInput, TouchableOpacity } from "react-native-web";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';

const home =(props)=> {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  
  const [pelabuhan_awal,setpelabuhan_awal] = React.useState()
  const [pelabuhan_tujuan,setpelabuhan_tujuan] = React.useState()
  const [layanan,setlayanan] = React.useState()
  const [jumlah_penumpang,setjumlah_penumpang] = React.useState()
  const [jam_berangkat,setjam_berangkat] = React.useState()
  const [tgl_Pelabuhan,settgl_pelabuhan] = React.useState()

  return(
    <SafeAreaView style={styles.bg}>
      <View style={styles.box}>
      <Text style={styles.Text}>
          Kapal online
      </Text>

        <Text style={styles.judul}>
          Pelabuhan Awal
      </Text>

        <View style={styles.inputan}>
          <Icon name={'boat-outline'}  size={28}/>

        <Picker selectedValue={pelabuhan_awal}
        style={styles.TextInput}


          onValueChange={(itemValue, itemIndex) =>
          setpelabuhan_awal(itemValue)}>
          <Picker.Item label="Pilih Pelabuhan" value=""/>
          <Picker.Item label="Bakauheni" value="Bakauhen"/>
          <Picker.Item label="Merak" value="Merak"/>
          <Picker.Item label="tanjung mas" value="tanjung mas"/>
          <Picker.Item label="kalimas" value="kalimas"/>
        </Picker>
        </View>

        <Text style={styles.judul}>
          Pelabuhan Tujuan
        </Text>

        <View style={styles.inputan}>
          <Icon name={'boat-outline'}  size={28}/>
        
        <Picker selectedValue={setpelabuhan_tujuan}
        style={styles.TextInput}
          onValueChange={(itemValue, itemIndex) =>
          setpelabuhan_tujuan(itemValue)}>
          <Picker.Item label="Pilih Pelabuhan" value=""/>
          <Picker.Item label="Bakauheni" value="Bakauheni"/>
          <Picker.Item label="Merak" value="Merak"/>
          <Picker.Item label="tanjung mas" value="tanjung mas"/>
          <Picker.Item label="kalimas" value="kalimas"/>
        </Picker>

        </View>

        <Text style={styles.judul}>
          Kelas Layanan
        </Text>
      <View style={styles.inputan}>
          <Icon name={'man-outline'}  size={28}/>

          <Picker selectedValue={setlayanan}
          style={styles.TextInput}
          onValueChange={(itemValue, itemIndex) =>
          setlayanan(itemValue)}>
          <Picker.Item label="Kelas layanan" value=""/>
          <Picker.Item label="Express" value="Express"/>
          <Picker.Item label="Normal" value="Normal"/>
        </Picker>

        </View>

        <Text style={styles.judul}>
          Tanggal masuk Pelabuhan
        </Text>
        <View style={styles.inputan}>
          <Icon name={'calendar-outline'}  size={28}/>

          <Picker selectedValue={settgl_pelabuhan}
          style={styles.TextInput}
          onValueChange={(itemValue, itemIndex) =>
          settgl_pelabuhan(itemValue)}>
          <Picker.Item label="tanggal pelabuhan" value=""/>
          <Picker.Item label="17/03/2022" value="17/03/2022"/>
          <Picker.Item label="18/03/2022" value="18/03/2022"/>
          <Picker.Item label="19/03/2022" value="19/03/2022"/>
          <Picker.Item label="20/03/2022" value="20/03/2022"/>
        </Picker>

        </View>

        <Text style={styles.judul}>
          Jam masuk Pelabuhan 
        </Text>
      
        <View style={styles.inputan}>
          <Icon name={'time-outline'}  size={28}/>
          
        <Picker selectedValue={setjam_berangkat}
          style={styles.TextInput}
          onValueChange={(itemValue, itemIndex) =>
          setjam_berangkat(itemValue)}>
          <Picker.Item label="Jam Masuk Pelabuhan" value=""/>
          <Picker.Item label="07.00" value="07.00"/>
          <Picker.Item label="09.00" value="09.00"/>
          <Picker.Item label="12.00" value="12.00"/>
          <Picker.Item label="15.00" value="15.00"/>
          <Picker.Item label="18.00" value="18.00"/>
            
        </Picker>

        </View>
            
        <Text style={styles.judul}>
          Jumlah penumpang
        </Text>
      
        <View style={styles.inputan}>
          <Icon name={'people-outline'}  size={28}/>
          <Picker selectedValue={setjumlah_penumpang}
          style={styles.TextInput}
          onValueChange={(itemValue, itemIndex) =>
          setjumlah_penumpang(itemValue)}>
          <Picker.Item label="Set Jumlah Penumpang" value=""/>
          <Picker.Item label="Dewasa" value="Dewasa"/>
          <Picker.Item label="anak" value="Anak "/>
          
        </Picker>

        </View>

        <TouchableOpacity style={styles.tombol} onPress={() => props.navigation.push('Buat')} >
          <Icon name={'search'}  size={28} color={'white'} />
        <Text style={styles.BuatTiket}>
            Buat Tiket
        </Text>
        </TouchableOpacity>
        <Text style ={styles.copy}>
            Tri Aji Bagaskara - 119140214
        </Text>
      </View>
    </SafeAreaView>
  );

};
export default home;







const styles = StyleSheet.create({
  bg :
  {
    backgroundColor: "#F5F5F5",
    alignItems:"center",
    flex : 1,
    justifyContent: 'center'
  },
  box:
  {
    marginTop : 20,
    width :300,
    alignItems : "center",
    backgroundColor :"white",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    shadowOpacity : 1,
    shadowRadius : 5
  },
  Text : 
  {
    color: "#00579c",
    fontSize : 30,
    fontWeight :"bold",
    marginTop:"70",
    marginBottom : 50
  },
  inputan :
  {
    flexDirection : "row",
    height : 30,
    width : 270,
    marginTop : 10
  },
  judul :
  {
    fontStyle :'normal',
    alignSelf :'flex-start'
  },
  TextInput :
  {
    marginLeft : 10,
    backgroundColor :"#f0f0f0",
    borderRadius : 5,
    borderWidth :1,
    
    height : 30,
    width : 250,
    paddingLeft: 15
  },
  TextUsia :
  {
    height : 30,
    width : 280,
    borderRadius : 5,
    backgroundColor :"#f0f0f0",
    marginTop :20,
    alignItems : "center",
    fontWeight : 'bold'
  },
  usia:
  {
    fontSize : 15,
    fontWeight :"bold"
    
  },
  tombol :
  {
    backgroundColor : "#ff0000",
    flexDirection: 'row',
    alignItems : 'center',
    paddingHorizontal : 10,
    height : 45,
    width : 200,
    borderRadius :5,
    marginTop :20
  },
  BuatTiket :
  {
    color : 'white',
    fontSize : 20,
    marginLeft : 20,
    fontWeight : 'bold'
  }
})

