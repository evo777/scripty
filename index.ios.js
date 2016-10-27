/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
    const { name } = route;
    if (name === 'Home') {
      return <LessonTitleCardList navigator={navigator} />
    } else if (name === 'Login') {
      return <Login navigator={navigator} />
    } else if (name === 'Lesson') {
      return <Lesson navigator={navigator} {...route.passProps} />
    } else if (name === 'LessonComplete') {
      return <LessonComplete navigator={navigator} />
    }
  }

  render() {
    return (
      <Navigator
      style={{ backgroundColor: 'white', }}
      navigationBar={<Header />}
      initialRoute={{ name:'Home' }}
      renderScene={this.renderScene}
      />
    )
  }
};



const mockLesson = {
  title: 'Hello World!',
  questions: [
    {
      prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc augue, mollis in nisi eget, pulvinar interdum velit. Nulla lectus nunc, eleifend sed sapien at, fermentum elementum eros. Mauris sed.',
      answers: ['console.log', 'print', 'display'],
      correctAnswer: 'console.log'
    },
    {
      prompt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nunc augue, mollis in nisi eget, pulvinar interdum velit. Nulla lectus nunc, eleifend sed sapien at, fermentum elementum eros. Mauris sed.',
      answers: ['array', 'object', 'graph'],
      correctAnswer: 'object'
    }
  ]
}



AppRegistry.registerComponent('scripty', () => scripty);






