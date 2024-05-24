import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data = [
    {
    id: "123",
    title: "Order Relocation Track",
    image:"../assets/images/track1.jpg",
    screen:"MapScreen",
    },
    {
    id: "124",
    title: "Book Cleaning Services",
    image: "../assets/images/cleaner.jpg",
    screen:"CleaningScreen",
    },
    {
    id: "125",
    title: "Book packaging Services",
    image: "../assets/images/cleaner.jpg",
    screen:" packagingScreen ",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)

  return (
   <FlatList
   data={data}
   horizontal
   keyExtractor={(item) => item.id}
   renderItem={({ item }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(item.screen)} style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        disabled={!origin}
        >
    
    <View style={tw`${!origin && "opacity-20"}`}>
    <Image
        style={{ width: 120, height: 120, resizeMode: "contain" }}
        source={{ uri: item.image}}
    />
    <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
    <Icon 
    style={tw`p-2 bg-black rounded-full w-10 mt-4`}
    name="arrow-forward" color="white" type=" antdesign"   />
   </View>
    </TouchableOpacity>
    );
   }}
   
   />
  );
};

export default NavOptions

const styles = StyleSheet.create({});