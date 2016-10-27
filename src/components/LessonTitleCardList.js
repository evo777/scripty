import React, { Component } from 'react';
import { Text, View, Dimensions, ScrollView } from 'react-native';
import LessonTitleCard from './lessonTitleCard';

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
    const url = 'http://localhost:3011/api/lessons'
    fetch(url)
    .then(data => {
      return data.json()
    })
    .then(data => {
      this.setState({'lessonDetails': data})
    })
  }

  render() {
    const { viewStyle } = styles;
    return (
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={viewStyle} >
        { 
          this.state.lessonDetails.map(lesson => {
          return <LessonTitleCard lessonTitle={lesson.title} 
            lessonId={lesson._id}
            navigator={ this.props.navigator } 
            key={lesson._id} />
          })
        }
      </ScrollView>
    )
  }
};

const styles = {
  viewStyle: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: 'white',
    height: Dimensions.get("window").height,
  }
}

export default LessonTitleCardList;
