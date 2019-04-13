import React, { Component } from 'react'
import { Alert,Text, View, CheckBox, StyleSheet, Dimensions} from 'react-native';
import Scroll from './HorizontalScroll';
import HeaderGroup from "./HeaderGroup"
import uuidv4 from 'uuid'
import AddTaskModal from "./AddTaskModal"
import AddTaskGroupModal from "./AddTaskGroupModal"

export default class TaskGroupList extends Component {
    constructor(props){
        super(props);

        t1 = new Date()
        t1.setHours(6)
        t1.setMinutes(55)

        t2 = new Date()
        t2.setHours(8)
        t2.setMinutes(45)

        t3 = new Date()
        t3.setHours(10)
        t3.setMinutes(35)

        t4 = new Date()
        t4.setHours(14)
        t4.setMinutes(23)

        t5 = new Date()
        t5.setHours(16)
        t5.setMinutes(55)

        this.state = {
            addTaskModalVisible: false,
            addTaskGroupModalVisible: false,
            selectedGroup: null,
            taskGroups: [
                {
                    title: "task group 1",
                    id: uuidv4(),
                    taskList: [
                        {
                            activity: "rest",
                            from: t1,
                            to: t1,
                            completed: false,
                            id: uuidv4(),
                        },
                        {
                            activity: "rest1",
                            from: t1,
                            to: t2,
                            completed: true,
                            id: uuidv4(),
                        },
                        {
                            activity: "resdwsdt2",
                            from: t3,
                            to: t4,
                            completed: false,
                            id: uuidv4(),
                        }
                    ]
                },
            ],
            
        },
        this.toggleStatus = this.toggleStatus.bind(this);
        this.helpIdGenerator = this.helpIdGenerator.bind(this);
        this.addTask = this.addTask.bind(this);
        this.addTaskGroup = this.addTaskGroup.bind(this);
        this.toggleModalVisibility = this.toggleModalVisibility.bind(this);
    }

    toggleModalVisibility = (visible) => {   
        this.setState({
            addTaskModalVisible: visible,
        })
    }

    toggleGroupModalVisibility = (visible) => {   
        this.setState({
            addTaskGroupModalVisible: visible,
        })
    }

    toggleStatus = (id) => {
        this.setState({
            taskGroups: this.state.taskGroups.map( data => {
                data.taskList.map( task => {
                    if(task.id == id) {
                        task.completed = !task.completed;
                    }
                    return(task)
                })
                return(data);
            })
        })
    }

    addTask = (id, activity, from, to, description, completed) => {
        var taskGroupsTemp = [...this.state.taskGroups]
        for(var i=0; i < taskGroupsTemp.length; i++) {
            if(taskGroupsTemp[i].id == id) {
                taskGroupsTemp[i].taskList.push({
                        activity,
                        from,
                        to,
                        description,
                        completed,
                        id: uuidv4(),
                });
                break;
            }
        }
        this.setState({
            taskGroups: taskGroupsTemp,
        })
        
    }

    addTaskGroup = (title) => {
        var taskGroupsTemp = [...this.state.taskGroups]
        taskGroupsTemp.push({
            title: title,
            id: uuidv4(),
            taskList: []
        }
        )
        this.setState({
            taskGroups: taskGroupsTemp,
        })
    }

    helpIdGenerator = () => {
        const uuidv4 = require('uuid/v4')
        return uuidv4
    }

    setSelectedGroup = (id) => {
        this.setState({
            selectedGroup: id,
        })
    }

    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <View style={styles.taskHorizontalScroll}>
                <AddTaskModal
                    visible={this.state.addTaskModalVisible}
                    toggleModalVisibility={this.toggleModalVisibility}
                    addTask={this.addTask}
                    selectedGroup={this.state.selectedGroup}
                />
                <AddTaskGroupModal
                    visible={this.state.addTaskGroupModalVisible}
                    toggleGroupModalVisibility={this.toggleGroupModalVisibility}
                    addTaskGroup={this.addTaskGroup}
                />
                <View style={{flex: 1, width: width, paddingHorizontal: 30 }}>
                    <HeaderGroup style={styles.headerTaskGroup} 
                    addTaskGroup={this.addTaskGroup}
                    />
                </View>
                <View style={{flex: 9}}>
                    <Scroll taskGroups = {this.state.taskGroups}
                    toggleStatus={this.toggleStatus}
                    style={styles.scroll}
                    toggleModalVisibility={this.toggleModalVisibility}
                    setSelectedGroup={this.setSelectedGroup}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    taskHorizontalScroll: {
        flex: 1,
        // alignContent: "flex-start",
        // justifyContent: "flex-start",
    },
    headerTaskGroup: {
    },
    scroll: {
    },
})