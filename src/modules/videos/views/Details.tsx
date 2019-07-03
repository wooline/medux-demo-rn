import {Text, View} from 'react-native';

import React from 'react';
import {RootState} from 'src/modules';
import {connect} from 'react-redux';

interface StateProps {
  curUser: number;
}

class Component extends React.PureComponent<StateProps> {
  public render() {
    return (
      <View>
        <Text>videos-details</Text>
        <Text>{this.props.curUser}</Text>
      </View>
    );
  }
}

const mapStateToProps: (state: RootState) => StateProps = state => {
  const model = state.videos!;
  return {
    curUser: model.curUser,
  };
};

export default connect(mapStateToProps)(Component);
