import GROUP_MODAL from "../actions/groupModal"

const initialState = {
    addTaskModalVisible: false,
    addTaskGroupModalVisible: false,
    selectedGroup: null,
    taskGroups: []
};

const groupModalReducer = (state = initialState, action) => {
    switch(action.type) {
      case GROUP_MODAL: {
          var tempState = state;
          tempState.addTaskGroupModalVisible = action.payload
          return tempState
      }
      default: return state;
    }
}

export default groupModalReducer;