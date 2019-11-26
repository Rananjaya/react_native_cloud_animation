
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  Easing,
  backgroundColor
} from 'react-native'

export default class animations extends Component {
  constructor () {
    super()
    this.animatedValue = new Animated.Value(0)
   
  }
  componentDidMount () {
    this.animate()
  }
  animate () {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }
  render () {
   
   
    const movingMargin1 = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [4, 100, 0]
    })

    
   
    return (
      <View style={styles.container}>
       
       
        <Animated.Image
       
          style={{
           flex : 2,
           marginLeft: movingMargin1,
            //marginTop: 10,
            width: 350, 
            height: 200,
            }}
            
            source={require('./img/login_A5.jpg')}
            
            >
           
            </Animated.Image>
            <Image
          
        />
        
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor : 'gray'
    
  }
})

AppRegistry.registerComponent('animations', () => animations)
