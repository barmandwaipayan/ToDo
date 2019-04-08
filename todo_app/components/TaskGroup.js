import React, { Component } from 'react'
import { Text, View, CheckBox, StyleSheet} from 'react-native';
import TodoItem from "./TodoItem"
import TaskGroupTitle from "./TaskGroupTitle"

export default class TaskGroup extends Component {
    constructor(prop){
        super(prop);
        state = {
            title: "task group 1",
            taskLists: [
                {
                    activity: "rest",
                    from: "11:11",
                    to: "12:00",
                },
                {
                    activity: "rest1",
                    from: "1:11",
                    to: "2:00",
                },
                {
                    activity: "rest2",
                    from: "1:44",
                    to: "3:30",
                },
            ],
        }
    }
    
    render() {
        return (
            <View>
                <Text>{this.state.title}</Text>
                {/* <TaskGroupTitle header={this.state.title}/> */}
            </View>
        )
    }
}
