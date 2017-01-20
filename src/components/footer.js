import React, { Component } from 'react';
import { Text, View, Dimensions, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  navigate(routeName, userData) {
      this.props.navigator.push({
        name:routeName,
        passProps: {
        user: userData
        }
      });
  }

  renderProfileFooter() {
    const {  lightTextStyle, pinkCardStyle, whiteCardStyle, cardStyle, darkTextStyle } = styles;
    if (this.props.lesson) {
      return (
        <TouchableHighlight onPress={this.navigate.bind(this, 'Profile', this.props.user)} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
          <Text style={lightTextStyle}>Profile</Text>
        </TouchableHighlight>
      )
    } else {
      return (
        <TouchableHighlight style={{...cardStyle, ...whiteCardStyle}} underlayColor={darkCoral} >
          <Text style={darkTextStyle}>Profile</Text>
        </TouchableHighlight>
      )
    }
  }

  renderLessonFooter() {
    const {  lightTextStyle, pinkCardStyle, whiteCardStyle, cardStyle, darkTextStyle } = styles;
    if (this.props.profile) {
      return (
        <TouchableHighlight onPress={this.navigate.bind(this, 'Languages', this.props.user)} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
          <Text style={lightTextStyle}>Home</Text>
        </TouchableHighlight>
      )
    } else {
      return (
        <TouchableHighlight style={{...cardStyle, ...whiteCardStyle}} underlayColor={darkCoral} >
          <Text style={darkTextStyle}>Home</Text>
        </TouchableHighlight>
      )
    }
  }

    renderLeaderboardFooter() {
    const {  lightTextStyle, pinkCardStyle, whiteCardStyle, cardStyle, darkTextStyle } = styles;
    if (!this.props.leaderBoard) {
      return (
        <TouchableHighlight onPress={this.navigate.bind(this, 'Leaderboard', this.props.user)} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
          <Text style={lightTextStyle}>Leaderboard</Text>
        </TouchableHighlight>
      )
    } else {
      return (
        <TouchableHighlight style={{...cardStyle, ...whiteCardStyle}} underlayColor={darkCoral} >
          <Text style={darkTextStyle}>Leaderboard</Text>
        </TouchableHighlight>
      )
    }
  }

  render() {
    const {  footerStyle, lightTextStyle } = styles;
    return (
    <View style={footerStyle}>
      <View style={{flex: .2}}>
        {this.renderLessonFooter()}
      </View>
      <View style={{flex: .3}}>
       {this.renderLeaderboardFooter()}
      </View>
      <View style={{flex: .2}}>
        {this.renderProfileFooter()}
      </View>
    </View>
    )
  }
};

const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'

const styles = {
  footerStyle: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    //justifyContent:'center',
    backgroundColor: '#FA848A',
    height: 50,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  lightTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  smallLightText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  darkTextStyle: {
    color: coral,
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 50,
    borderRadius: 0,
    position: 'relative',
    justifyContent:'center'
  },
  pinkCardStyle: {
    backgroundColor: coral,
  },
  whiteCardStyle: {
    backgroundColor: "#FFFFFF",
  }
}

export default Footer;
