import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Homescreen from './screens/Homescreen';


//set up redux
export default function App() {
  return (
    <Provider store={store}>
   
    <Homescreen />
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
