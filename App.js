import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,ScrollView  } from 'react-native';
import App1 from './App1';
import App2 from './App2';
import { List } from './Const/Const'
export default function App() {
  const [First,changeFirst] = React.useState('false')
  return (
    
    <SafeAreaView style={styles.container}>
      <App1 />

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  title: {
   
    backgroundColor: '#3bf',
    marginTop: 10,
    alignItems: 'center',
   
  },
  heading: {
     fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
 
  box: {
    marginTop: 10,
    padding: 10,
    height: 50,
    width: '100%',
    borderColor: '#C0C0C0',
    borderWidth: 2,
    padding: 10,
    
  },
  name: {
    alignItems: 'center',
  }
  
});
