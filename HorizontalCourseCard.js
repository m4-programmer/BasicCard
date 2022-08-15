import React from 'react'
import { 
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground,
    Button,
} from 'react-native';
 
const HorizontalCourseCard = ({ containerStyle, course,Pressed }) => {
        // console.warn(Pressed)
    // const Url = require(`{course['thumbnail']}`)
    return (
        <TouchableOpacity style={{flexDirection: 'row', ...containerStyle}} onPress={()=>Pressed(course)}>
            {/* Thumbnail here */}
            
            <ImageBackground source={course.thumbnail } resizeMode='cover'
                style={{ width: 130, height: 130, marginBottom: 15,marginLeft: 5 }}
            imageStyle={{borderRadius: 15}} transition={false}>

            </ImageBackground>
            {/* Details */}
            <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{fontSize: 18,fontWeight: '900',lineHeight:20,borderBottomWidth:10,borderBottomColor: 'black',borderStyle: 'solid'}}>
                   {course.name}
                </Text>
                <Text>
                    This course will take you from an absolute beginner to a professional in matters of weeks.
                </Text>
                <View style={{borderBottomWidth:1,borderColor: '#ddd',padding:5,marginBottom: 5}} />
                <View title='' style={{
                    borderStyle: 'solid',
                    borderWidth: 2,
                    borderColor: '#ddd',
                    borderRadius: 5,
                    width: '50%',
                    padding: 5,
                    marginTop: 5,
                    backgroundColor: '#bac'
                }}>
                   <Text>Read More</Text> 
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HorizontalCourseCard