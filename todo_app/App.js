/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TaskGroupList from './components/TaskGroupList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.app} >
        <TaskGroupList />
      </View>
    );
  }
}

styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(237,241,244)",
  }
})