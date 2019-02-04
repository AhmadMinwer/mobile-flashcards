
import { AsyncStorage } from 'react-native'
const CALENDAR_STORAGE_KEY = 'UdacityFlashcards:Decks'

export function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function submitDeck( deck ) {
  return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
    [deck.id]: deck
  }))
}

export function removeDeck(key) {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
    })
}

export function getDeks(){
  let data
  AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
  .then((results) => {
     data = JSON.parse(results)
  })
  return data
}