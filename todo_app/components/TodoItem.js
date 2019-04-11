import React, { Component } from 'react';
import { Text, View, CheckBox, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component {
  render(){
    if (this.props.to.getHours() != this.props.from.getHours() || 
    this.props.to.getMinutes() != this.props.from.getMinutes()){
      return(
        <View style={styles.todoItem}> 
            <CheckBox
            uncheckedColor="pink"
              containerStyle={styles.checkBox}
              style={styles.checkBox}
              value={this.props.completed}
              onChange={() => {
                this.props.toggleStatus(this.props.id);
                }
              } 
            />
            <Text numberOfLines={1} ellipsizeMode='tail' style={ (this.props.completed) ? styles.txtCompleted : styles.txt }>    
                <Text>{ this.props.activity}</Text>
                <Text> from </Text>
                <Text style={styles.time}> { this.props.from.getHours() } : { this.props.from.getMinutes() } </Text>
                <Text> to </Text>
                <Text style={styles.time}> { this.props.to.getHours() } : { this.props.to.getMinutes() } </Text>
            </Text>
        </View> 
      )
    } 
    else {
      return(
        <View style={styles.todoItem} >
          <CheckBox
          uncheckedColor="pink"
            containerStyle={styles.checkBox}
            style={styles.checkBox}
            value={this.props.completed}
            onChange={() => {
              this.props.toggleStatus(this.props.id);
              }
            } 
          />
          <Text numberOfLines={1} ellipsizeMode='tail' style={ (this.props.completed)? styles.txtCompleted : styles.txt }>
            <Text>{this.props.activity}</Text>
            <Text> at </Text>
            <Text style={styles.time}> { this.props.from.getHours() } : { this.props.from.getMinutes() } </Text>
          </Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
    checkBox: {
      
    },
    todoItem: {
      flexDirection: "row",
      margin: "auto",
      paddingHorizontal: 20,
    },
    time: {
      color: 'green',
    },
    txt:{
      width: 150,
      color: 'rgb(148, 163, 166)',
      margin: 5,
    },
    txtCompleted:{
      width: 150,
      color: 'rgb(186, 204, 217)',
      margin: 5,
      textDecorationLine: "line-through",
      textDecorationStyle: "solid",
      textDecorationColor: "rgb(158, 188, 218)",
    }
}
)

TodoItem.propTypes = {
  from: PropTypes.object,
  to: PropTypes.object,
  id: PropTypes.string,
  activity: PropTypes.string,
};