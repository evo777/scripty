import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  Dimensions,
  Navigator
} from 'react-native';
import Header from './src/components/header';
import LessonTitleCard from './src/components/lessonTitleCard';
import LessonTitleCardList from './src/components/LessonTitleCardList';
import Login from './src/components/login';
import Lesson from './src/components/Lesson';
import LessonComplete from './src/components/LessonComplete';



class scripty extends Component {

  renderScene(route, navigator) {
    const { name, passProps } = route;
    if (name === 'Home') {
      return <LessonTitleCardList navigator={navigator} />
    } else if (name === 'Login') {
      return <Login navigator={navigator} />
    } else if (name === 'Lesson') {
      return <Lesson navigator={navigator} {...passProps} />
    } else if (name === 'LessonComplete') {
      return <LessonComplete navigator={navigator} {...passProps} />
    }
  }

  render() {
    return (
      <Navigator
      style={{ backgroundColor: 'white', }}
      navigationBar={<Header />}
      initialRoute={{ name:'Login' }}
      renderScene={this.renderScene}
      />
    )
  }
};



AppRegistry.registerComponent('scripty', () => scripty);






