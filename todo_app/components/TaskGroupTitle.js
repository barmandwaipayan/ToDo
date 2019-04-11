import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class TaskGroupTitle extends Component {
  render() {
    return (
        <View>
            <Text style={styles.header}>{this.props.header}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
    }
})

TaskGroupTitle.propTypes = {
  header: PropTypes.string,
};