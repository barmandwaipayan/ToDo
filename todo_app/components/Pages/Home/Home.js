import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native';
import TaskGroupList from '../../HomeTaskCards/TaskGroupList';
import PropTypes from 'prop-types';
import uuidv4 from "uuid"
import { connect } from "react-redux"

class Home extends Component {
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
        <View style={{flex: 1,}}>
          <View style={styles.app} >
            <View style ={{flex: 1}}></View>
            {/* <View style={[styles.container, {flex: 5} ]}>
            </View> */}
            <View style={{flex: 5,}}>
            </View>
            <View style={[styles.container, {flex: 9} ]}>
              <TaskGroupList
                navigate={this.props.navigation.navigate}
                setSelectedGroup={this.setSelectedGroup}
                addTaskGroup={this.addTaskGroup}
                addTask={this.addTask}
                toggleStatus={this.toggleStatus}
                toggleGroupModalVisibility={this.toggleGroupModalVisibility}
                toggleModalVisibility={this.toggleModalVisibility}
                addTaskGroupModalVisible={this.state.addTaskGroupModalVisible}
                addTaskModalVisible={this.state.addTaskModalVisible}
                taskGroups={this.state.taskGroups}
                selectedGroup={this.state.selectedGroup}
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

  const mapStateToProps = state => {
    return {
        global: state
    };
  };
  
  export default connect(mapStateToProps)(Home);