import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import TaskGroup from './TaskGroup';
import PropTypes from 'prop-types';


export default class Scroll extends Component {

  componentDidMount() {
		setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
	}

  render() {
    return (
      <ScrollView
        ref={(scrollView) => { this.scrollView = scrollView; }}
        style={styles.container}
        pagingEnabled={true}
        horizontal= {true}
        decelerationRate={0}
        snapToInterval={260}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}
        >

        {this.props.taskGroups.map((data, index) => {
            return(
                <TouchableOpacity
                key={data.id}
                activeOpacity={0.9}
                onPress={() => this.props.navigate("Expanded") }
                >
                    <TaskGroup 
                    taskGroup={data}
                    toggleStatus={this.props.toggleStatus}
                    addTask={this.props.addTask}
                    id={data.id}
                    toggleModalVisibility={this.props.toggleModalVisibility}
                    setSelectedGroup={this.props.setSelectedGroup}
                    index={index}
                    />
                </TouchableOpacity>
            )
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

Scroll.propTypes = {
  addTask: PropTypes.func,
  taskGroups: PropTypes.array,
  toggleStatus: PropTypes.func,
  toggleModalVisibility: PropTypes.func,
  setSelectedGroup: PropTypes.func,
};