import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { black, red, green, yellow, white } from '../utils/colors'
import Card from './Card'

class Quiz extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[{paddingTop:20}, {paddingLeft:10}]}>card number/total</Text>
                <Card />
                <View style={styles.container}>
                    <TouchableOpacity style={styles.submitBtnInverted} onPress={this.doMe}>
                        <Text style={styles.submitBtnTextInverted}>Correct</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.submitBtn} onPress={this.doMe}>
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
export default Quiz