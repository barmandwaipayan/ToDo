import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import Checkbox from "react-native-custom-checkbox"

const {height, width} = Dimensions.get("window")

export default class TodoItemExp extends React.Component {
  render(){
    if (this.props.to.getHours() != this.props.from.getHours() || 
    this.props.to.getMinutes() != this.props.from.getMinutes()){
      return(
        <View style ={{flex: 1}}>
          <View style={styles.todoItem}> 
              <Checkbox
                style={((this.props.index % 2 === 0) ? styles.checkBox1 : styles.checkBox2)}
                checked={this.props.completed}
                onChange={() => {
                  this.props.toggleStatus(this.props.id);
                  }
                } 
              />
              <View>
                <View>
                  <Text style={ [ (this.props.completed)? ((this.props.index % 2 === 0) ? styles.txtCompleted1 : styles.txtCompleted2) : 
                ((this.props.index % 2 === 0) ? styles.txt1 : styles.txt2), {fontSize: width * 0.05,} ]}>    
                      <Text>{ this.props.activity}</Text>
                      <Text> from </Text>
                      <Text style={styles.time}> { this.props.from.getHours() } : { this.props.from.getMinutes() } </Text>
                      <Text> to </Text>
                      <Text> { this.props.to.getHours() } : { this.props.to.getMinutes() } </Text>
                  </Text>  
                </View>
                <View>
                  <Text style={ [ (this.props.completed)? ((this.props.index % 2 === 0) ? styles.txtCompleted1 : styles.txtCompleted2) : 
                ((this.props.index % 2 === 0) ? styles.txt1 : styles.txt2), {fontSize: width * 0.03,} ]}>{this.props.description}</Text>
                </View>
              </View>
          </View>
        </View>
      )
    } 
    else {
      return(
      <View>
        <View style={styles.todoItem} >
          <Checkbox
            style={((this.props.index % 2 === 0) ? styles.checkBox1 : styles.checkBox2)}
            checked={this.props.completed}
            onChange={() => {
              this.props.toggleStatus(this.props.id);
              }
            } 
          />
          {/* <Text style={[ (this.props.completed)? ((this.props.index % 2 === 0) ? styles.txtCompleted1 : styles.txtCompleted2) : 
            ((this.props.index % 2 === 0) ? styles.txt1 : styles.txt2), {fontSize: width * 0.05,} ]}>
            <Text>{this.props.activity}</Text>
            <Text> at </Text>
            <Text> { this.props.from.getHours() } : { this.props.from.getMinutes() } </Text>
          </Text> */}
          <View>
            <View>
              <Text style={[ (this.props.completed)? ((this.props.index % 2 === 0) ? styles.txtCompleted1 : styles.txtCompleted2) : 
              ((this.props.index % 2 === 0) ? styles.txt1 : styles.txt2), {fontSize: width * 0.05,} ]}>
                <Text>{this.props.activity}</Text>
                <Text> at </Text>
                <Text> { this.props.from.getHours() } : { this.props.from.getMinutes() } </Text>
              </Text> 
            </View>
            <View>
              <Text style={[ (this.props.index % 2 === 0) ? styles.desc1 : styles.desc2 , (this.props.completed)? ((this.props.index % 2 === 0) ? styles.txtCompleted1 : styles.txtCompleted2) : 
              ((this.props.index % 2 === 0) ? styles.txt1 : styles.txt2), {fontSize: width * 0.03,} ]}>{this.props.description}</Text>
            </View>
          </View>
    </View>
      </View>
      )
    }
  }
}

const styles = StyleSheet.create({
    checkBox1: {
      backgroundColor: "rgb(148, 163, 166)",
      borderColor:'rgb(148, 163, 166)',
      color: "white",
      borderRadius: 5,
    },
    checkBox2: {
      backgroundColor: "white",
      borderColor:'white',
      color: "rgb(45, 154, 241)",
      borderRadius: 5,
    },
    todoItem: {
      flexDirection: "row",
      margin: 10,
      paddingHorizontal: 30,
    },
    txt1:{
      color: 'rgb(148, 163, 166)',
      marginHorizontal: 10,
    },
    txt2:{
      color: '#fff',
      marginHorizontal: 10,
    },
    txtCompleted1:{
      color: 'rgb(186, 204, 217)',
      marginHorizontal: 10,
      textDecorationLine: "line-through",
      textDecorationStyle: "solid",
      textDecorationColor: "rgb(158, 188, 218)",
    },
    txtCompleted2:{
      color: 'rgb(220, 226, 231)',
      marginHorizontal: 10,
      textDecorationLine: "line-through",
      textDecorationStyle: "solid",
      textDecorationColor: "rgb(158, 188, 218)",
    },
    desc1: {
      color: 'rgb(148, 163, 166)',
    },
    desc2: {
      color: '#fff',
    },
  }
)

TodoItemExp.propTypes = {
  from: PropTypes.object.isRequired,
  to: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};