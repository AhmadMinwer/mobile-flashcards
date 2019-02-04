import React from 'react';
import { TouchableOpacity, KeyboardAvoidingView, StyleSheet, Text, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { black, white } from '../utils/colors'
import { addDeck } from '../action';
import { submitDeck, generateUID } from '../utils/api'


class AddDeck extends React.Component {
  state = {
    deckName: ''
  }

  textChange = (Text) => {
    this.setState(() => {
      return { deckName: Text };
    })
  }
  handleSubmit = () => {
    const deck={
      id: generateUID(),
      name: this.state.deckName,
      cards: []
    }
    this.props.dispatch(addDeck(deck))
    submitDeck(deck)

    this.setState(() => {
      return { deckName: '' };
    })
    this.props.navigation.navigate('Home')
  }
  render() {


    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.mainText}>What is the title of your new deck?</Text>
        <TextInput style={styles.textInputStyle} onChangeText={this.textChange} value={this.state.deckName} />
        <TouchableOpacity style={styles.submitBtn} onPress={this.handleSubmit} disabled={this.state.deckName === '' ? true : false} >
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
    justifyContent: 'center'
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
    marginTop: 10,
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
});


function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(
  mapStateToProps,
)(AddDeck)