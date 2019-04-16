import { ADD_GROUP, ADD_TASK, COMPLETE } from '../actions/types';
import uuidv4 from 'uuid'

const initialState = {
    addTaskModalVisible: false,
    addTaskGroupModalVisible: false,
    selectedGroup: null,
    taskGroups: []
};

const groupReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_GROUP: {
        var tempState = state;
        tempState.taskGroups.push({
            title: action.payload,
            id: uuidv4(),
            taskList: []
        }
        )
    }
    case ADD_TASK: {
        var tempState = state;
        for(var i=0; i < tempState.taskGroups.length; i++) {
            if(tempState.taskGroups[i].id == action.payload.id) {
                tempState.taskGroups[i].taskList.push({
                    activity: action.payload.activity,
                    from: action.payload.from,
                    to: action.payload.to,
                    description: action.payload.description,
                    completed: action.payload.completed,
                    id: uuidv4(),
                });
                break;
            }
        }
        return(tempState)
    }
    case COMPLETE: {
        var tempState = state;
        var i, j;
        for(i = 0; i < tempState.taskGroups.length; i++) {
            for(j = 0; j < tempState.taskGroups[i].taskList.length; j++){
                if(tempState.taskGroups[i].taskList[j].id === action.payload){
                  tempState.taskGroups[i].taskList[j].completed = !tempState.taskGroups[i].taskList[j].completed;
                  return(tempState)
                }
            }
        }
        return(tempState)
    }

    default:
      return state;
  }
}

export default groupReducer;