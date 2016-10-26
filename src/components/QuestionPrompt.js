import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';

const QuestionPrompt = ({ text }) => {
  const { buttonStyle, viewStyle, textStyle } = styles;

  //Added line 10-16, line 17-21
  return (
    <View style={viewStyle}>
      <TouchableHighlight
      style = {styles.button}
      onPress = {props.getData}>
      <Text>
        Get Lesson
      </Text>
      </TouchableHighlight>
      <View>
          <Text>
              {props.dataFromFetch.body}
          </Text>
      </View>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
};

const grey = '#FAFAFA';

//Added button method in line 48-50
const styles = {
  viewStyle: {
    backgroundColor: 'white',

    alignItems: 'center',

    // height: 75,
    width: Dimensions.get("window").width,
    padding: 30,

    borderColor: '#ecf0f1',
    borderBottomWidth: 0.5,
  },
  textStyle: {
    color: '#1c1c1c',
    fontSize: 15,
    lineHeight: 30,
  },
  button: {
    backgroundColor: 'red'
  }
};

export default QuestionPrompt;