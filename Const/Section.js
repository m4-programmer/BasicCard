import React from 'react'
import { View,Text,Image, Pressable } from 'react-native'
const Section = ({ thumbnail, name, content, func}) => {
    
  return (
      <View style={{flex: 1,}}>
          {/* Content thumbnail */}
          <Image source={ thumbnail} style={{ width: '100%', height: 230, marginBottom: 15,}} />
          {/* COntent WriteUp */}
          <View style={{flex: .5,alignItems:'center',backgroundColor: '#ddd',justifyContent:'center'}}>
          <Text style={{ fontSize: 45, alignItems: 'center', }}>{name}</Text>
          </View>
          <View style={{flex: .5,alignItems:'center',}}>
          <Text style={{  alignItems: 'left', }}>This course will take you from an absolute beginner to a professional in matters of weeks.</Text>
          </View>
          
          <Pressable onPress={()=>{func(false)}}>
              <View style={{
                  backgroundColor: 'red', height: 50,
                  width: '100%', alignItems: 'center', borderRadius: 10,
                  marginBottom: 5,padding:10
              }}>
                  
                  <Text style={{flex: 0.5, color: 'white',padding: 5,}}>Go Back</Text>
              </View>
          </Pressable>
      </View>
  )
}

export default Section