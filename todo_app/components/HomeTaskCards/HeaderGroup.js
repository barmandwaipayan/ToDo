import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

export default class HeaderGroup extends Component {
  render() {
    return (
        <View style={styles.row}>
            <Text style={styles.header}>Tasks Lists</Text>
            <TouchableOpacity style={{flex: 2}}
                onPress={ () => {
                    this.props.toggleGroupModalVisibility(true);
                    }
                }
                >
                <View style={styles.addButton}>
                    <Text style={styles.plus}>+</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
  }
}

const styles=StyleSheet.create({
    plus: {
        color: "#fff",
        fontSize: 16,
    },
    addButton: {
        backgroundColor: "rgb(251, 45, 75)",
        margin: "auto",
        borderRadius: 5,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
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
        alignItems: 'center',
        justifyContent: "center",
    }
})

HeaderGroup.propTypes = {
    toggleGroupModalVisibility: PropTypes.func.isRequired,
  };