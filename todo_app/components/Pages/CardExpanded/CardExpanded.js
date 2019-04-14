import React, { Component } from 'react'
import {StyleSheet, View, Text} from 'react-native';
import Card from '../../ExpandedDeck/Card';

export default class CardExpanded extends Component {
  render() {
    return (
        <View style={{flex: 1,}}>
            <Card />
        </View>
    )
  }
}
