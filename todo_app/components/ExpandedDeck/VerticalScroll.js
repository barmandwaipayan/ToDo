import React, { Component } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'
import Card from './Card';
import PropTypes from 'prop-types';
import AddTaskModal from '../Modals/AddTaskModal';

export default class VerticalScroll extends Component {
  constructor (props) {
    super(props)
    this.state = {dimensions: undefined}
  }

  onLayout = event => {
    if (this.state.dimensions) return // layout was already called
    let {width, height} = event.nativeEvent.layout
    this.setState({dimensions: {width, height}})
  }

  render() {
    var W, H;
    if(this.state.dimensions) {
      var { dimensions } = this.state
      W = dimensions.width
      H = dimensions.height
      // console.log(height, width)
    }
    return (
      <View style={styles.scrollBackground}  onLayout={this.onLayout}>
          <AddTaskModal
                visible={this.props.addTaskModalVisible}
                toggleModalVisibility={this.props.toggleModalVisibility}
                addTask={this.props.addTask}
                selectedGroup={this.props.selectedGroup}
            />
          <ScrollView
            pagingEnabled={true}
          >
            {
              this.props.taskGroups.map((data, index) => {
                return(
                    <Card 
                      addTaskModalVisible={this.props.addTaskModalVisible}
                      taskGroup={data}
                      id={data.id}
                      addTask={this.props.addTask}
                      toggleStatus={this.props.toggleStatus}
                      toggleModalVisibility={this.props.toggleModalVisibility}
                      setSelectedGroup={this.props.setSelectedGroup}
                      selectedGroup={this.props.selectedGroup}
                      index={index}
                      key={data.id}
                      height={H}
                      width={W}
                    />
                )
                }
            )
            }
          </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollBackground: {
    flex: 1,
    backgroundColor: "rgb(237,241,244)",
  }
})

VerticalScroll.propTypes = {
    addTaskModalVisible: PropTypes.bool,
    addTask: PropTypes.func,
    taskGroup: PropTypes.object,
    toggleStatus: PropTypes.func,
    toggleModalVisibility: PropTypes.func,
    setSelectedGroup: PropTypes.func,
    setSelectedGroup: PropTypes.func
  };
