import React, { Component } from 'react'
import { Dimensions, ScrollView, TouchableWithoutFeedback, View, CheckBox, StyleSheet} from 'react-native';
import TodoItemExp from './TodoItemExp';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import AddTaskToCard from './AddTaskToCard';

// const {height, width} = Dimensions.get("window")

export default class Card extends Component {

  render() {
    var rows = [];

    for(var i = 0; i < this.props.taskGroup.taskList.length; i++){
        rows.push(<TodoItemExp key={this.props.taskGroup.taskList[i].id}
            activity={this.props.taskGroup.taskList[i].activity}
            from={this.props.taskGroup.taskList[i].from}
            to={this.props.taskGroup.taskList[i].to}
            completed={this.props.taskGroup.taskList[i].completed} 
            id={this.props.taskGroup.taskList[i].id}
            toggleStatus={this.props.toggleStatus}
            index={this.props.index}
            />);
        }
    console.log(this.props.height, this.props.width)
    return (
        // <View onLayout={(event) => { 
        //     console.warn(event.nativeEvent.layout)
        // }}
        <View style={{flex:1,}}>
            <View style={ [(this.props.index % 2 === 0 )? styles.taskGroup1 : styles.taskGroup2, (this.props.height )? {borderTopRightRadius: this.props.width * 0.15, height: this.props.height} : {borderTopRightRadius: 70, height: 400} ] }>
                <View style={styles.headRow}>
                    <View style={{flex:3,}}>
                        <CardHeader header={this.props.taskGroup.title} 
                            index={this.props.index} />
                    </View>
                    <View style={{flex:1,}}>
                        <AddTaskToCard
                        addTask={this.props.addTask}
                        id={this.props.id} 
                        toggleModalVisibility={this.props.toggleModalVisibility}
                        setSelectedGroup={this.props.setSelectedGroup}
                        index={this.props.index}
                        />
                    </View>
                </View>
                <View style={{flex:6,}}>
                    <TouchableWithoutFeedback>
                        <ScrollView>
                            {rows}
                        </ScrollView>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        </View>
    )

    }
}


const styles = StyleSheet.create({
    taskGroup1: {
        backgroundColor: "#fff",
    },
    taskGroup2: {
        backgroundColor: "rgba(31, 128, 253, 0.7)",
    },
    headRow: {
        flex: 1,
        flexDirection: "row",
        // alignItems: "stretch",
        paddingHorizontal: 20,
        justifyContent: "center",
    },
})

Card.propTypes = {
    addTaskModalVisible: PropTypes.bool,
    addTask: PropTypes.func,
    taskGroup: PropTypes.object,
    toggleStatus: PropTypes.func,
    toggleModalVisibility: PropTypes.func,
    setSelectedGroup: PropTypes.func,
    index: PropTypes.number,
    id: PropTypes.string,
    setSelectedGroup: PropTypes.func
  };