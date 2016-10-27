import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StatusBar } from 'react-native';



const Header = () => {
  const { viewStyle, textStyle, imageStyle } = styles;

  return (
    <View style={viewStyle}>
      <StatusBar barStyle="light-content" />
      <Image
          source={require('../../lib/images/wordmark.png')}
          style={imageStyle}
        />
    </View>
  )
};



const styles = {
  viewStyle: {
    backgroundColor: '#FA848A',

    justifyContent: 'center',
    alignItems: 'center',

    height: 60,
    width: Dimensions.get("window").width,
    paddingTop: 15,

    // shadowColor: 'black',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // elevation: 2,
    position:'absolute',
    top:0,
    left:0
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Futura',
  },
  imageStyle: {
    flex: 1,
    width: 72,
    height: undefined,
    resizeMode: 'contain',
    marginTop: 5,
  },
}




export default Header;










