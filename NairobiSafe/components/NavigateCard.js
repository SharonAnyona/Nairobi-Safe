import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'twrnc'
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux'
import { setDestination } from '../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import NavFavourites from './NavFavourites'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'



const NavigateCard = () => {
const dispatch = useDispatch();
const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
     <Text style={tw`text-center py-5 text-xl`}>Good Morning</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder='Where to?'
            styles={toInputBoxStyles} 
            fetchDetails={true}
            returnkeyTypes={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                     
                })
              );
              navigation.navigate('RiderOptionsCard');
             }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              
              language: 'en',
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        </View>
        <NavFavourites />
        <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
          <TouchableOpacity
            onPress={()=> navigation.navigate("RiderOptionsCard")}
            style={tw`flex flex-row bg-black w-24 px-4 py-3 justify-between rounded-full`}>
            <Icon name="truck" type="font-awesome" color="white" size={16} />
            <Text style={tw`text-white text-center`}>Trucks</Text>
            
          </TouchableOpacity>
          <TouchableOpacity
             onPress={()=> navigation.navigate("CleaningScreen")}
            style={tw`flex flex-row bg-white justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon name="brush-outline" type="ionicon" color="black" size={16} />
            <Text style={tw`text-black text-center`}>Trucks</Text>
            
          </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({

  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
   
  }
})