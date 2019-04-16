/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./components/Pages/Home/Home";
import ExpandedDeck from "./components/ExpandedDeck/ExpandedDeck";

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const RootStack = createStackNavigator(
    {
      Home: Home,
      Expanded: ExpandedDeck,
    },
    {
      initialRouteName: 'Home',
    }
  );

const AppContainer = createAppContainer(RootStack);



