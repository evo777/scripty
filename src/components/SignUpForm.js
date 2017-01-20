import React, { Component } from 'react';
import { Text, View, Image, Modal, Dimensions, TouchableHighlight, TextInput } from 'react-native';


class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: false
    }
  }

  navigate(routeName, userData) {
    console.log(this.props)
    if (this.props.user === 'signIn') {
      this.props.navigator.pop();
      return
    }
    console.log(routeName)
    this.props.navigator.push({
      name: routeName,
      passProps: {
        user: userData
      }
    });
  }

  // Set username from within modal
  setUsername(username) {
    this.setState({username})
  }

  // Set password from within modal
  setPassword(password) {
    this.setState({password})
  }


  handleSignUp() {
    var self = this;
    fetch('http://localhost:3011/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "username": this.state.username,
        "password": this.state.password
      })
    })
      .then(response => response.json())
      .then(response => {
          console.log(response)
          self.navigate('Languages', response);
      })
      .catch(err => {
        this.setState({
          error: true
        })})
  }

  renderError() {
    const { darkTextStyle } = styles;
    if(this.state.error) {
      return (
        <View><Text style={darkTextStyle}>Username Taken Please Another!</Text></View>
      )
    }
  }

  render() {
    const { viewStyle, cardStyle, textStyle, pinkCardStyle,
      whiteCardStyle, darkTextStyle, lightTextStyle, imageStyle, imageViewStyle,
      textInputStyle } = styles;
    return (
      <View>
        <View style={viewStyle}>
          <View style={imageViewStyle}>
            <Image
              source={require('../../lib/images/wordmarkCoral.png')}
              style={imageStyle}
            />
          </View>
          <Text style={darkTextStyle}>Sign Up</Text>
          <View>
            <TextInput
              style={textInputStyle}
              placeholder={"username"}
              autoCapitalize={'none'}
              returnKeyType={'go'}
              enablesReturnKeyAutomatically={true}
              onChangeText={(username) => this.setUsername(username)}
            />
            <TextInput
              style={textInputStyle}
              placeholder={"password"}
              autoCapitalize={'none'}
              secureTextEntry={true}
              returnKeyType={'go'}
              enablesReturnKeyAutomatically={true}
              onChangeText={(password) => this.setPassword(password)}
            />
          </View>

          <TouchableHighlight onPress={this.handleSignUp.bind(this)} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
            <Text style={lightTextStyle}>Sign Up</Text>
          </TouchableHighlight>
          {this.renderError()}
          <View><Text style={darkTextStyle} onPress={this.navigate.bind(this, 'SignIn', 'signUp')} >Already a member? Sign In Here!</Text></View>
        </View>
      </View>
    )
  }
}


const coral = '#FA848A'
const darkCoral = '#DE757A'
const grey = '#FAFAFA'

const styles = {
  viewStyle: {
    height: Dimensions.get("window").height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // flexWrap: 'wrap',
    // flexDirection: 'row',
  },
  cardStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

    height: 60,
    width: Dimensions.get("window").width - 40,
    marginTop: 20,
    borderRadius: 5,
    position: 'relative',

  },
  pinkCardStyle: {
    backgroundColor: coral,
  },
  whiteCardStyle: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: coral,
  },
  darkTextStyle: {
    color: coral,
    fontSize: 20,
    fontWeight: 'bold',
  },
  lightTextStyle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageStyle: {
    flex: 1,
    width: Dimensions.get("window").width - 40,
    height: undefined,
    resizeMode: 'contain',
  },
  imageViewStyle: {
    height: 100,
  },
  textInputStyle: {
    height: 60,
    width: Dimensions.get("window").width - 40,

    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 5,
    borderColor: coral,
    borderWidth: 1,

    color: coral,
    fontSize: 20,
    textAlign: 'center'

  }
}


export default SignUpForm;
