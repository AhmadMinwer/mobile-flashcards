import { RECEIVE_DECKS, ADD_CARD, ADD_DECK, DELETE_DECK } from '../action'

export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.deck.id]: action.deck,
            }
        case ADD_CARD:
        return {
            ...state,
            [action.card.deckId]:{
                ...state[action.card.deckId],
                cards: state[action.card.deckId].cards.concat([action.card])
            }
        }
        case DELETE_DECK:
            return Object.values(state)
            .filter((item) => item.id != action.id)
            .reduce((obj, item) => {
                obj[item.id] = item
                return obj
              }, {})
        default:
            return state
    }

}