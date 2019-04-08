import React, { Component } from 'react';
import { Text, View, CheckBox, StyleSheet} from 'react-native';

export default class TodoItem extends React.Component {
  render(){
    if (this.props.to){
      return(
        <View style={styles.todoItem}> 
            <CheckBox onvalueChange={() => {}}/>
            <Text style={styles.txt}>    
                <Text>{this.props.activity}</Text>
                <Text> from </Text>
                <Text style={styles.time}> { this.props.from } </Text>
                <Text> to </Text>
                <Text style={styles.time}> { this.props.to } </Text>
            </Text>
        </View> 
      )
    } 
    else {
      return(
        <View style={styles.todoItem}>
          <CheckBox onvalueChange={() => {}}/>
          <Text style={styles.txt}>
            <Text>{this.props.activity}</Text>
            <Text> at </Text>
            <Text style={styles.time}> { this.props.from } </Text>
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
        flexDirection: 'row',
    },
    time: {
        color: 'blue',
    },
    txt:{
        marginTop: 5,
    }
}
)