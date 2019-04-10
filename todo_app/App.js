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
import AnalogClock from "./components/AnalogClock";

export default class App extends Component {
  render() {
    return (
        <View style={styles.app} >
          <View style ={{flex: 2}}></View>
          <View style={[styles.container, {flex: 5} ]}>
            <AnalogClock
              minuteHandLength={100}
            />
          </View>
          <View style={[styles.container, {flex: 7} ]}>
            <TaskGroupList />
          </View>
        </View  >
    );
  }
}

styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(237,241,244)",
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})