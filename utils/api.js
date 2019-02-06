
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'
export const FLASHCARDS_STORAGE_KEY = 'UdacityFlashcards:decks'
export const NOTIFICATION_KEY = 'UdacityFlashcards:notifications'

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



export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification () {
  return {
    title: 'do your today quiz!',
    body: "👋 don't forget to do your quiz for today!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

export function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync()

              let tomorrow = new Date()
              tomorrow.setDate(tomorrow.getDate() + 1)
              tomorrow.setHours(20)
              tomorrow.setMinutes(0)

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              )

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
      }
    })
}