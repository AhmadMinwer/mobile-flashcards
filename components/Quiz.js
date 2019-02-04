import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity,Alert } from 'react-native'
import { connect } from 'react-redux'
import { black, red, green, white } from '../utils/colors'
import Card from './Card'

class Quiz extends React.Component {
    state ={
        cardToShow:1,
        correct:0,
    }

    handleCorrectAnswer = ()=>{
        this.setState((state)=>{
            return{
                correct: state.correct+1
            }
        },()=>{
            this.state.cardToShow < this.props.deck.cards.length ? this.showNextCard() : this.handleQuizFinish()
        })
    }

    handleIncorrectAnswer= ()=>{
        this.state.cardToShow < this.props.deck.cards.length ? this.showNextCard() : this.handleQuizFinish()
    }

    showNextCard = ()=>{
        this.setState((state)=>{
            return{
                cardToShow: state.cardToShow+1,
            }
        })
    }

    handleQuizFinish =()=>{
        Alert.alert(
            'You finshid your quiz!',
            'your score is '+this.state.correct+'/'+this.props.deck.cards.length,
            [
                { text: 'okay', onPress: () => this.props.navigation.goBack(),  style: 'cancel' },
            ],
        )
    }
    render() {
        const deck = this.props.deck
        return (
            <View style={styles.container}>
                <Text style={[{paddingTop:20}, {paddingLeft:10}]}>{this.state.cardToShow}/{deck.cards.length}</Text>
                <Card deck={deck} cardToShow={deck.cards[this.state.cardToShow-1]}/>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.submitBtnInverted} onPress={this.handleCorrectAnswer}>
                        <Text style={styles.submitBtnTextInverted}>Correct</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.submitBtn} onPress={this.handleIncorrectAnswer}>
                        <Text style={styles.submitBtnText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white,
        justifyContent: 'center'
    },
    submitBtn: {
        backgroundColor: red,
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
        backgroundColor: green,
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
)(Quiz)