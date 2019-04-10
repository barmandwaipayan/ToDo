import React, { Component } from 'react'
import { Text, View, CheckBox, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';

export default class AddTask extends Component {
  render() {
    return (
      <View>
        <Button
            title="add" 
            onPress={ () => {
                t1 = new Date()
                t1.setHours(1)
                t1.setMinutes(11)
        
                t2 = new Date()
                t2.setHours(2)
                t2.setMinutes(22)
                    this.props.addTask(this.props.id, "add test", )
                }
        }/>
      </View>
    )
  }
}

AddTask.propTypes = {
    addTask: PropTypes.func,
  };
