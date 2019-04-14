import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native';
import TaskGroupList from '../../HomeTaskCards/TaskGroupList';
import PropTypes from 'prop-types';

export default class Home extends Component {
    render() {
      return (
        <View style={{flex: 1,}}>
          <View style={styles.app} >
            <View style ={{flex: 1}}></View>
            {/* <View style={[styles.container, {flex: 5} ]}>
            </View> */}
            <View style={{flex: 5,}}>
            </View>
            <View style={[styles.container, {flex: 9} ]}>
              <TaskGroupList
                setSelectedGroup={this.props.setSelectedGroup}
                helpIdGenerator={this.props.helpIdGenerator}
                addTaskGroup={this.props.addTaskGroup}
                addTask={this.props.addTask}
                toggleStatus={this.props.toggleStatus}
                toggleGroupModalVisibility={this.props.toggleGroupModalVisibility}
                toggleModalVisibility={this.props.toggleModalVisibility}
                addTaskGroupModalVisible={this.props.addTaskGroupModalVisible}
                addTaskModalVisible={this.props.addTaskModalVisible}
                taskGroups={this.props.taskGroups}
                selectedGroup={this.props.selectedGroup}
                />
            </View>
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

  Home.propTypes = {
    selectedGroup: PropTypes.string,
    setSelectedGroup: PropTypes.func,
    helpIdGenerator: PropTypes.func,
    addTaskGroup: PropTypes.func,
    addTask: PropTypes.func,
    toggleStatus: PropTypes.func,
    toggleGroupModalVisibility: PropTypes.func,
    toggleModalVisibility: PropTypes.func,
    taskGroups: PropTypes.array,
    addTaskModalVisible: PropTypes.bool,
    addTaskGroupModalVisible: PropTypes.bool,
  };
