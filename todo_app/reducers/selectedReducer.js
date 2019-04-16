import SET_SELECTED from "../actions/setSelected"

const initialState = {
    addTaskModalVisible: false,
    addTaskGroupModalVisible: false,
    selectedGroup: null,
    taskGroups: []
};

const selectedReducer = (state = initialState, action) => {
    switch(action.type) {
      case SET_SELECTED: {
          var tempState = state;
          tempState.selectedGroup = action.payload
          return tempState
      }
      default: return state;
    }
}

export default selectedReducer;