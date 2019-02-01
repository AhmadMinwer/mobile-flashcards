import React from 'react'
import { View, StyleSheet, Text ,TouchableOpacity } from 'react-native'
import { black, gray, white } from '../utils/colors'
import TextButton from './TextButton'


class Deck extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.mainText}>{this.props.navigation.state.params.DeckName}</Text>
                <Text style={[styles.subText, {marginBottom:70}]}> cards number</Text>

                <TouchableOpacity 
                            style={styles.submitBtnInverted} 
                            onPress={() => this.props.navigation.navigate(
                                'AddCard',
                              )}>
                    <Text style={styles.submitBtnTextInverted}> Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                            style={styles.submitBtn} 
                            onPress={() => this.props.navigation.navigate(
                                'Quiz',
                              )}>
                    <Text style={styles.submitBtnText}> Start Quiz</Text>
                </TouchableOpacity>
                <TextButton style={styles.textButton} onPress={this.toggleShowAnswer}>
                            delete deck
                </TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    mainText:{
        marginLeft: 30,
        marginRight: 30,
        color: black,
        fontSize: 30,
        textAlign: 'center',
    },
    subText:{
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
      submitBtnInverted: {
        backgroundColor: white,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        marginTop:10,
        justifyContent:'center',
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
      textButton:{
        padding: 10,
        fontSize:20,
        fontWeight:'bold'
      }
})


export default Deck