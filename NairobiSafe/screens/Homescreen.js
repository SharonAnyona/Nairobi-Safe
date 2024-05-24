import React from 'react';
import { StyleSheet, Text, View,Image , SafeAreaView} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import {setDestination, setOrigin} from "../slices/navSlice";

const Homescreen = () => {
  const dispatch =useDispatch();
  return (

    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw `pl-0 pt-5 `}>
        <Image
              style={{
                width:80,
                 height: 80, 
                 resizeMode: "contain",
                }} 
            source = {require("../assets/images/logo-.png")}           
        />
      <Text style={[tw `ml-0 p-3`, { fontWeight: 'bold', fontSize: 12 }]}>NairobiSafe</Text>

    <GooglePlacesAutocomplete
    placeholder="where from?"
    styles={{
        container: {
          flex: 0,

        },
        textInput:{
          fontSize: 18,
        }
      }}
      
      onPress={(data, details = null) => {
      dispatch(
        setOrigin({
          location: details.geometry.location,
          description: data.description,
              
      })
    );
       dispatch(setDestination(null));
      }}

      fetchDetails= {true}
      returnKeyType={"search"}
      enablePoweredByContainer={false}
      minLength={2}
      query={{
        key: GOOGLE_MAPS_APIKEY,
        
        language: 'en',
      }}
      

      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}

      />

      <NavOptions/>
      </View>
    </SafeAreaView>
  );
};

export default Homescreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22eeff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});