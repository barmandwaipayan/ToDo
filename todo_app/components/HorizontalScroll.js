import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import TaskGroup from './TaskGroup';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window') ;

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
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        contentInset={{
          top: 0,
          left: 30,
          bottom: 0,
          right: 30,
        }}>

        {this.props.taskGroups.map((data, index) => {
            return(
                <TouchableOpacity style={styles.view}
                key={data.id}
                activeOpacity={0.9}
                >
                    <TaskGroup 
                    taskGroup={data}
                    toggleStatus={this.props.toggleStatus}
                    addTask={this.props.addTask}
                    id={data.id}
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
  view: {
    width: 260,
    backgroundColor: "#fff",
    borderRadius: 30,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 1,
    alignItems: "flex-start"
  },
});

Scroll.propTypes = {
  addTask: PropTypes.func,
  taskGroups: PropTypes.array,
  toggleStatus: PropTypes.func,
};