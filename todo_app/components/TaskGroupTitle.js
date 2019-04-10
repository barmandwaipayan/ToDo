import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class TaskGroupTitle extends Component {
  render() {
    return (
        <View>
            <Text>{this.props.header}</Text>
        </View>
    )
  }
}

styles = StyleSheet.create({
    header: {

    }
})

TaskGroupTitle.propTypes = {
  header: PropTypes.string,
};