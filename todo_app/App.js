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
// import AntIcon from 'react-native-vector-icons/AntDesign';
// import { TouchableOpacity,Button} from 'react-native'

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
        // headerLeft: (
        //   <TouchableOpacity onPress={() => alert('This is a button!')} style={{flex:1,}}>
        //   <AntIcon
        //     name="left"
        //     color="#fff"
        //   />
        //   </TouchableOpacity>
        // ),
      },
    },
  );

const AppContainer = createAppContainer(RootStack);



