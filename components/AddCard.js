import React from 'react'
import { Text, TouchableOpacity, KeyboardAvoidingView, TextInput, StyleSheet, Dimensions } from 'react-native'
import { black, white } from '../utils/colors'


class AddCard extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <TextInput placeholder='Question' style={styles.textInputStyle} />
                <TextInput placeholder='Answer' style={styles.textInputStyle} />
                <TouchableOpacity style={styles.submitBtn} >
                    <Text style={styles.submitBtnText}> Submit</Text>
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
        justifyContent:'center',
        marginLeft: 30,
        marginRight: 30,
      },
      submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
      },
})


export default AddCard
