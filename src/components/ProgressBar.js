import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';


const ProgressBar = ({ progress }) => {

  const { barBackground, progressSoFar } = styles;

  // Determine how wide the blue bar should be based on the progress
  progressSoFar.width = barBackground.width * progress;

  // Only return the filled in progress bar if there is progress
  // Otherwise, we just want the empty grey bar
  const renderProgress = () => {
    if (progress > 0) {
      return <View style={{...barBackground, ...progressSoFar}}></View>
    }
  }

  return (
  <View style={barBackground}>{renderProgress()}</View>
  )
};


const successBlue = '#00C2FC';

const styles = {
  barBackground: {
    height: 7,
    width: Dimensions.get("window").width - 40,
    backgroundColor: '#ecf0f1',
    borderRadius: 7,
    marginTop: 5,
  },
  progressSoFar: {
    backgroundColor: successBlue, 
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop: 0,
  }
}

export default ProgressBar;