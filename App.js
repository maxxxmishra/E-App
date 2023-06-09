import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from 'expo'
import * as Font from "expo-font"
import Navigator from './Components/Navigator'; 
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import Drawer from './Components/Drawer';

Amplify.configure(awsconfig);

const App = () => {
  return (
      <Drawer />
      //<Navigator/>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;