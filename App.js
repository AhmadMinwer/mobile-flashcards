import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import middleware from './middleware';
import reducer from './reducer'
import AddDeck from './components/AddDeck'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import DeckList from './components/DeckList'
import { black } from './utils/colors'
// import Ionicons from '@expo/vector-icons';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Constants } from 'expo'
import { getDeks } from './utils/api'

function MyStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const FTabs = createBottomTabNavigator(
  {
    Home: {
      screen: DeckList,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <FontAwesome name='home' size={30} color={tintColor} />
      }
    },
    Add: {
      screen: AddDeck,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
      }
    }
  }, {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: black,
      style: {
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3'
      },
    }
  }
);

const Tabs = createAppContainer(FTabs);

const Stack = createAppContainer(createStackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null,
    }

  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      title: 'Add Deck',
    }

  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      title: 'Deck name',
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz',
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add card',
    }
  }
}))

const store = createStore(reducer, middleware);
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MyStatusBar backgroundColor={black} barStyle='light-content' />
          <Stack />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
