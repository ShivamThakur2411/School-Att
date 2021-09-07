import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AppHeader from './components/AppHeader';
import SummaryScreen from './SummaryScreen';
import HomeScreen from './HomeScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View> 
        <AppContainer />
      </View>
    );
  }
}
var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  SummaryScreen: SummaryScreen,
});

const AppContainer = createAppContainer(AppNavigator);
