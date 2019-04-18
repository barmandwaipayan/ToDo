import React, { Component } from 'react'
import { TouchableWithoutFeedback, View, StyleSheet, ScrollView} from 'react-native';
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
                index={this.props.index}
                />);
        }
        return (
            <View style={ (this.props.index % 2 === 0 )? styles.taskGroup1 : styles.taskGroup2 }>
                <View style={styles.headRow}>
                    <View style={{flex:3,}}>
                        <TaskGroupTitle header={this.props.taskGroup.title} 
                            index={this.props.index} />
                    </View>
                    <View style={{flex:1,}}>
                        <AddTask
                        addTask={this.props.addTask}
                        id={this.props.id} 
                        toggleModalVisibility={this.props.toggleModalVisibility}
                        setSelectedGroup={this.props.setSelectedGroup}
                        index={this.props.index}
                        />
                    </View>
                </View>
                <View style={{flex:6,}}>
                    <TouchableWithoutFeedback>
                        <ScrollView>
                            {rows}
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    taskGroup1: {
        flex: 1,
        width: 220,
        backgroundColor: "#fff",
        borderRadius: 30,
        margin: 20,
        marginBottom: 30,
        justifyContent: "center",
    },
    taskGroup2: {
        flex: 1,
        width: 220,
        backgroundColor: "rgb(45, 154, 241)",
        borderRadius: 30,
        margin: 20,
        marginBottom: 30,
    },
    headRow: {
        flex: 1,
        flexDirection: "row",
        alignItems: "stretch",
        padding: 30,
    },
})

TaskGroup.propTypes = {
    addTask: PropTypes.func.isRequired,
    taskGroup: PropTypes.object.isRequired,
    toggleStatus: PropTypes.func.isRequired,
    toggleModalVisibility: PropTypes.func.isRequired,
    setSelectedGroup: PropTypes.func.isRequired,
  };