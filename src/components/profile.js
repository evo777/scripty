import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView, TouchableHighlight } from 'react-native';
import LessonTitleCard from './lessonTitleCard';
import Footer from './footer';

class LessonTitleCardList extends Component {

  constructor(props) {
    super(props);
  }

  navigate(routeName) {
    this.props.navigator.push( {
      name: routeName
    })
  }

  calculate() {
    let score = 0;
    this.props.user.lessonsCompleted.forEach(lesson => {
      score += lesson.score
    })
    return score;
  }

  render() {
    console.log(this.props);
    const { viewStyle, footerStyle, profileText, profileTitle, cardStyle, pinkCardStyle, lightTextStyle } = styles;
    return (
      <View style={{flex: 1}}>
        <View style={{flex: .9}}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={viewStyle} >
            <Text style={profileTitle}>Username </Text><Text style={profileText}>{this.props.user.username}</Text>
            <Text style={profileTitle}>Score </Text><Text style={profileText}>{this.props.user.totalScore}</Text>
            <Text style={profileTitle}>Completed Lessons </Text>
            {
              this.props.user.lessonsCompleted.map((lesson, i) => {
                return <Text key={i} style={profileText}>{lesson.title}</Text>
              })
            }
            <TouchableHighlight onPress={this.navigate.bind(this, 'Home')} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
              <Text style={lightTextStyle}>Log Out</Text>
            </TouchableHighlight>
          </ScrollView>
        </View>
        <View style={{flex: .1}}>
          <Footer
            user={this.props.user}
            lesson={false}
            profile={true}
            leaderBoard={false}
            navigator={this.props.navigator}
          />
        </View>
      </View>
    )
  }
};


const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'
const {width, height} = Dimensions.get('window');

const styles = {
  viewStyle: {
    alignItems: 'center',
    paddingTop: 90,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  profileText: {
    color: '#1c1c1c',
    fontSize: 20,
    padding: 10
  },
  profileTitle: {
    color: '#1c1c1c',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  cardStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    height: 60,
    width: Dimensions.get("window").width - 40,
    borderRadius: 5,
    position: 'relative',
    marginTop: 50

  },
  pinkCardStyle: {
    backgroundColor: coral,
  },
  lightTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
}

export default LessonTitleCardList;
