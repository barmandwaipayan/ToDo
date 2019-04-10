import React, { Component } from 'react'
import { Text, View, CheckBox, StyleSheet} from 'react-native';
import TodoItem from "./TodoItem"
import TaskGroupTitle from "./TaskGroupTitle"
import AddTask from "./AddTask"
import PropTypes from 'prop-types';

export default class TaskGroup extends Component {
    render() {
        var rows = [];
        for(var i = 0; i < this.props.taskGroup.taskList.length; i++){
            rows.push(<TodoItem key={this.props.taskGroup.taskList[i].id}
                activity={this.props.taskGroup.taskList[i].activity}
                from={this.props.taskGroup.taskList[i].from}
                to={this.props.taskGroup.taskList[i].to}
                completed={this.props.taskGroup.taskList[i].completed} 
                id={this.props.taskGroup.taskList[i].id}
                toggleStatus={this.props.toggleStatus}
                />);
        }
        return (
            <View style={styles.taskGroup}>
                <View style={styles.headRow}>
                    <TaskGroupTitle header={this.props.taskGroup.title} />
                    <AddTask addTask={this.props.addTask} id={this.props.id} />
                </View>
                <View>
                    {rows}
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    taskGroup: {
        padding: 10,
        margin: 20,
    },
    headRow: {
        flexDirection: "row",
    }
})

TaskGroup.propTypes = {
    addTask: PropTypes.func,
    taskGroup: PropTypes.object,
    toggleStatus: PropTypes.func,
  };