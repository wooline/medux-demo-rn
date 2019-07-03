import {Button, Text, View} from 'react-native';
import {DispatchProp, connect} from 'react-redux';
import {RootState, actions} from 'src/modules';

import React from 'react';

interface StateProps {
  curUser: number;
}

class Component extends React.PureComponent<StateProps & DispatchProp & {navigation: any}> {
  private onClick = () => {
    this.props.dispatch(actions.photos.putCurUser(99999));
    this.props.navigation.push('PhotosDetails');
  };
  public render() {
    return (
      <View>
        <Text>photos-details</Text>
        <Text>{this.props.curUser}</Text>
        <Button title="photos-details" onPress={this.onClick} />
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
