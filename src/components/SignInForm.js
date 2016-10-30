import React, { Component } from 'react';
import { Text, View, Image, Modal, Dimensions, TouchableHighlight, TextInput } from 'react-native';


const SignInForm = ({ visible, setUsername, setPassword, handleModalLoginButtonPress }) => {
  const { viewStyle, cardStyle, textStyle, pinkCardStyle, 
      whiteCardStyle, darkTextStyle, lightTextStyle, imageStyle, imageViewStyle,
      textInputStyle } = styles;

  return (
    <Modal
        animationType={"slide"}
        transparent={false}
        visible={visible}
    > 
      <View style={viewStyle}>
        <Text style={darkTextStyle}>Sign up or Log in</Text>
        <View>
          <TextInput 
            style={textInputStyle}
            placeholder={"username"}
            autoCapitalize={'none'}
            returnKeyType={'go'}
            enablesReturnKeyAutomatically={true}
            onChangeText={(username) => setUsername(username)}
          />
          <TextInput 
            style={textInputStyle}
            placeholder={"password"}
            autoCapitalize={'none'}
            secureTextEntry={true}
            returnKeyType={'go'}
            enablesReturnKeyAutomatically={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableHighlight onPress={handleModalLoginButtonPress} style={{...cardStyle, ...pinkCardStyle}} underlayColor={darkCoral} >
          <Text style={lightTextStyle}>Let's go!</Text>
        </TouchableHighlight>

      </View>
    </Modal>
  )
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


export default SignInForm;
