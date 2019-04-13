import React, { Component } from 'react'
import { TouchableOpacity, Text, View, CheckBox, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';

export default class AddTask extends Component {
  render() {
    return (
      <View style={styles.addTaskButton}>
        <TouchableOpacity
          onPress={ () => {
                this.props.toggleModalVisibility(true);
                this.props.setSelectedGroup(this.props.id);
                // this.props.addTask(this.props.id, 'test', t1, t2, false)
            }
        }>
          <Text style={styles.buttonText}>+</Text>
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
  buttonText: {
    color: "rgb(31, 129, 255)",
    fontSize: 20,
    fontWeight: 'bold',
  }
})

AddTask.propTypes = {
    addTask: PropTypes.func,
    id: PropTypes.string,
  };
