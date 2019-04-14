import React, { Component } from 'react'
import { Alert,Text, View, CheckBox, StyleSheet, Dimensions} from 'react-native';
import Scroll from './HorizontalScroll';
import HeaderGroup from "./HeaderGroup"
import AddTaskModal from "../Modals/AddTaskModal"
import AddTaskGroupModal from "../Modals/AddTaskGroupModal"
import PropTypes from 'prop-types';

export default class TaskGroupList extends Component {
    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <View style={styles.taskHorizontalScroll}>
                <AddTaskModal
                    visible={this.props.addTaskModalVisible}
                    toggleModalVisibility={this.props.toggleModalVisibility}
                    addTask={this.props.addTask}
                    selectedGroup={this.props.selectedGroup}
                />
                <AddTaskGroupModal
                    visible={this.props.addTaskGroupModalVisible}
                    toggleGroupModalVisibility={this.props.toggleGroupModalVisibility}
                    addTaskGroup={this.props.addTaskGroup}
                />
                <View style={{flex: 1, width: width, paddingHorizontal: 30 }}>
                    <HeaderGroup style={styles.headerTaskGroup} 
                    toggleGroupModalVisibility={this.props.toggleGroupModalVisibility}
                    />
                </View>
                <View style={{flex: 9}}>
                    <Scroll
                    taskGroups={this.props.taskGroups}
                    toggleStatus={this.props.toggleStatus}
                    style={styles.scroll}
                    toggleModalVisibility={this.props.toggleModalVisibility}
                    setSelectedGroup={this.props.setSelectedGroup}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    taskHorizontalScroll: {
        flex: 1,
    },
    headerTaskGroup: {
    },
    scroll: {
    },
})

TaskGroupList.propTypes = {
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