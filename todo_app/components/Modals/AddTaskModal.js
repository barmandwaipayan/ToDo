import React, { Component } from 'react';
import { TouchableOpacity, TextInput, Modal, Text, TouchableHighlight, View, StyleSheet} from "react-native"
import DateTimePicker from 'react-native-modal-datetime-picker';
import PropTypes from 'prop-types';

class AddTaskModal extends Component {
    constructor(props) {
        super(props)
        var from = new Date();
        var to = new Date();
        this.state = {
            modalVisible: this.props.visible,
            activity: "",
            from: from,
            to: to,
            description: "",
            isFromDateTimePickerVisible: false,
            isToDateTimePickerVisible: false,
            activityError: null,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
    // do things with nextProps.someProp and prevState.cachedSomeProp
        if(nextProps.visible !== prevState.modalVisible){
            return {
                modalVisible: nextProps.visible,
            }
        }
        return null
    }
    
    _reset = () => {
        var from = new Date();
        var to = new Date();
        this.setState({
            activity: "",
            from: from,
            to: to,
            description: "",
            isFromDateTimePickerVisible: false,
            isToDateTimePickerVisible: false,
            activityError: null,
        })
    }
    _showFromDateTimePicker = () => this.setState({ isFromDateTimePickerVisible: true });

    _hideFromDateTimePicker = () => this.setState({ isFromDateTimePickerVisible: false });

    _showToDateTimePicker = () => this.setState({ isToDateTimePickerVisible: true });

    _hideToDateTimePicker = () => this.setState({ isToDateTimePickerVisible: false });

    _handleDatePickedFrom = (date) => {
        this.setState({
            from: date,
            to: date,
        })
        this._hideFromDateTimePicker();
    }

    _handleDatePickedTo = (date) => {
        this.setState({
            to: date,
        })
        this._hideToDateTimePicker();
    }

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
        this.props.toggleModalVisibility(visible);
    }
   render() {
      return (
        <View>
            <Modal animationType = {"slide"}
            transparent = {true}
            visible = {this.props.visible}
            onRequestClose = {() => { this._reset();
                this.toggleModal(!this.state.modalVisible) } }>
                <View style={{flex:1, backgroundColor: "rgba(0,0,0,0.5)",}}>
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
                        {!!this.state.activityError && (
                                <Text style={{ color: "red" }}>{this.state.activityError}</Text>
                                )}
                            
                        <View style={{flexDirection: "row", justifyContents: "center",}}>
                            <TouchableHighlight 
                            style={styles.cancelButton}
                            onPress = {() => {
                                this._reset();
                                this.toggleModal(!this.state.modalVisible)}}>
                                
                                <Text style = {styles.text}>Cancel</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={styles.addTaskButton}
                                onPress = {() => {
                                    if (this.state.activity.trim() === "") {
                                        var add = false;
                                        this.setState(() => ({ activityError: "Activity name required." }));
                                        } else {
                                        this.setState(() => ({ activityError: null }));
                                        add = true;
                                        }
                                    if(add===true) {
                                        console.log(this.state.activityError)
                                        this.props.addTask(
                                            this.props.selectedGroup,
                                            this.state.activity,
                                            this.state.from,
                                            this.state.to,
                                            this.state.description,
                                            false,
                                        )
                                        this._reset();
                                        this.toggleModal(!this.state.modalVisible)
                                    }
                            }}>
                                
                                <Text style = {[styles.text, {color: "white"}]}>Add</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
      )
   }
}
export default AddTaskModal

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: "rgb(237,241,244)",
      padding: 100
   },
   modal: {
      alignItems: 'center',
      backgroundColor: "#fff",
      padding: 30,
      margin: 30,
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

AddTaskModal.propTypes = {
    addTask: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    toggleModalVisibility: PropTypes.func.isRequired,
    selectedGroup: PropTypes.string.isRequired,
  };