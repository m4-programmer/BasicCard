import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity,ScrollView  } from 'react-native';
import { List } from './Const/Const'
export default function App1() {
  const [First,changeFirst] = React.useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.heading}>M4 Academy </Text>
      </View>
      
      {/* First Screen */}
      <ScrollView style={styles.CardWrapper}>
        {List.map((item) => {
          return (
            <Cards key={item.id} name={ item.name} global={First}  />
          )
        })}
      </ScrollView >
      {/* Second Screen */}
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
export function Cards(props) {
  
    const call = (props) => {
      let itemsCopy = [props];
    alert(props.name)
    console.log(itemsCopy)
  }

    return (
     <TouchableOpacity style={styles.box}  onPress={() => call(props)}>
       <Text style={ styles.name} >{props.name} </Text>
       <Text>{props.description }</Text>
      </TouchableOpacity>
      )  
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  title: {
   
    backgroundColor: '#30f',
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
