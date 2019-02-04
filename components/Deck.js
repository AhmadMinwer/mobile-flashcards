import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity , Alert } from 'react-native'
import { connect } from 'react-redux'
import { black, gray, white } from '../utils/colors'
import TextButton from './TextButton'
import { deleteDeckId } from '../action';


class Deck extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.deck ? true : false 
      }

    handleGoToQuiz = () => {
        const deck = this.props.deck
        deck.cards.length <= 0 ?
            Alert.alert(
                'sorry',
                'this quiz contain no questions! do you want to add question?',
                [
                    { text: 'Cancel',  style: 'cancel' },
                    { text: 'yes', onPress: () => this.props.navigation.navigate('AddCard',{deckId:deck.id}) },
                ],
            )
            : this.props.navigation.navigate(
                'Quiz',
                {deckId:deck.id}
            )
    }

    handleDeleteDeck= ()=>{
        const deck = this.props.deck
        this.props.dispatch(deleteDeckId(deck.id))
        this.props.navigation.navigate('Home')
    }

    render() {
        const deck = this.props.deck
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>{deck.name}</Text>
                <Text style={[styles.subText, { marginBottom: 70 }]}>{deck.cards.length}</Text>

                <TouchableOpacity
                    style={styles.submitBtnInverted}
                    onPress={() => this.props.navigation.navigate(
                        'AddCard',
                        { deckId:deck.id }
                    )}>
                    <Text style={styles.submitBtnTextInverted}> Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={this.handleGoToQuiz}>
                    <Text style={styles.submitBtnText}> Start Quiz</Text>
                </TouchableOpacity>
                <TextButton style={styles.textButton} onPress={this.handleDeleteDeck}>
                    delete deck
                </TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        marginLeft: 30,
        marginRight: 30,
        color: black,
        fontSize: 30,
        textAlign: 'center',
    },
    subText: {
        marginLeft: 50,
        marginRight: 50,
        color: gray,
        fontSize: 20,
        textAlign: 'center',
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
    submitBtnInverted: {
        backgroundColor: white,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        marginTop: 10,
        justifyContent: 'center',
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 0.5,
        borderColor: black,
    },
    submitBtnTextInverted: {
        color: black,
        fontSize: 22,
        textAlign: 'center',
    },
    textButton: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
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
)(Deck)