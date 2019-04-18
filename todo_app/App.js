/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./components/Pages/Home/Home";
import ExpandedDeck from "./components/Pages/CardExpanded/ExpandedDeck";
import { Image, View, TouchableOpacity,Button} from 'react-native'

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
        <AppContainer />
    );
  }
}

const RootStack = createStackNavigator(
    {
      Home: Home,
      Expanded: ExpandedDeck,
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "rgb(237,241,244)",
          elevation: 0,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight:
        (
          <View style={{marginHorizontal: 10,}}>
          <TouchableOpacity
            style={{
              borderWidth:1,
              alignItems:'center',
              justifyContent:'center',
              width:40,
              height:40,
              backgroundColor:'#fff',
              borderRadius:50,
              marginHorizontal: 10,
            }}
          >
            <Image 
              source={require('./image/profile.png')}
              style={{
                borderWidth:1,
                alignItems:'center',
                justifyContent:'center',
                width:40,
                height:40,
                backgroundColor:'#fff',
                borderRadius:50,
                marginHorizontal: 10,
              }}
            />
          </TouchableOpacity>
          </View>
        )
      
      },
    },
  );


const AppContainer = createAppContainer(RootStack);



