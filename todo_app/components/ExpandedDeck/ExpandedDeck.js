import React, { Component } from 'react'
import { View } from "react-native"
import VerticalScroll from './VerticalScroll';
import { connect } from "react-redux"

class ExpandedDeck extends Component {
    constructor(props){
        super(props);
        this.state = this.props.global
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
    return (
      <View style={{flex:1,}}>
          <VerticalScroll 
            addTaskModalVisible={this.state.addTaskModalVisible}
            taskGroups={this.state.taskGroups}
            addTask={this.addTask}
            toggleStatus={this.toggleStatus}
            toggleModalVisibility={this.toggleModalVisibility}
            setSelectedGroup={this.setSelectedGroup}
            selectedGroup={this.state.selectedGroup}
        />
        </View>
    )
  }
}

const mapStateToProps = state => {
    return {
        global: state
    };
};

export default connect(mapStateToProps)(ExpandedDeck);