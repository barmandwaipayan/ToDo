/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { View } from "react-native";
import uuidv4 from 'uuid'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./components/Pages/Home/Home";
import VerticalScroll from "./components/ExpandedDeck/VerticalScroll";

class App extends React.Component {
  constructor(props){
    super(props);
    t1 = new Date()
    this.state = {
        addTaskModalVisible: false,
        addTaskGroupModalVisible: false,
        selectedGroup: null,
        taskGroups: [
        {
            title: "G1",
            taskList: [
                {
                    activity: "Wakeup khdfigh dskfhgosh dosfihgoi ishrgoi",
                    from: t1,
                    to: t1,
                    completed: true,
                    description: "gfgsdgfi sgdiufg kjdhsgiu fsfsdgfddfgdbfg",
                    id: uuidv4(), 
                },
                {
                    activity: "test2",
                    from: t1,
                    to: t1,
                    completed: false,
                    description: "gfgsdgfisgdiufgkjdhsgiufsg",
                    id: uuidv4(), 
                }
            ],
            id: uuidv4(),
        },
        {
            title: "G1",
            taskList: [
                {
                    activity: "test1",
                    from: t1,
                    to: t1,
                    completed: true,
                    description: "gagdfs gfgsdf gsdgfisgd iufgkjdh sgiufsg",
                    id: uuidv4(), 
                },
                {
                    activity: "test2",
                    from: t1,
                    to: t1,
                    completed: false,
                    description: "dsaflkds djshfkj, kdjshfih,fhsdakfh fasdfadsdsf fgagdfs gfgsdf gsdgfisgd iufgkjdh sgiufsg",
                    id: uuidv4(), 
                }
            ],
            id: uuidv4(),
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
    var t1 = new Date();
    return (
      <View style={{ flex: 1,}}>
        {/* <TodoItemExp activity="test" from={t1} to={t1} completed={false}/> */}
        <VerticalScroll 
            addTaskModalVisible={this.state.addTaskModalVisible}
            taskGroups={this.state.taskGroups}
            addTask={this.addTask}
            toggleStatus={this.toggleStatus}
            toggleModalVisibility={this.toggleModalVisibility}
            setSelectedGroup={this.setSelectedGroup}
            selectedGroup={this.state.selectedGroup}
        />
        {/* <Home
          getSelectedState={this.getSelectedState}
          setSelectedGroup={this.setSelectedGroup}
          helpIdGenerator={this.helpIdGenerator}
          addTaskGroup={this.addTaskGroup}
          addTask={this.addTask}
          toggleStatus={this.toggleStatus}
          toggleGroupModalVisibility={this.toggleGroupModalVisibility}
          toggleModalVisibility={this.toggleModalVisibility}
          addTaskGroupModalVisible={this.state.addTaskGroupModalVisible}
          addTaskModalVisible={this.state.addTaskModalVisible}
          taskGroups={this.state.taskGroups}
          selectedGroup={this.state.selectedGroup}
        /> */}
      </View>
    );
  }
}

const RootStack = createStackNavigator(
    {
      Home: Home,
      expanded: VerticalScroll,
    },
    {
      initialRouteName: 'Home',
    }
  );