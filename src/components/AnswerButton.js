import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';


const AnswerButton = ({ possibleAnswer, handleAnswerButtonClick, isCorrectAnswer, isPressedAnswer }) => {

  const { viewStyle, baseCardStyle, correctCardStyle, incorrectCardStyle, baseTextStyle, selectedTextStyle } = styles;

  let cardStyle;
  let textStyle;

  if (!!isCorrectAnswer) {
    cardStyle = {...baseCardStyle, ...correctCardStyle};
    textStyle = {...baseTextStyle, ...selectedTextStyle};
  } else if (isPressedAnswer) {
    cardStyle = {...baseCardStyle, ...incorrectCardStyle};
    textStyle = {...baseTextStyle, ...selectedTextStyle};
  } else {
    cardStyle = baseCardStyle;
    textStyle = baseTextStyle;
  }

  return (
    <TouchableHighlight onPress={handleAnswerButtonClick.bind(this, possibleAnswer)} style={cardStyle} underlayColor={'white'} >
      <Text style={textStyle}>{possibleAnswer}</Text>
    </TouchableHighlight>
  )
};


const coral = '#FA848A';
const darkCoral = '#DE757A';
const grey = '#FAFAFA';
const darkGrey = '#7f8c8d';
const notBlack = '#1c1c1c';
const mint = '#67D5B5';
const green = '#60CF73';
const incorrectRed = '#FA6467';


const styles = {
  viewStyle: {
    height: Dimensions.get("window").height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  baseCardStyle: {
    backgroundColor: 'white',

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    height: 60,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,

    borderRadius: 5,
    borderColor: '#D5DCE0',
    borderWidth: 2,
  },
  correctCardStyle: {
    backgroundColor: green,
    borderWidth: 0,
  },
  baseTextStyle: {
    color: notBlack,
    fontSize: 15,
  },
  selectedTextStyle: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  incorrectCardStyle: {
    backgroundColor: incorrectRed,
    borderWidth: 0,
  }
}


export default AnswerButton;