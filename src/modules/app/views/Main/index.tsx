import {Text, View} from 'react-native';

import Photos from 'src/modules/photos/views/Main';
import React from 'react';

interface Props {}

class Component extends React.PureComponent<Props> {
  public render() {
    return (
      <View>
        <Text>Welcome to ative2!</Text>
        <Photos />
      </View>
    );
  }
}

export default Component;
