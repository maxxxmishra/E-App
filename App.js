import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo'
import * as Font from "expo-font"
import Navigator from './Components/Navigator';
export default function App() {
  return (
    
      <Navigator/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
