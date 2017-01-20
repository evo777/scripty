import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight, ScrollView, Image } from 'react-native';
import Footer from './footer'

const languages = ({ user, navigator }) => {
  const { viewStyle, cardStyle, imageStyle, darkTextStyle } = styles;

  const navigate = (routeName, type) => {
    console.log(navigator)
    navigator.push({
      name: routeName,
      passProps: {
        user: user,
        type: type
      }
    })
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 90, flex: 3, alignItems: 'center'}}>
      <View><Text style={darkTextStyle} >Select a Language</Text></View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'JavaScript')} style={cardStyle}>
          <Image source={require('../../lib/images/JS.png')} style={imageStyle} />
          </TouchableHighlight>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'Ruby')} style={cardStyle}>
          <Image source={require('../../lib/images/Ruby.png')} style={imageStyle} />
          </TouchableHighlight>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'Python')} style={cardStyle}>
          <Image source={require('../../lib/images/Python.png')} style={imageStyle} />
          </TouchableHighlight>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'C')} style={cardStyle}>
          <Image source={require('../../lib/images/C.png')} style={imageStyle} />
          </TouchableHighlight>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'PHP')} style={cardStyle}>
          <Image source={require('../../lib/images/PHP.png')} style={imageStyle} />
          </TouchableHighlight>
          <TouchableHighlight onPress={navigate.bind(this, "LessonList", 'Java')} style={cardStyle}>
          <Image source={require('../../lib/images/Java.png')} style={imageStyle} />
          </TouchableHighlight>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Footer
          user={user}
          lesson={true}
          profile={false}
          leaderBoard={false}
          navigator={navigator}
        />
      </View>
    </View>
  )
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: 'white',
  },
  cardStyle: {
    flex: .2,
    alignItems: 'center',
    height: 10,
    borderRadius: 0,
    position: 'relative',
    justifyContent:'center'
  },
  imageStyle: {
    backgroundColor: '#FA848A',
    opacity: .80,
    height: 150,
    width: 130
  },
    darkTextStyle: {
    color: '#FA848A',
    fontSize: 25,
    fontWeight: 'bold',
  },
}

export default languages;





