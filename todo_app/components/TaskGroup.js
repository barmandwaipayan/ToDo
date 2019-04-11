import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, CheckBox, StyleSheet, ScrollView} from 'react-native';
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
                    <View style={{flex:3,}}>
                        <TaskGroupTitle header={this.props.taskGroup.title} />
                    </View>
                    <View style={{flex:1,}}>
                        <AddTask addTask={this.props.addTask} id={this.props.id} />
                    </View>
                </View>
                <View style={{flex:6,}}>
                    <TouchableWithoutFeedback>
                        <ScrollView bounces={true}
                            indicatorStyle={"white"}
                            bouncesZoom = {true}
                        >
                            {rows}
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    taskGroup: {
        margin: "auto",
    },
    headRow: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    }
})

TaskGroup.propTypes = {
    addTask: PropTypes.func,
    taskGroup: PropTypes.object,
    toggleStatus: PropTypes.func,
  };