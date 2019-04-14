import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class TaskGroupTitle extends Component {
  render() {
    return (
        <View>
            <Text style={(this.props.index % 2 === 0) ? styles.header1 : styles.header2}>{this.props.header}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    header1: {
        fontSize: 16,
        fontWeight: "bold",
        color: "rgb(78, 106, 133)",
    },
    header2: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#fff"
    }
})

TaskGroupTitle.propTypes = {
  header: PropTypes.string,
};