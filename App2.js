import React from 'react'
import { SafeAreaView,Text, ScrollView, StyleSheet, View, TouchableOpacity,ImageBackground,  } from 'react-native'

import { List } from './Const/Const'
import Section from './Const/Section'
import HorizontalCourseCard from './HorizontalCourseCard'

export default function App2() {
    const URL = './assets/img/abel.png'
    const [screen, setScreen] = React.useState(false)
    const [items,setItems] = React.useState({id: '',name: '', thumbnail: ''})
    const Pressed = (course) => {
        const  {id, name, thumbnail} = course
        
        setItems({id,name,thumbnail})
        setScreen(true)
        
            
    }
    
    if (screen) {
       return <View style={styles.containers}>
        <View style={styles.header}>
            <Text style={{fontSize: 30, fontWeight: 'bold',}}>
                  M4 Academy Card
              </Text>
          </View>
          
          <Section {...items} func = {setScreen} />
         
          
      </View>
    }
  return (
      
      <View style={styles.containers}>
        <View style={styles.header}>
            <Text style={{fontSize: 30, fontWeight: 'bold',}}>
                  M4 Academy Card
              </Text>
          </View>
          <ScrollView style={{flex: .5}}>
          {List.map((items) => {
              return (
                <HorizontalCourseCard key={items.id} course={items} Pressed={Pressed} />  
              )
          })}
          </ScrollView>
          
         
          
      </View>
  )
}
export const Card = (props) => {
    
    return <TouchableOpacity style={styles.box}  >
        
            <Text style={styles.name} >{props.name} </Text>
            
        </TouchableOpacity>
}
const styles = StyleSheet.create({
    containers: {
        flex: 1,
        
        
    },
    header: {
        marginTop: 20,
        alignItems: 'center',
        borderBottomColor: '#ddd',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10,
        
    },
    box: {
        
        width: '33.3%',
        height: 115,
        padding: 20,
        
        alignItems: 'flex-start',
        justifyContent: 'center',
        
        
        
    },
name: {
    color: '#fff',
    alignSelf: 'flex-start',
    fontSize: 13,
},
description: {

},
})
