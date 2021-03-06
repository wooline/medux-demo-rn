import {createStackNavigator} from 'react-navigation';
import {loadView} from '@medux/react';
import {moduleGetter} from 'src/modules';

const List = loadView(moduleGetter, 'photos', 'List');
const Details = loadView(moduleGetter, 'photos', 'Details');

export default createStackNavigator({
  PhotosList: List,
  PhotosDetails: Details,
});
