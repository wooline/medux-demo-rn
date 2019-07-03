import {createStackNavigator} from 'react-navigation';
import {loadView} from '@medux/react';
import {moduleGetter} from 'src/modules';

const List = loadView(moduleGetter, 'videos', 'List');
const Details = loadView(moduleGetter, 'videos', 'Details');

export default createStackNavigator({
  VideosList: List,
  VideosDetails: Details,
});
