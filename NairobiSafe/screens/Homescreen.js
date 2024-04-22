import { StyleSheet, Text, View,Image , SafeAreaView} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../assets/components/NavOptions';

const Homescreen = () => {
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw `pl-0 pt-5 flex-row items-center`}>
        <Image
              style={{
                width:100,
                 height: 100, 
                 resizeMode: "contain",
                }} 
            source = {require("../assets/images/logo-.png")}
            
        />
      <Text style={[tw `ml-0 p-3`, { fontWeight: 'bold', fontSize: 12 }]}>NairobiSafe</Text>
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