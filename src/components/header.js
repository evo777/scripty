import React, { Component } from 'react';
import { Text, View, Image, Dimensions, StatusBar, TouchableHighlight } from 'react-native';

const renderBackButton = (name, navigator) => {
  if(name === "LessonDetail"){
    return <TouchableHighlight underlayColor="#FA848A" onPress={navigator.pop} style={{flex: 2, height: 20}}><Text style={{color: "white", left: 20}}>Back</Text></TouchableHighlight>
  }
  else {
    return <TouchableHighlight style={{flex: 2}}><Text></Text></TouchableHighlight>
  }
}


const Header = ({name, navigator}) => {
  const { viewStyle, textStyle, imageStyle } = styles;

  return (
    <View style={viewStyle}>
      <StatusBar barStyle="light-content" />
      {renderBackButton(name, navigator)}
      <Image
          source={require('../../lib/images/wordmark.png')}
          style={imageStyle}
        />
      <TouchableHighlight style={{flex: 2}}><Text></Text></TouchableHighlight>
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
    left:0,
    flex: 1,
    flexDirection: 'row'
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Futura',
  },
  imageStyle: {
    flex: 8,
    width: 50,
    height: 25,
    resizeMode: 'contain',
    marginTop: 5,
  },
}




export default Header;










