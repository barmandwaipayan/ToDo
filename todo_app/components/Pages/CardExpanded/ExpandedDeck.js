import React, { Component } from 'react'
import { View } from "react-native"
import VerticalScroll from '../../ExpandedDeck/VerticalScroll';
import { connect } from "react-redux"
import uuidv4 from "uuid"
import { bindActionCreators } from 'redux';
import { addTask as addTaskStore } from "../../../actions/addTask"
import { addGroup as addTaskGroupStore } from "../../../actions/addTaskGroup"
import { complete } from "../../../actions/complete"
import { taskModal } from "../../../actions/taskModal"
import { groupModal } from "../../../actions/groupModal"
import { BackHandler } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

class ExpandedDeck extends Component {
    static navigationOptions = ({navigation}) => {
        return{
            headerLeft:(<View style={{marginHorizontal: 10,}}><AntIcon.Button name="left" backgroundColor="transparent" 
            underlayColor="rgba(50, 50, 50, 0.1)"
            color="rgb(45, 154, 241)" onPress={()=>{navigation.goBack(null)}}/></View>)
            }
        }
    constructor(props){
        super(props);
        this.state = this.props.global
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }
    
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
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

    setSelectedGroup = (id) => {
        this.setState({
            selectedGroup: id,
        })
    }

  render() {
    console.log(this.props.navigation.state.params.touchedIndex) 
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
            index={this.props.navigation.state.params.touchedIndex}
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addTaskStore,
      addTaskGroupStore,
      complete,
      taskModal,
      groupModal,
    }, dispatch)
  );
export default connect(mapStateToProps, mapDispatchToProps)(ExpandedDeck);
