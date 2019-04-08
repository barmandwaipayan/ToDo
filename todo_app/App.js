/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TaskGroup from "./components/TaskGroup"
import TaskGroupTitle from "./components/TaskGroupTitle"


export default class App extends Component {
  render() {
    return (
      <View>
        <TaskGroup />
      </View>
    );
  }
}
