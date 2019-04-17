import React, { Component } from 'react'
import { TouchableOpacity, Text, View, CheckBox, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';

export default class AddTaskToCard extends Component {
  render() {
    return (
      <View style={styles.addTaskButtonExpanded}>
        <TouchableOpacity
          onPress={ () => {
              this.props.toggleModalVisibility(true);
              this.props.setSelectedGroup(this.props.id);
            }
          } 
          >
          <Text style={(this.props.index % 2 === 0) ? styles.buttonExpandedText1 : styles.buttonExpandedText2}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

styles = StyleSheet.create({
  addTaskButtonExpanded: {
    flex: 1,
    height: 40,
    width: 40,
    justifyContent: "center",  
  },
  buttonExpandedText1: {
    color: "rgb(45, 154, 241)",
    fontSize: 40,
  },
  buttonExpandedText2: {
    color: "#fff",
    fontSize: 40,
  }
})

AddTaskToCard.propTypes = {
    addTask: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
  };
