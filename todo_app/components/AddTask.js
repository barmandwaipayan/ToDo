import React, { Component } from 'react'
import { TouchableOpacity, Text, View, CheckBox, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';

export default class AddTask extends Component {
  render() {
    return (
      <View >
        <TouchableOpacity 
          style={styles.addTaskButton}
          onPress={ () => {
                t1 = new Date()
                t1.setHours(1)
                t1.setMinutes(11)
        
                t2 = new Date()
                t2.setHours(2)
                t2.setMinutes(22)
                
                this.props.addTask(this.props.id, 'test', t1, t2, false)
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
    height: 5,
    width: 5,
    margin: 5,
  },
  buttonText: {
    color: "rgb(31, 129, 255)",
    fontSize: 20,
    fontWeight: 'bold',
  }
})

AddTask.propTypes = {
    addTask: PropTypes.func,
  };
