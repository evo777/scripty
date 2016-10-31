import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';

const QuestionPrompt = ({ text }) => {
  const { buttonStyle, viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
};

const grey = '#FAFAFA';

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
};

export default QuestionPrompt;