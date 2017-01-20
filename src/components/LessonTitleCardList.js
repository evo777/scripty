import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import LessonTitleCard from './lessonTitleCard';
import Footer from './footer'

class LessonTitleCardList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lessonDetails: []
    }
    // Get all of the lesson detail objects on component load
    this.getLessonDetails()
  }

  // Get all of the lesson titles & ids
  getLessonDetails() {
    const url = 'http://localhost:3011/api/lessons/language/' + this.props.type
    fetch(url)
    .then(data => {
      return data.json()
    })
    .then(data => {
      console.log(data)
      this.setState({'lessonDetails': data})
    })
  }

  render() {
    const { viewStyle, footerStyle } = styles;
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 9}}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={viewStyle}>
            {
              this.state.lessonDetails.map(lesson => {
              return <LessonTitleCard lessonTitle={lesson.title}
                lessonId={lesson._id}
                lesson={lesson}
                navigator={ this.props.navigator }
                key={lesson._id}
                user={this.props.user}
                />
              })
            }
          </ScrollView>
        </View>
        <View style={{flex: 1}}>
          <Footer
            user={this.props.user}
            lesson={true}
            profile={true}
            leaderBoard={false}
            navigator={this.props.navigator}
          />
        </View>
      </View>
    )
  }
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
  footerStyle: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
}

export default LessonTitleCardList;
