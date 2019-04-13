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
import AddTaskGroupModal from "./components/AddTaskGroupModal"

export default class App extends Component {
  render() {
    return (
      // <AddTaskGroupModal visible={false}/>
        <View style={styles.app} >
          <View style ={{flex: 1}}></View>
          {/* <View style={[styles.container, {flex: 5} ]}>
          </View> */}
          <View style={{flex: 5,}}>
          </View>
          <View style={[styles.container, {flex: 7} ]}>
            <TaskGroupList />
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(237,241,244)",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})