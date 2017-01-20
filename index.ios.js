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
import Profile from './src/components/profile';
import SignUpForm from './src/components/SignUpForm';
import SignInForm from './src/components/SignInForm';
import LessonDetail from './src/components/lessonDetail';
import LeaderboardList from './src/components/LeaderBoardList';
import Languages from './src/components/languages'



class scripty extends Component {

  renderScene(route, navigator) {
    const { name, passProps } = route;
    if (name === 'LessonList') {
      return (
        <View style={{flex: 1}}>
          <LessonTitleCardList navigator={navigator} {...passProps} />
          <Header navigator={navigator} name={name}/>
        </View>
      )
    } else if (name === 'Home') {
      return <Login navigator={navigator} {...passProps} />
    } else if(name === 'Languages'){
      return (
        <View style={{flex: 1}}>
          <Languages navigator={navigator} {...passProps} />
          <Header navigator={navigator} name={name}/>
        </View>
      )
    }else if (name === 'Lesson') {
      return (
        <View style={{flex: 1}}>
          <Lesson navigator={navigator} {...passProps} />
          <Header navigator={navigator} name={name}/>
        </View>
      )
    } else if (name === 'LessonDetail'){
      return (
        <View style={{flex: 1}}>
          <LessonDetail navigator={navigator} {...passProps} />
          <Header navigator={navigator} name={name}/>
        </View>
      )
    }else if (name === 'LessonComplete') {
      return (
        <View style={{flex: 1}}>
          <LessonComplete navigator={navigator} {...passProps} />
          <Header navigator={navigator} name={name}/>
        </View>
      )
    } else if (name === 'Profile') {
      return (
        <View style={{flex: 1}}>
          <Profile navigator={navigator} {...passProps} />
          <Header navigator={navigator} name={name}/>
        </View>
      )
    } else if (name === 'Leaderboard') {
      return (
        <View style={{flex: 1}}>
          <LeaderboardList navigator={navigator} {...passProps} />
          <Header navigator={navigator} name={name} />
        </View>
      )
    } else if (name === 'SignUp') {
      return <SignUpForm navigator={navigator} {...passProps} />
    } else if (name === 'LogIn') {
      return <SignInForm navigator={navigator} {...passProps} />
    }
  }

  render() {
    return (
      <Navigator
      style={{ backgroundColor: 'white', flex: 1 }}
      initialRoute={{ name:'Home' }}
      renderScene={this.renderScene}
      />
    )
  }
};



AppRegistry.registerComponent('scripty', () => scripty);






