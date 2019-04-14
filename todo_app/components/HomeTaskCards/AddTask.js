import React, { Component } from 'react'
import { TouchableOpacity, Text, View, CheckBox, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';

export default class AddTask extends Component {
  render() {
    return (
      <View style={styles.addTaskButton}>
        <TouchableOpacity
          onPress={ () => {
              
              this.props.setSelectedGroup(this.props.id);
              this.props.toggleModalVisibility(true);
            }
        }>
          <Text style={(this.props.index % 2 === 0) ? styles.buttonText1 : styles.buttonText2}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

styles = StyleSheet.create({
  addTaskButton: {
    flex: 1,
    height: 20,
    width: 20,
    marginHorizontal: 10,    
  },
  buttonText1: {
    color: "rgba(31, 129, 255, 0.9)",
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
  }
})

AddTask.propTypes = {
    addTask: PropTypes.func,
    id: PropTypes.string,
  };
