import {Button, Text, View} from 'react-native';
import {NavigationActions, StackActions, createAppContainer, createStackNavigator} from 'react-navigation';

import React from 'react';

class HomeScreen extends React.Component {
  public render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            this.props.navigation.dispatch(
              StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({routeName: 'Details'})],
              })
            );
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  public render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
