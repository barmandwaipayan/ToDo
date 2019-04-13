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

const styles=StyleSheet.create({
    addButton: {
        flex: 1,
        backgroundColor: "rgb(251, 45, 75)",
        margin: "auto",
        borderRadius: 5,
        width: 20,
        height: 30,
        alignItems: "center",
        paddingTop: 5,
    },
    row: {
        alignItems: "center",
        flex: 1,
        flexDirection: "row",

    },
    header: {
        flex: 10,
        fontSize: 25,
        fontWeight: "700",
        alignItems: "flex-start"
    }
})

HeaderGroup.propTypes = {
    addTaskgroup: PropTypes.func,
  };