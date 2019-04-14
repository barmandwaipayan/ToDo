import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class CardHeader extends Component {
  render() {
    return (
        <View style={{flex: 1, justifyContent: "center", paddingHorizontal: 30,}}>
            <Text style={(this.props.index % 2 === 0) ? styles.header1 : styles.header2}>{this.props.header}</Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    header1: {
        fontSize: 25,
        fontWeight: "bold",
        color: "rgb(78, 106, 133)",
    },
    header2: {
      fontSize: 25,
      fontWeight: "bold",
      color: "#fff"
    }
})

CardHeader.propTypes = {
  header: PropTypes.string,
};