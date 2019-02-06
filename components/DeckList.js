import React from 'react'
import { FlatList, View, Text, StyleSheet, Dimensions, TouchableOpacity, AsyncStorage } from 'react-native'
import { connect } from 'react-redux';
import { white, black, gray } from '../utils/colors'
import { receiveDecks } from '../action'
import { FLASHCARDS_STORAGE_KEY, setLocalNotification,clearLocalNotification } from '../utils/api'

class DeckList extends React.Component {
    componentDidMount() {
        setLocalNotification()
        AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
            .then((data) => {
                const decks = JSON.parse((data))
                this.props.dispatch(receiveDecks(decks))
            })
    }

    render() {

        if (this.props.decks && Object.keys(this.props.decks).length <= 0) {
            return (
                <View style={styles.container}>
                    <Text style={styles.emptyDecksText}> There is no decks yet!</Text>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.listStyle}
                    keyExtractor={(item) => item.id.toString()}
                    data={Object.values(this.props.decks)}
                    renderItem={({ item }) => {
                        return (
                            (<TouchableOpacity
                                style={styles.item}
                                onPress={() => this.props.navigation.navigate(
                                    'Deck',
                                    {
                                        deckId: item.id,
                                    }
                                )}>
                                <Text style={styles.mainText} >{item.name}</Text>
                                <Text style={styles.subText}>{item.cards.length}</Text>
                            </TouchableOpacity>)
                        )
                    }}
                />
            </View>
        )
    }
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listStyle: {
        flex: 1,
        backgroundColor: white,
        width: width,
    },
    mainText: {
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30,
        color: black,
        fontSize: 50,
        textAlign: 'center',
    },
    subText: {
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 40,
        color: gray,
        fontSize: 30,
        textAlign: 'center',
    },
    item: {
        borderTopWidth: 0.2,
        borderBottomWidth: 0.2,
        borderColor: gray,
    },
    emptyDecksText: {
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30,
        color: black,
        fontSize: 25,
        textAlign: 'center',
    }
})

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(
    mapStateToProps,
)(DeckList)