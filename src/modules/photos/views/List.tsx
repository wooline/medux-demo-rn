import {Button, Text, View} from 'react-native';

import React from 'react';
import {RootState} from 'src/modules';
import {connect} from 'react-redux';

interface StateProps {
  curUser: number;
}

class Component extends React.PureComponent<StateProps & {navigation: any}> {
  public render() {
    return (
      <View>
        <Text>photos-list</Text>
        <Text>{this.props.curUser}</Text>
        <Button title="videos-details" onPress={() => this.props.navigation.navigate('VideosDetails')} />
        <Button title="photos-details" onPress={() => this.props.navigation.navigate('PhotosDetails')} />
      </View>
    );
  }
}

const mapStateToProps: (state: RootState) => StateProps = state => {
  const model = state.photos!;
  return {
    curUser: model.curUser,
  };
};

export default connect(mapStateToProps)(Component);
