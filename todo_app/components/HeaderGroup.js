import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class HeaderGroup extends Component {
  render() {
      
    return (
        <View style={styles.row}>
            <Text style={styles.header}>Tasks List</Text>
            <TouchableOpacity style={styles.addButton}
                onPress={ () => {
                    this.props.addTaskGroup('test')
                    }
                }
                >
                <Text>+</Text>
            </TouchableOpacity>
        </View>
    )
  }
}

styles=StyleSheet.create({
    addButton: {
        backgroundColor: "rgb(251, 45, 75)",
        padding: 5,
        borderRadius: 5,
        alignItems: "flex-end"
    },
    row: {
        flexDirection: "row",
    },
    header: {
        fontSize: 25,
        fontWeight: "700",
        alignItems: "flex-start"
    }
})

HeaderGroup.propTypes = {
    addTaskgroup: PropTypes.func,
  };