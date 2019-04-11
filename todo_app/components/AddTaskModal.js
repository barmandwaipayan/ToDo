import React, { Component } from 'react';
import { TouchableOpacity, TextInput, Modal, Text, TouchableHighlight, View, StyleSheet} from "react-native"
import DateTimePicker from 'react-native-modal-datetime-picker';

class AddtaskModal extends Component {
    constructor(props) {
        super(props)
        var from = new Date();
        var to = new Date();
        this.state = {
            modalVisible: false,
            activity: "",
            from: from,
            to: to,
            description: "",
            isFromDateTimePickerVisible: false,
            isToDateTimePickerVisible: false,
            nameError: null,
        };
    }
 
    _showFromDateTimePicker = () => this.setState({ isFromDateTimePickerVisible: true });

    _hideFromDateTimePicker = () => this.setState({ isFromDateTimePickerVisible: false });

    _showToDateTimePicker = () => this.setState({ isToDateTimePickerVisible: true });

    _hideToDateTimePicker = () => this.setState({ isToDateTimePickerVisible: false });

    _handleDatePickedFrom = (date) => {
        console.log('A date has been picked: ', date);
        this.setState({
            from: date,
            to: date,
        })
        this._hideFromDateTimePicker();
    }

    _handleDatePickedTo = (date) => {
        console.log('A date has been picked: ', date);
        this.setState({
            to: date,
        })
        this._hideToDateTimePicker();
    }

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
   render() {
      return (
        <View style={{flex:1,}}>
            <View style = {styles.container}>
                <Modal animationType = {"slide"} transparent = {false}
                visible = {this.state.modalVisible}
                onRequestClose = {() => { console.log("Modal has been closed.") } }>
                
                <View style = {styles.modal}>
                    <DateTimePicker
                        mode={"time"}
                        isVisible={this.state.isFromDateTimePickerVisible}
                        onConfirm={this._handleDatePickedFrom}
                        onCancel={this._hideFromDateTimePicker}
                    />
                    <DateTimePicker
                        mode={"time"}
                        isVisible={this.state.isToDateTimePickerVisible}
                        onConfirm={this._handleDatePickedTo}
                        onCancel={this._hideToDateTimePicker}
                    />

                    <TextInput
                            style={styles.activityName}
                            onChangeText={(text) => this.setState({activity: text})}
                            value={this.state.activity}
                            placeholder={"Enter the task"}
                        />
                    
                    <TouchableOpacity onPress={this._showFromDateTimePicker} style={styles.activityName}>
                        <Text>From: {this.state.from.getHours()} : {this.state.from.getMinutes()} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this._showToDateTimePicker} style={styles.activityName}>
                        <Text>To: {this.state.to.getHours()} : {this.state.to.getMinutes()} </Text>
                    </TouchableOpacity>

                    <TextInput
                            style={styles.activityName}
                            onChangeText={(text) => this.setState({description: text})}
                            value={this.state.description}
                            placeholder={"Enter the description"}
                    />
                    {!!this.state.nameError && (
                            <Text style={{ color: "red" }}>{this.state.nameError}</Text>
                          )}
                        
                    <View style={{flexDirection: "row", justifyContents: "center",}}>
                        <TouchableHighlight 
                        style={styles.cancelButton}
                        onPress = {() => {
                            this.toggleModal(!this.state.modalVisible)}}>
                            
                            <Text style = {styles.text}>Cancel</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            style={styles.addTaskButton}
                            onPress = {() => {
                                if (this.state.activity.trim() === "") {
                                    var add = false;
                                    this.setState(() => ({ nameError: "First name required." }));
                                    } else {
                                    this.setState(() => ({ nameError: null }));
                                    add = true;
                                    }
                                if(add===true) {
                                    console.log(this.state.nameError)
                                    this.toggleModal(!this.state.modalVisible)
                                }
                        }}>
                            
                            <Text style = {[styles.text, {color: "white"}]}>Add</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                </Modal>
                
                <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
                <Text style = {styles.text}>Open Modal</Text>
                </TouchableHighlight>
            </View>
        </View>
      )
   }
}
export default AddtaskModal

const styles = StyleSheet.create ({
   container: {
    flex: 1,
      alignItems: 'center',
      backgroundColor: "rgb(237,241,244)",
      padding: 100
   },
   modal: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: "rgb(237,241,244)",
      padding: 100,
      margin: 20,
      borderRadius: 20,
   },
   text: {
      color: '#000',
   },
   activityName: {
        height: 40,
        borderColor: "rgb(186,204,217)",
        borderWidth: 1,
        width: 200,
        borderRadius: 5,
        backgroundColor: "#fff",
   },
   addTaskButton: {
        width: 60,
        borderWidth: 1,
        padding: 5,
        backgroundColor: "rgb(31,127,250)",
        borderRadius: 5,
        borderColor: "#fff",
        margin: 5,
        alignItems: "center",

   },
   cancelButton: {
    width: 60,
    borderWidth: 1,
    padding: 5,
    borderColor: "rgb(186,204,217)",
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
   }
})