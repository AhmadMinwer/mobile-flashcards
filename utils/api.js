
import { AsyncStorage } from 'react-native'
export const FLASHCARDS_STORAGE_KEY = 'UdacityFlashcards:Decks'

export function generateUID() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function submitDeckAsyncStorage({deck}) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [deck.id]: deck
  }))
}

export function deleteDeckAsyncStorage(key) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(data))
    })
}

// export function getDeks(){
//   let data
//   AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
//   .then((results) => {
//      data = JSON.parse(results)
//   })
//   return data
// }

export function addCardAsyncStorage({deckId,card}){
 return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then( data => {
      data = JSON.parse( data )
      const deck = data[deckId]
      deck.cards.push(card)
      submitDeckAsyncStorage({deck})
      // printAsyncStorage()
    }).done()
}

export function fetchAsyncStorage(){
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  .then(data =>{
    data = JSON.parse( data )
  }).done()
}

export function printAsyncStorage(){
  AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then( data => {
      console.log('data',JSON.parse( data ))
    }).done()
}


