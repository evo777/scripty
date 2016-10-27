import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableHighlight } from 'react-native';


const Login = ({navigator}) => {
  const { title, viewStyle, cardStyle, textStyle, pinkCardStyle, 
    whiteCardStyle, darkTextStyle, lightTextStyle, imageStyle, imageViewStyle } = styles;

  const navigate = (routeName) => {
    navigator.push({name:routeName})
  }

  return (
    <View style={viewStyle}>
      <View style={imageViewStyle}>
        <Image
          source={require('../../lib/images/wordmarkCoral.png')}
          style={imageStyle}
        />
      </View>
      <TouchableHighlight onPress={navigate.bind(this, 'Home')} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
        <Text style={lightTextStyle}>Log In</Text>
      </TouchableHighlight>

      <TouchableHighlight onPress={navigate.bind(this, 'Home')} style={{...cardStyle, ...whiteCardStyle}} underlayColor={grey}>
        <Text style={darkTextStyle}>Sign Up</Text>
      </TouchableHighlight>
    </View>
  )
};

const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'

const styles = {
  title: {
    color: coral,
    fontSize: 60,
    fontFamily: 'Futura'
  },
  viewStyle: {
    height: Dimensions.get("window").height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // flexWrap: 'wrap',
    // flexDirection: 'row',
  },
  cardStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    height: 60,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,
    borderRadius: 5,
    position: 'relative',

  },
  pinkCardStyle: {
    backgroundColor: coral,
  },
  whiteCardStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: coral,
  },
  darkTextStyle: {
    color: coral,
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageStyle: {
    flex: 1,
    width: Dimensions.get("window").width - 40,
    height: undefined,
    resizeMode: 'contain',
  },
  imageViewStyle: {
    height: 100,
  }
}


export default Login;





