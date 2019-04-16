import { createStore, combineReducers } from 'redux';
import groupReducer from "./reducers/groupReducer"
import taskModalReducer from "./reducers/taskModalReducer"
import groupModalReducer from "./reducers/groupModalReducer"
import selectedReducer from "./reducers/selectedReducer"
import uuidv4 from 'uuid'

const rootReducer = combineReducers({
    addTaskModalVisible: taskModalReducer,
    addTaskGroupModalVisible: groupModalReducer,
    selectedGroup: selectedReducer,
    taskGroups: groupReducer,
});

t1 = new Date()
state = {
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
}

const configureStore = () => {
  return createStore(rootReducer, state);
}

export default configureStore;