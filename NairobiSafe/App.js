import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView , Platform} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Homescreen from './screens/Homescreen';
import MapScreen from './screens/MapScreen';
import CleaningScreen from './screens/CleaningScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from './components/NavigateCard';
import RiderOptionscard from './components/RiderOptionsCard';



export default function App() {
const Stack = createStackNavigator();
  
  return (
    <Provider store={store}>
       <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
           keyboardVerticalOffset= {Platform.OS === "android" ? -200 : 0}
          >
         <Stack.Navigator>

            <Stack.Screen name="Homescreen" component={Homescreen} options={{headerShown:false,}}/>
            <Stack.Screen name="MapScreen" component={MapScreen}  options={{ headerShown:false,}}/> 
            <Stack.Screen name="CleaningScreen" component={CleaningScreen} options={{ headerShown: false, }} /> 
              <Stack.Screen name="NavigateCard" component={NavigateCard}  options={{ headerShown:false,}}/> 
              <Stack.Screen name="RiderOptionscard" component={RiderOptionscard}  options={{ headerShown:false,}}/> 


           
            </Stack.Navigator>
            </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};
