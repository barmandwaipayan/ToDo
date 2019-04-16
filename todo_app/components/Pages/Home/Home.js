import React, { Component } from 'react'
import {StyleSheet, View} from 'react-native';
import TaskGroupList from '../../HomeTaskCards/TaskGroupList';
import PropTypes from 'prop-types';
import uuidv4 from "uuid"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { addTask as addTaskStore } from "../../../actions/addTask"
import { addGroup as addTaskGroupStore } from "../../../actions/addTaskGroup"
import { complete } from "../../../actions/complete"
import { taskModal } from "../../../actions/taskModal"
import { groupModal } from "../../../actions/groupModal"

class Home extends Component {
  constructor(props){
    super(props);
    this.state = this.props.global
    this.toggleStatus = this.toggleStatus.bind(this);
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
    this.props.complete(id)
}

addTask = (id, activity, from, to, description, completed) => {
    var taskGroupsTemp = [...this.state.taskGroups]
    for(var i=0; i < taskGroupsTemp.length; i++) {
        if(taskGroupsTemp[i].id == id) {
            var tempObj = {
              activity,
              from,
              to,
              description,
              completed,
              id: uuidv4(),
            } 
            taskGroupsTemp[i].taskList.push(tempObj);
            this.props.addTaskStore(tempObj.activity, tempObj.from, tempObj.to, tempObj.description, tempObj.completed, tempObj.id);
            break;
        }
    }
    this.setState({
        taskGroups: taskGroupsTemp,
    })
    this.props.taskModal(false);
}

addTaskGroup = (title) => {
    var taskGroupsTemp = [...this.state.taskGroups]

    var tempObj = {
      title: title,
      id: uuidv4(),
      taskList: []
    }
    taskGroupsTemp.push(tempObj)

    this.props.addTaskGroupStore(tempObj)

    this.setState({
        taskGroups: taskGroupsTemp,
    })

    this.props.groupModal(false);
}

setSelectedGroup = (id) => {
    this.setState({
        selectedGroup: id,
    })
}
    render() {
      // console.log(this.props.addTaskStore)
      return (
        <View style={{flex: 1,}}>
          <View style={styles.app} >
            <View style ={{flex: 1}}></View>
            {/* <View style={[styles.container, {flex: 5} ]}>
            </View> */}
            <View style={{flex: 5,}}>
            </View>
            <View style={[styles.container, {flex: 7} ]}>
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
  
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addTaskStore,
    addTaskGroupStore,
    complete,
    taskModal,
    groupModal,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Home);