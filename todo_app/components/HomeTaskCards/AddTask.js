import React, { Component } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class AddTask extends Component {
  render() {
    return (
      <View style={styles.plusSymbol}>
        <TouchableOpacity
          onPress={ () => { 
              this.props.setSelectedGroup(this.props.id);
              this.props.toggleModalVisibility(true);
            }
          }>
          <Text style={(this.props.index % 2 === 0) ? styles.buttonText1 : styles.buttonText2}>+</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  plusSymbol: {
    flex: 1,
    height: 30,
    width: 30,
    marginHorizontal: 10,    
  },
  buttonText1: {
    color: "rgb(45, 154, 241)",
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold',
  }
})

AddTask.propTypes = {
    id: PropTypes.string.isRequired,
    setSelectedGroup: PropTypes.func.isRequired,
    toggleModalVisibility: PropTypes.func.isRequired,
  };
