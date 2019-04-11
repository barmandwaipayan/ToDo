import React, { Component } from 'react'
import { Alert,Text, View, CheckBox, StyleSheet, Dimensions} from 'react-native';
import Scroll from './HorizontalScroll';
import HeaderGroup from "./HeaderGroup"
import uuidv4 from 'uuid'

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
                // {
                //     title: "task group 2",
                //     taskList: [
                //         {
                //             activity: "fest",
                //             from: "11:11",
                //             to: "12:00",
                //             completed: false,
                //         },
                //         {
                //             activity: "fest1",
                //             from: "1:11",
                //             to: "2:00",
                //             completed: false,
                //         },
                //         {
                //             activity: "fest2",
                //             from: "1:44",
                //             to: "3:30",
                //             completed: true,
                //         }
                //     ]
                // },
                // {
                //     title: "task group 3",
                //     taskList: [
                //         {
                //             activity: "test",
                //             from: "11:11",
                //             to: "12:00",
                //             completed: true,
                //         },
                //         {
                //             activity: "test1",
                //             from: "1:11",
                //             to: "2:00",
                //             completed: false,
                //         },
                //         {
                //             activity: "test2",
                //             from: "1:44",
                //             to: "3:30",
                //             completed: false,
                //         }
                //     ]
                // }
            ],
            
        },
        this.toggleStatus = this.toggleStatus.bind(this);
        this.helpIdGenerator = this.helpIdGenerator.bind(this);
        this.addTask = this.addTask.bind(this);
        this.addTaskGroup = this.addTaskGroup.bind(this);
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

    addTask = (id, activity, from, to, completed) => {
        var taskGroupsTemp = [...this.state.taskGroups]
        for(var i=0; i < taskGroupsTemp.length; i++) {
            if(taskGroupsTemp[i].id == id) {
                taskGroupsTemp[i].taskList.push({
                        activity,
                        from,
                        to,
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
            title,
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

    render() {
        // alert(styles.taskHorizontalScroll.flex)
        var {height, width} = Dimensions.get('window');
        return (
            <View style={styles.taskHorizontalScroll}>
                <View style={{flex: 1, width: width, paddingHorizontal: 30 }}>
                    <HeaderGroup style={styles.headerTaskGroup} addTaskGroup={this.addTaskGroup} />
                </View>
                <View style={{flex: 9}}>
                    <Scroll taskGroups = {this.state.taskGroups}
                    toggleStatus={this.toggleStatus}
                    addTask={this.addTask}
                    style={styles.scroll}
                    />
                </View>
                {/* <Text style={styles.scroll}>test</Text> */}
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