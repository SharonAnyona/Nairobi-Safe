import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import NavFavourites from '../components/NavFavourites';

const Homescreen = () => {
  const dispatch = useDispatch();
  
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo1.png')}
        />
        <Text style={styles.title}>NairobiSafe</Text>
        
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={autoCompleteStyles}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            }));
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
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

        <NavOptions />
        <NavFavourites />
      </View>
      
    </SafeAreaView>
  );
};

const autoCompleteStyles = {
  container: {
    flex: 0,
    marginBottom: 20,
  },
  textInput: {
    fontSize: 18,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#F0F0F0',
  },
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
});


export default Homescreen;
