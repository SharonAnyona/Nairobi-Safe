import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from "tailwind-react-native-classnames";
import Map from '../components/Map';
import MapView from 'react-native-maps';
import {createStacknavigator} from "@react-navigation/stack"
import navigateCard from '../components/navigateCard';
import riderOptionsCard from '../components/riderOptionsCard';
const MapScreen = () => {
  const Stack = createStacknavigator();

  return (
    <View>
      
      <View style = {tw`h-1/2`}>
      <Map/>
      </View>

      <View style = {tw`h-1/2`}>
        <Stack.Navigator>
          <StackScreen
            name="navigateCard"
            component={navigateCard}
            options={{
              headerShow: false,
            }}
          />
           <StackScreen
            name="riderOptionsCard"
            component={navigateCard}
            options={{
              headerShow: false,
            }}
          />
       </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen;

const styles = StyleSheet.create({});