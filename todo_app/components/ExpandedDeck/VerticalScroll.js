import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Text } from 'react-native'
import Card from './Card';
import PropTypes from 'prop-types';
import AddTaskModal from '../Modals/AddTaskModal';
import Carousel from 'react-native-snap-carousel';
import { animatedStyles, scrollInterpolator } from "./CarouselCustomStyle"

export default class VerticalScroll extends Component {
  constructor (props) {
    super(props)
    this.state = {dimensions: {
        width: 300,
        height: 700,
      } 
    }
  }

  onLayout = event => {
    if (this.state.dimensions) return // layout was already called
    let {width, height} = event.nativeEvent.layout
    this.setState({dimensions: {width, height}})
  }

  _renderItem ({item, index}) {
    return (
        item
    );
  }
  render() {
    var W, H;
    if(this.state.dimensions) {
      var { dimensions } = this.state
      W = dimensions.width
      H = dimensions.height
      console.log(H, W)
    }
    var DATA = this.props.taskGroups.map((data, index) => {
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
            height={this.state.dimensions.height / 1.1}
            width={this.state.dimensions.width}
          />
      )
      }
    )
      
    return (
      <View style={styles.scrollBackground}  onLayout={this.onLayout}>
          <AddTaskModal
                visible={this.props.addTaskModalVisible}
                toggleModalVisibility={this.props.toggleModalVisibility}
                addTask={this.props.addTask}
                selectedGroup={this.props.selectedGroup}
            />
            <Carousel layout={'stack'} layoutCardOffset={18} 
            firstItem={this.props.index}
            scrollInterpolator={scrollInterpolator}
            slideInterpolatedStyle={animatedStyles}
            useScrollView={true}
            data={DATA}
            renderItem={this._renderItem}
            sliderHeight={this.state.dimensions.height}
            itemHeight={this.state.dimensions.height / 1.3}
            vertical={true} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scrollBackground: {
    flex: 1,
    backgroundColor: "rgb(237,241,244)",
  },
})

VerticalScroll.propTypes = {
    addTaskModalVisible: PropTypes.bool.isRequired,
    addTask: PropTypes.func.isRequired,
    taskGroups: PropTypes.array.isRequired,
    toggleStatus: PropTypes.func.isRequired,
    toggleModalVisibility: PropTypes.func.isRequired,
    setSelectedGroup: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  };
