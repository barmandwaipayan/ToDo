import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import Checkbox from "react-native-custom-checkbox"

export default class TodoItem extends React.Component {
  render(){
    if (this.props.to.getHours() != this.props.from.getHours() || 
    this.props.to.getMinutes() != this.props.from.getMinutes()){
      return(
        <View style={styles.todoItem}> 
            <Checkbox
              containerStyle={styles.checkBox}
              style={((this.props.index % 2 === 0) ? styles.checkBox1 : styles.checkBox2)}
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
          <Checkbox
            containerStyle={styles.checkBox}
            style={((this.props.index % 2 === 0) ? styles.checkBox1 : styles.checkBox2)}
            value={this.props.completed}
            onChange={() => {
              this.props.toggleStatus(this.props.id);
              }
            } 
          />
          <Text numberOfLines={1} ellipsizeMode='tail' style={ (this.props.completed)? ((this.props.index % 2 === 0) ? styles.txtCompleted1 : styles.txtCompleted2) : 
            ((this.props.index % 2 === 0) ? styles.txt1 : styles.txt2) }>
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
    checkBox1: {
      backgroundColor: "transparent",
      borderColor:'rgb(148, 163, 166)',
      color: "transparent",
      borderRadius: 5,
    },
    checkBox2: {
      backgroundColor: "transparent",
      borderColor:'#fff',
      color: "transparent",
      borderRadius: 5
    },
    todoItem: {
      flexDirection: "row",
      margin: "auto",
      paddingHorizontal: 20,
    },
    time: {
      color: 'green',
    },
    txt1:{
      width: 150,
      color: 'rgb(148, 163, 166)',
      marginHorizontal: 5,
    },
    txt2:{
      width: 150,
      color: '#fff',
      marginHorizontal: 5,
    },
    txtCompleted1:{
      width: 150,
      color: 'rgb(186, 204, 217)',
      margin: 5,
      textDecorationLine: "line-through",
      textDecorationStyle: "solid",
      textDecorationColor: "rgb(158, 188, 218)",
    },
    txtCompleted2:{
      width: 150,
      color: 'rgb(220, 226, 231)',
      margin: 5,
      textDecorationLine: "line-through",
      textDecorationStyle: "solid",
      textDecorationColor: "rgb(158, 188, 218)",
    }
}
)

TodoItem.propTypes = {
  from: PropTypes.object.isRequired,
  to: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
};