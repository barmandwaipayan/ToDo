import TASK_MODAL from "../actions/setSelected"

const initialState = {
    addTaskModalVisible: false,
    addTaskGroupModalVisible: false,
    selectedGroup: null,
    taskGroups: []
};

const taskModalReducer = (state = initialState, action) => {
    switch(action.type) {
      case TASK_MODAL: {
          var tempState = state;
          tempState.addTaskGroupModalVisible = action.payload
          return tempState
      }
      default: return state;
    }
}

export default taskModalReducer;