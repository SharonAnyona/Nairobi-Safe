import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Homescreen from './screens/Homescreen';
import MapScreen from './screens/MapScreen';
import CleaningScreen from './screens/CleaningScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <Provider store={store}>
       <NavigationContainer>
        <SafeAreaProvider>
         <Stack.Navigator>

            <Stack.Screen name="Homescreen" component={Homescreen} options={{headerShown:false,}}/>
            <Stack.Screen name="MapScreen" component={MapScreen}  options={{ headerShown:false,}}/> 
            <Stack.Screen name="CleaningScreen" component={CleaningScreen}  options={{ headerShown:false,}}/> 

           
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22eeff',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
 
});
