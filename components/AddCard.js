import React from 'react'
import { Text, TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet, Dimensions } from 'react-native'
import { black, white } from '../utils/colors'
import { addCardAsyncStorage } from '../utils/api'
import { connect } from 'react-redux'
import { addCard } from '../action';


class AddCard extends React.Component {
    state = {
        question: '',
        answer: ''
    }

    handleChangeQuestion = (text) => {
        this.setState(() => { return { question: text } })
    }
    handleChangeAnswer = (text) => {
        this.setState(() => { return { answer: text } })
    }
    handleSubmit = () => {
        const deckId = this.props.deck.id
        const card = {
            deckId,
            question:this.state.question,
            answer: this.state.answer,
        }
        this.props.dispatch(addCard(card))
        addCardAsyncStorage({deckId,card})
        this.setState(() => {return {question:''}})
        this.setState(() => {return {answer:''}})
        this.props.navigation.goBack()
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <TextInput placeholder='Question' style={styles.textInputStyle} onChangeText={this.handleChangeQuestion} value={this.state.question}/>
                <TextInput placeholder='Answer' style={styles.textInputStyle} onChangeText={this.handleChangeAnswer} value={this.state.answer}/>
                <TouchableOpacity style={styles.submitBtn} >
                    <Text style={styles.submitBtnText} onPress={this.handleSubmit}> Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}
1



const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    textInputStyle: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        color: black,
        fontSize: 30,
        marginTop: 20,
        width: width * .9,

    },
    submitBtn: {
        backgroundColor: black,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        marginTop: 60,
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
})

function mapStateToProps(decks, props) {
    const deckId = props.navigation.state.params.deckId
    const deck = decks[deckId]
    return {
        deck,
    }
}
export default connect(
    mapStateToProps,
)(AddCard)