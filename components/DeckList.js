import React from 'react'
import { FlatList, View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'
import { white, black, gray } from '../utils/colors'

class DeckList extends React.Component {
    state = {
        data: [{
            key: 1,
            DeckName: 'first Deck',
            CardsNumber: '20'
        },
        {
            key: 2,
            DeckName: 'second Deck',
            CardsNumber: '12'
        }, {
            key: 3,
            DeckName: 'first Deck',
            CardsNumber: '20'
        },
        {
            key: 4,
            DeckName: 'second Deck',
            CardsNumber: '12'
        }, {
            key: 5,
            DeckName: 'first Deck',
            CardsNumber: '20'
        },
        {
            key: 6,
            DeckName: 'second Deck',
            CardsNumber: '12'
        }, {
            key: 7,
            DeckName: 'first Deck',
            CardsNumber: '20'
        },
        {
            key: 8,
            DeckName: 'second Deck',
            CardsNumber: '12'
        }]
    }


    
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    
                    style={styles.listStyle}
                    keyExtractor={(item) => item.key.toString()}
                    data={this.state.data}
                    renderItem={({ item }) => {
                        return (
                            (<TouchableOpacity
                             style={styles.item}
                             onPress={() => this.props.navigation.navigate(
                                'Deck',
                                { DeckName:item.DeckName }
                              )}>
                                <Text style={styles.mainText} >{item.DeckName}</Text>
                                <Text style={styles.subText}>{item.CardsNumber}</Text>
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
        justifyContent:'center',
        alignItems:'stretch',
    },
    listStyle:{
        flex:1,
        backgroundColor:white,
        width:width,
    },
    mainText:{
        marginTop:40,
        marginLeft: 30,
        marginRight: 30,
        color: black,
        fontSize: 50,
        textAlign: 'center',
    },
    subText:{
        marginLeft: 50,
        marginRight: 50,
        marginBottom:40,
        color: gray,
        fontSize: 30,
        textAlign: 'center',
    },
    item:{
        borderWidth: 0.2,
        borderColor: gray,
    }
})
export default DeckList