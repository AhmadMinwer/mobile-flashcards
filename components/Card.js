import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { black, white } from '../utils/colors'
import TextButton from './TextButton';

class Question extends React.Component {
    state={
        showAnswer:false,
    }
    toggleShowAnswer = ()=>{
        this.setState((state) => {
            return {
                showAnswer: !state.showAnswer
            }
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText} > Question Body goes here!</Text>
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
      justifyContent:'center'
    },
    mainText: {
      marginLeft: 30,
      marginRight: 30,
      color: black,
      fontSize: 30,
      textAlign: 'center',
    },
    textButton:{
      padding: 10,
      fontSize:20,
      fontWeight:'bold'
    }
})

export default Question