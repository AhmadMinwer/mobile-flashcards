import React from 'react';
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, TextInput } from 'react-native';
import { black, white } from '../utils/colors'


class AddDeck extends React.Component {
  render() {

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
       <Text style={styles.mainText}>What is the title of your new deck?</Text>
        <TextInput style={styles.textInputStyle} />
        <TouchableOpacity style={styles.submitBtn} >
          <Text style={styles.submitBtnText}> Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    justifyContent:'center'
  },
  mainText: {
    marginLeft: 30,
    marginRight: 30,
    color: black,
    fontSize: 30,
    textAlign: 'center',
  },
  textInputStyle: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginLeft: 30,
    marginRight: 30,
    color: black,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 20,

  },
  submitBtn: {
    backgroundColor: black,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    marginTop:10,
    justifyContent:'center',
    marginLeft: 30,
    marginRight: 30,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
});

export default AddDeck