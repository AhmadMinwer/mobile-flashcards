import React from 'react'
import { View, StyleSheet, Text, } from 'react-native'
import { connect } from 'react-redux'
import { black, white } from '../utils/colors'
import TextButton from './TextButton';

class Question extends React.Component {
    state = {
        showAnswer: false,
    }
    componentWillReceiveProps() {
          this.setState({ showAnswer: false});
    }
    
    toggleShowAnswer = () => {
        this.setState((state) => {
            return {
                showAnswer: !state.showAnswer
            }
        })
    }

    render() {
        const {cardToShow } = this.props
        return (
            <View style={styles.container}>
                {this.state.showAnswer ?
                    <Text style={styles.mainText} >{cardToShow.answer}</Text>
                    : <Text style={styles.mainText} >{cardToShow.question}</Text>
                }
                <TextButton style={styles.textButton} onPress={this.toggleShowAnswer}>
                    {this.state.showAnswer ? 'Question' : 'Answer'}
                </TextButton>
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
    mainText: {
        marginLeft: 30,
        marginRight: 30,
        color: black,
        fontSize: 30,
        textAlign: 'center',
    },
    textButton: {
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})


function mapStateToProps({  }, props) {
    return {
        cardToShow:props.cardToShow,
    }
}

export default connect(
    mapStateToProps,
)(Question)