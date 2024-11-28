import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Homescreen</Text>
      <Button title='Productos' onPress={()=> navigation.navigate('ProductScreen')}></Button>
    </View>
  )
}

export default HomeScreen