import React, { Component } from 'react';
import { TouchableOpacity, TextInput, Modal, Text, TouchableHighlight, View, StyleSheet} from "react-native"
import PropTypes from 'prop-types';

class AddTaskGroupModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: this.props.visible,
            name: "",
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
            name: "",
        })
    }

    toggleModal(visible) {
        this.setState({ modalVisible: visible });
        this.props.toggleGroupModalVisibility(visible);
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

                        <TextInput
                                style={styles.groupName}
                                onChangeText={(text) => this.setState({name: text})}
                                value={this.state.name}
                                placeholder={"Enter the ToDo list name"}
                            />
     
                        {!!this.state.nameError && (
                                <Text style={{ color: "red" }}>{this.state.nameError}</Text>
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
                                    var add = false;
                                    if (this.state.name.trim() === "") {
                                        this.setState(() => ({ nameError: "ToDo list name required." }));
                                        } else {
                                        this.setState(() => ({ nameError: null }));
                                        add = true;
                                        }
                                    if(add===true) {
                                        console.log(this.state.nameError)
                                        this.props.addTaskGroup(
                                            this.state.name
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
export default AddTaskGroupModal

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center',
      backgroundColor: "rgb(237,241,244)",
      padding: 100
   },
   groupName: {
    height: 40,
    borderColor: "rgb(186,204,217)",
    borderWidth: 1,
    width: 200,
    borderRadius: 5,
    backgroundColor: "#fff",
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

AddTaskGroupModal.propTypes = {
    addTaskGroup: PropTypes.func.isRequired,
  };